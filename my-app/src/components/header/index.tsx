import { StatusBar } from 'expo-status-bar';

import LogoJovensICT from '../../../assets/icon.png';

import { Header, Image, Title } from './styled';

const HeaderComponent = () => {
  return (
    <Header>
      <Image source={LogoJovensICT} />

      <Title>Cantina JovensICT</Title>

      <StatusBar style="inverted" />
    </Header>
  );
};

export default HeaderComponent;
