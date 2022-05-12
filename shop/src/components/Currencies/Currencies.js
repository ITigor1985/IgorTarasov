import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from '../../query/query';
import {
  BtnCurrenciesSelection,
  Symbol,
  BtnCurrency,
  ContainerCurrencyDropDown,
  Container,
} from './Currencies.styled';

class Currencies extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.toggle(event);
    }
  };

  render() {
    const { setCurrencie, symbol } = this.props;
    return (
      <Container>
        <BtnCurrenciesSelection
          type="button"
          onClick={event => this.props.toggle(event)}
        >
          <Symbol>{symbol}</Symbol>
          {this.props.dropCurrenciesMenu ? (
            <svg width="6" height="3" viewBox="0 0 42 25">
              <path
                d="M3 3 L21 21 L39 3"
                fill="none"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="6" height="3" viewBox="0 0 42 25">
              <path
                d="M3 21 L21 3 L39 21"
                fill="none"
                stroke="black"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          )}
        </BtnCurrenciesSelection>
        {this.props.dropCurrenciesMenu && (
          <ContainerCurrencyDropDown ref={this.setWrapperRef}>
            <Query query={GET_CURRENCIES}>
              {({ loading, data }) => {
                if (loading) return 'Loading...';
                const { currencies } = data;
                return currencies.map(({ label, symbol }) => (
                  <BtnCurrency
                    type="button"
                    onClick={event =>
                      setCurrencie(label, symbol, event.currentTarget, event)
                    }
                    key={label}
                  >
                    {label}
                    {symbol}
                  </BtnCurrency>
                ));
              }}
            </Query>
          </ContainerCurrencyDropDown>
        )}
      </Container>
    );
  }
}
export default Currencies;
