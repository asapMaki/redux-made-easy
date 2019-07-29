import React from 'react';
import { View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

export const FloatingButton = () => {
    const actions = [
        {
            text: 'Top',
            icon: require('../../../assets/btn-images/arrow-up-solid.svg'),
            name: 'bt_accessibility',
            position: 0,
            execute: () => {
                console.tron.log('TOP');
            },
        },
        {
            text: 'Search',
            icon: require('../../../assets/btn-images/arrow-up-solid.svg'),
            name: 'bt_top',
            position: 0,
            execute: () => {
                console.tron.log('Search');
            },
        },
    ];

    findActionIndex = (name) => {
        actions.forEach((action) => {
            if (action.name === name) action.execute();
            return;
        });
    };

    doAction = (name) => {};

    return (
        <FloatingAction
            actions={actions}
            onPressItem={(name) => {
                findActionIndex(name);
            }}
            onPressBackdrop={() => {
                console.tron.log('Test');
            }}
        />
    );
};
