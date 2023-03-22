import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        paddingTop: 80,
        backgroundColor: '#f2f2f2',
    },

    foodOption: {
        width: '90%',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: '#171717',
    },

    lastFoodOption: {
        width: '90%',
        marginTop: 10,
        marginBottom: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        elevation: 10,
        shadowColor: '#171717',
    },

    title: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 18,
        backgroundColor: '#000000',
        color: '#f2f2f2',
    },

    containerCount: {
        marginTop: 1,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#000000',
    },

    viewHidden: {
        display: 'none',
    },

    count: {
        fontSize: 16,
        color: '#f2f2f2',
    },

    value: {
        fontSize: 16,
        color: '#f2f2f2',
    },

    button: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
