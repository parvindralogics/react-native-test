import {StyleSheet} from "react-native";
import size, {isMobile} from "../../../assets/values/dimens";
import font from "../../../assets/values/font";
import color from "../../../assets/values/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "red"
    },
    logo: {
        width: isMobile ? size.size_120 : size.size_150,
        height: size.size_150,
        marginTop: size.size_60,
        alignSelf: "center",
    },
    logo_text: {
        width: size.size_150,
        alignSelf: "center"
    },
    form: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    label: {
        fontSize: size.text_size_medium,
        fontWeight: "200"
    },
    text_input: {
        borderBottomWidth: size.size_1,
        borderBottomColor: color.gray_400,
        paddingHorizontal: size.size_8,
        fontSize: size.text_size_small,
        color: color.colorPrimary,
        borderColor: color.gray_100,
        backgroundColor: "transparent",
        fontFamily: font.ralewayBold
    },
    validate_text: {
        fontSize: size.text_size_v_small,
        textAlign: "left"
    },
    submit_button: {
        width: size.screen_width * 0.9,
        borderRadius: size.size_25,
        marginVertical: size.size_8
    }
});

export default styles;