import {
    Platform
} from 'react-native';
import {
    Provider
} from "react-redux";
import configureStore from "./store/configureStore";
import {
    packageName,
    registerScreens
} from "./screen";
import {
    Navigation
} from 'react-native-navigation';
import Strings from "../assets/values/Strings";
import LocalStorage from "./store/LocalStorage";
import font from "../assets/values/font";
import size from "../assets/values/dimens";
import color from "../assets/values/color";


const store = configureStore();

registerScreens(store, Provider);

LocalStorage.isLoggedIn().then(loggedIn => {
    if (loggedIn) {
        startDashboard();
    } else {
        startLoginScreen();
    }
}).catch(err => {
    startLoginScreen();
});


export function startLoginScreen() {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: `${packageName}.Login`
                    }
                }],
                options: {
                    statusBar: {
                        backgroundColor: color.colorPrimaryDark,
                        drawBehind: false,
                        visible: true
                    },
                    topBar: {
                        visible: false,
                        drawBehind: true,
                        animate: false
                    },
                    layout: {
                        orientation: ['portrait']
                    },
                    popGesture: true,
                    background: {
                        color: 'transparent'
                    }
                }
            }
        }
    });
}


export function startDashboard() {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: color.colorPrimaryDark,
            drawBehind: false,
            visible: true
        },
        topBar: {
            visible: true,
            background: {
                color: color.colorPrimary,
            },
            title: {
                fontSize: size.text_size_small,
                color: "#FFFFFF",
                fontFamily: font.ralewayBold,
            }
        },
        bottomTabs: {
            visible: true,
            drawBehind: false,
            backgroundColor: color.colorPrimary,
            animate: false,
            titleDisplayMode: 'alwaysShow'
        },
        bottomTab: {
            iconColor: "#FFFFFF",
            selectedIconColor: 'rgba(200,254,185,1)',
            textColor: '#FFFFFF',
            selectedTextColor: 'rgba(200,254,185,1)',
            fontFamily: font.ralewaySemiBold,
            fontSize: size.text_size_v_small,
            selectedFontSize: size.text_size_v_small
        }
    });

    //Platform.OS === 'ios' ?

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: `${packageName}.Home`,
                                    passProps: {
                                        title: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: "Tab 1",
                                    icon: require('../assets/images/ic_home.png'),
                                    testID: 'tab_1',
                                },
                                topBar: {
                                    title: {
                                        text: "Tab 1",
                                    }
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: `${packageName}.Home`,
                                    passProps: {
                                        title: 'This is tab 2'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: "Tab 2",
                                    icon: require('../assets/images/ic_home.png'),
                                    testID: 'tab_2'
                                },
                                topBar: {
                                    title: {
                                        text: "Tab 2",
                                    }
                                }
                            }
                        }
                    }, {
                        stack: {
                            children: [{
                                component: {
                                    name: `${packageName}.Home`,
                                    passProps: {
                                        title: 'This is tab 3'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: "Tab 3",
                                    icon: require('../assets/images/ic_home.png'),
                                    testID: 'tab_3'
                                },
                                topBar: {
                                    title: {
                                        text: "Tab 3",
                                    }
                                }
                            }
                        }
                    }, {
                        stack: {
                            children: [{
                                component: {
                                    name: `${packageName}.Home`,
                                    passProps: {
                                        title: 'This is tab 4'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: "Tab 4",
                                    icon: require('../assets/images/ic_home.png'),
                                    testID: 'tab_4'
                                },
                                topBar: {
                                    title: {
                                        text: "Tab 4",
                                    }
                                }
                            }
                        }
                    },
                ]
            }
        }
    });
}

function getAppStyle() {
    return {
        navBarTextFontFamily: font.app,
        navBarTextFontSize: size.text_size_medium,
        navBarButtonColor: color.white,
        navBarTextColor: color.white,
        navigationBarColor: color.colorPrimary,
        navBarBackgroundColor: color.colorPrimary,
        statusBarColor: color.colorPrimaryDark,
        disabledBackGesture: true,
        orientation: 'portrait',
    }
}