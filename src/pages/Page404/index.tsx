import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import logoLight from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';

import { Header, Title } from './styles';

interface Props {
  toggleTheme(): void;
}

const Page404: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const logo = title === 'light' ? logoLight : logoDark;

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={50}
          handleDiameter={30}
          offColor={colors.primaryText}
          onColor={colors.primaryText}
          offHandleColor={colors.primaryText}
          onHandleColor={colors.primaryText}
        />
      </Header>

      <Title>Error 404: Not Found!</Title>
    </>
  );
};

export default Page404;
