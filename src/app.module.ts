import {  Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClentServe } from './grpc/grpc.client.server';

@Module({
  imports: [
  ],
  controllers: [AppController],
  providers: [AppService,ClentServe],
})
export class AppModule {
}