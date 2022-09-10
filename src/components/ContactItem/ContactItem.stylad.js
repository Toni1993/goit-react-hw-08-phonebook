import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ItemText = styled.div`
  color: #3498db;
  text-shadow: none;
`;

export const ItemData = styled.div`
  padding: 10px 15px;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
