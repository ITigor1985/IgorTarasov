import Attributes from 'components/Attributes';
import Carousel from 'components/Carousel';
import Currency from 'components/Currency';
import { Component } from 'react';
import {
  BtnDecrement,
  BtnIncrement,
  ContainerCart,
  ContainerCounterCarousel,
  ContainerDescription,
  Counter,
  ProductBrand,
  ProductName,
  TitleCart,
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

  allQuantityProducts(products) {
    return products
      .map(quantity => quantity.quantity)
      .flatMap(quantity => quantity);
  }

  setTotal = products => {
    const allPrice = products.map(product => product.product.prices);
    const filter = allPrice.map(prices =>
      prices.filter(price => price.currency.label === this.props.currencie)
    );
    const allAmount = filter
      .map(amounts => amounts.map(amount => amount.amount))
      .flatMap(amount => amount);

    const allQuantity = this.allQuantityProducts(products);

    const total = allAmount.reduce((sum, element, index) => {
      return sum + element * allQuantity[index];
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { products } = this.state;
    const { currencie } = this.props;

    return (
      <>
        <TitleCart>Cart</TitleCart>

        {products.map(product => (
          <ContainerCart key={product.product.id}>
            <ContainerDescription>
              <ProductBrand>{product.product.brand}</ProductBrand>
              <ProductName>{product.product.name}</ProductName>
              <Currency product={product.product} currencie={currencie} />
              <Attributes productAttributes={product.product.attributes} />
            </ContainerDescription>
            <ContainerCounterCarousel>
              <Counter>
                <BtnIncrement
                  type="button"
                  onClick={() =>
                    this.handleIncrement(product.quantity, product.product.id)
                  }
                >
                  +
                </BtnIncrement>
                {product.quantity}
                <BtnDecrement
                  type="button"
                  onClick={() =>
                    this.handleDecrement(product.quantity, product.product.id)
                  }
                >
                  -
                </BtnDecrement>
              </Counter>
              <Carousel product={product} />
            </ContainerCounterCarousel>
          </ContainerCart>
        ))}

        <p>
          Tax 21%: {this.props.symbol}
          {((this.setTotal(products) / 100) * 21).toFixed(2)}
        </p>
        <p>
          Quantity:{' '}
          {this.allQuantityProducts(products).reduce(function (sum, elem) {
            return sum + elem;
          }, 0)}
        </p>
        <p>
          Total: {this.props.symbol}
          {this.setTotal(products)}
        </p>
      </>
    );
  }
}

export default Cart;
