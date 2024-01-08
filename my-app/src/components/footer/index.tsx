import { useState } from 'react';
import { Platform } from 'react-native';

import {
  Component,
  ComponentUp,
  ComponentDown,
  Text,
  Input,
  Button,
  ButtonText,
} from './styled';

interface Props {
  priceOne: number;
  priceTwo: number;
  priceThree: number;
  priceFour: number;
  priceFive: number;
  priceSix: number;
  priceSeven: number;
  priceEight: number;
  priceNine: number;
  priceTen: number;
}

const FooterComponent = ({
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
}: Props) => {
  const [changeValue, setChangeValue] = useState('');
  const [change, setChange] = useState(0);

  const calcTotalValue = () => {
    const prices =
      priceOne +
      priceTwo +
      priceThree +
      priceFour +
      priceFive +
      priceSix +
      priceSeven +
      priceEight +
      priceNine +
      priceTen;

    setChange(Number(changeValue) - prices);
    setChangeValue('');
  };

  return (
    <Component behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ComponentUp>
        <Text>Pagamento:</Text>
        <Input
          value={changeValue}
          onChangeText={setChangeValue}
          inputMode="numeric"
        />

        <Button onPress={() => calcTotalValue()}>
          <ButtonText>Calcular</ButtonText>
        </Button>

        <Button onPress={() => setChange(0)}>
          <ButtonText>Apagar</ButtonText>
        </Button>
      </ComponentUp>

      <ComponentDown>
        <Text>
          Total: R$
          {(
            priceOne +
            priceTwo +
            priceThree +
            priceFour +
            priceFive +
            priceSix +
            priceSeven +
            priceEight +
            priceNine +
            priceTen
          )
            .toFixed(2)
            .replace('.', ',')}
        </Text>
        <Text>Troco: R${change.toFixed(2).replace('.', ',')}</Text>
      </ComponentDown>
    </Component>
  );
};

export default FooterComponent;
