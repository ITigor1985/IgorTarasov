import { Query } from '@apollo/client/react/components';
import Attributes from 'components/Attributes';
import Currency from 'components/Currency';
import { GET_PRODUCT } from 'query/query';
import { Component } from 'react';
import { Interweave } from 'interweave';

import { withRouter } from 'react-router-dom';
import {
  BtnAddToCart,
  Container,
  ContainerDescription,
  ContainerModalBigImage,
  ContainerProduct,
  ListGallery,
  ListGalleryItem,
  ModalBigImage,
  ProductBrand,
  ProductName,
  ProductPrice,
  BtnAddToCartDisabled,
} from './ProductPage.styled';
import { OutOfStock } from 'components/ProductsListItem/ProductsListItem.styled';

class ProductPage extends Component {
  state = {
    bigImage: '',
    
  };  


  setImage = image => {
    this.setState({ bigImage: image });
  };

  render() {
    const { currencie, setCartProduct, match, setAttributes, activeAttributes } = this.props;
    const interval = 100
    const id = match.params.productId;
    const quantity = 1;
    const imageIndex = 0;
    return (
      <Container className="modal">
        <Query variables={{ id }} query={GET_PRODUCT} >
          {({ data, loading,startPolling, stopPolling }) => {                        
            startPolling	(interval)
            setTimeout(()=>{stopPolling()},150)              
            if (loading)return null;
            
            const { product } = data;
            
            return (
              <ContainerProduct>
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
                  {!product.inStock && <OutOfStock>Out Of Stock</OutOfStock>}
                  {this.state.bigImage === '' ? (
                    <ModalBigImage
                      src={product.gallery[0]}
                      alt={product.name}
                    />
                  ) : (
                    <ModalBigImage
                      src={this.state.bigImage}
                      alt={product.name}
                    />
                  )}
                </ContainerModalBigImage>
                <ContainerDescription>
                  <ProductBrand>{product.brand}</ProductBrand>
                  <ProductName>{product.name}</ProductName>
                  
                  <Attributes
                    productAttributes={product.attributes}
                    productId={product.id}
                    setAttributes={setAttributes}
                  />
                  <ProductPrice>Price:</ProductPrice>
                  <Currency product={product} currencie={currencie} />

                  {product.inStock ? (
                    <BtnAddToCart
                      type="button"
                      onClick={() =>
                        setCartProduct(
                          { product, quantity, imageIndex, activeAttributes },
                          product.id
                        )
                      }
                    >
                      ADD TO CART
                    </BtnAddToCart>
                  ) : (
                    <BtnAddToCartDisabled type="button" disabled>
                      ADD TO CART
                    </BtnAddToCartDisabled>
                  )}

                  <Interweave content={product.description} />
                </ContainerDescription>
              </ContainerProduct>
            );
          }}
        </Query>
      </Container>
    );
  }
}
export default withRouter(ProductPage);
