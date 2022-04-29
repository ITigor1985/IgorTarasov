import { Component } from 'react';

class Attributes extends Component {
  getAttributes = (name, items) => {
    if (name === 'Color') {
      return items.map(item => (
        <li
          key={item.id}
          style={{
            backgroundColor: item.value,
            width: '15px',
            height: '15px',
          }}
        ></li>
      ));
    } else {
      return items.map(item => <li key={item.id}>{item.displayValue}</li>);
    }
  };

  render() {
    const { productAttributes } = this.props;
    return (
      <>
        {productAttributes.map(attribute => (
          <div key={attribute.id}>
            <h3>{attribute.name}</h3>
            <ul>{this.getAttributes(attribute.name, attribute.items)}</ul>
          </div>
        ))}
      </>
    );
  }
}

export default Attributes;
