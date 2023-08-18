import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/bookstore'),bookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
