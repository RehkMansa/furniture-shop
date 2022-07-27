import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding-block: 25px;
  justify-content: space-between;

  i {
    font-size: 12px;
    font-weight: 700;
    min-width: 100px;
  }
`;

const MenuContainer = styled.div`
  gap: 20px;
`;

const MenuWrapper = styled.div``;

const Navbar = () => {
  return (
    <Nav className="row">
      <img src="/images/logo.svg" alt="logo" />

      <MenuContainer className="row">
        <MenuIItem title="home" link="/" />
        <MenuIItem title="shop" link="shop" />
        <MenuIItem title="about us" link="products" />
        <MenuIItem title="contact us" link="contact-us  " />
      </MenuContainer>
      <i>{new Date().toDateString()}</i>
    </Nav>
  );
};

const MenuIItem = (props) => {
  const { title, link, ...others } = props;
  return (
    <MenuWrapper>
      <NavLink to={link} {...others}>
        {title}
      </NavLink>
    </MenuWrapper>
  );
};

export default Navbar;
