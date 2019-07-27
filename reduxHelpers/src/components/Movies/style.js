import { ScaledSheet } from 'react-native-size-matters';

export default (styles = ScaledSheet.create({
    container: {
        flex: 1,
        //width: '100@s', // = scale(100)
        //height: '200@vs', // = verticalScale(200),
        backgroundColor: 'orange',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10@ms0.3', // = moderateScale(10, 0.3)
        height: '225@vs', // = moderateScale(50)
        backgroundColor: 'red',
    },
}));
