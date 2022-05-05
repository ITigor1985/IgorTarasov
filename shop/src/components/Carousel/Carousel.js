import { Component } from 'react';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';

import {
  CarouselCartProducts,
  ArrowNext,
  ArrowPrev,
  ListGallery,
  ListGalleryItem,
  ContainerGallery,
  ProductImage,
} from './Carousel.styled';

class Carousel extends Component {
  state = {
    product: this.props.product,
  };

  setNextActiveImage = (imageIndex, id, length) => {
    const next = imageIndex + 1;
    if (next > length - 1) return;
    const product = {
      ...this.state.product,
      imageIndex:
        this.state.product.product.id === id
          ? next
          : this.state.product.imageIndex,
    };
    this.setState({ product: product });
  };
  setPrevActiveImage = (imageIndex, id) => {
    const prev = imageIndex - 1;
    if (prev < 0) return;
    const product = {
      ...this.state.product,
      imageIndex:
        this.state.product.product.id === id
          ? prev
          : this.state.product.imageIndex,
    };
    this.setState({ product: product });
  };

  render() {
    const { product } = this.state;
    return (
      <CarouselCartProducts>
        <ArrowPrev
          type="button"
          onClick={() =>
            this.setPrevActiveImage(product.imageIndex, product.product.id)
          }
        >
          <img src={arrowLeft} alt="arrow left" width={24} height={24} />
        </ArrowPrev>
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
        >
          <img src={arrowRight} alt="arrow left" width={24} height={24} />
        </ArrowNext>
      </CarouselCartProducts>
    );
  }
}

export default Carousel;