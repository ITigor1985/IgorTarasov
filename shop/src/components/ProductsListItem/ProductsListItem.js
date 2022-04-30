import Currency from 'components/Currency';
import { ContainerImg, ImgProduct } from './ProductsListItem.styled';

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
      <li
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
        <p>{product.name}</p>
        <Currency product={product} currencie={currencie} />
        <p className={activStyleCard(index)}>cart</p>
      </li>
    </>
  );
};

export default ProductsListItem;
