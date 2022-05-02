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
    products: [],
    vieweImageIndex: 0,
  };

  componentDidMount() {
    this.setState({ products: this.props.product });
  }

  setNextActiveImage = index => {};
  setPrevActiveImage = () => {
    this.setState(prevState => ({
      vieweImageIndex: prevState.vieweImageIndex - 1,
    }));
  };

  render() {
    const { products } = this.state;
    const { currencie } = this.props;

    return (
      <>
        <h2>Cart</h2>
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ContainerDescription>
              <ProductBrand>{product.brand}</ProductBrand>
              <ProductName>{product.name}</ProductName>
              <Currency product={product} currencie={currencie} />
              <Attributes productAttributes={product.attributes} />
            </ContainerDescription>
            <Carousel>
              <ArrowPrev
                type="button"
                onClick={() => this.setPrevActiveImage()}
              ></ArrowPrev>
              <ContainerGallery>
                <ListGallery>
                  {product.gallery.map((image, index) => (
                    <ListGalleryItem key={index}>
                      <ProductImage src={image} alt={product.name} />
                    </ListGalleryItem>
                  ))}
                </ListGallery>
              </ContainerGallery>
              <ArrowNext
                type="button"
                onClick={() => this.setNextActiveImage()}
              ></ArrowNext>
            </Carousel>
          </div>
        ))}
      </>
    );
  }
}

export default Cart;
