import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnTxt = styled.Text``;

const Login = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Text>Don't have an account? </Text>
      <Btn onPress={() => navigate("Join")}>
        <BtnTxt>Join</BtnTxt>
      </Btn>
    </Container>
  );
};

export default Login;
