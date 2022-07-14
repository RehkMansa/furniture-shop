import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 100px 0;
`;
const PartnersSection = () => {
  return (
    <Wrapper>
      <img src="/images/add" alt="partners" />
    </Wrapper>
  );
};

export default PartnersSection;
