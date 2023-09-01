
import { Injectable } from "@nestjs/common";
import { CreateBooksDto } from "./dto/create-books.dto";
import { UpdateBooksDto } from "./dto/update-books.dto";
import {Book} from "./schemas/book.schema"
import { BookRepository } from './book.repository';


@Injectable()
export class BookService{
    constructor(private readonly BookRepository:BookRepository){}

    async getOneBook(bookId: string):Promise<Book|null>{
        return this.BookRepository.findOne(bookId)
    }

    async getBooks():Promise<Book[]>{
        return this.BookRepository.find({})
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
