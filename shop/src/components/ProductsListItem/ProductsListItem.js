import { Component } from 'react';
import Currency from 'components/Currency';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
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

class ProductsListItem extends Component {
  select = (product, event) => {
    console.log(event);

    if (product.attributes.length === 0) {
      event.stopPropagation();
      event.preventDefault();
      const quantity = 1;
      const imageIndex = 0;
      this.props.setCartProduct({ product, quantity, imageIndex }, product.id);
    }
  };
  render() {
    const {
      product,
      setActiveCard,
      index,
      currencie,
      activStyleCard,
      location,
    } = this.props;
    const url = location.pathname;
    return (
      <>
        {product.inStock ? (
          <ProductListItemContainer
            className="card"
            onMouseOver={() => setActiveCard(index)}
            onMouseOut={() => setActiveCard(null)}
            value={index}
          >
            <Link to={`${url}/${product.id}`}>
              <ContainerImg>
                <ImgProduct src={product.gallery[0]} alt={product.name} />
                <AddToCart
                  className={activStyleCard(index)}
                  onClick={event => this.select(product, event)}
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
            </Link>
          </ProductListItemContainer>
        ) : (
          <ProductListItemContainer
            className=" card card-out"
            value={index}
            onMouseOver={() => setActiveCard(index)}
            onMouseOut={() => setActiveCard(null)}
          >
            <Link to={`${url}/${product.id}`}>
              <ContainerImg>
                <ImgProduct src={product.gallery[0]} alt={product.name} />
                <OutOfStock>Out Of Stock</OutOfStock>
              </ContainerImg>
              <ProductName>
                {product.brand} {product.name}
              </ProductName>
              <Currency
                eventType="productCard"
                product={product}
                currencie={currencie}
              />
              <Overley></Overley>
            </Link>
          </ProductListItemContainer>
        )}
      </>
    );
  }
}

export default withRouter(ProductsListItem);
