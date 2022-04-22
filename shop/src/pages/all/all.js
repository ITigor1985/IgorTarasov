import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from 'query/categories';
import { Component } from 'react';
class All extends Component {
  getCurrence(arr) {
    console.log(arr, this.props.currencie);
    return arr[0].currency.label;
  }

  render() {
    const { currencie } = this.props;
    console.log(currencie);
    let price = [];
    return (
      <div>
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            console.log(data);
            if (loading) return 'Loading...';

            const { categories } = data;
            return categories.map(category => {
              if (category.name === 'all') {
                return category.products.map(product => (
                  <div key={product.id}>
                    <img
                      src={product.gallery[0]}
                      alt={product.name}
                      width="356"
                      height="358"
                    />
                    <p>{product.name}</p>
                    <p>
                      {console.log(
                        product.prices.filter(
                          price => price.currency.label === currencie
                        )
                      )}
                      {currencie}
                    </p>
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
