
<p  align="center">
  <a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo" /></a>
</p>

## Description
 
Small but complete RESTful api based on NestJs, MongoDb & Ts
You will need Docker Compose to run the linked image  

## Installation


```bash

$  docker compose build

```

## Running the app
 
```bash

$  docker compose up

```

## Endpoint

If everything went well it should start a local server on port 3000 
[http://localhost:3000/books](http://localhost:3000/books) retrieve all the books
[http://localhost:3000/books/booksId](http://localhost:3000/books) retrieve one book
**POST**, **PATCH** & **DELETE** http verb are implemented as well following the basic REST principles
 