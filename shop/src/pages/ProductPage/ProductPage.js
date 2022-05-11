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
  ListGallery,
  ListGalleryItem,
  ModalBigImage,
  ProductBrand,
  ProductName,
  ProductPrice,
} from './ProductPage.styled';

class ProductPage extends Component {
  state = {
    bigImage: '',
  };

  setImage = image => {
    this.setState({ bigImage: image });
  };

  render() {
    const { currencie, setCartProduct, match } = this.props;

    const id = match.params.productId;
    const quantity = 1;
    const imageIndex = 0;
    return (
      <Container className="modal">
        <Query variables={{ id }} query={GET_PRODUCT}>
          {({ data, loading }) => {
            if (loading) return 'Loading...';
            const { product } = data;
            console.log(product);
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

                  <Interweave content={product.description} />
                </ContainerDescription>
              </div>
            );
          }}
        </Query>
      </Container>
    );
  }
}
export default withRouter(ProductPage);
