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
  findItemByCategory
} from '../redux/actions/historySearch';
import {randomMeal} from '../redux/actions/randomMealAction';
import {AnyAction} from 'redux';
import {AppDispatch} from '../redux/store';
import {NavigationProp, useNavigation } from '@react-navigation/native';
import DescriptionScreen from './descriptionScreen';
import { RootStackParamList } from '../../App';


const Search = () => {
  const [isFocusInput, setIsFocusInput] = useState(0);
  const [history, setHistory] = useState('');
  const inputRef = useRef<TextInput>(null);
  
  const meals = useSelector((state: any) => state.mealsInfo);
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    dispatch(randomMeal(meals.meals));
  }, []);

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
            // flex: 1.5,
            height:120,
            flexDirection: 'column',
            backgroundColor: colors.white,
            paddingHorizontal: 12,
            marginBottom: 10,
          }}>
          <Text style={style.headerText}>Tìm kiếm</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <View
              style={[
                style.inputStyle,
                {width: isFocusInput ? '80%' : '100%'},
              ]}>
              <Icon
                name="search"
                size={20}
                color={'grey'}
                style={{paddingRight: 10}}
              />
              <TextInput
                //   style={style.inputStyle}
                //meals.itemSearch
                onFocus={() => setIsFocusInput(1)}
                // onBlur={() => setIsFocusInput(2)}
                onSubmitEditing={() => {
                  setIsFocusInput(1);
                  dispatch(addHistorySearch(history));
                  dispatch(addHistoryItemSearch(history));
                  // setHistory('');
                  // inputRef.current?.clear();
                }}
                ref={inputRef}
                onChangeText={e => {
                  setHistory(e);
                  setIsFocusInput(2);
                  dispatch(addHistoryItemSearch(e));
                }}
                value={history}
                placeholder="Bạn muốn tìm món gì ?"
                style={{fontSize: fontSizes.h5}}
              />
              <View style={{flex: 1}}></View>
              <Icon
                name="filter"
                size={20}
                color={'grey'}
                style={{paddingRight: 10}}
              />
            </View>
            {isFocusInput == 1 || isFocusInput == 2 ? (
              <TouchableOpacity
                onPress={() => {
                  inputRef.current?.blur();
                  dispatch(removeAllItemHistory());
                  setIsFocusInput(0);
                  setHistory('');
                }}>
                <Text
                  style={{
                    width: 60,
                    color: colors.green,
                    fontSize: fontSizes.h3,
                    marginLeft: 20,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {isFocusInput == 0 ? (
          <View style={{flex: 1}}>
            <View
              style={{
                // flex: 0.7,
                paddingVertical: 10,
                backgroundColor: colors.white,
                marginBottom: 10,
              }}>
              <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                horizontal={true}
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={()=>{
                    dispatch(findItemByCategory(item.name));
                    setIsFocusInput(1)

                  } }>
                    <View
                    style={{
                      paddingHorizontal: 12,
                      borderRadius: 16,
                      backgroundColor: `${item.color}`,
                      height: 35,
                      marginLeft: 12,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: colors.white, fontWeight: '500'}}>
                      {item.name}
                    </Text>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.white,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  paddingTop: 10,
                }}>
                <TitleItem
                  title="Lịch sử tìm kiếm"
                  title2="Xoá tất cả"
                  icon="clock"
                  isHaveIcon={false}
                  onPress={() => {
                    dispatch(removeAllHistory());
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'white',
                    // flex: 1,
                    flexDirection: 'column',
                  }}>
                  <FlatList
                    data={meals.historySearch}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({item, index}) => (
                      <View
                        style={{
                          paddingRight: 24,
                          borderRadius: 16,
                          height: 35,
                          marginLeft: 12,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'grey', fontWeight: '500'}}>
                          {item}
                        </Text>
                        <TouchableOpacity
                          onPress={() => dispatch(removeHistorySearch(index))}>
                          <Icon name="times" color={'grey'} />
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                paddingTop: 10,
                backgroundColor: 'white',
              }}>
              <TitleItem
                title="Gợi ý món ăn cho bạn"
                title2="random"
                icon="clock"
                isHaveIcon={true}
                onPress={() => {
                  //   console.log('ssss');
                  //   setRandomMeal(!randomMeal);
                  dispatch(randomMeal(meals.initMeals));
                }}
              />
              <View style={{backgroundColor: 'white', flex: 1}}>
                <FlatList
                  data={meals.meals}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  renderItem={({item}) => (
                    <ItemContainer
                      item={item}
                      isFavorite={meals.itemFavorite.includes(item)}
                      onPress={() => {
                        console.log('kkkkk');
                        navigation.navigate('DescriptionScreen', {data:item});
                      }}
                      onPress2={() => {
                        dispatch(addItemFavorite(item));
                      }}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        ) : isFocusInput == 1 ? (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            {(meals.itemSearch.length != 0) ? 
              meals.itemSearch.length==2?
              (<FlatList
                data={meals.itemSearch}
                // horizontal= {false}
                numColumns={1}
                key={'_'}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => (
                  <ItemContainer
                    item={item}
                    isFavorite={meals.itemFavorite.includes(item)}
                    onPress={() => {}}
                    onPress2={() => {}}
                  />
                )}
              />):
              (<FlatList
                data={meals.itemSearch}
                // horizontal= {false}
                numColumns={2}
                key={'#'}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => (
                  <ItemContainer
                    item={item}
                    isFavorite={meals.itemFavorite.includes(item)}
                    onPress={() => {}}
                    onPress2={() => {}}
                  />
                )}
              />)
            : 
               <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                 <Text>
                   Chưa có kết quả tìm kiếm.
               </Text>
               <TouchableOpacity onPress={()=>{navigation.navigate('AddMealScreen');
               }}>
                <Text style={{color: colors.green,  marginLeft: 16}}>
                 Đến thêm mới →
                </Text>
               </TouchableOpacity>
               </View> }
          </View>
        ) : (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
              data={meals.itemSearch}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 12,
                    borderRadius: 16,
                    height: 35,
                    marginLeft: 12,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon name="sign-out-alt" color={colors.black} size={20} />
                  <Text
                    style={{
                      color: colors.black,
                      marginLeft: 20,
                      fontSize: fontSizes.h5,
                    }}>
                    {item['title']}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
      {/* </TouchableWithoutFeedback> */}
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

export default Search;
