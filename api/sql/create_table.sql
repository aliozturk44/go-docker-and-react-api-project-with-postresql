CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY NOT NULL,
    name CHARACTER VARYING(45) NOT NULL,
    price CHARACTER VARYING(10) NOT NULL,
    quantity CHARACTER VARYING(10) NOT NULL,
    status CHARACTER VARYING(2) NOT NULL
);