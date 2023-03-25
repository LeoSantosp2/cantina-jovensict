import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './styled';

import MistoQuente from '../../components/mistoQuente';
import Torta from '../../components/torta';
import PaoDeQueijo from '../../components/paoDeQueijo';
import Bolo from '../../components/bolo';
import BoloCobertura from '../../components/boloCobertura';
import SucoAchocolatado from '../../components/sucoAchocolatado';
import RefriSucoLata from '../../components/refriSucoLata';
import CafeComLeite from '../../components/cafeComLeite';
import Cafe from '../../components/cafe';
import PaoChapa from '../../components/paoChapa';

interface Props {
    mistoQuentePrice: CallableFunction;
    tortaPrice: CallableFunction;
    paoDeQueijoPrice: CallableFunction;
    boloPrice: CallableFunction;
    boloCoberturaPrice: CallableFunction;
    sucoAchocolatadoPrice: CallableFunction;
    refriSucoLataPrice: CallableFunction;
    cafeComLeitePrice: CallableFunction;
    cafePrice: CallableFunction;
    paoChapaPrice: CallableFunction;
}

const Home: React.FC<Props> = ({
    mistoQuentePrice,
    tortaPrice,
    paoDeQueijoPrice,
    boloPrice,
    boloCoberturaPrice,
    sucoAchocolatadoPrice,
    refriSucoLataPrice,
    cafeComLeitePrice,
    cafePrice,
    paoChapaPrice,
}) => {
    return (
        <Container>
            <ScrollView>
                <MistoQuente valuePrice={mistoQuentePrice} />

                <Torta valuePrice={tortaPrice} />

                <PaoDeQueijo valuePrice={paoDeQueijoPrice} />

                <Bolo valuePrice={boloPrice} />

                <BoloCobertura valuePrice={boloCoberturaPrice} />

                <SucoAchocolatado valuePrice={sucoAchocolatadoPrice} />

                <RefriSucoLata valuePrice={refriSucoLataPrice} />

                <CafeComLeite valuePrice={cafeComLeitePrice} />

                <Cafe valuePrice={cafePrice} />

                <PaoChapa valuePrice={paoChapaPrice} />
            </ScrollView>
        </Container>
    );
};

export default Home;
