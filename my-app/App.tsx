import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';

import Header from './src/components/header';
import Home from './src/containers/home';
import Footer from './src/components/footer';

export default function App() {
    const [mistoQuenteTotalPrice, setMistoQuenteTotalPrice] = useState(0);
    const [tortaTotalPrice, setTortaTotalPrice] = useState(0);
    const [paoDeQueijoPrice, setPaoDeQueijoPrice] = useState(0);
    const [boloPrice, setBoloPrice] = useState(0);
    const [boloCoberturaPrice, setBoloCoberturaPrice] = useState(0);
    const [sucoAchocolatadoPrice, setSucoAchocolatadoPrice] = useState(0);
    const [refriSucoLataPrice, setRefriSucoLataPrice] = useState(0);
    const [cafeComLeitePrice, setCafeComLeitePrice] = useState(0);
    const [cafePrice, setCafePrice] = useState(0);
    const [paoChapaPrice, setPaoChapaPrice] = useState(0);

    function handleMistoQuenteTotalPrice(price: number) {
        setMistoQuenteTotalPrice(price);
    }

    function handleTortaTotalPrice(price: number) {
        setTortaTotalPrice(price);
    }

    function handlePaoDeQueijoTotalPrice(price: number) {
        setPaoDeQueijoPrice(price);
    }

    function handleBoloTotalPrice(price: number) {
        setBoloPrice(price);
    }

    function handleBoloCoberturaTotalPrice(price: number) {
        setBoloCoberturaPrice(price);
    }

    function handleSucoAchocolatadoTotalPrice(price: number) {
        setSucoAchocolatadoPrice(price);
    }

    function handleRefriSucoLataTotalPrice(price: number) {
        setRefriSucoLataPrice(price);
    }

    function handleCafeComLeiteTotalPrice(price: number) {
        setCafeComLeitePrice(price);
    }

    function handleCafeTotalPrice(price: number) {
        setCafePrice(price);
    }

    function handlePaoChapaTotalPrice(price: number) {
        setPaoChapaPrice(price);
    }

    return (
        <View>
            <Header />
            <Home
                mistoQuentePrice={handleMistoQuenteTotalPrice}
                tortaPrice={handleTortaTotalPrice}
                paoDeQueijoPrice={handlePaoDeQueijoTotalPrice}
                boloPrice={handleBoloTotalPrice}
                boloCoberturaPrice={handleBoloCoberturaTotalPrice}
                sucoAchocolatadoPrice={handleSucoAchocolatadoTotalPrice}
                refriSucoLataPrice={handleRefriSucoLataTotalPrice}
                cafeComLeitePrice={handleCafeComLeiteTotalPrice}
                cafePrice={handleCafeTotalPrice}
                paoChapaPrice={handlePaoChapaTotalPrice}
            />
            <Footer
                mistoQuenteTotal={mistoQuenteTotalPrice}
                tortaTotal={tortaTotalPrice}
                paoDeQueijoTotal={paoDeQueijoPrice}
                boloTotal={boloPrice}
                boloCoberturaTotal={boloCoberturaPrice}
                sucoAchocolatadoTotal={sucoAchocolatadoPrice}
                refriSucoLataTotal={refriSucoLataPrice}
                cafeComLeiteTotal={cafeComLeitePrice}
                cafeTotal={cafePrice}
                paoChapaTotal={paoChapaPrice}
            />

            <StatusBar style="auto" />
        </View>
    );
}
