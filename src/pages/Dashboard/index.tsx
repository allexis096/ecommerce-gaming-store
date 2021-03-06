import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCart from '../../components/FloatingCart';
import { useStore } from '../../hooks/store';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  OrderText,
  Order,
  PriceButton,
  ScoreButton,
  AlphabeticButton,
  Container,
  Products,
  Card,
  CardImage,
  CardName,
  CardDivide,
  CardPrice,
  CardScore,
  FlatListProduct,
} from './styles';

export interface GameProduct {
  id: string;
  name: string;
  price: number;
  score: number;
  image: string;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useStore();

  const [products, setProducts] = useState<GameProduct[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/itens');
      setProducts(data);
    })();
  }, []);

  const handlePrice = useCallback(async () => {
    const { data } = await api.get('/itens?_sort=price&_order=asc');
    setProducts(data);
  }, []);

  const handleScore = useCallback(async () => {
    const { data } = await api.get('/itens?_sort=score&_order=desc');
    setProducts(data);
  }, []);

  const handleAlphabetic = useCallback(async () => {
    const { data } = await api.get('/itens?_sort=name&_order=asc');
    setProducts(data);
  }, []);

  return (
    <Container>
      <OrderText>Ordenar por:</OrderText>
      <Order>
        <PriceButton
          color="rgba(162, 242, 184, 0.5)"
          title="Preço"
          onPress={() => handlePrice()}
        />
        <ScoreButton
          color="rgba(162, 242, 184, 0.5)"
          title="Popularidade"
          onPress={() => handleScore()}
        />
        <AlphabeticButton
          color="rgba(162, 242, 184, 0.5)"
          title="Alfabética"
          onPress={() => handleAlphabetic()}
        />
      </Order>
      <Products>
        <FlatListProduct
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          numColumns={2}
          renderItem={({ item }) => (
            <Card>
              <CardImage
                source={{ uri: item.image }}
                style={{ height: 140, width: 100 }}
              />
              <CardName>{item.name}</CardName>
              <CardScore>{`Nota: ${item.score}`}</CardScore>
              <CardDivide>
                <CardPrice>{formatValue(item.price)}</CardPrice>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <FeatherIcon
                    name="plus"
                    color="#fff"
                    size={30}
                    style={{ backgroundColor: '#08AF0A', borderRadius: 5 }}
                  />
                </TouchableOpacity>
              </CardDivide>
            </Card>
          )}
        />
      </Products>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
