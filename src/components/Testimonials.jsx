import styled from 'styled-components';

const Wrapper = styled.div``;

const Header = styled.div``;

const TestimonialWrap = styled.div``;

const TestimonialSingle = styled.div``;

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
        <img src="/images/man.jpg" alt="man on chair" />
        <TestimonialSingle>
          <div className="header">
            <h3>Rusmin Islam</h3>
            <div className="ratings">
              5<img src="/images/star.png" alt="star" />
            </div>
          </div>
          <div className="content">
            <span>"</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <span>"</span>
          </div>
        </TestimonialSingle>
      </TestimonialWrap>
    </Wrapper>
  );
};

export default Testimonials;
