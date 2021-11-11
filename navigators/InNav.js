import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Nav = createNativeStackNavigator();

const InNav = () => (
  <Nav.Navigator>
    <Nav.Screen name="Home" component={Home} />
  </Nav.Navigator>
);

export default InNav;
