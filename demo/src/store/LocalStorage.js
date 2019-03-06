import {AsyncStorage} from "react-native";

const KeyLoggedIn = 'loggedIn';
const KeyUser = 'user';
const KeySession = 'user';

export default class LocalStorage {

    static setLoggedIn = (loggedIn) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(KeyLoggedIn, JSON.stringify(loggedIn)).then(() => {
                resolve();
            }).catch(err => reject('err' + err));
        });
    };

    static isLoggedIn = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(KeyLoggedIn).then((flag) => {
                console.log("flag", flag);
                resolve(flag === "1");
            }).catch(err => reject('err' + err));
        });
    };

    static setUser = (user) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(KeyUser, JSON.stringify(user)).then(() => {
                resolve();
            }).catch(err => reject('err' + err));
        });
    };

    static getUser = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(KeyUser).then((data) => {
                resolve(JSON.parse(data));
            }).catch(err => reject('err' + err));
        });
    };

    static clearStorage = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.clear(error => {
                if (!error) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }

}