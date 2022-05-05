import './modal.css';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from 'query/query';
import { Component } from 'react';
import Attributes from 'components/Attributes';
import Currency from 'components/Currency';

import {
  Container,
  ContainerDescription,
  ListGallery,
  ListGalleryItem,
  ProductDescription,
  ProductBrand,
  ProductName,
  ModalBigImage,
  ContainerModalBigImage,
  ProductPrice,
  BtnAddToCart,
} from './Modal.styled';

class Modal extends Component {
  state = {
    bigImage: this.props.bigImage,
  };

  setImage = image => {
    this.setState({ bigImage: image });
  };

  cleanString(string) {
    return { __html: string };
  }

  render() {
    const { productId, onClick, currencie, setCartProduct } = this.props;
    const id = String(productId);
    const quantity = 1;
    const imageIndex = 0;
    return (
      <div className="overlay" onClick={onClick}>
        <Container className="modal">
          <Query variables={{ id }} query={GET_PRODUCT}>
            {({ data, loading }) => {
              if (loading) return 'Loading...';
              const { product } = data;
              return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ListGallery>
                    {product.gallery.map((image, index) => (
                      <ListGalleryItem
                        key={index}
                        onClick={() => this.setImage(image)}
                      >
                        <img
                          src={image}
                          alt={product.name}
                          width={90}
                          height={90}
                        />
                      </ListGalleryItem>
                    ))}
                  </ListGallery>
                  <ContainerModalBigImage>
                    <ModalBigImage
                      src={this.state.bigImage}
                      alt={product.name}
                    />
                  </ContainerModalBigImage>
                  <ContainerDescription>
                    <ProductBrand>{product.brand}</ProductBrand>
                    <ProductName>{product.name}</ProductName>
                    <Attributes productAttributes={product.attributes} />
                    <ProductPrice>Price:</ProductPrice>
                    <Currency product={product} currencie={currencie} />

                    <BtnAddToCart
                      type="button"
                      onClick={() =>
                        setCartProduct(
                          { product, quantity, imageIndex },
                          product.id
                        )
                      }
                    >
                      ADD TO CART
                    </BtnAddToCart>
                    <ProductDescription
                      dangerouslySetInnerHTML={this.cleanString(
                        product.description
                      )}
                    ></ProductDescription>
                  </ContainerDescription>
                </div>
              );
            }}
          </Query>
        </Container>
      </div>
    );
  }
}
export default Modal;
