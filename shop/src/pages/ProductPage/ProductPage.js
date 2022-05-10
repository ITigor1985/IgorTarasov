import { Component } from 'react';

import { withRouter } from 'react-router-dom';

class ProductPage extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log(location, match, history);
    return <>DDDDDDDDDDDDDDDDDD</>;
  }
}
export default withRouter(ProductPage);
