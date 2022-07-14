import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 70px 0;
`;

const FeaturedWrapper = styled.div`
  text-align: center;
  padding: 66px 34px;
  background: #fafafa;
  gap: 25px;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  }
`;

const FeaturedInner = (props) => (
  <FeaturedWrapper className="center column flex">
    <img src="/images/squares.svg" alt={props.title} />
    <h3>{props.title}</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy
    </p>
  </FeaturedWrapper>
);

const FeaturedSection = () => {
  return (
    <Wrapper>
      <FeaturedInner title="Best Quality" />
      <FeaturedInner title="Free Shipping" />
      <FeaturedInner title="Online Payment" />
    </Wrapper>
  );
};

export default FeaturedSection;
