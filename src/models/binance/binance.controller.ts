import { Controller, Get } from '@nestjs/common';
import { BinanceService } from './binance.service';

@Controller('binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}
  @Get('get_ticker_price')
  getTheLatestPrice() {
    return this.binanceService.getTickerPrice();
  }
}
