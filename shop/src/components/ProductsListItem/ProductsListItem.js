import Currency from 'components/Currency';
import {
  ContainerImg,
  ImageCart,
  ImgProduct,
  ProductListItemContainer,
  ProductName,
  AddToCart,
  Overley,
  OutOfStock,
} from './ProductsListItem.styled';

import imageCart from '../../images/cart.svg';

const ProductsListItem = ({
  product,
  setActiveCard,
  index,
  currencie,
  activStyleCard,

  setCartProduct,
}) => {
  const quantity = 1;
  const imageIndex = 0;
  const select = (product, event) => {
    event.stopPropagation();
    if (product.attributes.length === 0) {
      setCartProduct({ product, quantity, imageIndex }, product.id);
    } else return;
  };

  return (
    <>
      {product.inStock ? (
        <ProductListItemContainer
          //onClick={event => modalOpen(product.id, product.gallery[0], event)}
          className="card"
          onMouseOver={() => setActiveCard(index)}
          onMouseOut={() => setActiveCard(null)}
          value={index}
        >
          <ContainerImg>
            <ImgProduct src={product.gallery[0]} alt={product.name} />
            <AddToCart
              className={activStyleCard(index)}
              onClick={event => select(product, event)}
            >
              <ImageCart
                src={imageCart}
                alt="add to cart"
                width={52}
                height={52}
              />
            </AddToCart>
          </ContainerImg>

          <ProductName>
            {product.brand} {product.name}
          </ProductName>
          <Currency
            product={product}
            currencie={currencie}
            eventType="productCard"
          />
        </ProductListItemContainer>
      ) : (
        <ProductListItemContainer className="card-out" value={index}>
          <ContainerImg>
            <ImgProduct src={product.gallery[0]} alt={product.name} />
            <OutOfStock>Out Of Stock</OutOfStock>
          </ContainerImg>
          <ProductName>{product.name}</ProductName>
          <Currency
            style={{ fontSize: '18px', fontWaight: '500' }}
            product={product}
            currencie={currencie}
          />
          <Overley></Overley>
        </ProductListItemContainer>
      )}
    </>
  );
};

export default ProductsListItem;
