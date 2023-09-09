
import { Controller,  Get,  Post, Delete,  Param, Body, Patch,Query } from '@nestjs/common';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBooksDto } from './dto/update-books.dto';

import { Book } from './schemas/book.schema';
import { BookService } from './book.service';


@Controller('books')
export class BookController {
  constructor(private readonly bookService:BookService){}


  @Get(':bookId')
  async getOneBook(@Param('bookId') bookId:string):Promise<Book|null> {
    return this.bookService.getOneBook(bookId)
  }

  @Get()
  async getAllBooks(@Query() params:any):Promise<Book[]> {
    return this.bookService.getBooks(params)
  }

  @Post()
  async create(@Body() createBooksDto: CreateBooksDto):Promise<Book> {
    return this.bookService.createBook(createBooksDto)
  }

  @Patch(':bookId')
  async update(@Param('bookId') bookId:string, @Body() updateBook: UpdateBooksDto):Promise<Book|null> {
    return this.bookService.updateBook(bookId,updateBook)
  }

  @Delete(':bookId')
  async delete(@Param('bookId') bookId: string):Promise<Book|null> {
    return await this.bookService.deleteBook(bookId);
  }
  
}