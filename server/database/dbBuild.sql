BEGIN;

DROP TABLE if EXISTS customer_info CASCADE;


CREATE TABLE customer_info(
  id SERIAL PRIMARY key NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone NUMERIC NOT NULL,
  email VARCHAR(50) NOT NULL,
  reserve_date TIMESTAMP 

);

--example
INSERT INTO customer_info(first_name, last_name,phone, email,reserve_date) VALUES ('mega','fly','05987648','mega90@gmail.com','2020-06-25 10:00:00') ;


COMMIT;
