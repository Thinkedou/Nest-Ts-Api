
class Author {
  readonly firstName: string;
  readonly lastName : string;
}


export class CreateBooksDto {
  title: string;
  originalTitle:string;
  author: Author;
  publicationYear: number;
  createdAt:Date;
  genre: string;
  coverUri: string;
  recap: string;
}
