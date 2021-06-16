import React, {setState} from 'react'; 
import {SafeAreaView, StyleSheet, Image,View} from 'react-native';

const pushPage = (props) =>{
    props.pushPage = ({LoginPage});
};

const HomePage = (props) => {
    return(
        <View>
            <Image style = {props.Carousel}/>

            <Button
                style = {styles.container}
                title ="Logout"
                onPress = {props.pushPage}/>
        </View>
    )
  };
  const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
  });

export default HomePage;