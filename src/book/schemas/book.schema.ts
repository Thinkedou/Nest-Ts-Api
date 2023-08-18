import { Prop,Schema,SchemaFactory,raw } from "@nestjs/mongoose";
import { Document, now } from "mongoose";

export type BookDocument = Book & Document;
@Schema()
export class Book {
    @Prop({required:true})
    title:string;
    @Prop()
    originalTitle:string;
    @Prop()
    genre:string;
    @Prop()
    coverUri:string;
    @Prop()
    publicationYear:number;
    @Prop({ default: now })
    createdAt: Date;
    @Prop()
    recap:string;
    @Prop(raw({
        firstName: { type: String },
        lastName : { type: String }
      }))
    author: { firstName: string; lastName: string };
}

export const BookSchema = SchemaFactory.createForClass(Book)