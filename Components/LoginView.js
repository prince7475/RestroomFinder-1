import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import { createBottomTabNavigator } from "react-navigation";
//custom components imports
import CustomHeader from "./CustomHeader";
import ListResults from "./ListResults";
import MapView from "react-native-maps";

class LoginView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <Icon
        name="ios-menu"
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source="https://png.icons8.com/metro/1600/settings.png"
        style={styles.icon}
      />
    )
  });

  render() {
    return (
      <Container>
        <CustomHeader
          title="Login"
          drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
        >
          <Button full onPress={() => this.props.navigation.navigate("Home")}>
            <Text style={{ color: "white" }}>Go to Home screen</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginView;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
    position: "absolute"
  },
  radius: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: `hidden`,
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF"
  }
});
