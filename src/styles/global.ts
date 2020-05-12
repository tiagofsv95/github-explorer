import { createGlobalStyle, css } from 'styled-components';
import background from '../assets/background.svg';
import backgroundDark from '../assets/background-dark.svg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
${(props) =>
  props.theme.title === 'light'
    ? css`
        background: ${props.theme.colors.backgroud} url(${background}) no-repeat
          70% top;
        -webkit-font-smoothing: antialiased;
      `
    : css`
        background: ${props.theme.colors.backgroud} url(${backgroundDark})
          no-repeat 70% top;
      `};
-webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}


#root{
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}
`;
