import {Navigation} from "react-native-navigation"

export default class AppUtils {

    static logoutUser = () => {

    };

    static async getTopBarHeight() {
        const constants = await Navigation.constants();
        return constants.topBarHeight;
    }

    static async getStatusBarHeight() {
        const constants = await Navigation.constants();
        return constants.statusBarHeight;
    }

}