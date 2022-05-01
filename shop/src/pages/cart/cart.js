import { Component } from 'react';

class Cart extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({ products: this.props.product });
  }

  render() {
    const { products } = this.state;

    return (
      <>
        {products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </>
    );
  }
}

export default Cart;
