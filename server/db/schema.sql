-- Create database (optional, if not created manually)
CREATE DATABASE IF NOT EXISTS eneba_demo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE eneba_demo;

-- =========================
-- Games table
-- =========================
CREATE TABLE games (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    platform VARCHAR(100),
    platform_icon VARCHAR(255),

    region_label VARCHAR(50),
    region_ok BOOLEAN DEFAULT TRUE,

    has_discount BOOLEAN DEFAULT FALSE,
    base_price DECIMAL(10,2) NULL,
    discount DECIMAL(5,2) NULL,
    current_price DECIMAL(10,2) NULL,

    has_cashback BOOLEAN DEFAULT FALSE,
    cashback DECIMAL(10,2) NULL,

    wishlisted INT DEFAULT 0,
    available BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster search by title
CREATE INDEX idx_games_title ON games(title);

-- =========================
-- Reports table
-- =========================
CREATE TABLE reports (
    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    steps TEXT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================
-- Sample seed data
-- =========================
INSERT INTO games (
    id,
    title,
    photo,
    platform,
    platform_icon,
    region_label,
    region_ok,
    has_discount,
    base_price,
    discount,
    current_price,
    has_cashback,
    cashback,
    wishlisted,
    available
) VALUES
(
    168,
    'SnowRunner (Xbox One) Xbox Live Key EUROPE',
    '/images/games/snowrunner_xbox.jpg',
    'Xbox Live',
    '/images/platforms/xbox.svg',
    'europe',
    TRUE,
    FALSE,
    NULL,
    NULL,
    NULL,
    FALSE,
    NULL,
    17,
    FALSE
);

INSERT INTO reports (title, description, steps)
VALUES (
  'Game not available',
  'SnowRunner is marked as unavailable but can still be clicked.',
  'Open homepage → search SnowRunner → click item'
);
