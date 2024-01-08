import React, { createContext, useContext, useState } from 'react';

import { AppContextProps } from '../types/app-context-props';

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);
  const [countSix, setCountSix] = useState(0);
  const [countSeven, setCountSeven] = useState(0);
  const [countEight, setCountEight] = useState(0);
  const [countNine, setCountNine] = useState(0);
  const [countTen, setCountTen] = useState(0);

  const [priceOne, setPriceOne] = useState(0);
  const [priceTwo, setPriceTwo] = useState(0);
  const [priceThree, setPriceThree] = useState(0);
  const [priceFour, setPriceFour] = useState(0);
  const [priceFive, setPriceFive] = useState(0);
  const [priceSix, setPriceSix] = useState(0);
  const [priceSeven, setPriceSeven] = useState(0);
  const [priceEight, setPriceEight] = useState(0);
  const [priceNine, setPriceNine] = useState(0);
  const [priceTen, setPriceTen] = useState(0);

  const handleCountOneUp = (price: number) => {
    setCountOne(countOne + 1);

    setPriceOne(price * (countOne + 1));
  };

  const handleCountOneDown = (price: number) => {
    if (countOne === 0) return;

    setCountOne(countOne - 1);

    setPriceOne(priceOne - price);
  };

  const handleCountTwoUp = (price: number) => {
    setCountTwo(countTwo + 1);

    setPriceTwo(price * (countTwo + 1));
  };

  const handleCountTwoDown = (price: number) => {
    if (countTwo === 0) return;

    setCountTwo(countTwo - 1);

    setPriceTwo(priceTwo - price);
  };

  const handleCountThreeUp = (price: number) => {
    setCountThree(countThree + 1);

    setPriceThree(price * (countThree + 1));
  };

  const handleCountThreeDown = (price: number) => {
    if (countThree === 0) return;

    setCountThree(countThree - 1);

    setPriceThree(priceThree - price);
  };

  const handleCountFourUp = (price: number) => {
    setCountFour(countFour + 1);

    setPriceFour(price * (countFour + 1));
  };

  const handleCountFourDown = (price: number) => {
    if (countFour === 0) return;

    setCountFour(countFour - 1);

    setPriceFour(priceFour - price);
  };

  const handleCountFiveUp = (price: number) => {
    setCountFive(countFive + 1);

    setPriceFive(price * (countFive + 1));
  };

  const handleCountFiveDown = (price: number) => {
    if (countFive === 0) return;

    setCountFive(countFive - 1);

    setPriceFive(priceFive - price);
  };

  const handleCountSixUp = (price: number) => {
    setCountSix(countSix + 1);

    setPriceSix(price * (countSix + 1));
  };

  const handleCountSixDown = (price: number) => {
    if (countSix === 0) return;

    setCountSix(countSix - 1);

    setPriceSix(priceSix - price);
  };

  const handleCountSevenUp = (price: number) => {
    setCountSeven(countSeven + 1);

    setPriceSeven(price * (countSeven + 1));
  };

  const handleCountSevenDown = (price: number) => {
    if (countSeven === 0) return;

    setCountSeven(countSeven - 1);

    setPriceSeven(priceSeven - price);
  };

  const handleCountEightUp = (price: number) => {
    setCountEight(countEight + 1);

    setPriceEight(price * (countEight + 1));
  };

  const handleCountEightDown = (price: number) => {
    if (countEight === 0) return;

    setCountEight(countEight - 1);

    setPriceEight(priceEight - price);
  };

  const handleCountNineUp = (price: number) => {
    setCountNine(countNine + 1);

    setPriceNine(price * (countNine + 1));
  };

  const handleCountNineDown = (price: number) => {
    if (countNine === 0) return;

    setCountNine(countNine - 1);

    setPriceNine(priceNine - price);
  };

  const handleCountTenUp = (price: number) => {
    setCountTen(countTen + 1);

    setPriceTen(price * (countTen + 1));
  };

  const handleCountTenDown = (price: number) => {
    if (countTen === 0) return;

    setCountTen(countTen - 1);

    setPriceTen(priceTen - price);
  };

  const handleValueZero = () => {
    setCountOne(0);
    setCountTwo(0);
    setCountThree(0);
    setCountFour(0);
    setCountFive(0);
    setCountSix(0);
    setCountSeven(0);
    setCountEight(0);
    setCountNine(0);
    setCountTen(0);

    setPriceOne(0);
    setPriceTwo(0);
    setPriceThree(0);
    setPriceFour(0);
    setPriceFive(0);
    setPriceSix(0);
    setPriceSeven(0);
    setPriceEight(0);
    setPriceNine(0);
    setPriceTen(0);
  };

  return (
    <AppContext.Provider
      value={{
        countOne,
        countTwo,
        countThree,
        countFour,
        countFive,
        countSix,
        countSeven,
        countEight,
        countNine,
        countTen,
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
        handleCountOneUp,
        handleCountTwoUp,
        handleCountThreeUp,
        handleCountFourUp,
        handleCountFiveUp,
        handleCountSixUp,
        handleCountSevenUp,
        handleCountEightUp,
        handleCountNineUp,
        handleCountTenUp,
        handleCountOneDown,
        handleCountTwoDown,
        handleCountThreeDown,
        handleCountFourDown,
        handleCountFiveDown,
        handleCountSixDown,
        handleCountSevenDown,
        handleCountEightDown,
        handleCountNineDown,
        handleCountTenDown,
        handleValueZero,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};
