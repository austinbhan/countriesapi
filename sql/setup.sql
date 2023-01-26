-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS countries CASCADE;

CREATE TABLE countries (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country VARCHAR NOT NULL,
    capitol VARCHAR NOT NULL,
    langue VARCHAR NOT NULL
);

INSERT INTO 
    countries (country, capitol, langue)
VALUES 
('United States', 'Washington DC', 'English'),
('United Kingdom', 'London', 'English'),
('India', 'New Dehli', 'Hindi'),
('Romania', 'Bucharest', 'Romanian'),
('China', 'Beijing', 'Chinese'),
('Mexico', 'Mexico City', 'Spanish');
