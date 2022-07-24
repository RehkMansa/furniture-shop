import styled from 'styled-components';
import Subscribe from './Subscribe';

const FooterWrap = styled.footer`
  padding-block: 20px;
  padding-top: 30px;
  background: #fff4cc;

  .row-defined {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Footer = () => {
  return (
    <FooterWrap>
      <Subscribe />
      <div className="row row-defined">
        <img src="/images/logo.svg" alt="footer-logo" />
        <p>
          &copy; rehkmansa <strong>{new Date().getFullYear()}</strong>
        </p>
      </div>
    </FooterWrap>
  );
};

export default Footer;
