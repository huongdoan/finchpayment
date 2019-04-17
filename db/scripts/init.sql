CREATE TABLE customer(
      customer_id serial PRIMARY KEY,
      first_name VARCHAR (50) UNIQUE NOT NULL,
      last_name VARCHAR (50) NOT NULL,
      phone VARCHAR (50) NOT NULL,
      email VARCHAR (355) UNIQUE NOT NULL,
      date_of_birth  date,
      created_on TIMESTAMP NOT NULL

);