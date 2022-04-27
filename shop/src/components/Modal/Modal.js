import './modal.css';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from 'query/categories';
import { Component } from 'react';

class Modal extends Component {
  state = {
    bigImage: this.props.bigImage,
  };

  setImage = image => {
    this.setState({ bigImage: image });
  };

  render() {
    const { productId, onClick } = this.props;
    const id = String(productId);
    return (
      <div className="overlay" onClick={onClick}>
        <div className="modal">
          <Query variables={{ id }} query={GET_PRODUCT}>
            {({ data, loading }) => {
              if (loading) return 'Loading...';
              const { product } = data;
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
