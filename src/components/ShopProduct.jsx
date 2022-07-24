import styled from 'styled-components';

const ProductWrap = styled.div`
  width: inherit;
`;

const ImageContainer = styled.div`
  border: 1px solid purple;
  img {
    height: 450px;
  }
`;

const DetailsWrapper = styled.div`
  padding: 30px 20px;
  position: relative;
  top: -20px;
  border: 1px solid blue;
  width: calc(100% - 20px);

  h4 {
    font-size: 24px;
    line-height: 36px;
  }

  .row {
    border: 1px solid red;
    justify-content: space-between;
  }
`;

const ShopProduct = ({ img, title, price }) => {
  return (
    <ProductWrap className="flex column center">
      <ImageContainer>
        <img src={img} alt={title} />
      </ImageContainer>
      <DetailsWrapper>
        <h4>{title}</h4>
        <div className="row">
          <p>Price: ${price}</p>
          <button className="btn-info">Add to cart</button>
        </div>
      </DetailsWrapper>
    </ProductWrap>
  );
};

export default ShopProduct;
