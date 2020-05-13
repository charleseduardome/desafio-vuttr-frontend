import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

import { Container, Title, Header, ListTools, Tags } from './styles';

import api from '../../services/api';

interface Tools {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}
const Tools: React.FC = () => {
  const [searchTag, setSearchTag] = useState(false);

  const [tools, setTools] = useState<Tools[]>(() => {
    api.get(`tools`).then(response => {
      setTools(response.data);
    });

    const storagedTools = localStorage.getItem('@vuttr:tools');

    if (storagedTools) {
      return JSON.parse(storagedTools);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@vuttr:tools', JSON.stringify(tools));
  }, [tools]);

  const handleChangeSearch = () => {
    setSearchTag(!searchTag);
  };

  const handleDelete = (id: string) => {
    api.delete(`tools/${id}`);
    setTools(tools.filter(tool => tool.id !== id));
  };

  return (
    <Container>
      <Title>VUTTR</Title>
      <strong>Very Useful Tools to Remember</strong>

      <Header>
        <div>
          <input placeholder="Search for tool" />
          <Switch
            onChange={handleChangeSearch}
            checked={searchTag}
            onColor="#04d361"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <p>search in tags only</p>
        </div>

        <button type="submit">Add</button>
      </Header>

      <ListTools>
        {tools.map(tool => (
          <li key={tool.id}>
            <div>
              <a href={tool.link}>{tool.title}</a>
              <p>{tool.description}</p>
              <Tags>
                {tool.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </Tags>
            </div>

            <button
              onClick={() => {
                handleDelete(tool.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ListTools>
    </Container>
  );
};

export default Tools;
