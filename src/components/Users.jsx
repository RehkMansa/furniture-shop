import { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';

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

  .grid-display {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px 50px;
    span {
      cursor: pointer;
      position: relative;

      i {
        position: absolute;
        top: -10px;
        font-style: normal;
        left: 50%;
        transform: translate(-50%, -50%);
        width: max-content;
        background-color: rgba(0, 0, 0, 0.57);
        color: #fff;
        font-size: 10px;
        padding: 2px 10px;
        border-radius: 20px;
        margin: auto;
      }
    }
    span::first-letter {
      text-transform: uppercase;
    }
  }
`;

const ModalBox = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.closeModal();
    }, 3000);

    return clearTimeout();
  });
  return (
    <div>
      <h5>{props.modalContent}</h5>
    </div>
  );
};

const reducer = (state, action) => {
  if (action.type === 'ADD_NEW') {
    const newUsers = [...state.people, action.payload];
    return {
      ...state,
      people: newUsers,
      modalOn: true,
      modalContent: 'Item Added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      people: state.people,
      modalOn: true,
      modalContent: 'Please Enter A Value',
    };
  }

  if (action.type === 'CLOSE_MODAL') return { ...state, modalOn: false };

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      people: action.payload,
      modalOn: true,
      modalContent: 'Item Removed',
    };
  }

  throw new Error('No Matching Action');
};

const defaultState = {
  people: [],
  modalOn: false,
  modalContent: '',
};

const DisplayName = (props) => {
  const [hoveredOn, setHoveredOn] = useState(false);

  return (
    <div onClick={props.onClick}>
      <span
        onMouseOver={() => setHoveredOn(true)}
        onMouseOut={() => setHoveredOn(false)}
      >
        {props.name} {hoveredOn && <i>Remove Name</i>}
      </span>
    </div>
  );
};

const Users = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), name };
    if (name) {
      dispatch({ type: 'ADD_NEW', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const handItemClick = (value) => {
    const newItem = state.people.filter((person) => {
      if (value.id !== person.id) return person;
    });

    dispatch({ type: 'REMOVE_ITEM', payload: newItem });

    console.log(newItem, value.id);
  };

  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return (
    <Wrapper className="flex column center">
      {state.modalOn && (
        <ModalBox closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
      <article className="grid-display">
        {state.people.map((person) => (
          <DisplayName
            name={person.name}
            key={person.id}
            onClick={() => handItemClick(person)}
          />
        ))}
      </article>
    </Wrapper>
  );
};

export default Users;
