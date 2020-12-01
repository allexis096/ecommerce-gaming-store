import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  Products,
  Card,
  CardImage,
  CardName,
  CardDivide,
  CardPrice,
  CardScore,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Products>
        <Card>
          <CardImage source={require('../../assets/super-mario-odyssey.png')} />
          <CardName>Super Mario Odyssey</CardName>
          <CardScore>Nota: 100</CardScore>
          <CardDivide>
            <CardPrice>R$197,88</CardPrice>
            <TouchableOpacity>
              <FeatherIcon
                name="plus"
                color="#fff"
                size={30}
                style={{ backgroundColor: '#08AF0A', borderRadius: 5 }}
              />
            </TouchableOpacity>
          </CardDivide>
        </Card>
      </Products>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
