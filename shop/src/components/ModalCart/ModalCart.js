import { BrowserRouter as Link } from 'react-router-dom';
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
} from './ModalCart.styled';

class ModalCart extends Component {
  render() {
    const { currencie, handleIncrement, handleDecrement, products } =
      this.props;
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
              <ul>
                <li>
                  <button type="button">
                    <Link to="/cart">VIEW BAG</Link>
                  </button>
                </li>
                <li>
                  <button type="button">CHECK OUT</button>
                </li>
              </ul>
            </ModalCartContainer>
          </Container>
        </OverlayCart>
      </>
    );
  }
}
export default ModalCart;
