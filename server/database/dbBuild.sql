BEGIN;

DROP TABLE if EXISTS customer_info CASCADE;


CREATE TABLE customer_info(
  id SERIAL PRIMARY key NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  phone NUMERIC NOT NULL,
  email VARCHAR(50) NOT NULL,
  zip_code NUMERIC NOT NULL,
  reserve_date TIMESTAMP NOT NULL

);
create unique index index_reserve_date on customer_info(reserve_date);

--example
INSERT INTO customer_info(full_name, phone, email,zip_code,reserve_date) VALUES ('mega','05987648','mega90@gmail.com','12345','2020-06-25 10:00:00') ;


COMMIT;
