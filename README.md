# Nodejs-CRUD-Ops-with-relation-DB-and-pagination
This is project demonstrate how to make CRUD Ops request with pagination and build relation between tables

#How to set up

Clone the repo to local machine using git clone command.
Run npm install. This command will insatll all the required Node modules to the application
Create .env file in the root level of the application and include database credentials in it. .env should de like this

eg.
DB_USERNAME = ""
DB_PASSWORD = ""
DB_HOST = ""
DB_NAME = "library"

PORT = "8080"

Create a DB named "library" in side the host.
Run nodemon app.js. This comman will initiat the application on port 8080 and sync all the models.

#Sample routes and their request bodies.
  Authors
    This route will return all the authers with a paginition. This does not have a request body and this is a GET.
    http://localhost:8080/authors/all?offset=4&limit=3
    
    This route will return the auther with a given id. This does not have a request body and this is a GET.
    http://localhost:8080/authors/3
    
    This route will create a new author. This is a POST.
    http://localhost:8080/authors/create
    
    Request body will be like this
    {
      "firstname": "Joanne",
      "lastname": "Rowling"
    }

    This route will update the auther with a given id. This is a PUT.
    http://localhost:8080/authors/create
    
    Request body will be like this
    {
      "firstname": "Joanne",
      "lastname": "Rowling"
    }
    
    
    Books
    This route will return all the books with a paginition. This does not have a request body and this is a GET.
    http://localhost:8080/books/all?offset=4&limit=3
    
    This route will return the book with a given id. This does not have a request body and this is a GET.
    http://localhost:8080/books/3
    
    This route will create a new book. This is a POST.
    http://localhost:8080/books/create
    
    Request body will be like this
    {
      "name": " Harry Potter-Philosopher's Stone",
      "isbn": "ISBN-10, ‎9781408855652",
      "author": "Joanne Rowling",
      "authorId": 1
    }

    This route will update the auther with a given id. This is a PUT.
    http://localhost:8080/authors/create
    
    Request body will be like this
    {
      "firstname": "Melissa",
      "lastname": "Jane"
    }
