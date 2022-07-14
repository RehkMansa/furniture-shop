import styled from 'styled-components';
import FeaturedSection from './FeaturedSection';
import HeroSection from './HeroSection';

const Wrapper = styled.div`
  .image-wrapper {
    padding: 20px 0;
    img {
      width: 100%;
      max-height: 600px;
      object-fit: cover;
    }
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <HeroSection />
      <div className="image-wrapper">
        <img src="/images/chair00.jpg" alt="bgImage" />
      </div>
      <FeaturedSection />
    </Wrapper>
  );
};

export default HomePage;
