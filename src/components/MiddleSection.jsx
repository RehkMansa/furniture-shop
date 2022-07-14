import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  margin: 70px 0;
  gap: 100px;
  & > * {
    width: calc(50% - 80px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  background: url(/images/bg00.jpg);
  height: 600px;

  .info {
    position: absolute;
    right: 0;
    transform: translate(50%, 50%);
  }
`;

const RightContainer = styled.div`
  align-items: start;
  gap: 30px 0px;
  h2 {
    font-size: 56px;
    line-height: 70px;
  }

  .items {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ItemWrapper = styled.div`
  gap: 24px;
  text-align: center;
  h5 {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    position: relative;
  }

  h5::after {
    display: block;
    content: '';
    height: 2px;
    margin-top: 10px;
    width: 100%;
    background: var(--gold);
  }
`;

const Item = ({ number, desc }) => (
  <ItemWrapper className="column flex center">
    <h5>{number}+</h5>
    <p>{desc}</p>
  </ItemWrapper>
);

const MiddleSection = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <div className="info">
          <img src="/images/info-icon.svg" alt="squares" />
          <img src="/images/info-icon.svg" alt="squares" />
        </div>
      </ImageWrapper>
      <RightContainer className="flex column">
        <h2>Explore Our Modern furniture</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="items flex center">
          <Item number="2M" desc="Website User" />
          <Item number="1.8M" desc="5 Star Rating" />
          <Item number="10" desc="Year of Company" />
        </div>
        <button>Shop Now</button>
      </RightContainer>
    </Wrapper>
  );
};

export default MiddleSection;
