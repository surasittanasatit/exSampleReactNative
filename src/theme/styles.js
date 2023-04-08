import { StyleSheet } from 'react-native'

import { COLOR, FAMILY, SIZE } from './typography'

export default {

  /* Layout */
  layout: {
    flexGrow: 1,
    backgroundColor: COLOR.light
  },
  layoutFx: {
    flexGrow: 1
  },
  layoutFxCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'red'
  },
  layoutFxBot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'cetner',
    justifyContent: 'space-between',
    backgroundColor: COLOR.light,
    padding: 15
  },
  navIcon: {
    fontSize: SIZE.SIZE18,
    color: COLOR.default
  },
  navText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.SIZE14,
    color: COLOR.dark

  },
  /* Header */
  nav: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15
  },
  navLeft: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  /* Avatar Sizes */
  avatarTiny: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  avatarSmall: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  },
  avatarMedium: {
    width: 128,
    height: 128,
    borderRadius: 125 / 2
  },
  imgResponsive: {
    width: '100%',
    minHeight: 1
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Label, TextInput, Picker, Placeholder */
  label: {

  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textInputMulti: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  picker: {

  },
  placeholder: {

  },
  /* Button */
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.primary
  },
  btnDefault: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.default
  },
  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnBack: {
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 3
  },

  headerLight: {
    backgroundColor: COLOR.primary,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerDark: {
    backgroundColor: COLOR.default,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTransparent: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
  },

  /* Colors */
  dark: {
    color: COLOR.dark
  },
  light: {
    color: COLOR.light
  },
  bgDark: {
    backgroundColor: COLOR.dark
  },
  bgLight: {
    backgroundColor: COLOR.light
  },
  grey3: {
    color: COLOR.grey3
  },
  default:{
    color: COLOR.default
  },
  grey:{
    color: COLOR.grey
  },
  /* Sizes */
  SIZE10: {
    fontSize: SIZE.SIZE10
  },
  SIZE11:{
    fontSize: SIZE.SIZE11
  },
  SIZE12: {
    fontSize: SIZE.SIZE12
  },
  SIZE13:{
    fontSize: SIZE.SIZE13
  },
  SIZE14: {
    fontSize: SIZE.SIZE14
  },
  SIZE16: {
    fontSize: SIZE.SIZE16
  },
  SIZE18: {
    fontSize: SIZE.SIZE18
  },
  SIZE20: {
    fontSize: SIZE.SIZE20
  },
  SIZE22: {
    fontSize: SIZE.SIZE22 
  },
  SIZE24: {
    fontSize: SIZE.SIZE24
  },
  SIZE36: {
    fontSize: SIZE.SIZE36
  },

  regular: {
    fontFamily: FAMILY.regular
  },
  bold: {
    fontFamily: FAMILY.bold
  },

  /* Footer */
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 3
  },
  footerContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    marginVertical: 20
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLOR.light,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20 / 2,
    elevation: 10
  },
  fBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 2
  },
  fBtnIcon: {
    fontSize: SIZE.SIZE24,
    color: COLOR.dark,
    marginBottom: 5
  },
  fBtnIcon2: {
    fontSize: SIZE.SIZE18,
    color: COLOR.dark,
    marginBottom: 5
  },
  fBtnText: {
    fontFamily: FAMILY.semiBold,
    fontSize: SIZE.SIZE12,
    color: COLOR.dark,
    marginHorizontal: 5
  },
  fBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.default,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 2,
    borderRadius: 10
  },
  fBtnIconActive: {
    fontSize: SIZE.SIZE18,
    color: COLOR.light
  },
  fBtnTextActive: {
    fontFamily: FAMILY.semiBold,
    fontSize: SIZE.SIZE12,
    color: COLOR.dark,
    display: 'none'
  },

  /* Empty Screen */
  emptyContainer: {
    flex: 1,
    paddingVertical: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyIcon: {
    fontSize: SIZE.SIZE72,
    color: COLOR.greyLight,
    marginVertical: 15,
    textAlign: 'center'
  },
  emptyTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.SIZE18,
    color: COLOR.greyDark,
    textAlign: 'center'
  },
  emptyText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.SIZE12,
    color: COLOR.grey,
    textAlign: 'center'
  },
}

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black'
  },
  inputAndroid: {
    fontSize: 16,
    paddingLeft: 0,
    color: 'black'
  }
})
