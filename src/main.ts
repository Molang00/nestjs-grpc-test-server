import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main');

const microserviceTCPOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 5000
  }
}

const microserviceGRpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, 'hero/hero.proto'),
    url: '0.0.0.0:8088'
  }
}

async function bootstrap() {
  const tcpApp = await NestFactory.createMicroservice(AppModule, microserviceTCPOptions);
  await tcpApp.listen();

  const gRpcApp = await NestFactory.createMicroservice(AppModule, microserviceGRpcOptions);
  await gRpcApp.listen();
}
bootstrap();
