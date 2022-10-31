import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorredorModule } from './corredor/corredor.module';
dotenv.config();

@Module({
  imports: [ 
    MongooseModule.forRoot(process.env.CorredorDB),
    CorredorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
