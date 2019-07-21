import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

// --------------------------- LOGIN STACK ---------------------------
import Movies from '../containers/Movies';
import Shows from '../containers/Shows';

// ------------------------------ FUNCTION FOR CREATING APP CONTAINER ------------------------------
export const createRootNavigator = () => {
    const navigator = createMaterialTopTabNavigator(
        {
            Movies,
            Shows,
        },
        {
            initialRouteName: 'Movies',
            defaultNavigationOptions: {
                header: null,
            },
            tabBarOptions: {
                tabStyle: {
                    paddingTop: 50,
                },
            },
        },
    );

    return createAppContainer(navigator);
};
