import { Controller, Get } from '@nestjs/common';

@Controller('binance')
export class BinanceController {
  @Get('getBTCPrice')
  findAll(): string {
    return 'Ken';
  }
}
