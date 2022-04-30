import Currency from 'components/Currency';
import {
  ContainerImg,
  ImgProduct,
  ProductListItemContainer,
  ProductName,
} from './ProductsListItem.styled';

const ProductsListItem = ({
  product,
  setActiveCard,
  index,
  currencie,
  activStyleCard,
  modalOpen,
}) => {
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
        </ContainerImg>
        <ProductName>{product.name}</ProductName>
        <Currency product={product} currencie={currencie} />
        <p className={activStyleCard(index)}>cart</p>
      </ProductListItemContainer>
    </>
  );
};

export default ProductsListItem;
