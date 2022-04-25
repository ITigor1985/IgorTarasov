import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from 'query/categories';
import { Component } from 'react';
import './all.css';
class All extends Component {
  // getCurrence(arr) {
  //   console.log(arr, this.props.currencie);
  //   return arr[0].currency.label;
  // }

  state = {
    activCardIndex: null,
  };

  activStyleCard = index => {
    console.log(index);
    const styleOption = ['cart'];
    if (this.state.activCardIndex === index) {
      styleOption.push('cart__visible');
    }
    return styleOption.join(' ');
  };

  setActiveCard = index => {
    this.setState({ activCardIndex: index });
  };

  render() {
    const { currencie } = this.props;

    return (
      <div className="listCard">
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';

            const { categories } = data;
            return categories.map(category => {
              if (category.name === 'all') {
                return category.products.map((product, index) => (
                  <div
                    className="card"
                    key={product.id}
                    onMouseOver={() => this.setActiveCard(index)}
                    onMouseOut={() => this.setState({ activCardIndex: null })}
                    style={{ display: 'inline-block' }}
                    value={index}
                  >
                    <img
                      src={product.gallery[0]}
                      alt={product.name}
                      width="356"
                      height="358"
                    />
                    <p>{product.name}</p>
                    <p>
                      {product.prices
                        .filter(price => price.currency.label === currencie)
                        .map(cost => (
                          <span key={cost.currency.label}>
                            {cost.amount}
                            {cost.currency.symbol}
                          </span>
                        ))}
                    </p>
                    <p className={this.activStyleCard(index)}>cart</p>
                  </div>
                ));
              }
              return null;
            });
          }}
        </Query>
      </div>
    );
  }
}

export default All;
