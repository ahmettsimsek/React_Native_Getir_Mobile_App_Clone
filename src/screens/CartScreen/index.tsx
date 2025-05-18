import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import productsGetir from '../../../assets/productsGetir';
import CartItem from '../../components/CartItem';
import ProductItem from '../../components/ProductItem';
import { connect } from 'react-redux';
import { Product } from '../../models';

const { width, height } = Dimensions.get('window');

type CartItemType = {
  route: any;
  product: Product;
  quantitiy: number;
};

function CartScreenComponent({ cartItems }: { cartItems: CartItemType[] }) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyat;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CartItem product={item.product} quantity={item.quantitiy} />
        )}
        ListHeaderComponent={
          <>
            <Text
              style={{
                padding: 15,
                fontWeight: 'bold',
                color: '#5d3ebd',
              }}
            >
              Önerilen Ürünler
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              bounces={true}
              style={{
                backgroundColor: 'white',
              }}
            >
              {productsGetir.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))}
            </ScrollView>
          </>
        }
        contentContainerStyle={{ paddingBottom: height * 0.12 }}
      />

      <View
        style={{
          height: height * 0.12,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#f8f8f8',
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: '#5d3ebd',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            Devam
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: '#5d3ebd',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            <Text>{'\u20BA'}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartScreenComponent);
