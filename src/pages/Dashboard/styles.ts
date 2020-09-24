import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: #424242;
`;

export const Header = styled.header`
  max-width: 1120px;
  height: 10vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  background: #424242;
  margin: 0 auto;
  padding: 20px;

  h1 {
    margin: 20px 0;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  margin-bottom: 40px;

  input {
    flex: 1;
    padding: 15px;
  }

  button {
    padding: 15px;
    width: 210px;
  }
`;
