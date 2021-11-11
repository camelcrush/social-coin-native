import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const TextInput = styled.TextInput``;

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <TextInput
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
