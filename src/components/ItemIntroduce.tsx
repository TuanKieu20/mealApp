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
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {fontSizes, colors} from '../constants';

type ItemProps = {
  icon: string;
  title: string;
  subTitle?: string;
  content: string | Array<any>;
};

const ItemIntroduce = ({icon, title, subTitle, content}: ItemProps) => (
  <View>
    <View style={{backgroundColor:colors.grey, height: 5, marginTop: 5}}/>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Icon name={icon} size={24} style={{marginHorizontal: 10}} />
      <Text style={style.textTitle}>{title}</Text>
      <View style={{flex: 1}} />
      <Text
        style={[
          style.textTitle,
          {color: colors.green, marginRight: 10, fontSize: 16},
        ]}>
        {subTitle}
      </Text>
    </View>
    <View
      style={{flex: 1, height: 2, marginTop: 5, backgroundColor: colors.grey}}
    />
    {Array.isArray(content) ? (
      content.map(item => (
        (typeof item === 'string')?
        <Text style={style.text}>{`- ${item}`}</Text>:
        <Text style={style.text}>{`- ${item.name}: ${item.amount}`}</Text>
      ))
    ) : (
      <Text style={style.text}>{content}</Text>
    )}
  </View>
);

const style = StyleSheet.create({
  headerText: {
    fontSize: fontSizes.h1,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: fontSizes.h3,
    color: colors.black,
    fontWeight: '500',
  },
  text: {
    fontSize: fontSizes.h5,
    color: 'grey',
    paddingHorizontal: 10,
    marginTop: 5,
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
   
export default ItemIntroduce;
