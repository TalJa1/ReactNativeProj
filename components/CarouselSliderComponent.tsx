import { View, Text, Dimensions, FlatList, Image } from "react-native";
import React from "react";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface SlideList {
  data: Slide;
}

const slideList = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title! ${i + 1}`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const CarouselSliderComponent = () => {
  const Slide: React.FC<SlideList> = ({ data }) => {
    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: data.image }}
          style={{ width: windowWidth * 0.9, height: windowHeight * 0.6 }}
        ></Image>
        <Text style={{ fontSize: 24 }}>{data.title}</Text>
        <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
      </View>
    );
  };

  function Carousel() {
    const [index, setIndex] = React.useState(0);
    const indexRef = React.useRef(index);
    indexRef.current = index;
    const onScroll = React.useCallback((event: any) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);

      // Prevent one pixel triggering setIndex in the middle
      // of the transition. With this we have to scroll a bit
      // more to trigger the index change.
      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    }, []);

    const flatListOptimizationProps = {
      initialNumToRender: 0,
      maxToRenderPerBatch: 1,
      removeClippedSubviews: true,
      scrollEventThrottle: 16,
      windowSize: 2,
      keyExtractor: React.useCallback((e: any) => e.id, []),
      getItemLayout: React.useCallback(
        (_: any, index: number) => ({
          index,
          length: windowWidth,
          offset: index * windowWidth,
        }),
        []
      ),
    };

    return (
      <FlatList
        data={slideList}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
    );
  }

  return (
    <View>
      <Carousel />
    </View>
  );
};

export default CarouselSliderComponent;
