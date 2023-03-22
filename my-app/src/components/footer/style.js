import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    footer: {
        width: '100%',
        paddingLeft: 10,
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        backgroundColor: '#f2f2f2',
    },

    payment: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    input: {
        width: 100,
        height: 25,
        margin: 10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 4,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#000000',
        color: '#f2f2f2',
    },

    button: {
        width: 60,
        height: 20,
        marginRight: 5,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },

    moneyChange: {
        marginTop: 10,
        marginBottom: 10,
    },
});
