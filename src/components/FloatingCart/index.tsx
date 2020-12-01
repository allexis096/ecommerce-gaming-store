import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useStore } from '../../hooks/store';
import formatValue from '../../utils/formatValue';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

const FloatingCart: React.FC = () => {
  const { products } = useStore();

  const navigation = useNavigation();

  const totalPrice = useMemo(() => {
    const total = products.reduce((acc, product) => {
      const productsSub = product.price * product.quantity;

      return acc + productsSub;
    }, 0);

    return formatValue(total);
  }, [products]);

  const totalItens = useMemo(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);

    return total;
  }, [products]);

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('GameCart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>{`${totalItens} itens`}</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>{totalPrice}</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
