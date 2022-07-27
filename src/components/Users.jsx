import { useReducer, useState } from 'react';
import styled from 'styled-components';

const users = [
  { id: 0, name: 'rehk' },
  { id: 1, name: 'mansa' },
];

const Wrapper = styled.div`
  margin-top: 50px;
  gap: 40px;
  form {
    h4 {
      width: 190px;
    }
    gap: 20px;
    display: flex;
    input {
      border: 1px solid;
      padding: 5px 20px;
      border-radius: 20px;
      height: 46px;
      font-size: 15px;
      width: 400px;
    }

    button {
      border-radius: 0 20px 20px 0;
      padding: 10px 30px;
      margin-left: -40px;
      color: #fff;
    }
  }
`;

const ModalBox = (props) => (
  <div>
    <h5>{props.modalContent}</h5>
  </div>
);

const reducer = (state, action) => {};

const defaultState = {
  people: [],
  modalOn: false,
  modalContent: 'Hello world',
};

const Users = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className="flex column center">
      <ModalBox modalContent={state.modalContent} />
      <form onSubmit={handleSubmit} className="center">
        <h4 style={{ textTransform: 'uppercase' }}>Add new person</h4>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {state.people.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </Wrapper>
  );
};

export default Users;
