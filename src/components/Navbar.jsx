import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding-block: 25px;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 12px;
    font-weight: 700;
    min-width: 100px;
  }

  .search {
    position: relative;
    input {
      border-radius: 20px;
      border: 1px solid #555555;
      padding: 5px 20px;
      padding-right: 50px;
      font-size: 16px;
    }
    img {
      width: 16px;
      margin-left: -40px;
    }
  }
`;

const MenuContainer = styled.div`
  gap: 20px;
`;

const MenuWrapper = styled.div`
  cursor: pointer;
  .shopping-cart {
    width: 45px;
    height: 45px;
    background: #e6e6e6;
    position: relative;
    border-radius: 50%;
  }

  .shopping-cart:after {
    content: attr(cartItems);
    right: 0;
    top: 3px;
    position: absolute;
    height: 15px;
    width: 15px;
    color: #fff;
    border-radius: 50%;
    background: #ed5d45;
    font-weight: 500;
    line-height: 13px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 20px;
  }
`;

const MenuIcons = styled.div`
  gap: 20px;
`;

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Nav className="row">
      <img src="/images/logo.svg" alt="logo" />

      <MenuContainer className="row">
        <MenuItem title="home" link="/" />
        <MenuItem title="shop" link="shop" />
        <MenuItem title="about us" link="products" />
        <MenuItem title="contact us" link="contact-us  " />
      </MenuContainer>
      <MenuIcons className="flex center">
        <IconWrapper img="user.svg" />
        <IconWrapper img="heart.svg" />
        <IconWrapper
          onClick={(e) => setCartCount((cartCount) => cartCount + 1)}
          img="shopping-cart.svg"
          className="shopping-cart"
          cartCount={cartCount}
        />
      </MenuIcons>
      <div className="search flex center">
        <input type="text" />
        <img src="/images/search.svg" alt="search" />
      </div>
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
      <div
        cartItems={props.cartCount}
        className={`${props.className} flex center`}
      >
        <img
          src={`/images/${props.img}`}
          alt={props.iconName}
          onClick={props.onClick}
        />
      </div>
    </MenuWrapper>
  );
};

export default Navbar;
