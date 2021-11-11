import React, { useRef, useState } from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const TextInput = styled.TextInput``;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitEditing = () => {
    passwordInput.current.focus();
  };
  return (
    <Container>
      <TextInput
        onSubmitEditing={onSubmitEditing}
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
      />
    </Container>
  );
};

export default Join;
