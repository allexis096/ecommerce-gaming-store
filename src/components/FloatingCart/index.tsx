import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

const FloatingCart: React.FC = () => {
  return (
    <Container>
      <CartButton>
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>20 itens</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>R$1.200,00</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
