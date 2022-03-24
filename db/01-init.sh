#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE demo-express;
    GRANT ALL PRIVILEGES ON DATABASE demo-express TO ksh;

\connect demo-express ksh
    BEGIN;
    CREATE TABLE IF NOT EXISTS users (
	  id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
	  );
    COMMIT;
EOSQL
