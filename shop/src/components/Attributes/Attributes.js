import { Component } from 'react';
import {
  AtrributesList,
  AtrributesListColorItem,
  AtrributesListCapacityItem,
  AtrributeName,
  AttributeColor,
} from './Attributes.styled.jsx';
import './Attributes.css';

class Attributes extends Component {
  state = {
    activColorIndex: 0,
    activCapacityIndex: 0,
    activUSBIndex: 0,
    activTIDIndex: 0,
    activSizeIndex: 0,
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

  setActiveColorButon = (index, name, productId) => {
    this.setState({ activColorIndex: index });
    this.props.setAttributes({ name, index, productId });
  };
  setActiveCapacityButon = (index, name, productId) => {
    this.setState({ activCapacityIndex: index });
    this.props.setAttributes({ name, index, productId });
  };
  setActiveUSBButon = (index, name, productId) => {
    this.setState({ activUSBIndex: index });
    this.props.setAttributes({ name, index, productId });
  };
  setActiveTIDButon = (index, name, productId) => {
    this.setState({ activTIDIndex: index });
    this.props.setAttributes({ name, index, productId });
  };
  setActiveSizeButon = (index, name, productId) => {
    this.setState({ activSizeIndex: index });
    this.props.setAttributes({ name, index, productId });
  };
  getAttributes = (name, items, productId) => {
    switch (name) {
      case 'Color':
        return items.map((item, index) => (
          <AtrributesListColorItem
            key={item.id}
            onClick={() => this.setActiveColorButon(index, name, productId)}
            className={this.activStyleColorButton(index)}
          >
            <AttributeColor
              eventType={this.props.eventType}
              bgColor={item.value}
            ></AttributeColor>
          </AtrributesListColorItem>
        ));

      case 'Capacity':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveCapacityButon(index, name, productId)}
            className={this.activStyleCapacityButton(index)}
            eventType={this.props.eventType}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));
      case 'With USB 3 ports':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveUSBButon(index, name, productId)}
            className={this.activStyleUSBButton(index)}
            eventType={this.props.eventType}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));
      case 'Touch ID in keyboard':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveTIDButon(index, name, productId)}
            className={this.activStyleTIDButton(index)}
            eventType={this.props.eventType}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));
      case 'Size':
        return items.map((item, index) => (
          <AtrributesListCapacityItem
            key={item.id}
            onClick={() => this.setActiveSizeButon(index, name, productId)}
            className={this.activStyleSizeButton(index)}
            eventType={this.props.eventType}
          >
            {item.value}
          </AtrributesListCapacityItem>
        ));

      default:
        return;
    }
  };

  render() {
    const { productAttributes, productId } = this.props;
    //console.log(productAttributes, productId)
    return (
      <>
        {productAttributes.map(attribute => (
          <div key={attribute.id}>
            <AtrributeName>{attribute.name}</AtrributeName>
            <AtrributesList>
              {this.getAttributes(attribute.name, attribute.items, productId)}
            </AtrributesList>
          </div>
        ))}
      </>
    );
  }
}

export default Attributes;
