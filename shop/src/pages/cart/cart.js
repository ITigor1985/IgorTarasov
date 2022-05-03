import Attributes from 'components/Attributes';
import Currency from 'components/Currency';
import { Component } from 'react';
import {
  ContainerDescription,
  ListGallery,
  ListGalleryItem,
  ProductBrand,
  ProductImage,
  ProductName,
  ContainerGallery,
  Carousel,
  ArrowPrev,
  ArrowNext,
} from './cart.styled';

class Cart extends Component {
  state = {
    products: this.props.product,
    result: 0,
  };

  handleIncrement = (quantity, id) => {
    const increment = quantity + 1;
    const products = this.state.products.map(product => ({
      ...product,
      quantity: product.product.id === id ? increment : product.quantity,
    }));
    this.setState({ products: products });
  };
  handleDecrement = (quantity, id) => {
    const decrement = quantity - 1;
    if (decrement < 1) return;
    const products = this.state.products.map(product => ({
      ...product,
      quantity: product.product.id === id ? decrement : product.quantity,
    }));
    this.setState({ products: products });
  };

  setNextActiveImage = (imageIndex, id, length) => {
    const next = imageIndex + 1;
    if (next > length - 1) return;
    const products = this.state.products.map(product => ({
      ...product,
      imageIndex: product.product.id === id ? next : product.imageIndex,
    }));
    this.setState({ products: products });
  };
  setPrevActiveImage = (imageIndex, id) => {
    const prev = imageIndex - 1;
    if (prev < 0) return;
    const products = this.state.products.map(product => ({
      ...product,
      imageIndex: product.product.id === id ? prev : product.imageIndex,
    }));
    this.setState({ products: products });
  };

  render() {
    const { products } = this.state;
    const { currencie } = this.props;

    return (
      <>
        <h2>Cart</h2>
        {products.map(product => (
          <div
            key={product.product.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ContainerDescription>
              <ProductBrand>{product.product.brand}</ProductBrand>
              <ProductName>{product.product.name}</ProductName>
              <Currency product={product.product} currencie={currencie} />
              <Attributes productAttributes={product.product.attributes} />
            </ContainerDescription>
            <div>
              <button
                type="button"
                onClick={() =>
                  this.handleIncrement(product.quantity, product.product.id)
                }
              >
                +1
              </button>
              {product.quantity}
              <button
                type="button"
                onClick={() =>
                  this.handleDecrement(product.quantity, product.product.id)
                }
              >
                -1
              </button>
            </div>
            <Carousel>
              <ArrowPrev
                type="button"
                onClick={() =>
                  this.setPrevActiveImage(
                    product.imageIndex,
                    product.product.id
                  )
                }
              ></ArrowPrev>
              <ContainerGallery>
                <ListGallery>
                  {product.product.gallery.map(index => (
                    <ListGalleryItem key={index}>
                      <ProductImage
                        src={product.product.gallery[product.imageIndex]}
                        alt={product.product.name}
                      />
                    </ListGalleryItem>
                  ))}
                </ListGallery>
              </ContainerGallery>
              <ArrowNext
                type="button"
                onClick={() =>
                  this.setNextActiveImage(
                    product.imageIndex,
                    product.product.id,
                    product.product.gallery.length
                  )
                }
              ></ArrowNext>
            </Carousel>
          </div>
        ))}
      </>
    );
  }
}

export default Cart;
