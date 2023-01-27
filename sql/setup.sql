-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS countries CASCADE;

CREATE TABLE countries (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country VARCHAR NOT NULL,
    capitol VARCHAR NOT NULL,
    langue VARCHAR NOT NULL,
    continent VARCHAR NOT NULL
);

INSERT INTO 
    countries (country, capitol, langue, continent)
VALUES 
('United States', 'Washington DC', 'English', 'North America'),
('United Kingdom', 'London', 'English', 'North America'),
('India', 'New Dehli', 'Hindi', 'Asia'),
('Romania', 'Bucharest', 'Romanian', 'Europe'),
('China', 'Beijing', 'Chinese', 'Asia'),
('Mexico', 'Mexico City', 'Spanish', 'Europe');
