import { ScaledSheet } from 'react-native-size-matters';

export default (styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#758',
        margin: 16,
    },
    imageStyle: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    textContainer: {
        height: '40@vs',
        backgroundColor: '#0004',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        color: 'rgba(245, 222, 80, 1)',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    titleStyle: {
        flex: 3,
    },
    scoreStyle: {
        flex: 2,
        height: '100%',
        backgroundColor: '#0006',
        paddingTop: '13@vs',
    },
}));
