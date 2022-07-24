import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #dddddd;

  h3 {
    font-size: 36px;
  }

  form {
    position: relative;
    input {
      min-height: 50px;
      padding: 18px;
      width: 500px;
    }

    button {
      cursor: pointer;
      position: absolute;
      right: 10px;
      transform: translate(0%, -50%);
      top: 50%;
      padding: 10px 20px;
      line-height: 20px;
      color: #ffffff;
    }
  }
`;

const Subscribe = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [data, setData] = useState({ emailAddress: '' });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };
  return (
    <Wrapper className="row">
      <h3>Subscribe Now to Get Our Best Offers</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <input
          type="email"
          placeholder="Enter email"
          name="emailAddress"
          value={data.emailAddress}
          onChange={handleInputChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </Wrapper>
  );
};

export default Subscribe;
