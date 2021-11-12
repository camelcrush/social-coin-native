import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { coins } from "../api";
import { BLACK_COLOR } from "../colors";
import Coin from "../components/Coin";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${BLACK_COLOR};
`;

const Home = () => {
  const { isLoading, data } = useQuery("coins", coins);
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter((coin) => coin.rank !== 0 && coin.is_active && !coin.is_new)
      );
    }
  }, [data]);
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" size="large" />
      </Loader>
    );
  }
  return (
    <Container>
      <FlatList
        data={cleanData}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Coin symbol={item.symbol} />}
      />
    </Container>
  );
};

export default Home;
