import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

import MistoQuente from '../../containers/misto-quente';
import Torta from '../../containers/torta';
import PaoDeQueijo from '../../containers/pao-de-queijo';
import Bolo from '../../containers/bolo';
import BoloCobertura from '../../containers/bolo-cobertura';
import SucoAchocolatado from '../../containers/suco-achocolatado';
import RefriSucoLata from '../../containers/refri-suco-lata';
import CafeLeite from '../../containers/cafe-leite';
import Cafe from '../../containers/cafe';
import PaoChapa from '../../containers/pao-chapa';

import { useAppContext } from '../../context/app-context';

import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';

import { Screen, ClearButton } from './styled';

const HomeScreen = () => {
  const {
    priceOne,
    priceTwo,
    priceThree,
    priceFour,
    priceFive,
    priceSix,
    priceSeven,
    priceEight,
    priceNine,
    priceTen,
    handleValueZero,
  } = useAppContext();

  return (
    <Screen>
      <HeaderComponent />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <MistoQuente price={7} />
          <Torta price={6} />
          <PaoDeQueijo price={4.5} />
          <Bolo price={3.5} />
          <BoloCobertura price={4.5} />
          <SucoAchocolatado price={2.5} />
          <RefriSucoLata price={4.5} />
          <CafeLeite price={2.5} />
          <Cafe price={1.5} />
          <PaoChapa price={3} />
        </ScrollView>
      </TouchableWithoutFeedback>

      <ClearButton onPress={() => handleValueZero()} style={styles.button}>
        <Icon name="delete" size={32} color="#F2F2F2" />
      </ClearButton>

      <FooterComponent
        priceOne={priceOne}
        priceTwo={priceTwo}
        priceThree={priceThree}
        priceFour={priceFour}
        priceFive={priceFive}
        priceSix={priceSix}
        priceSeven={priceSeven}
        priceEight={priceEight}
        priceNine={priceNine}
        priceTen={priceTen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
  },
});

export default HomeScreen;
