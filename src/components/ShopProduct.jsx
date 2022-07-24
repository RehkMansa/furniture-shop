import styled from 'styled-components';

const ProductWrap = styled.div`
  width: inherit;
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    height: 450px;
    width: 100%;
    object-fit: cover;
  }
`;

const DetailsWrapper = styled.div`
  padding: 30px 20px;
  position: relative;
  top: -50px;
  width: calc(100% - 20px);
  background: #fafafa;
  h4 {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 16px;
  }

  .row {
    justify-content: space-between;
    align-items: center;
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
