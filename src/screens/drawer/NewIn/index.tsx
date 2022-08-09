/* eslint-disable */
import React from 'react';
import ImagesCarousel from '@Components/ImagesCarousel';
import CarouselData from '@Src/data/Carousel';
import {View, Text, ScrollView, Image} from 'react-native';

const NewInScreen = () => {
  return (
    <ScrollView style={{flex: 1, marginTop: 16}}>
      <ImagesCarousel images={CarouselData} />
    </ScrollView>
  );
};

export default NewInScreen;
