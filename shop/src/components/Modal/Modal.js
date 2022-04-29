import './modal.css';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from 'query/query';
import { Component } from 'react';
import Attributes from 'components/Attributes';
import Currency from 'components/Currency';

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
    const { productId, onClick, currencie } = this.props;
    const id = String(productId);
    return (
      <div className="overlay" onClick={onClick}>
        <div className="modal">
          <Query variables={{ id }} query={GET_PRODUCT}>
            {({ data, loading }) => {
              if (loading) return 'Loading...';
              const { product } = data;
              console.log(product);
              return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ul>
                    {product.gallery.map((image, index) => (
                      <li key={index} onClick={() => this.setImage(image)}>
                        <img
                          src={image}
                          alt={product.name}
                          width={90}
                          height={90}
                        />
                      </li>
                    ))}
                  </ul>
                  <div>
                    <img
                      src={this.state.bigImage}
                      alt={product.name}
                      width={610}
                      height={510}
                    />
                  </div>
                  <div>
                    <p className="brand">{product.brand}</p>
                    <p className="name">{product.name}</p>
                    <Attributes productAttributes={product.attributes} />
                    <h3>Price:</h3>
                    <Currency product={product} currencie={currencie} />
                    <button type="button">ADD TO CART</button>
                    <p
                      dangerouslySetInnerHTML={this.cleanString(
                        product.description
                      )}
                    ></p>
                  </div>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}
export default Modal;
