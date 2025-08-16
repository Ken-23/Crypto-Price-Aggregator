import { TickerPriceResponse } from './interfaces/response.js';

export const BinanceApiEndpoints = {
  BINANCE: {
    BASE_URL: '',
    GET_PRICE_TICKER: {
      method: 'GET',
      path: '/api/v3/ticker/price',
      response: {} as TickerPriceResponse,
      query: {} as { symbol?: string },
    },
  },
};
