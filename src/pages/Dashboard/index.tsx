import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCart from '../../components/FloatingCart';
import { useStore } from '../../hooks/store';
import api from '../../services/api';

import {
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

  return (
    <Container>
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
                <CardPrice>{item.price}</CardPrice>
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
