/* eslint-disable */
import React from 'react';
import ImagesCarousel from '@Components/ImagesCarousel';
import CarouselData from '@Src/data/Carousel';
import {View, ScrollView} from 'react-native';
import ProductsData from '@Src/data/Products';
import {HomeDrawerParamList} from '@Types/Navigation';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';
import CategotyLabel from '@Components/CategotyLabel';
import Card from '@Components/card';

type Props = DrawerScreenProps<HomeDrawerParamList, 'NewIn'>;

const NewInScreen = ({navigation}: Props) => {
  const categories = ProductsData.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <ScrollView style={{flex: 1, marginTop: 12}}>
      <View style={{marginTop: 50}}>
        <ImagesCarousel images={CarouselData} />
      </View>
      {uniqueCategories.map((item, index) => (
        <View key={index}>
          <CategotyLabel category={item} />
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            {ProductsData.map((product, index) => {
              if (
                product.category === item &&
                (item === 'laptops' || item === 'fragrances')
              ) {
                return (
                  <Card
                    isVertical
                    key={index}
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.push('Product', {
                          productId: product.id,
                        }),
                      )
                    }
                    discountPercentage={product.discountPercentage}
                    price={product.price}
                    rating={product.rating}
                    title={product.title}
                    thumbnail={product.thumbnail}
                  />
                );
              } else if (product.category === item) {
                return (
                  <Card
                    key={index}
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.push('Product', {
                          productId: product.id,
                        }),
                      )
                    }
                    discountPercentage={product.discountPercentage}
                    price={product.price}
                    rating={product.rating}
                    title={product.title}
                    thumbnail={product.thumbnail}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

export default NewInScreen;
