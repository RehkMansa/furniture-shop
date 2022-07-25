import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: #fafafa;
  padding: 150px 0;
  position: relative;
  margin: 50px 0;
  margin-bottom: 100px;

  &:before,
  &:after {
    background-image: url(/images/ellipse.svg);
    content: '';
    position: absolute;
    height: 325px;
    width: 325px;
    display: block;
    top: 7%;
  }
  &:after {
    transform: translate(50%, -50%);
    right: 0;
  }
  &:before {
    transform: translate(-50%, -50%);
    left: 0;
  }
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
  h4 {
    font-size: 40px;
    margin-bottom: 10px;
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

const ImageEllipse = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  img {
    height: 47px;
    object-fit: cover;
    width: 47px;
    border-radius: 50%;
  }
  img:not(:first-child) {
    margin-left: -13px;
  }
`;

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;

  .ellipse {
    width: 32px;
    cursor: pointer;
    height: 32px;
    border: 1px solid rgba(255, 199, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .ellipse:hover {
    border: 1px solid #ffc700;
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
            <h4>Rusmin Islam</h4>
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
          <ImageEllipse>
            <img src="/images/person/person1.jpg" alt="person" />
            <img src="/images/person/person2.jpg" alt="person" />
            <img src="/images/person/person3.jpg" alt="person" />
            <img src="/images/person/person4.jpg" alt="person" />
          </ImageEllipse>
          <Arrows>
            <div className="ellipse">
              <img
                style={{ transform: 'scaleX(-1)' }}
                src="/images/stroke.svg"
                alt="previous"
              />
            </div>
            <div className="ellipse">
              <img src="/images/stroke.svg" alt="next" />
            </div>
          </Arrows>
        </TestimonialSingle>
      </TestimonialWrap>
    </Wrapper>
  );
};

export default Testimonials;
