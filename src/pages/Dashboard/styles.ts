import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Products = styled.View`
  margin: 0 5px;
`;

export const Card = styled.View`
  background-color: #464648;
  max-width: 45%;
  align-items: center;
  border-radius: 5px;
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
