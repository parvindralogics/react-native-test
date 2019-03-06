import {Navigation} from 'react-native-navigation';
import Login from "./Login/Login";
import Home from "./Home/Home";

export const packageName = "com.tabreduxdemo";

export function registerScreens(store, Provider) {
    Navigation.registerComponentWithRedux(`${packageName}.Login`, () => Login, Provider, store);
    Navigation.registerComponent(`${packageName}.Home`, () => Home);
}