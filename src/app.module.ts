import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceModule } from './models/binance/binance.module';

@Module({
  imports: [BinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
