import * as React from "react";
import {Image, View, ScrollView} from "react-native";
import { Text } from "react-native-elements";


class Home extends React.Component {

    render() {
        return (
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

export default Home;