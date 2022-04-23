import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from 'query/categories';
import { Component } from 'react';
class All extends Component {
  // getCurrence(arr) {
  //   console.log(arr, this.props.currencie);
  //   return arr[0].currency.label;
  // }
  state = {
    cartVisible: false,
  };

  onCartVisible = e => {
    console.log(e.target);
    this.setState({ cartVisible: true });
  };
  onCartInvisible = () => {
    this.setState({ cartVisible: false });
  };

  render() {
    const { cartVisible } = this.state;
    const { currencie } = this.props;

    return (
      <div>
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';

            const { categories } = data;
            return categories.map(category => {
              if (category.name === 'all') {
                return category.products.map((product, index) => (
                  <div
                    key={product.id}
                    onMouseOver={this.onCartVisible}
                    onMouseOut={this.onCartInvisible}
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
                    {cartVisible && <p>cart</p>}
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
