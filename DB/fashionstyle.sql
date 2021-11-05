CREATE DATABASE IF NOT EXISTS `fashionstyledb`;
USE `fashionstyledb`;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `dni` int NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `deleted` TINYINT NOT NULL,
   `role_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `role` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `category_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL,
   `category` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
   `id` INT NOT NULL,
   `user_id` INT NOT NULL,
   `total_price` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `carts_product` (
   `id` INT NOT NULL,
   `cart_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_b2a0008f-db6f-48c2-a235-9279cae16f35` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_58318e25-746d-47b5-9423-ea51a77c7ee7` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `cart` ADD CONSTRAINT `FK_d8b09bca-8ee4-4029-bdf2-e28965dfb455` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `carts_product` ADD CONSTRAINT `FK_2a44cb85-740a-4c8c-98f4-902faa4202b0` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`)  ;

ALTER TABLE `carts_product` ADD CONSTRAINT `FK_2116c6a4-e23d-40f4-80fe-8ca75c7e0417` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;
