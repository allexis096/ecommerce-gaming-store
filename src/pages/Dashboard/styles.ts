import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { GameProduct } from '.';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Order = styled.View`
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 10px;
`;

export const PriceButton = styled.Button``;

export const ScoreButton = styled.Button``;

export const AlphabeticButton = styled.Button``;

export const Products = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const FlatListProduct = styled(
  FlatList as new () => FlatList<GameProduct>,
)`
  flex: 1;
  padding: 0 5px;
`;

export const Card = styled.View`
  background-color: #464648;
  max-width: 48%;
  align-items: center;
  border-radius: 5px;
  flex: 1;
  margin: 5px;
`;

export const CardImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 5px;
`;

export const CardName = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
  margin: 10px 0;
`;

export const CardScore = styled.Text`
  font-family: 'Roboto-Bold';
  color: #fff;
  background-color: #0e0e10;
  padding: 5px;
  border-radius: 5px;
`;

export const CardDivide = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const CardPrice = styled.Text`
  font-family: 'Roboto-Bold';
  color: #fff;
  font-size: 20px;
  margin-right: 20px;
`;
