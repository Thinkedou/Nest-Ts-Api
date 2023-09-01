import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { bookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    bookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
