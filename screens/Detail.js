import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Icon } from "../components/Coin";

const Container = styled.View``;

const Detail = ({
  navigation,
  route: {
    params: { symbol },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Icon
          source={{
            uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
          }}
        />
      ),
    });
  }, []);
  return null;
};

export default Detail;
