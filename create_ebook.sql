-- Create database
CREATE DATABASE IF NOT EXISTS ebook_db;

-- Use the database
USE ebook_db;

-- Create table for reviews
CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    avatar VARCHAR(255)
);
