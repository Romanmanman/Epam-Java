# Library - Books API Design

## **1. Entities Description**

### **1.1 Book**
Represents an individual book in the library.
- **Attributes**:
  - `id` (integer): Unique identifier for the book.
  - `title` (string): Title of the book.
  - `author` (string): Author of the book.
  - `isbn` (string): International Standard Book Number.
  - `publishedDate` (date): Date when the book was published.
  - `genre` (string): Genre or category of the book.
  - `availability` (boolean): Whether the book is available for borrowing.

### **1.2 User**
Represents a library user.
- **Attributes**:
  - `id` (integer): Unique identifier for the user.
  - `name` (string): Full name of the user.
  - `email` (string): Email address of the user.
  - `membershipDate` (date): Date the user joined the library.

### **1.3 Borrow**
Represents the borrowing relationship between users and books.
- **Attributes**:
  - `id` (integer): Unique identifier for the borrowing record.
  - `userId` (integer): ID of the user borrowing the book.
  - `bookId` (integer): ID of the borrowed book.
  - `borrowDate` (date): Date when the book was borrowed.
  - `returnDate` (date, optional): Date when the book was returned.

---

## **2. Operations Description**

### **2.1 Book Operations**
- **Add a new book**: Create a new book in the catalog.
- **Retrieve a book**: Get details of a specific book by ID.
- **List books**: Fetch all books with options for filters, sorting, and pagination.
- **Update a book**: Modify book details by ID.
- **Delete a book**: Remove a book from the catalog by ID.

### **2.2 User Operations**
- **Add a new user**: Register a new user in the library system.
- **Retrieve a user**: Get details of a specific user by ID.
- **List users**: Fetch all users with options for filters and pagination.
- **Update a user**: Modify user details by ID.
- **Delete a user**: Remove a user from the system by ID.

### **2.3 Borrowing Operations**
- **Borrow a book**: Record the borrowing of a book by a user.
- **Return a book**: Mark a borrowed book as returned.
- **List borrowed books**: Fetch all borrowing records with filters for user, book, and status (borrowed/returned).

---

## **3. REST API Design**

### **3.1 Base URL**
```
http://api.library.com/v1
```

### **3.2 Endpoints**

#### **Books**
| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| GET    | `/books`             | List all books (with filters/pagination). |
| GET    | `/books/{id}`        | Retrieve details of a specific book. |
| POST   | `/books`             | Add a new book.                     |
| PUT    | `/books/{id}`        | Update details of a specific book.  |
| DELETE | `/books/{id}`        | Delete a specific book.             |

**Filters for `/books`:**
- `?author={name}`: Filter by author name.
- `?genre={genre}`: Filter by genre.
- `?available=true`: Filter by availability.

**Pagination:**
- `?page={number}&size={number}`: Specify page number and size.

#### **Users**
| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| GET    | `/users`             | List all users (with pagination).   |
| GET    | `/users/{id}`        | Retrieve details of a specific user.|
| POST   | `/users`             | Register a new user.                |
| PUT    | `/users/{id}`        | Update details of a specific user.  |
| DELETE | `/users/{id}`        | Delete a specific user.             |

**Pagination:**
- `?page={number}&size={number}`: Specify page number and size.

#### **Borrowing**
| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| POST   | `/borrow`                 | Borrow a book.                      |
| PUT    | `/borrow/{id}/return`     | Return a borrowed book.             |
| GET    | `/borrow`                 | List all borrowing records.         |

**Filters for `/borrow`:**
- `?userId={id}`: Filter by user ID.
- `?bookId={id}`: Filter by book ID.
- `?status={borrowed|returned}`: Filter by borrowing status.

---

## **4. Example Usage**

### **Add a Book**
**Request:**
```http
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "publishedDate": "1925-04-10",
  "genre": "Classic",
  "availability": true
}
```

**Response:**
```http
201 Created
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "publishedDate": "1925-04-10",
  "genre": "Classic",
  "availability": true
}
```

### **Search Books**
**Request:**
```http
GET /books?author=Fitzgerald&available=true&page=1&size=10
```

**Response:**
```http
200 OK
{
  "page": 1,
  "size": 10,
  "total": 2,
  "books": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "isbn": "9780743273565",
      "publishedDate": "1925-04-10",
      "genre": "Classic",
      "availability": true
    }
  ]
}
```
