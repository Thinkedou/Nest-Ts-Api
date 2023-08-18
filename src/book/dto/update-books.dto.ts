
class Author {
  readonly firstName: string;
  readonly lastName : string;
}


export class UpdateBooksDto {
  title: string;
  originalTitle:string;
  author: Author;
  publicationYear: number;
  genre: string;
  coverUri: string;
  recap: string;
}
