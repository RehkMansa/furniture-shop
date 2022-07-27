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

const MenuIcons = styled.div``;

const Navbar = () => {
  return (
    <Nav className="row">
      <img src="/images/logo.svg" alt="logo" />

      <MenuContainer className="row">
        <MenuItem title="home" link="/" />
        <MenuItem title="shop" link="shop" />
        <MenuItem title="about us" link="products" />
        <MenuItem title="contact us" link="contact-us  " />
      </MenuContainer>
      <MenuIcons>
        <IconWrapper img="user.svg" />
        <IconWrapper img="heart.svg" />
        <IconWrapper img="shopping-cart.svg" />
      </MenuIcons>
      <i>{new Date().toDateString()}</i>
    </Nav>
  );
};

const MenuItem = (props) => {
  const { title, link, ...others } = props;
  return (
    <MenuWrapper>
      <NavLink to={link} {...others}>
        {title}
      </NavLink>
    </MenuWrapper>
  );
};

const IconWrapper = (props) => {
  return (
    <MenuWrapper>
      <img
        src={`/images/${props.img}`}
        alt={props.iconName}
        onClick={props.onClick}
      />
    </MenuWrapper>
  );
};

export default Navbar;
