import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Poster from '../Poster';

export const renderRow = ({ index, item, list }) => {
    if (index % 2 != 0) return;

    return (
        <View style={styles.row}>
            <Poster movie={item} />
            <Poster movie={list[index + 1]} />
        </View>
    );
};
