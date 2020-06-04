import React, { useState, useEffect, useCallback, useRef } from 'react';
import Switch from 'react-switch';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import { Container, Title, Header, ListTools, Tags } from './styles';
import Modal from '../../components/Modal';
import useModal from '../../hooks/modal';

import api from '../../services/api';

interface ToolFormData {
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface Tools {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}
const Tools: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [search, setSearch] = useState('');
  const [searchTag, setSearchTag] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);

  const { isShowing, toggle, idTool, closeModal } = useModal();

  const [tools, setTools] = useState<Tools[]>(() => {
    api.get(`tools`).then(response => {
      setTools(response.data);
      localStorage.setItem('@vuttr:tools', JSON.stringify(tools));
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

  useEffect(() => {
    if (searchTag) {
      api.get(`/tools?tag=${search}`).then(response => {
        setTools(response.data);
      });
    }

    api.get(`/tools?search=${search}`).then(response => {
      setTools(response.data);
    });
  }, [searchTag, search]);

  const handleSwitchSearch = () => {
    setSearchTag(!searchTag);
  };

  const handleButtonAdd = useCallback(() => {
    closeModal();
    setModalAdd(true);
    setModalRemove(false);
  }, [closeModal]);

  const handleSubmit = useCallback(
    async (data: ToolFormData) => {
      const response = await api.post('/tools', data);
      setTools([...tools, response.data]);
      setModalAdd(false);
    },
    [tools],
  );

  const handleButtonDelete = useCallback(
    (id: string) => {
      toggle(id);
      setModalAdd(false);
      setModalRemove(true);
    },
    [toggle],
  );

  const handleDelete = useCallback(
    (id: string) => {
      api.delete(`/tools/${id}`);
      setTools(tools.filter(tool => tool.id !== id));
      setModalRemove(false);
    },
    [tools],
  );

  return (
    <Container>
      <Title>VUTTR</Title>
      <strong>Very Useful Tools to Remember</strong>

      <Header>
        <div>
          <input
            onChange={e => setSearch(e.target.value)}
            value={search}
            placeholder="Search for tool"
          />
          <Switch
            onChange={handleSwitchSearch}
            checked={searchTag}
            onColor="#04d361"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <p>search in tags only</p>
        </div>

        <button onClick={handleButtonAdd}>Add</button>
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

            <button onClick={() => handleButtonDelete(tool.id)}>Remove</button>
          </li>
        ))}
      </ListTools>

      {modalAdd ? (
        <Modal isShowing={isShowing && modalAdd} hide={closeModal}>
          <h1>Add new tool</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="title" placeholder="Tool Name" required />

            <Input name="link" placeholder="Tool Link" required />

            <Input name="description" placeholder="Tool description" required />

            <Input
              name="tags"
              placeholder="Tags - separate with commas"
              required
            />

            <button type="submit">Add tool</button>
          </Form>
        </Modal>
      ) : (
        <Modal isShowing={isShowing && modalRemove} hide={closeModal}>
          <h1>Remove tool</h1>
          <p>Are you sure you want to delete?</p>

          <button onClick={closeModal}>Cancel</button>
          <button onClick={() => handleDelete(idTool)}>Yes, remove</button>
        </Modal>
      )}
    </Container>
  );
};

export default Tools;
