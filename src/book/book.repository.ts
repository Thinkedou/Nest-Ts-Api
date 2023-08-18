
import { Injectable, HttpException, HttpStatus  } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { FilterQuery, Model } from "mongoose";
import { Book,BookDocument } from './schemas/book.schema';

@Injectable()
export class BookRepository{
    constructor(@InjectModel(Book.name) private bookModel:Model<BookDocument>){}

    async find(booksFilterQuery:FilterQuery<Book>): Promise<Book[]>{
        return this.bookModel.find(booksFilterQuery)
    }

    async create(book:Book): Promise<Book>{
        try {
            const  newBook = new this.bookModel(book);
            const  s = await newBook.save()
            return s
        } catch (error) {
            throw new HttpException('Missing required params: '+error.message, HttpStatus.UNPROCESSABLE_ENTITY);
        }     
        
    }
    async findOneAndUpdate(booksFilterQuery: FilterQuery<Book>, book: Partial<Book>): Promise<Book|null> {
        return this.bookModel.findOneAndUpdate(booksFilterQuery, book, { new: true });
    }
    

}