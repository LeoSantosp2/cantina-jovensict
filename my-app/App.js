import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header';
import Home from './src/Home';
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

    function handleMistoQuenteTotalPrice(price) {
        setMistoQuenteTotalPrice(price);
    }

    function handleTortaTotalPrice(price) {
        setTortaTotalPrice(price);
    }

    function handlePaoDeQueijoTotalPrice(price) {
        setPaoDeQueijoPrice(price);
    }

    function handleBoloTotalPrice(price) {
        setBoloPrice(price);
    }

    function handleBoloCoberturaTotalPrice(price) {
        setBoloCoberturaPrice(price);
    }

    function handleSucoAchocolatadoTotalPrice(price) {
        setSucoAchocolatadoPrice(price);
    }

    function handleRefriSucoLataTotalPrice(price) {
        setRefriSucoLataPrice(price);
    }

    function handleCafeComLeiteTotalPrice(price) {
        setCafeComLeitePrice(price);
    }

    function handleCafeTotalPrice(price) {
        setCafePrice(price);
    }

    function handlePaoChapaTotalPrice(price) {
        setPaoChapaPrice(price);
    }

    return (
        <View style={styles}>
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
                SucoAchocolatadoTotal={sucoAchocolatadoPrice}
                refriSucoLataTotal={refriSucoLataPrice}
                cafeComLeiteTotal={cafeComLeitePrice}
                cafeTotal={cafePrice}
                paoChapaTotal={paoChapaPrice}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
