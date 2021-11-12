import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;

const CoinName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Coin = ({ symbol }) => {
  return (
    <Wrapper style={{ flex: 0.31 }}>
      <Icon
        source={{
          uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
        }}
      ></Icon>
      <CoinName>{symbol}</CoinName>
    </Wrapper>
  );
};

export default Coin;
