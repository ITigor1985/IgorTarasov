import styled from 'styled-components';

export const AtrributesList = styled.ul`
  display: flex;
  align-items: center;
`;
export const AtrributesListColorItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  & :last-child {
    margin-right: none;
  }
`;

const paddingAttributes = ({ eventType }) => {
  switch (eventType) {
    case 'modalCart':
      return '2px 3px';
    default:
      return '13px 25px';
  }
};

export const AtrributesListCapacityItem = styled.li`
  margin-right: 12px;
  border: 1px solid #1d1f22;
  padding: ${paddingAttributes};
  & :last-child {
    margin-right: none;
  }
`;

const widthAttributeColor = ({ eventType }) => {
  switch (eventType) {
    case 'modalCart':
      return '16px';
    default:
      return '32px';
  }
};
const heightAttributeColor = ({ eventType }) => {
  switch (eventType) {
    case 'modalCart':
      return '16px';
    default:
      return '32px';
  }
};

const bgAttributeColor = ({ bgColor }) => {
  return bgColor;
};

export const AttributeColor = styled.div`
  width: ${widthAttributeColor};
  height: ${heightAttributeColor};
  background-color: ${bgAttributeColor};
`;

export const AtrributeName = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 8px;
`;
