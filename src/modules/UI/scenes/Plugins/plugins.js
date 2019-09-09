// @flow

import { Platform } from 'react-native'
import RNFS from 'react-native-fs'

import assetPlugins from '../../../../assets/plugins.json'
import { EDGE_PLUGIN_REGIONS } from '../../../../constants/CountryConstants.js'
import { type BuySellPlugin } from '../../../../types/types.js'

const LEGACY_PLUGINS = ['Bitrefill']

const hostedBuySellPlugins: Array<BuySellPlugin> = [
  {
    pluginId: 'com.libertyx',
    uri: 'https://libertyx.com/a/',
    name: 'LibertyX',
    subtitle: 'Buy Bitcoin with cash or debit card at US merchants\nBTC\nFee: 3-8% / Settlement: Instant',
    imageUrl: 'https://edge.app/wp-content/uploads/2019/05/libertyXlogo.png',
    permissions: ['location'],
    originWhitelist: ['https://libertyx.com']
  },
  {
    pluginId: 'io.moonpay.buy',
    uri: 'https://buy.moonpay.io?apiKey=pk_live_Y1vQHUgfppB4oMEZksB8DYNQAdA4sauy',
    name: 'MoonPay',
    subtitle: 'Buy crypto with credit card or Apple Pay\nBTC, ETH, XRP, LTC, BCH\nFee: 5.5% / Settlement: 10 mins',
    imageUrl: 'https://edge.app/wp-content/uploads/2019/05/icon_black_small.png'
  },
  {
    pluginId: 'com.safello',
    uri: 'https://safello.com/edge/',
    name: 'Safello',
    subtitle: 'Buy crypto with Swish (in Sweden) or credit card\nBTC, ETH, XRP, BCH\nFee: 5.75% / Settlement: Instant',
    imageUrl: 'https://edge.app/wp-content/uploads/2019/06/Safello-Logo-Green-background.png',
    originWhitelist: ['https://safello.com', 'https://app.safello.com']
  },
  {
    pluginId: 'bitsofgold',
    uri: 'https://www.bitsofgold.co.il/order/sell?order_id=null&page=0&utm_source=Edge&utm_medium=mobile_app&utm_campaign=co',
    name: 'Bits of Gold',
    subtitle: 'Sell Bitcoin to bank account in Israel and Europe\nBTC\nFee: 5% / Settlement: 2 days',
    imageUrl: 'https://edge.app/wp-content/uploads/2019/08/bits-of-gold-logo-sm.png',
    permissions: ['location']
  }
]

const hostedSpendPlugins: Array<BuySellPlugin> = []

const devPlugin = {
  pluginId: 'custom',
  uri: 'https://edge.app',
  name: 'Custom Dev',
  subtitle: 'Development Testing',
  imageUrl: 'http://edge.app/wp-content/uploads/2019/01/wyre-logo-square-small.png'
}

function fixPlugins (plugins: Array<Object>): Array<BuySellPlugin> {
  const baseDir = Platform.OS === 'android' ? 'android_asset' : RNFS.MainBundlePath

  return plugins.map(plugin => {
    const pluginPath = `file:///${baseDir}/plugins/${plugin.pluginId}/index.html`

    return {
      imageUrl: plugin.iconUrl,
      isLegacy: LEGACY_PLUGINS.includes(plugin.name),
      ...plugin,
      uri: pluginPath
    }
  })
}

export const pluginSort = (a: BuySellPlugin, b: BuySellPlugin) => {
  const aPriority = EDGE_PLUGIN_REGIONS[a.name.toLowerCase()].priority
  const bPriority = EDGE_PLUGIN_REGIONS[b.name.toLowerCase()].priority

  return aPriority - bPriority
}

export function buySellPlugins (developerModeOn: boolean): Array<BuySellPlugin> {
  const plugins = [...hostedBuySellPlugins, ...fixPlugins(assetPlugins.buysell)]
  plugins.sort(pluginSort)
  return developerModeOn ? [...plugins, devPlugin] : plugins
}

export function spendPlugins (developerModeOn: boolean): Array<BuySellPlugin> {
  const plugins = [...hostedSpendPlugins, ...fixPlugins(assetPlugins.spend)]
  plugins.sort(pluginSort)
  return developerModeOn ? [...plugins, devPlugin] : plugins
}
