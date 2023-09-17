--create database
CREATE DATABASE node_mysql;

--using databaste
use node_mysql;

--crear tabla
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

--ver todas las tablas
SHOW TABLES;

--describe la tabla
describe customer;