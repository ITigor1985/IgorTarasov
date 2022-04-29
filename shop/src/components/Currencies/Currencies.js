import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from '../../query/query';

class Currencies extends Component {
  state = {
    dropCurrenciesMenu: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      dropCurrenciesMenu: !prevState.dropCurrenciesMenu,
    }));
  };

  render() {
    const { setCurrencie, symbol } = this.props;
    return (
      <>
        <button type="button" onClick={this.toggle}>
          {symbol}
        </button>
        {this.state.dropCurrenciesMenu && (
          <div>
            <Query query={GET_CURRENCIES}>
              {({ loading, data }) => {
                if (loading) return 'Loading...';
                const { currencies } = data;
                return currencies.map(({ label, symbol }) => (
                  <button
                    type="button"
                    onClick={() => setCurrencie(label, symbol)}
                    key={label}
                  >
                    {label}
                    {symbol}
                  </button>
                ));
              }}
            </Query>
          </div>
        )}
      </>
    );
  }
}
export default Currencies;
