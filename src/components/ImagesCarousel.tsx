/* eslint-disable */
import {View, ScrollView, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {CarouselDataType} from '@Types/Data';
import {screenWidth} from '@Utils/Helper';
import {useEffect} from 'react';
import Colors from '@GlobalStyle/Colors';

type Props = {
  images: CarouselDataType[];
  height?: number;
};

const ImagesCarousel = ({images, height = 160}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      ),
        scrollRef.current?.scrollTo({
          animated: true,
          x: screenWidth * selectedIndex,
          y: 0,
        });
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const setImageIndex = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(selectedIndex);
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setImageIndex}
        pagingEnabled>
        {images.map((image, index) => (
          <View key={index} style={{flex: 1}}>
            <Image
              key={index}
              source={{
                uri: image,
              }}
              style={{
                width: screenWidth,
                height,
                resizeMode: 'cover',
              }}
            />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
          position: 'absolute',
          zIndex: 100,
          bottom: 10,
          left: screenWidth / 2 - 20,
        }}>
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              height: 8,
              width: 8,
              borderRadius: 5,
              borderColor:
                index === selectedIndex ? Colors.primary600 : Colors.gray,
              borderWidth: 4,
              backgroundColor:
                index === selectedIndex ? Colors.primary600 : Colors.gray,
              margin: 4,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImagesCarousel;
