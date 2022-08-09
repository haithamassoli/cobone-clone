/* eslint-disable */
import React from 'react';
import ImagesCarousel from '@Components/ImagesCarousel';
import CarouselData from '@Src/data/Carousel';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import ProductsData from '@Src/data/Products';
import {HomeDrawerParamList} from '@Types/Navigation';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';

type Props = DrawerScreenProps<HomeDrawerParamList, 'NewIn'>;

const NewInScreen = ({navigation}: Props) => {
  //  get category in array
  const categories = ProductsData.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <ScrollView style={{flex: 1, marginTop: 12}}>
      <View style={{marginTop: 50}}>
        <ImagesCarousel images={CarouselData} />
      </View>
      {uniqueCategories.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
          <View style={{flexDirection: 'row'}}>
            {ProductsData.map((product, index) => {
              if (product.category === item) {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.push('Product', {
                          productId: product.id,
                        }),
                      )
                    }
                    key={index}>
                    <Image
                      source={{uri: product.thumbnail}}
                      style={{width: 100, height: 100}}
                    />
                    <Text>{product.title}</Text>
                    <Text>{product.price}</Text>
                  </Pressable>
                );
              }
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default NewInScreen;
