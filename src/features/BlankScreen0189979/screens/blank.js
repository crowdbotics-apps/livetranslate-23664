import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_6: "", TextInput_11: "" }
  render = () => (
    <View>
      <View style={styles.View_2}>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <TextInput
            placeholder="john.smith@gmail.com"
            value={this.state.TextInput_6}
            onChangeText={nextValue =>
              this.setState({ TextInput_6: nextValue })
            }
          />
        </View>
      </View>
      <View style={styles.View_7}>
        <View>
          <Text>Password</Text>
        </View>
        <View>
          <TextInput
            placeholder="password"
            value={this.state.TextInput_11}
            onChangeText={nextValue =>
              this.setState({ TextInput_11: nextValue })
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch",
    backgroundSize: "auto"
  },
  View_3: {},
  Text_5: {},
  View_4: {},
  TextInput_6: {},
  View_7: { flexDirection: "row" },
  View_8: {},
  Text_10: {},
  View_9: {},
  TextInput_11: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
