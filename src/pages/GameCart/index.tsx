import React, { useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

import formatValue from '../../utils/formatValue';
import { useStore } from '../../hooks/store';

interface Product {
  id: string;
  name: string;
  price: number;
  score: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { addGame, decGame, products } = useStore();

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
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }: { item: Product }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitleContainer>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>

                  <TotalContainer>
                    <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => addGame(item.id)}>
                  <FeatherIcon name="plus" color="#08af0a" size={16} />
                </ActionButton>
                <ActionButton onPress={() => decGame(item.id)}>
                  <FeatherIcon name="minus" color="#08af0a" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{`${totalItens} itens`}</TotalProductsText>
        <SubtotalValue>{totalPrice}</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
