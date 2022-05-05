import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1238px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const LinkList = styled.ul`
  display: flex;
`;
export const LinkListItem = styled.li`
  padding-left: 16px;
  padding-right: 16px;
  text-transform: uppercase;
`;

export const ContainerCurrenciesCart = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnCart = styled.button`
  background-color: white;
  border: none;
`;
