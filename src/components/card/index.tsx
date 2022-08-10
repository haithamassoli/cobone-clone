/* eslint-disable */

import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DiscountLable from '@Components/ui/DiscountLable';
import {screenWidth} from '@Utils/Helper';

type Props = {
  onPress: () => void;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  isVertical?: boolean;
};

const Card = ({
  onPress,
  thumbnail,
  title,
  rating,
  price,
  discountPercentage,
  isVertical,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: screenWidth - 24,
        height: isVertical ? 320 : 100,
        marginStart: 12,
        marginVertical: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        flexDirection: isVertical ? 'column' : 'row',
      }}>
      <Image
        source={{uri: thumbnail}}
        style={{
          width: isVertical ? screenWidth - 24 : screenWidth / 2.23,
          height: isVertical ? 200 : 100,
          resizeMode: 'cover',
        }}
      />
      {isVertical ? (
        <>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text>{title}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                {rating &&
                  Array(Math.round(rating))
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
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                10 قيد المراجعة
              </Text>
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
              price={price}
              percentage={discountPercentage}
              withPrice
            />
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              padding: 8,
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text>{title}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                {rating &&
                  Array(Math.round(rating))
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
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                10 قيد المراجعة
              </Text>
            </View>
            <DiscountLable
              price={price}
              percentage={discountPercentage}
              withPrice
            />
          </View>
        </>
      )}
    </Pressable>
  );
};

export default Card;
