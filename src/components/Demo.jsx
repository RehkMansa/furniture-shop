import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  form {
    input {
      border: 1px solid;
    }
  }

  .some-text {
    padding: 5px 20px;
    margin-right: 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Child1 = (props) => {
  return (
    <div style={{ marginTop: 20 }}>
      {props.text.split('').map((val, n) => (
        <span
          onClick={() => props.handleClick(n)}
          className="some-text"
          key={n}
        >
          {val}
        </span>
      ))}
    </div>
  );
};

const Demo = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);

    if (e.target.value.length === 0) {
      setError('Please enter something');
    } else if (e.target.value.length <= 5) {
      setError('Your input is weak');
    } else {
      setError('Strength matches');
    }
  };

  const deleteItem = (item) => {
    const val = text.slice(0, item) + text.slice(item + 1);

    setText(val);
  };

  return (
    <Wrapper>
      <h3>Hello World</h3>
      <form>
        <input
          placeholder="Enter Text"
          type="text"
          value={text}
          onChange={handleChange}
        />
      </form>
      <p>{error === '' ? 'Please enter something' : error}</p>

      <Child1 handleClick={deleteItem} text={text} />
    </Wrapper>
  );
};

export default Demo;
