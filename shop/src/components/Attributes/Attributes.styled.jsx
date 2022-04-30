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

export const AtrributesListCapacityItem = styled.li`
  margin-right: 12px;
  border: 1px solid #1d1f22;
  padding: 13px 25px;
  & :last-child {
    margin-right: none;
  }
`;

export const AtrributeName = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 8px;
`;
