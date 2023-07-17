import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput
} from 'react-native';
import {colors, fontSizes} from '../constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import Icon from 'react-native-vector-icons/FontAwesome5';


function AddMealScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View>
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
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  color: colors.green,
                  fontSize: fontSizes.h3,
                  fontWeight: '600',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={style.headerText}>Thêm món mới</Text>
        </View>
        <ScrollView style={{marginHorizontal: 12}}>
          <TitleName iconName='child' title='Tên món ăn' isRequired={true} />
          <TextInput
              style={style.inputStyle}
              placeholder='Tên món ăn ?'
          />
          <TitleName iconName='clock' title='Giới thiệu' />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey',height: 100, alignItems: 'flex-start'}]}
              placeholder='Nhập giới thiệu cho món ăn ...'
              maxLength={3}
          />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey'}]}
              placeholder='Khẩu phần ăn cho bao nhiêu người ?'
          />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey'}]}
              placeholder='Link hình ảnh mô tả cho món ăn ?'
          />
          <TitleName iconName='leaf' title='Nguyên liệu' isRequired={true} />
          <TextInput
              style={[style.inputStyle, {height: 100}]}
              placeholder='Nhập nguyên liệu ... dùng dấu chấm sau mỗi loại'
          />
          <TitleName iconName='pizza-slice' title='Gia vị'  />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey',height: 100}]}
              placeholder='Nhập gia vị ... dùng dấu chấm sau mỗi loại'   
          />
          <TitleName iconName='cookie-bite' title='Sơ chế' />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey',height: 100}]}
              placeholder='Nhập bước sơ chế ... dùng dấu chấm sau mỗi loại'   
          />
          <TitleName iconName='cookie' title='Cách dùng'  />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey'}]}
              placeholder='Cách dùng?'   
          />
          <TitleName iconName='lightbulb' title='Mách nhỏ' />
          <TextInput
              style={[style.inputStyle, {borderColor:'grey'}]}
              placeholder='Tips'   
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


type typeTitle = {title:String, iconName: string, isRequired?: Boolean};

const TitleName = ({title, iconName, isRequired}:typeTitle)=>{
  return (
    <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Icon name={iconName} size={24} style={{marginRight: 10}}  />
            <Text style={style.textTitle}>{title}</Text>
            <View style={{flex: 1}} />
            {
              isRequired ?
              <Text
              style={[
                style.textTitle,
                {color: colors.green, marginRight: 10, fontSize: 16},
              ]}>
              *required
            </Text>:
            null
            }
          </View>
  )
}


const style = StyleSheet.create({
  headerText: {
    fontSize: fontSizes.h1,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
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
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 20,

    
    // fontSize:fontSizes.h3,
    flexDirection: 'row',
  },
});

export default AddMealScreen;
