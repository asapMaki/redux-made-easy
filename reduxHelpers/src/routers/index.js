import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";

// --------------------------- LOGIN STACK ---------------------------
import MoviesContainer                       from "../containers/Movies/index";
//import RegisterContainer                    from "../containers/Login/Register";

// ------------------------------ FUNCTION FOR CREATING APP CONTAINER ------------------------------
export const createRootNavigator = () => {
    const movieStackNavigator =  createStackNavigator({
        Movies: {
            screen: MoviesContainer,         //MOVIES container
            navigationOptions: {
                header:null
            }
        },
        /*Movie: {
            screen: RegisterContainer,      //MOVIE container
            navigationOptions: {
                title:"Movie",
            }
        }*/
    });

    return createAppContainer(movieStackNavigator);
};