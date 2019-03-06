import * as React from "react";
import {Image, ImageBackground, KeyboardAvoidingView, View, Alert, Keyboard, Platform, ScrollView,ActivityIndicator} from "react-native";
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements'
import styles from "./styles";
import color from "../../../assets/values/color";
import Strings from "../../../assets/values/Strings";
import font from "../../../assets/values/font";
import size from "../../../assets/values/dimens";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import validate from 'validate.js'
import * as loginUserActions from './../../reducers/reducer/loginUser/actions';
import {Utils} from "../../utils/Utils";
import {startDashboard} from "../../App";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorEmail: "",
            errorPassword: "",
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.loginUserData.isLoading !== this.props.loginUserData.isLoading &&
            !this.props.loginUserData.isLoading) {
            if (this.props.loginUserData.status) {
                startDashboard();
            } else {
                Alert.alert(Strings.app,this.props.loginUserData.message);
            }
        }
    }

    componentWillUnmount() {

    };

    actionLogin = () => {
        const {email, password} = this.state;
        const emailError = validate({emailAddress: email}, {emailAddress: {email: true}});
        let errors = {errorEmail: "", errorPassword: ""};
        let isError = false;
        if (emailError) {
            errors = {...errors, errorEmail: emailError.emailAddress[0]};
            isError = true;
        }

        if (Utils.isNull(password)) {
            errors = {...errors, errorPassword: Strings.validate_password};
            isError = true;
        }

        this.setState(errors);

        if (!isError) {
            this.props.loginUserActions.loginUser({
                email: email,
                password: password
            })
        }
    };


    render() {
        let {errorEmail, errorPassword, loading} = this.state;
        let {loginUserData} = this.props;
        return (
            <View
                style={{width: '100%', height: '100%'}}
            >

                    <KeyboardAvoidingView style={styles.container}>
                        <View
                            style={styles.container}
                        >
                        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>

<FormInput
    inputStyle={styles.text_input}
    keyboardType={"email-address"}
    placeholderTextColor={color.colorPrimary}
    placeholder={Strings.placeholder_email}
    fontFamily={font.app}
    onChangeText={text => this.setState({email: text})}
/>

<FormValidationMessage
    fontFamily={font.app}
    containerStyle={{alignSelf: "flex-start", marginVertical: size.size_2}}
    labelStyle={styles.validate_text}>{errorEmail}</FormValidationMessage>

<FormInput
    inputStyle={styles.text_input}
    placeholderTextColor={color.colorPrimary}
    placeholder={Strings.placeholder_password}
    fontFamily={font.app}
    onChangeText={text => this.setState({password: text})}
    secureTextEntry={true}
/>

<FormValidationMessage
    fontFamily={font.app}
    containerStyle={{alignSelf: "flex-start", marginVertical: size.size_2}}
    labelStyle={styles.validate_text}>{errorPassword}</FormValidationMessage>

<Button
    fontSize={size.text_size_medium}
    buttonStyle={styles.submit_button}
    backgroundColor={color.colorPrimary}
    fontFamily={font.app}
    loading={loading}
    onPress={this.actionLogin}
    title={(Strings.title_login).toUpperCase()}
/>
</View>
                        </View>
                    </KeyboardAvoidingView>
                    { loginUserData.isLoading ? 
                    <ActivityIndicator /> : null
                    }
                    
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        loginUserData: state.loginUserReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUserActions: bindActionCreators(loginUserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
