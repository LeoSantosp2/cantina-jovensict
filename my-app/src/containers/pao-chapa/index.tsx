import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

import { useAppContext } from '../../context/app-context';

import {
  Container,
  ContainerUp,
  ContainerDown,
  Button,
  Text,
} from '../../styles/global-styles';

interface Props {
  price: number;
}

const PaoChapa = ({ price }: Props) => {
  const { countTen, priceTen, handleCountTenUp, handleCountTenDown } =
    useAppContext();

  return (
    <Container>
      <ContainerUp style={styles.button}>
        <Text>Pão na Chapa</Text>
      </ContainerUp>

      <ContainerDown style={styles.button}>
        <Button onPress={() => handleCountTenUp(price)}>
          <Icon name="plus" size={28} color="#000000" />
        </Button>

        <Text>{countTen}</Text>

        <Button onPress={() => handleCountTenDown(price)}>
          <Icon name="minus" size={28} color="#000000" />
        </Button>

        <Text>R${priceTen.toFixed(2).replace('.', ',')}</Text>
      </ContainerDown>
    </Container>
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

export default PaoChapa;
