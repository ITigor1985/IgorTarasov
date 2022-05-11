import { NavLink } from 'react-router-dom';
import Attributes from 'components/Attributes';
import Carousel from 'components/Carousel';
import Currency from 'components/Currency';
import { Component } from 'react';
import {
  OverlayCart,
  ModalCartContainer,
  Container,
  MyBag,
  QuantityItems,
  ContainerCart,
  ContainerDescription,
  ProductBrand,
  ProductName,
  ContainerCounterCarousel,
  Counter,
  BtnIncrement,
  BtnDecrement,
  Total,
  ContainerTotal,
  ContainerBtns,
  BtnBag,
  BtnCheckOut,
} from './ModalCart.styled';

class ModalCart extends Component {
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
      closeModalCart,
    } = this.props;
    const modalCart = 'modalCart';
    return (
      <>
        <OverlayCart>
          <Container>
            <ModalCartContainer>
              <MyBag>
                My Bag,{' '}
                <QuantityItems>
                  {this.props.products.reduce((total, item) => {
                    return total + item.quantity;
                  }, 0)}{' '}
                  items
                </QuantityItems>
              </MyBag>
              {products.map(product => (
                <ContainerCart key={product.product.id}>
                  <ContainerDescription>
                    <ProductBrand>{product.product.brand}</ProductBrand>
                    <ProductName>{product.product.name}</ProductName>
                    <Currency
                      product={product.product}
                      currencie={currencie}
                      eventType={modalCart}
                    />
                    <Attributes
                      productAttributes={product.product.attributes}
                      eventType="modalCart"
                    />
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
                    <Carousel product={product} eventType="modalCart" />
                  </ContainerCounterCarousel>
                </ContainerCart>
              ))}
              <ContainerTotal>
                <Total>Total:</Total>
                <Total>
                  {this.props.symbol}
                  {this.setTotal(products)}
                </Total>
              </ContainerTotal>
              <ContainerBtns>
                <li>
                  <BtnBag
                    type="button"
                    onClick={() => {
                      closeModalCart();
                    }}
                  >
                    <NavLink to="/cart">VIEW BAG</NavLink>
                  </BtnBag>
                </li>
                <li>
                  <BtnCheckOut
                    type="button"
                    onClick={() => {
                      closeModalCart();
                    }}
                  >
                    CHECK OUT
                  </BtnCheckOut>
                </li>
              </ContainerBtns>
            </ModalCartContainer>
          </Container>
        </OverlayCart>
      </>
    );
  }
}
export default ModalCart;
