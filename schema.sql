CREATE TABLE IF NOT EXISTS routes (
  id        SERIAL,
  name      varchar(40) NOT NULL UNIQUE,
  url       varchar(2048) NOT NULL,
  used      integer DEFAULT 0,
  created   timestamp DEFAULT current_timestamp,
  modified  timestamp DEFAULT NULL
);
