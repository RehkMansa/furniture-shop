import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  border: 1px solid red;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 56px;
    margin-bottom: 20px;
    line-height: 70px;
  }
`;

const TestimonialWrap = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  .image-left {
    width: 420px;
    height: 420px;
  }
`;

const TestimonialSingle = styled.div`
  h3 {
    font-size: 40px;
  }
  .header {
    .ratings {
      display: flex;
      align-items: center;
    }
  }

  .content {
    margin-top: 20px;
    position: relative;
    padding: 0 20px;
    &:before {
      position: absolute;
      content: '';
      background-image: url(/images/quotation.svg);
      height: 15px;
      width: 17px;
      display: block;
      left: 0;
      transform: scaleX(-1);
    }

    .quotation-end {
      background-image: url(/images/quotation.svg);
      height: 15px;
      width: 17px;
      position: absolute;
      display: inline-block;
    }
  }
`;

const Testimonials = () => {
  return (
    <Wrapper>
      <Header>
        <h2>What Our Happy Client Say?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </Header>
      <TestimonialWrap>
        <img className="image-left" src="/images/man.jpg" alt="man on chair" />
        <TestimonialSingle>
          <div className="header">
            <h3>Rusmin Islam</h3>
            <div className="ratings">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
          <div className="content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
              <span className="quotation-end"></span>
            </p>
          </div>
        </TestimonialSingle>
      </TestimonialWrap>
    </Wrapper>
  );
};

export default Testimonials;
