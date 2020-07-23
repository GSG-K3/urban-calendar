BEGIN;

DROP TABLE if EXISTS reservation_time, customer_info CASCADE;

CREATE TABLE reservation_time(
  id SERIAL PRIMARY key NOT NULL,
  time_slot TIME UNIQUE NOT NULL

);
CREATE TABLE customer_info(
  id SERIAL PRIMARY key NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  phone NUMERIC NOT NULL,
  email VARCHAR(50) NOT NULL,
  zip_code NUMERIC NOT NULL,
  reservation_date DATE NOT NULL,
  time_id INTEGER,
    FOREIGN KEY (time_id) REFERENCES reservation_time (id)

);

COMMIT;
