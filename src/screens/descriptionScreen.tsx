import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';


import {ItemIntroduce} from '../components';
import {
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import {ParamList, RootStackParamList} from '../../App';
import {colors, fontSizes} from '../constants';

function DescriptionScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const params = useRoute<RouteProp<ParamList, 'DescriptionScreen'>>();
  const item = params.params.data;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View
          style={{
            height: 50,
            backgroundColor: colors.white,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={30} color={colors.black} />
          </TouchableOpacity>
          <Icon name="ellipsis-v" size={25} color={colors.black} />
        </View>
        <ScrollView>
          <Text style={style.headerText}>{item.title.toUpperCase()}</Text>
            <Image
              source={{uri: item.linkImage}}
              style={{height: 230, width: '100%'}}
              resizeMode="cover"
            />
            <ItemIntroduce 
            key={0}
              icon='child' 
              title='Giới thiệu' 
              subTitle={`Khẩu phần ăn cho ${item.forPeople} người`} 
              content= {item.description}/>
            <ItemIntroduce 
            key={1}
              icon='leaf' 
              title='Nguyên liệu' 
              subTitle='M:muỗng canh - m:muỗng cafe' 
              content= {item.ingredients}/>
            <ItemIntroduce 
            key={2}
              icon='pizza-slice' 
              title='Gia vị' 
              content= {item.spice}/>
            <ItemIntroduce 
            key={3}
              icon='cookie-bite' 
              title='Sơ chế' 
              content= {`- ${item.process}`}/>
            <ItemIntroduce 
            key={4}
              icon='cookie' 
              title='Thực hiện' 
              content= {`- ${item.perform}`}/>
              <ItemIntroduce 
              key={5}
              icon='cookie' 
              title='Cách dùng' 
              content= {`- ${item.use}`}/>
            <ItemIntroduce 
            key={6}
              icon='lightbulb' 
              title='Cách dùng' 
              content= {`- ${item.tips}`}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

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
    marginTop: 5
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

export default DescriptionScreen;
