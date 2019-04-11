import React from "react";
import { Platform, StatusBar }              from "react-native";
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import Icon                                 from "react-native-vector-icons/FontAwesome";
import {  TextButton }                      from 'react-native-material-buttons';
import Label                                from './TabLabel';
import TitleLabel                           from './TitleLabel';

// --------------------------- LOGIN STACK ---------------------------
import LoginContainer                       from "../containers/Login/index";
import RegisterContainer                    from "../containers/Login/Register";
// --------------------------- PROFILE STACK ---------------------------
import ProfileContainer                     from "../containers/Profile/index";
import ChangeEmailContainer                 from "../containers/Profile/ChangeEmail";
import ChangePasswordContainer              from "../containers/Profile/ChangePassword";
// --------------------------- CARDS STACK ---------------------------
import CardsContainer                       from "../containers/Cards/index";
import CardDetailsContainer                 from "../containers/Cards/CardDetails";
// --------------------------- SCANNER STACK ---------------------------
import ScannerContainer                     from "../containers/Scanner/index";
import ScanDetailsContainer                 from "../containers/Scanner/ScanDetails";


import { onSignOut }                        from "../routers/auth";

import * as commonStyles                    from "../common/style";


// ------------------------------ STACK WHEN USER IS NOT LOGGED IN ------------------------------
export const SignedOut = createStackNavigator({
    SignIn: {
        screen: LoginContainer,
        navigationOptions: {
            header:null
        }
    },
    SignUp: {
        screen: RegisterContainer,
        navigationOptions: {
            //title:"Register",
            headerTitle: <TitleLabel keyName={"register.title"} />,
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:commonStyles.linear_gradient_colors[0],
                borderBottomWidth: 0
            },
        }
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor:commonStyles.linear_gradient_colors[0],
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
        },
        headerTintColor: "white"
    })
});



// ------------------------------ Profile STACK  ------------------------------
export const Profile = createStackNavigator({
    Profile: {
        screen: ProfileContainer,
        navigationOptions:({navigation}) => ({
            headerTitle: <TitleLabel keyName={"profile.title"} />,
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:commonStyles.linear_gradient_colors[0],
                borderBottomWidth: 0
            },
            headerRight: (
                <TextButton
                    onPress={() =>{
                        onSignOut()
                        navigation.navigate("SignIn");
                    }}
                    title="Sign Out"
                    color="white"
                    titleColor={"white"}
                    titleStyle={{fontSize:12}}
                    style={{
                        backgroundColor:commonStyles.linear_gradient_colors[0],
                        marginRight:16
                    }}
                />
            ),
        })
    },
    ChangeEmail: {
        screen: ChangeEmailContainer,
        navigationOptions:({navigation}) => ({
            headerTitle: <TitleLabel keyName={"profile.change_email.title"} />,
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:commonStyles.linear_gradient_colors[0],
                borderBottomWidth: 0
            }
        })
    },
    ChangePassword: {
        screen: ChangePasswordContainer,
        navigationOptions:({navigation}) => ({
            headerTitle: <TitleLabel keyName={"profile.change_password.title"} />,
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:commonStyles.linear_gradient_colors[0],
                borderBottomWidth: 0
            },
        })
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: commonStyles.linear_gradient_colors[0],
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
        },
        headerTintColor: "white",

    })
});
Profile.navigationOptions = ({ navigation }) => {
    return {
        tabBarVisible: navigation.state.index === 0,
    };
};

// ------------------------------ CARDS STACK  ------------------------------
export const Cards = createStackNavigator({
        Cards: {
            screen: CardsContainer,
            navigationOptions:({navigation}) => ({
                headerTitle: <TitleLabel keyName={"cards.title"} />,
                headerTintColor:"white",
                headerStyle:{
                    backgroundColor:commonStyles.linear_gradient_colors[0],
                    borderBottomWidth: 0
                }
            })
        },
        CardDetails: {
            screen: CardDetailsContainer,
            navigationOptions:({navigation}) => ({
                headerTitle: <TitleLabel keyName={"cards.card_details.title"} />,
                headerTintColor:"white",
                headerStyle:{
                    backgroundColor:commonStyles.linear_gradient_colors[0],
                    borderBottomWidth: 0
                }
            })
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: commonStyles.linear_gradient_colors[0],
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: "white",
        })
    });
Cards.navigationOptions = ({ navigation }) => {
    return {
        tabBarVisible: navigation.state.index === 0,
    };
};

// ------------------------------ SCANNER STACK  ------------------------------
export const Scanner = createStackNavigator({
        Scanner: {
            screen: ScannerContainer,
            navigationOptions: {
                header:null
            }
        },
        ScanDetails: {
            screen: ScanDetailsContainer,
            navigationOptions:({navigation}) => ({
                headerTitle: <TitleLabel keyName={"scanner.title"} />,
                headerTintColor:"white",
                headerStyle:{
                    backgroundColor:commonStyles.linear_gradient_colors[0],
                    borderBottomWidth: 0
                }
            })
        },

    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: commonStyles.linear_gradient_colors[0],
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: "white",
        })
    });
    Scanner.navigationOptions = ({ navigation }) => {
    return {
        tabBarVisible: navigation.state.index === 0,
    };
};


// ------------------------------ STACK WHEN USER IS LOGGED IN------------------------------
export const SignedIn = createBottomTabNavigator(
    {
        Cards: {
            screen: Cards,
            navigationOptions: {
                tabBarLabel: ({focused}) => <Label keyName="navigation.cards" focused={focused} fontSize={12}/>,
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="address-card" size={30} color={"white"} />
                )
            },

        },
        Scanner: {
            screen: Scanner,
            navigationOptions: {
                tabBarLabel: ({focused}) => <Label keyName="navigation.scanner" focused={focused} fontSize={12}/>,
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="qrcode" size={30} color={"white"} />
                )
            },

        },
        Profile: {
            screen: Profile ,
            navigationOptions: {
                title:"Profile",
                tabBarLabel: ({focused}) => <Label keyName="navigation.profile" focused={focused} fontSize={12}/>,
                labelStyle:{
                    color:"white",
                },
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={30} color={"white"} />
                ),
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle:{
              color:"white"
            },
            style: {
                backgroundColor:commonStyles.linear_gradient_colors[1],
                borderTopWidth:0,
                elevation: 0,
                shadowOpacity: 0,
                height:60
            }
        }
    }
);


// ------------------------------ FUNCTION FOR RETURNING CORRECT STACK ------------------------------
export const createRootNavigator = (signedIn = false) => {
    const switchNav =  createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );

    return createAppContainer(switchNav);
};