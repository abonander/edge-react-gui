// @flow

import { StyleSheet } from 'react-native'

import THEME, { DEBUG as debug } from '../../../../theme/variables/airbitz'

export default StyleSheet.create({
  gradient: {
    height: THEME.HEADER
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  mainScrollView: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  exchangeRateContainer: {
    alignItems: 'center',
    marginVertical: 12
  },

  main: {
    alignItems: 'center',
    width: '100%'
  },
  feeArea: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  feeAreaText: {
    fontSize: 16,
    color: 'white'
  },

  pendingSymbolArea: {
    height: 12
  },
  slider: {
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  sliderWrap: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderStyle: {
    width: 270
  },
  error: {
    height: 20,
    marginRight: 5,
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  errorText: {
    textAlign: 'left',
    color: THEME.COLORS.ACCENT_RED
  },
  menuTrigger: {
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  trigger: {
    fontSize: 25,
    color: THEME.COLORS.WHITE,
    fontWeight: '700',
    paddingHorizontal: 8
  },
  optionContainer: {
    width: 165
  },
  optionRow: {
    paddingVertical: 7,
    borderBottomColor: THEME.COLORS.GRAY_3,
    borderBottomWidth: 1
  },
  optionText: {
    fontSize: 16,
    color: THEME.COLORS.GRAY_1
  },
  maxSpend: {
    color: THEME.COLORS.ACCENT_ORANGE
  },
  balanceText: {
    color: THEME.COLORS.WHITE,
    fontSize: 16
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  row: { width: '100%', paddingHorizontal: 24, justifyContent: 'flex-start' },
  rowText: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  pinInputContainer: {
    width: 60
  },
  pinInputSpacer: {
    width: 20
  },
  debug
})
