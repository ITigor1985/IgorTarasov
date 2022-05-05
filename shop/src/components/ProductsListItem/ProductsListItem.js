import Currency from 'components/Currency';
import {
  ContainerImg,
  ImageCart,
  ImgProduct,
  ProductListItemContainer,
  ProductName,
  AddToCart,
} from './ProductsListItem.styled';

import imageCart from '../../images/cart.svg';

const ProductsListItem = ({
  product,
  setActiveCard,
  index,
  currencie,
  activStyleCard,
  modalOpen,
  setCartProduct,
}) => {
  const quantity = 1;
  const imageIndex = 0;
  const select = (product, event) => {
    event.stopPropagation();
    if (product.attributes.length === 0) {
      setCartProduct({ product, quantity, imageIndex }, product.id);
    } else modalOpen(product.id, product.gallery[0], event);
  };

  return (
    <>
      <ProductListItemContainer
        onClick={event => modalOpen(product.id, product.gallery[0], event)}
        className="card"
        onMouseOver={() => setActiveCard(index)}
        onMouseOut={() => setActiveCard(null)}
        style={{ display: 'inline-block' }}
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
        <ProductName>{product.name}</ProductName>
        <Currency product={product} currencie={currencie} />
      </ProductListItemContainer>
    </>
  );
};

export default ProductsListItem;
