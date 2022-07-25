import styled from 'styled-components';
import ShopProduct from './ShopProduct';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 40px;
`;

const ContainerWrapper = styled.div`
  .header {
    text-align: center;
    margin-block: 50px;
  }
  h2 {
    font-size: 40px;
  }
`;

const products = [
  {
    id: 0,
    title: 'Premium sofa',
    price: 1000,
    img: 'Rectangle-00.jpg',
  },
  {
    id: 1,
    title: 'Dark rug chair',
    price: 600,
    img: 'Rectangle-01.jpg',
  },
  {
    id: 2,
    title: 'Blue sedan cushion',
    price: 1800,
    img: 'Rectangle-02.jpg',
  },
  {
    id: 3,
    title: 'Blue sedan cushion',
    price: 1800,
    img: 'Rectangle-03.jpg',
  },
];

const ShopSection = () => {
  return (
    <ContainerWrapper>
      <div className="header">
        <h2>Featured Products</h2>
        <p>View the very best of what we have to offer</p>
      </div>
      <Wrapper>
        {products.map((product) => (
          <ShopProduct
            img={`/images/shop/${product.img}`}
            key={product.id}
            price={product.price}
            title={product.title}
          />
        ))}
      </Wrapper>
    </ContainerWrapper>
  );
};

export default ShopSection;
