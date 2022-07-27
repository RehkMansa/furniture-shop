import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 50vh;
  padding: 50px 0;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  & > * {
    width: 540px;
  }

  h1 {
    font-weight: 500;
    font-size: 80px;
  }

  div {
    gap: 40px;
    align-items: start;
  }
`;

const HeroSection = () => {
  return (
    <Wrapper className="row">
      <h1>Find Your Best furniture</h1>
      <div className="row column">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
        <button>Shop Now</button>
      </div>
    </Wrapper>
  );
}
 
export default HeroSection;