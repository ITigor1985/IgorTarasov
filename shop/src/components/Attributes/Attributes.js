import { Component } from 'react';
import {
  AtrributesList,
  AtrributesListColorItem,
  AtrributesListCapacityItem,
  AtrributeName,
} from './Attributes.styled.jsx';
import './Attributes.css';

class Attributes extends Component {
  state = {
    // activColorIndex: 0,
    // activCapacityIndex: 0,
    // activUSBIndex: 0,
    // activTIDIndex: 0,
    // activSizeIndex: 0,
  };

  activStyleColorButton = index => {
    const styleOption = ['Color__button'];
    if (this.state.activColorIndex === index) {
      styleOption.push('Color__button--active');
    }
    return styleOption.join(' ');
  };
  activStyleCapacityButton = index => {
    const styleOption = ['Capacity__button'];
    if (this.state.activCapacityIndex === index) {
      styleOption.push('Capacity__button--active');
    }
    return styleOption.join(' ');
  };
  activStyleUSBButton = index => {
    const styleOption = ['USB__button'];
    if (this.state.activUSBIndex === index) {
      styleOption.push('USB__button--active');
    }
    return styleOption.join(' ');
  };
  activStyleTIDButton = index => {
    const styleOption = ['TID__button'];
    if (this.state.activTIDIndex === index) {
      styleOption.push('TID__button--active');
    }
    return styleOption.join(' ');
  };
  activStyleSizeButton = index => {
    const styleOption = ['Size__button'];
    if (this.state.activSizeIndex === index) {
      styleOption.push('Size__button--active');
    }
    return styleOption.join(' ');
  };

  setActiveColorButon = index => {
    this.setState({ activColorIndex: index });
  };
  setActiveCapacityButon = index => {
    this.setState({ activCapacityIndex: index });
  };
  setActiveUSBButon = index => {
    this.setState({ activUSBIndex: index });
  };
  setActiveTIDButon = index => {
    this.setState({ activTIDIndex: index });
  };
  setActiveSizeButon = index => {
    this.setState({ activSizeIndex: index });
  };
  getAttributes = (name, items) => {
    switch (name) {
      case 'Color':
        return items.map((item, index) => (
          <AtrributesListColorItem
            key={item.id}
            onClick={() => this.setActiveColorButon(index)}
            className={this.activStyleColorButton(index)}
          >
            <div
              className="attributeSize"
              style={{
                backgroundColor: item.value,
              }}
            ></div>
          </AtrributesListColorItem>
        ));

      case 'Capacity':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveCapacityButon(index)}
            className={this.activStyleCapacityButton(index)}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));
      case 'With USB 3 ports':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveUSBButon(index)}
            className={this.activStyleUSBButton(index)}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));
      case 'Touch ID in keyboard':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveTIDButon(index)}
            className={this.activStyleTIDButton(index)}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));
      case 'Size':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveSizeButon(index)}
            className={this.activStyleSizeButton(index)}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));

      default:
        return;
    }
  };

  render() {
    const { productAttributes } = this.props;
    return (
      <>
        {productAttributes.map(attribute => (
          <div key={attribute.id}>
            <AtrributeName>{attribute.name}</AtrributeName>
            <AtrributesList>
              {this.getAttributes(attribute.name, attribute.items)}
            </AtrributesList>
          </div>
        ))}
      </>
    );
  }
}

export default Attributes;
