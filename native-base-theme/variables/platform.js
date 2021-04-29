// @flow

import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';

import { PLATFORM } from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (deviceWidth / guidelineBaseWidth) * size;
const verticalScale = (size) => (deviceHeight / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export default {
  platformStyle,
  platform,

  // Accordion
  accordionBorderColor: '#d3d3d3',
  accordionContentPadding: 10,
  accordionIconFontSize: 18,
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  headerStyle: '#edebed',
  iconStyle: '#000',
  disableRow: '#a9a9a9',

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: '#757575',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === PLATFORM.IOS ? 3 : 0,

  // Button
  buttonFontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  buttonDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  buttonDefaultActiveOpacity: 0.5,
  buttonDefaultFlex: 1,
  buttonDefaultBorderRadius: 2,
  buttonDefaultBorderWidth: 1,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return platform === PLATFORM.IOS
      ? this.fontSizeBase * 1.1
      : this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
  CheckboxPaddingLeft: platform === PLATFORM.IOS ? 4 : 2,
  CheckboxPaddingBottom: platform === PLATFORM.IOS ? 0 : 5,
  CheckboxIconSize: platform === PLATFORM.IOS ? 19 : 16,
  CheckboxIconMarginTop: platform === PLATFORM.IOS ? undefined : 1,
  CheckboxFontSize: platform === PLATFORM.IOS ? 12 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',
  checkboxDefaultColor: 'transparent',
  checkboxTextShadowRadius: 0,

  // Color
  brandPrimary: platform === PLATFORM.IOS ? '#007aff' : '#3F51B5',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: '#a9a9a9',

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerFlex: 1,
  datePickerPadding: 10,
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabBackgroundColor: 'blue',
  fabBorderRadius: 28,
  fabBottom: 0,
  fabButtonBorderRadius: 20,
  fabButtonHeight: 40,
  fabButtonLeft: 7,
  fabButtonMarginBottom: 10,
  fabContainerBottom: 20,
  fabDefaultPosition: 20,
  fabElevation: 4,
  fabIconColor: '#fff',
  fabIconSize: 24,
  fabShadowColor: '#000',
  fabShadowOffsetHeight: 2,
  fabShadowOffsetWidth: 0,
  fabShadowOpacity: 0.4,
  fabShadowRadius: 2,
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: platform.fiftyfiveScale,
  footerDefaultBg: '#fff',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: platform === PLATFORM.IOS ? 14 : 11,
  activeTab: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  tabActiveBgColor: platform === PLATFORM.IOS ? '#cde1f9' : '#3F51B5',

  // Header
  toolbarBtnColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  toolbarDefaultBg: '#000',
  toolbarHeight: platform === PLATFORM.IOS ? 64 : 56,
  toolbarSearchIconSize: platform === PLATFORM.IOS ? 20 : 23,
  toolbarInputColor: platform === PLATFORM.IOS ? '#CECDD2' : '#fff',
  searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
  searchBarInputHeight: platform === PLATFORM.IOS ? 30 : 50,
  toolbarBtnTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  toolbarDefaultBorder: platform === PLATFORM.IOS ? '#a7a6ab' : '#3F51B5',
  iosStatusbar: platform === PLATFORM.IOS ? 'dark-content' : 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === PLATFORM.IOS ? 30 : 28,
  iconHeaderSize: platform === PLATFORM.IOS ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 25,
  lineHeight: platform === PLATFORM.IOS ? 20 : 24,
  listItemSelected: platform === PLATFORM.IOS ? '#007aff' : '#3F51B5',

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === PLATFORM.IOS ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === PLATFORM.IOS ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: platform === PLATFORM.IOS ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentActiveTextColor: platform === PLATFORM.IOS ? '#fff' : '#3F51B5',
  segmentBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  segmentBorderColorMain: platform === PLATFORM.IOS ? '#a7a6ab' : '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabBarDisabledTextColor: '#BDBDBD',
  tabDefaultBg: platform === PLATFORM.IOS ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',
  topTabBarBorderColor: platform === PLATFORM.IOS ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: platform === PLATFORM.IOS ? '#007aff' : '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  titleFontSize: platform === PLATFORM.IOS ? 17 : 19,
  subTitleFontSize: platform === PLATFORM.IOS ? 11 : 14,
  subtitleColor: platform === PLATFORM.IOS ? '#8e8e93' : '#FFF',
  titleFontColor: '#000',

  // Other
  borderRadiusBase: platform === PLATFORM.IOS ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // CUSTOM STYLES
  minusFiftyScale: moderateScale(-50),
  minusFifteenScale: moderateScale(-15),
  minusFiveScale: moderateScale(-5),
  ceroScale: moderateScale(0),
  ceroFiveScale: moderateScale(0.5),
  oneScale: moderateScale(1),
  twoScale: moderateScale(2),
  threeScale: moderateScale(3),
  fourScale: moderateScale(4),
  fourFiveScale: moderateScale(4.5),
  fiveScale: moderateScale(5),
  sixScale: moderateScale(6),
  sevenScale: moderateScale(7),
  sevenFiveScale: moderateScale(7.5),
  eightScale: moderateScale(8),
  nineScale: moderateScale(9),
  tenScale: moderateScale(10),
  elevenScale: moderateScale(11),
  twelveScale: moderateScale(12),
  thirteenScale: moderateScale(13),
  fourteenScale: moderateScale(14),
  fifteenScale: moderateScale(15),
  sixteenScale: moderateScale(16),
  seventeenScale: moderateScale(17),
  eightteenScale: moderateScale(18),
  twentyScale: moderateScale(20),
  twentyTwoScale: moderateScale(20),
  twentyfourScale: moderateScale(24),
  twentyfiveScale: moderateScale(25),
  twentyeightScale: moderateScale(28),
  thirtyScale: moderateScale(30),
  thirtyFiveScale: moderateScale(35),
  fourtyScale: moderateScale(40),
  fourtyfourScale: moderateScale(44),
  fourtyfiveScale: moderateScale(45),
  fiftyScale: moderateScale(50),
  fiftyfiveScale: moderateScale(55),
  sixtyScale: moderateScale(60),
  sixtyeightScale: moderateScale(68),
  seventyScale: moderateScale(70),
  eightyScale: moderateScale(80),
  ninetyScale: moderateScale(90),
  oneHundredScale: moderateScale(100),
  oneHundredTwenty: moderateScale(120),
  oneHundredTwentyFive: moderateScale(125),
  oneHundredThirtyScale: moderateScale(130),
  oneHundredFourtycale: moderateScale(140),
  oneHundredFourtyFiveScale: moderateScale(145),
  oneHundredFifty: moderateScale(150),
  oneHundredFiftySeventyFive: moderateScale(175),
  twoHundredTwentyFive: moderateScale(200),
  threeHundredTwentyFive: moderateScale(300),
  threeHundredFifty: moderateScale(350),

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
