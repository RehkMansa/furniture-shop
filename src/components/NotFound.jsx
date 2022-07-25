import styled from 'styled-components';

const Wrapper = styled.div``;

const NotFound = ({ redirectLink }) => {
  return (
    <Wrapper>
      <h1>Error 404</h1>
      <p>Page Not found</p>
      <button>Go To Home</button>
    </Wrapper>
  );
};

export default NotFound;
