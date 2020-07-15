BEGIN;

DROP TABLE if EXISTS reserve_time, customer_info CASCADE;

CREATE TABLE reserve_time(
  id SERIAL PRIMARY key NOT NULL,
  time_reserve TIME

);
CREATE TABLE customer_info(
  id SERIAL PRIMARY key NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  phone NUMERIC NOT NULL,
  email VARCHAR(50) NOT NULL,
  zip_code NUMERIC NOT NULL,
  reserve_date DATE NOT NULL,
  time_id INTEGER,
    FOREIGN KEY (time_id) REFERENCES reserve_time (id)

);



-- create unique index index_reserve_date on customer_info(reserve_date);

--example

    INSERT INTO reserve_time
        (time_reserve)
    VALUES
        ('10:00'),
         ('12:00'),
          ('14:00'),
           ('16:00');
       
INSERT INTO customer_info(full_name, phone, email,zip_code,reserve_date,time_id) VALUES ('mega','05987648','mega90@gmail.com','12345','2020-06-25',1) ;


COMMIT;
