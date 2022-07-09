import styled from 'styled-components';

const Wrapper = styled.div``;

const NotFound = ({ redirectLink }) => {
  return (
    <Wrapper>
      <h3>Error 404</h3>
      <p>Page Not found</p>
      <button>Go To Home</button>
    </Wrapper>
  );
};

export default NotFound;
