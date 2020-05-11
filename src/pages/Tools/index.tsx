import React, { useState } from 'react';
import Switch from 'react-switch';

import { Container, Title, Header, ListTools, Tags } from './styles';

const Tools: React.FC = () => {
  const [searchTag, setSearchTag] = useState(false);

  const handleChange = () => {
    setSearchTag(!searchTag);
  };

  return (
    <Container>
      <Title>VUTTR</Title>
      <strong>Very Useful Tools to Remember</strong>

      <Header>
        <div>
          <input placeholder="Search for tool" />
          <Switch
            onChange={handleChange}
            checked={searchTag}
            onColor="#04d361"
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <a>search in tags only</a>
        </div>

        <button type="submit">Add</button>
      </Header>

      <ListTools>
        <li>
          <div>
            <strong>Title Tool</strong>
            <p>Description tools</p>
            <Tags>
              <span>Tag 01</span>
              <span>Tag 02</span>
              <span>Tag 03</span>
            </Tags>
          </div>

          <button>Remove</button>
        </li>

        <li>
          <div>
            <strong>Title Tool</strong>
            <p>Description tools</p>
            <Tags>
              <span>Tag 01</span>
              <span>Tag 02</span>
              <span>Tag 03</span>
            </Tags>
          </div>

          <button>Remove</button>
        </li>

        <li>
          <div>
            <strong>Title Tool</strong>
            <p>Description tools</p>
            <Tags>
              <span>Tag 01</span>
              <span>Tag 02</span>
              <span>Tag 03</span>
            </Tags>
          </div>

          <button>Remove</button>
        </li>
      </ListTools>
    </Container>
  );
};

export default Tools;
