import './modal.css';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from 'query/categories';
import { Component } from 'react';

class Modal extends Component {
  render() {
    const { productId, onClick } = this.props;
    const id = String(productId);
    console.log(productId);
    return (
      <div className="overlay" onClick={onClick}>
        <div className="modal">
          <Query variables={{ id }} query={GET_PRODUCT}>
            {({ data }) => {
              return <div>{console.log(data)}</div>;
            }}
          </Query>
        </div>
      </div>
    );
  }
}
export default Modal;
