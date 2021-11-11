import React, { useRef, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../colors";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  align-items: center;
  color: white;
  padding: 60px 20px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  border-width: 1px;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmitEditingEmail = () => {
    passwordInput.current.focus();
  };
  const onSubmitEditingPassword = async () => {
    if (email === "" || password === "") {
      return Alert.alert("Fill in the form.");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password": {
          Alert.alert("Write a stronger password!");
        }
      }
    }
  };
  return (
    <Container>
      <TextInput
        onSubmitEditing={onSubmitEditingEmail}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        placeholder="Email"
        value={email}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <TextInput
        ref={passwordInput}
        onChangeText={(text) => setPassword(text)}
        returnKeyType="done"
        placeholder="Password"
        secureTextEntry
        value={password}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
        onSubmitEditing={onSubmitEditingPassword}
      />
      <Btn onPress={onSubmitEditingPassword}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <BtnText>Create Account</BtnText>
        )}
      </Btn>
    </Container>
  );
};

export default Join;
