const baseUrl = process.env.VUE_APP_BASE_ROUTE || 'https://localhost:3000'

const baseRoute = baseUrl + process.env.BASE_URL

const redirectURI = `${baseUrl}/redirect`

export default {
  baseUrl,
  baseRoute,
  GOOGLE_CLIENT_ID: '876733105116-i0hj3s53qiio5k95prpfmj0hp0gmgtor.apps.googleusercontent.com',
  FACEBOOK_APP_ID: '2554219104599979',
  TWITCH_CLIENT_ID: 'tfppratfiloo53g1x133ofa4rc29px',
  REDDIT_CLIENT_ID: 'dcQJYPaG481XyQ',
  DISCORD_CLIENT_ID: '630308572013527060',
  redirect_uri: redirectURI,
  // api: 'http://localhost:2020'
  api: 'https://api.tor.us',
  supportedCurrencies: [
    'USD',
    '1ST',
    'ADT',
    'ADX',
    'ANT',
    'AUD',
    'BAT',
    'BNT',
    'BTC',
    'CAD',
    'CFI',
    'CRB',
    'CVC',
    'DAI',
    'DASH',
    'DGD',
    'ETC',
    'EUR',
    'FUN',
    'GBP',
    'GNO',
    'GNT',
    'GUP',
    'HKD',
    'HMQ',
    'IDR',
    'INR',
    'JPY',
    'LGD',
    'LSK',
    'LTC',
    'LUN',
    'MCO',
    'MTL',
    'MYST',
    'NMR',
    'OMG',
    'PAY',
    'PHP',
    'PTOY',
    'QRL',
    'QTUM',
    'REP',
    'RLC',
    'RUB',
    'SAI',
    'SC',
    'SGD',
    'SNGLS',
    'SNT',
    'STEEM',
    'STORJ',
    'TIME',
    'TKN',
    'TRST',
    'UAH',
    'WINGS',
    'XEM',
    'XLM',
    'XMR',
    'XRP',
    'ZEC'
  ]
}
