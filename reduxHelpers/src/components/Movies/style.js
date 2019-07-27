import { ScaledSheet } from 'react-native-size-matters';

export default (styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10@ms0.3', // = moderateScale(10, 0.3)
        height: '275@vs', // = moderateScale(50)
    },
}));
