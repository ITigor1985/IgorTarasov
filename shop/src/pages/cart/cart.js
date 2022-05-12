import { BtnOrder } from 'components/App.styled';
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
  Container,
  Total,
  RemoveProduct,
  BtnLink,
} from './cart.styled';

class Cart extends Component {
  allQuantityProducts(products) {
    const quantity = products
      .map(quantity => quantity.quantity)
      .flatMap(quantity => quantity);
    return quantity;
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
    const {
      currencie,
      handleIncrement,
      handleDecrement,
      products,
      removeProduct,
    } = this.props;
    return (
      <main>
        <TitleCart>Cart</TitleCart>
        {products.map(product => (
          <ContainerCart key={product.product.id}>
            <ContainerDescription>
              <ProductBrand>{product.product.brand}</ProductBrand>
              <ProductName>{product.product.name}</ProductName>
              <Currency
                product={product.product}
                currencie={currencie}
                eventType="cart"
              />
              <Attributes productAttributes={product.product.attributes} />
              <RemoveProduct onClick={() => removeProduct(product.product.id)}>
                delete
              </RemoveProduct>
            </ContainerDescription>
            <ContainerCounterCarousel>
              <Counter>
                <BtnIncrement
                  type="button"
                  onClick={() =>
                    handleIncrement(product.quantity, product.product.id)
                  }
                >
                  +
                </BtnIncrement>
                {product.quantity}
                <BtnDecrement
                  type="button"
                  onClick={() =>
                    handleDecrement(product.quantity, product.product.id)
                  }
                >
                  -
                </BtnDecrement>
              </Counter>
              <Carousel product={product} />
            </ContainerCounterCarousel>
          </ContainerCart>
        ))}
        <Container>
          <p>
            Tax 21%: <Total>{this.props.symbol}</Total>
            <Total>{((this.setTotal(products) / 100) * 21).toFixed(2)}</Total>
          </p>
          <p>
            Quantity:{' '}
            <Total>
              {this.allQuantityProducts(products).reduce(function (sum, elem) {
                return sum + elem;
              }, 0)}
            </Total>
          </p>
          <p>
            Total: <Total>{this.props.symbol}</Total>
            <Total>{this.setTotal(products)}</Total>
          </p>
        </Container>
        <BtnLink to="/all">
          <BtnOrder>ORDER</BtnOrder>
        </BtnLink>
      </main>
    );
  }
}

export default Cart;
