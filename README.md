````markdown
# Product Listing Application

A Node.js-based backend for managing a product listing application, with full CRUD (Create, Read, Update, Delete) functionality. The application uses Sequelize as the ORM to enable compatibility with both PostgreSQL and MySQL databases.Continued to use neon postgres database as a cloud database and aiven mysql database as a cloud database.

## Features

- **CRUD Operations**: Allows creating, reading, updating, and deleting products.
- **Database Support**: Configured to work with both PostgreSQL and MySQL, enabling flexibility based on deployment needs.
- **Sequelize ORM**: Provides efficient data querying and schema management.
- **Environment-Based Configuration**: Easily manage database credentials and other environment-specific settings.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework for Node.js
- **Sequelize** - ORM for SQL databases
- **PostgreSQL** / **MySQL** - Supported databases

## Prerequisites

- **Node.js** (v14 or higher)
- **PostgreSQL** or **MySQL** database
- **npm** (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Balikuddembe/product_listing_app.git
cd product_listing_app
```
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
DB_DIALECT=postgres   # or 'mysql' for MySQL
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

### 4. Database Setup

Make sure your PostgreSQL/MySQL database is running, then run the Sequelize migrations to set up the tables:

```bash
npx sequelize-cli db:migrate
```

### 5. Run the Application

```bash
npm start
```

The application will start on `http://localhost:3030`.

## API Endpoints

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/   products`  | Get all products             |
| GET    | `/api/products/:id` | Get a specific product by ID |
| POST   | `/api/products`     | Create a new product         |
| PUT    | `/products/:id`     | Update a specific product    |
| DELETE | `/products/:id`     | Delete a specific product    |

### Sample API Request

To create a new product, make a `POST` request to `/api/products` with the following JSON body:

```json
{
  "name": "Sample Product",
  "rating": 4.5,
  "price": 29.99,
  "image": "https://example.com/sample-product.jpg"
}
```

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact

For any questions or issues, feel free to reach out!

---

This README provides an overview of the project, setup instructions, and relevant details for anyone looking to use or contribute to the project.
