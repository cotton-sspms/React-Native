import React from 'react'; 
import { View, Text, StyleSheet} from 'react-native';

const Carousel = () => {
    return(
        <SafeAreaView>

            <Image source = {{ uri: 'https://www.thelivingos.com'}}
                style = {styles.image}/>
            <Image source = {{ uri: 'https://g.page/livingos?share'}}
                style = {styles.image}/>

      </SafeAreaView>

    )
  };
  const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
  });

export default Carousel;
