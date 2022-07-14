import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 100px 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  background: url(/images/bg00.jpg);
  height: 600px;
`;

const RightContainer = styled.div``;

const MiddleSection = () => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <RightContainer>
        <h2>Explore Our Modern furniture</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button>Shop Now</button>
      </RightContainer>
    </Wrapper>
  );
};

export default MiddleSection;
