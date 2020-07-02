BEGIN;

DROP TABLE if EXISTS customer_info, reservation CASCADE;


CREATE TABLE customer_info(
  id SERIAL PRIMARY key NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone NUMERIC NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE reservation(
id SERIAL PRIMARY KEY NOT NULL, 
customer_info_id INTEGER,
FOREIGN key(customer_info_id) REFERENCES customer_info(id),
reserve_date TIMESTAMP 
);

--example
INSERT INTO customer_info(first_name, last_name,phone, email) VALUES ('mega','fly','05987648','mega90@gmail.com') ;

INSERT INTO reservation(customer_info_id,reserve_date) VALUES (1,'2020-06-25 10:00:00 AM');

COMMIT;
