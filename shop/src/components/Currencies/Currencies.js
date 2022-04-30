import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from '../../query/query';
import { BtnCurrenciesSelection, Symbol } from './Currencies.styled';

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
        <BtnCurrenciesSelection type="button" onClick={this.toggle}>
          <Symbol>{symbol}</Symbol>
          <svg width="6" height="3" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              fill="none"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </BtnCurrenciesSelection>
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
