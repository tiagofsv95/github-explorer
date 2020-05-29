import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.colors.primaryText};
  max-width: 500px;
  line-height: 56px;
  margin: 80px auto;
`;
