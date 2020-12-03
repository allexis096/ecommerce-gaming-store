import React, { useCallback, useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Alert, View } from 'react-native';

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
  Shipping,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
  ContainerTotal,
  BuyButton,
  BuyText,
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

    return total;
  }, [products]);

  const frete = useMemo(() => {
    const freteTotal = products.reduce((acc, product) => {
      const frete10 = product.quantity * 10;

      if (totalPrice + frete10 <= 250) {
        return acc + frete10;
      }

      return 0;
    }, 0);

    return freteTotal;
  }, [products, totalPrice]);

  const totalItens = useMemo(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);

    return total;
  }, [products]);

  const handleBuy = useCallback(() => {
    Alert.alert(
      'Parabéns pela compra!',
      `Mesmo sem colocar seu cartão de crédito ou dinheiro, você acaba de gastar ${totalPrice} em ${totalItens} jogos!`,
    );
  }, [totalItens, totalPrice]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            <View>
              <Shipping>
                Frete Grátis para compras acima de R$250,00 e para cada compra,
                se acrescenta R$10,00.
              </Shipping>
              <Shipping style={{ textAlign: 'right', marginRight: 10 }}>
                Frete atual:
                {formatValue(frete)}
              </Shipping>
            </View>
          }
          ListFooterComponentStyle={{
            height: 150,
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
        <ContainerTotal>
          <FeatherIcon name="shopping-cart" color="#fff" size={24} />
          <TotalProductsText>{`${totalItens} itens`}</TotalProductsText>
        </ContainerTotal>
        <BuyButton onPress={() => handleBuy()}>
          <BuyText>Comprar</BuyText>
        </BuyButton>
        <SubtotalValue>{formatValue(totalPrice + frete)}</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
