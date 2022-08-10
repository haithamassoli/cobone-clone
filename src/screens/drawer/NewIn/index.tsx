/* eslint-disable */
import React from 'react';
import ImagesCarousel from '@Components/ImagesCarousel';
import CarouselData from '@Src/data/Carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import ProductsData from '@Src/data/Products';
import {HomeDrawerParamList} from '@Types/Navigation';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';
import {screenWidth} from '@Utils/Helper';
import DiscountLable from '@Components/ui/DiscountLable';
import Colors from '@GlobalStyle/Colors';

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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginStart: 12,
                marginVertical: 12,
                textAlign: 'left',
              }}>
              {item}
            </Text>
            <Text
              style={{
                fontSize: 12,
                backgroundColor: '#f6f6f6',
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 6,
                marginEnd: 12,
                color: Colors.dark,
              }}>
              شاهد الكل
            </Text>
          </View>
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
                  <Pressable
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.push('Product', {
                          productId: product.id,
                        }),
                      )
                    }
                    key={index}
                    style={{
                      width: screenWidth - 24,
                      height: 320,
                      marginStart: 12,
                      marginVertical: 12,
                      backgroundColor: '#fff',
                      borderRadius: 8,
                      elevation: 2,
                      // justifyContent: 'flex-start',
                      // alignItems: 'flex-start',
                    }}>
                    <Image
                      source={{uri: product.thumbnail}}
                      style={{
                        width: screenWidth - 24,
                        height: 200,
                        resizeMode: 'cover',
                      }}
                    />
                    <View
                      style={{
                        padding: 8,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                      }}>
                      <Text>{product.title}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          {product.rating &&
                            Array(Math.round(product.rating))
                              .fill(1)
                              .map((_, index) => (
                                <Ionicons
                                  key={index}
                                  name="star"
                                  size={12}
                                  color="#ff7500"
                                />
                              ))}
                        </View>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#8597a1',
                            // alignSelf: 'flex-start',
                            // textAlign: 'right',
                            // flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                          }}>
                          10 قيد المراجعة
                        </Text>
                        {/* <Text>{product.price}</Text> */}
                      </View>
                    </View>
                    <Text
                      style={{
                        marginStart: 12,
                      }}>
                      يسري العرض على جميع فروع الرياض
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginStart: 12,
                        paddingTop: 12,
                      }}>
                      <DiscountLable
                        price={product.price}
                        percentage={product.discountPercentage}
                        withPrice
                      />
                    </View>
                  </Pressable>
                );
              } else if (product.category === item) {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.push('Product', {
                          productId: product.id,
                        }),
                      )
                    }
                    key={index}
                    style={{
                      width: screenWidth - 24,
                      height: 100,
                      marginStart: 12,
                      marginVertical: 12,
                      backgroundColor: '#fff',
                      borderRadius: 8,
                      elevation: 2,
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
                      // alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: product.thumbnail}}
                      style={{
                        width: screenWidth / 2.23,
                        height: 100,
                        resizeMode: 'cover',
                      }}
                    />
                    <View
                      style={{
                        padding: 8,
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                      }}>
                      <Text>{product.title}</Text>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          // alignItems: 'center',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          {product.rating &&
                            Array(Math.round(product.rating))
                              .fill(1)
                              .map((_, index) => (
                                <Ionicons
                                  key={index}
                                  name="star"
                                  size={12}
                                  color="#ff7500"
                                />
                              ))}
                        </View>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#8597a1',
                            // alignSelf: 'flex-start',
                            // textAlign: 'right',
                            // flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                          }}>
                          10 قيد المراجعة
                        </Text>
                        {/* <Text>{product.price}</Text> */}
                      </View>
                      <DiscountLable
                        price={product.price}
                        percentage={product.discountPercentage}
                        withPrice
                      />
                    </View>
                  </Pressable>
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
