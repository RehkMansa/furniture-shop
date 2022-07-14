import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  height: 113px;
  border-top: 1px solid #eeeeee;
  margin: 70px 0;
  border-bottom: 1px solid #eeeeee;
`;

const Partner = ({ img }) => (
  <img src={`/images/partners/${img}.svg`} alt={img} />
);

const partners = [
  'airbnb',
  'hubspot',
  'google',
  'microsoft',
  'walmart',
  'fedex',
];
const PartnersSection = () => {
  return (
    <Wrapper>
      {partners.map((partner, n) => (
        <Partner img={partner} key={n} />
      ))}
    </Wrapper>
  );
};

export default PartnersSection;
