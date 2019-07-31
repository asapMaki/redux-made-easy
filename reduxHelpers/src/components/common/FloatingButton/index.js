import React from 'react';
import { View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

export const FloatingButton = (props) => {
    const actions = [
        {
            text: 'Top',
            icon: require('../../../assets/btn-images/arrow-up-solid.svg'),
            name: 'bt_accessibility',
            position: 0,
            execute: () => {
                //this.listRef.getNode().scrollToOffset({ offset: 0, animated: true });
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
    console.tron.log('Props', props);
    return (
        <FloatingAction
            actions={actions}
            onPressItem={(name) => {
                findActionIndex(name);
                props.flatListRef();
            }}
            onPressBackdrop={() => {
                console.tron.log('Test');
            }}
        />
    );
};
