import {Navigation} from "react-native-navigation";
import {packageName} from "../screen";
import color from "../../assets/values/color";

export default class Navigator {

    static push(componentId, screenName, title, passProps, topBarProps = {}) {

        const toolbarProps = {
            visible: true,
            drawBehind: false,
            animate: false,
            backButton: { // android
                color: "#FFFFFF"
            },
            buttonColor: "#FFFFFF", // iOS
            background: {
                color: color.colorPrimary,
            },
            title: {
                text: title
            },
            ...topBarProps
        };

        Navigation.push(componentId,
            {
                component: {
                    name: `${packageName}.${screenName}`,
                    passProps: passProps,
                    options: {
                        layout: {
                            backgroundColor: 'white',
                            orientation: ['portrait'] // An array of supported orientations
                        },
                        backButton: {
                            title: 'Back',
                            showTitle: false
                        },
                        bottomTabs: {
                            visible: false,
                            drawBehind: true
                        },
                        topBar: toolbarProps
                    }
                }
            });
    }

    static showModal(componentId, screenName, title, passProps) {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: `${packageName}.${screenName}`,
                        passProps: passProps,
                        options: {
                            layout: {
                                backgroundColor: 'transparent'
                            },
                            modalPresentationStyle: 'overCurrentContext',
                            topBar: {
                                visible: false,
                            }
                        }
                    }
                }]
            }
        });
    }

    static pop(componentId) {
        Navigation.pop(componentId);
    }

    static popTo(componentId) {
        Navigation.popTo(componentId);
    }

    static dismissModel(componentId) {
        Navigation.dismissModal(componentId);
    }

    static dismissAllModals() {
        Navigation.dismissAllModals({
            animations: {
                dismissModal: {
                    enable: false
                }
            }
        });
    }
}