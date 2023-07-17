import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {fontSizes, colors} from '../constants';

import {CATEGORIES, MEALS} from '../constants/dataFake';

import {TitleItem, ItemContainer} from '../components';

import {
  addHistorySearch,
  removeAllHistory,
  removeHistorySearch,
  addHistoryItemSearch,
  removeAllItemHistory,
  addItemFavorite,
  removeItemFavorite
} from '../redux/actions/historySearch';
import {randomMeal} from '../redux/actions/randomMealAction';
import {AnyAction} from 'redux';
import {AppDispatch} from '../redux/store';
// import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';?

const FavoriteScreen = () => {

  const meals = useSelector((state: any) => state.mealsInfo);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      {/* <TouchableWithoutFeedback onPress={() => inputRef.current?.blur()}> */}
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          backgroundColor: colors.grey,
        }}>
        <View
          style={{
            flex: 1.5,
            flexDirection: 'column',
            backgroundColor: colors.grey,
            // paddingHorizontal: 12,
            marginBottom: 10,
          }}>
          <Text style={[style.headerText, {backgroundColor: colors.white, paddingHorizontal: 12, paddingBottom: 16}]}>Yêu thích</Text>
          <View style={{backgroundColor:colors.white, paddingHorizontal:2, paddingVertical:10}}>
          <TitleItem title='Danh sách món ăn yêu thích' icon={'thumbs-up'} onPress={()=>{}} isHaveIcon={false} title2=''/>
          </View>
              <FlatList
              style={{marginTop: 20}}
              key={'#'}
                data={meals.itemFavorite}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => (
                  <ItemContainer
                    item={item}
                    isFavorite={true}
                    onPress={() => {}}
                    onPress2={() => {dispatch(removeItemFavorite(item))}}
                  />
                )}
              />
            {/* )} */}
        </View>
        </View>

    </SafeAreaView>
  );
};
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



  export default FavoriteScreen;