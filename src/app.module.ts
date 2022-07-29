import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerosModule } from './hero/heros.module';
import { MathController } from './math.controller';

@Module({
  imports: [HerosModule],
  controllers: [AppController, MathController],
  providers: [AppService],
})
export class AppModule {}
