
import { Injectable } from "@nestjs/common";
import { CreateBooksDto } from "./dto/create-books.dto";
import { UpdateBooksDto } from "./dto/update-books.dto";
import {Book} from "./schemas/book.schema"
import { BookRepository } from './book.repository';
import { QueryBuilderService } from "src/query-builder/query-builder.service";
import { FilterQuery } from "mongoose";


@Injectable()
export class BookService{
    constructor(private readonly BookRepository:BookRepository){}

    async getOneBook(bookId: string):Promise<Book|null>{
        return this.BookRepository.findOne(bookId)
    }

    async getBooks(rawQuery:FilterQuery<Book>):Promise<Book[]>{
        const q = new QueryBuilderService()
        const {options} = q.getFindOptions(rawQuery)
        return this.BookRepository.find(options)
    }
    async createBook(createBooks:CreateBooksDto):Promise<Book>{
        return this.BookRepository.create(createBooks)
    }
    async updateBook(bookId: string, bookUpdate: UpdateBooksDto):Promise<Book|null>{
        return this.BookRepository.findOneAndUpdate({ _id:bookId }, bookUpdate)
    }
    async deleteBook(bookId: string):Promise<Book|null>{
        return this.BookRepository.deleteOne(bookId)
    }
}
