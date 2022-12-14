import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import  Card from './componentsSwipe/Card'
import  IconButton from './componentsSwipe/IconButton'
import  OverlayLabel from './componentsSwipe/OverlayLabel'
import  photoCards from './componentsSwipe/photoCards'
import styles from './componentsSwipe/Swipe.styles'

const Swipe = () => {
  const useSwiper = useRef(null)

  const handleOnSwipedLeft = () => useSwiper.swipeLeft()
  const handleOnSwipedTop = () => useSwiper.swipeTop()
  const handleOnSwipedRight = () => useSwiper.swipeRight()

  console.log(useSwiper)
  return (
    <View
      style={styles.container}
    >
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor="white"
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
          stackSize={2}
          infinite 
          showSecondCard
          animateOverlayLabelsOpacity
          overlayLabels={{
            left: {
              title: 'NOPE',
              element: <OverlayLabel label="NOPE" color="#E5566D" />,
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: 'LIKE',
              element: <OverlayLabel label="LIKE" color="#4CCC93" />,
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                  alignItems: 'flex-start',
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
      <View >
      </View>
    </View>
  )
}

export default Swipe