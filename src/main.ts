import * as fs from "fs";
const env = fs.readFileSync('./build/env.txt','utf-8');
console.log('The current environment is:' + env);
require('dotenv').config({ path: '.env.' + env })



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: new Logger()    // implement of interface LoggerService
  });
  app.enableCors();
  await app.listen(3000);
}

bootstrap();