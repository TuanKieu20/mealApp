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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {fontSizes, colors} from '../constants';

type ItemProps = {title: string, icon: string, title2:string, isHaveIcon:Boolean, onPress:Function};


const TitleItem = ({title, icon, title2, isHaveIcon, onPress}: ItemProps) => (
  <View style={{flexDirection: 'row', marginLeft:12}}>
    <Icon name={icon} size={24} style={{marginRight: 20}} />
    <Text style={style.textTitle}>{title}</Text>
    <View style={{flex: 1}} />
    {isHaveIcon?
    <TouchableOpacity onPress={()=>{onPress()}}><Icon name={title2} size={22} style={{marginRight:10, color:colors.green}} /></TouchableOpacity>:
    <TouchableOpacity onPress={()=>{onPress()}}><Text style={style.text}>{title2}</Text></TouchableOpacity>}
  </View>
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

export default TitleItem;
