import { Component } from 'react';
import {
  AtrributesList,
  AtrributesListColorItem,
  AtrributesListItem,
} from './Attributes.styled.jsx';
import './Attributes.css';

class Attributes extends Component {
  state = {
    activColorIndex: 0,
    activAttributeIndex: 0,
  };

  activStyleColorButton = index => {
    const styleOption = ['Color__button'];
    if (this.state.activColorIndex === index) {
      styleOption.push('Color__button--active');
    }
    return styleOption.join(' ');
  };
  activStyleAttributeButton = index => {
    const styleOption = ['Atrribute__button'];
    if (this.state.activAttributeIndex === index) {
      styleOption.push('Atrribute__button--active');
    }
    return styleOption.join(' ');
  };

  setActiveColorButon = index => {
    this.setState({ activColorIndex: index });
  };
  setActiveAttributeButon = index => {
    this.setState({ activAttributeIndex: index });
  };
  getAttributes = (name, items) => {
    if (name === 'Color') {
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
    } else {
      return items.map((item, index) => (
        <AtrributesListItem
          key={item.id}
          onClick={() => this.setActiveAttributeButon(index)}
          className={this.activStyleAttributeButton(index)}
        >
          {item.value}
        </AtrributesListItem>
      ));
    }
  };

  render() {
    const { productAttributes } = this.props;
    return (
      <>
        {productAttributes.map(attribute => (
          <div key={attribute.id}>
            <h3>{attribute.name}</h3>
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
