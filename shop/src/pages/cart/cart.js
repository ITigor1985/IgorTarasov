import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from 'query/categories';

class Cart extends Component {
  render() {
    const id = 'jacket-canada-goosee';

    return (
      <>
        <Query variables={{ id }} query={GET_PRODUCT}>
          {({ data }) => {
            return <div>{console.log(data)}</div>;
          }}
        </Query>
      </>
    );
  }
}

export default Cart;
