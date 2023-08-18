
import { Controller,  Get,  Post,  Param, Body, Patch } from '@nestjs/common';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBooksDto } from './dto/update-books.dto';

import { Book } from './schemas/book.schema';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService:BookService){}
  @Get()
  async getAllBooks():Promise<Book[]> {
    return this.bookService.getBooks()
  }

  @Post()
  async create(@Body() createBooksDto: CreateBooksDto):Promise<Book> {
    return this.bookService.createBook(createBooksDto)
  }

  @Patch(':bookId')
  async update(@Param('bookId') bookId:string, @Body() updateBook: UpdateBooksDto):Promise<Book|null> {
    return this.bookService.updateBook(bookId,updateBook)
  }
  
  
}