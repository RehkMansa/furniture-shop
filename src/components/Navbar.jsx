import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 25px 0;
  justify-content: space-between;

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
        <MenuIItem title="about" link="about" />
        <MenuIItem title="products" link="products" />
        <MenuIItem title="contact us" link="contact-us  " />
      </MenuContainer>
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
