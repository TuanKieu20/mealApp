import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {fontSizes, colors} from '../constants';

type ItemProps = {item:any, onPress:Function, onPress2: Function, isFavorite:Boolean};

const ItemContainer = ({item, onPress, onPress2, isFavorite}:ItemProps) => (
  <TouchableOpacity onPress={()=>{onPress()}}>
  <View
    style={{
      backgroundColor: 'white',
      marginLeft: 12,
      width: 190,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
      marginTop: 10
    }}>
    <View style={{flex: 2}}>
      <Image
        source={{uri: item.linkImage}}
        style={{flex: 1, borderRadius: 10}}
      />
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          flexDirection: 'column',
        }}>
        <Text style={[style.textTitle, {marginBottom:5}]}>{item.title}</Text>
        <Text style={{fontSize: fontSizes.h6, color: 'grey'}}>
          Nguyên liệu: {item.ingredients.length}
        </Text>
      </View>
      <Icon name="ellipsis-v" size={20} color={'grey'} />
    </View>
    <View
      style={{
        width: 35,
        height: 35,
        backgroundColor: colors.green,
        borderRadius: 9999,
        position: 'absolute',
        top: 10,
        right: 5,
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <TouchableOpacity onPress={()=>{onPress2()}}>
      {isFavorite?<Icon name="heart" color={'red'} size={20}  />:<Icon name="heart"  size={20}  />}
    </TouchableOpacity>
    </View>
  </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
    headerText: {
      fontSize: fontSizes.h1,
      color: colors.black,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    textTitle: {
      fontSize: fontSizes.h3,
      color: colors.black,
      fontWeight: '500',
    },
    text: {
      fontSize: fontSizes.h5,
      color: colors.green,
      marginRight: 12,
    },
    inputStyle: {
      borderRadius: 40,
      paddingVertical: 18,
      paddingHorizontal: 16,
      backgroundColor: colors.grey,
      // fontSize:fontSizes.h3,
      flexDirection: 'row',
    },
  });
  
export default ItemContainer;