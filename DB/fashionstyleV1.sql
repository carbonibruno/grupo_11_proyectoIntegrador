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

insert into fashionstyledb.categories (id, category) values
(1, "destacado"), (2, "general")

insert into fashionstyledb.products (id, name, description, price, image, category_id) values
(1, "Aros de plata", "Aros de plata de alta calidad. Realza tu look con estos aros finos y delicados", 10000, "aros_relacionados.jpg", 1),
(2, "Anillo del poder", "Anillo de plata con figura de ajederez. Un anillo para gobernar a todos.", 5000, "anillo_relacionados.jpg", 1),
(3, "Aros Combinados", "Aros combinados de plata y oro. Luci de la mejor manera en cada ocasion", 7500, "aros2_relacionados.jpg", 1),
(4, "Collar Decatron", "Anillo de plata con figura de ajederez. Un anillo para gobernar a todos.", 4500, "collares_relacionados.jpg", 1),
(5, "Collar Circulos", "Collar de circulos largo 60cm", 9000, "collar_circulos.JPG", 2),
(6, "Aros Rose", "Aros Rose Ojo con cubics", 12000, "arosRoseOjos.JPG", 2),
(7, "Gargantilla", "Gargantilla con cubics y cuernos ", 10000, "Gargantilla.JPG", 2),
(8, "Pulsera Bolas", "Pulsera Bolas con dije Cruz", 9000, "PulseraBolas.JPG", 2),
(9, "Gargantilla Bolas", "Gargantilla con Bolas y Tubos", 6000, "gargantillaBolas.jpg", 2),
(10, "Aros Argolla", "Aros Argolla Rose, Amarillo y Plateado con dije Cierre", 18000, "arosArgolla.jpg", 2)



insert into fashionstyledb.roles (id, role) values
(1, "usuario")

insert into fashionstyledb.roles (id, role) values
(2, "administrador")

insert into fashionstyledb.users (id, first_name, last_name, dni, email, password , deleted, role_id) values
(1, "Mariano", "Salperin", 31029581, "msalperin@hotmail.com", "Mariano1234", 0, 2),
(2, "Daniela", "Goyetche", 31655903, "goyet@hotmail.com", "Goyet1234", 0, 2),
(3, "Guido", "Maimone", 31655903, "goyet@hotmail.com", "Goyet1234", 0, 2),
(4, "Diego", "Salperin", 31029581, "msalperin@hotmail.com", "Mariano1234", 0, 1),
(5, "Jose", "Gomez", 123402, "jgomez@hotmail.com", "$2a$10$wLA45SsdrK85DhvLe72znuYDq0W6a0.TKFp/q2ofr1ZfNEK7vmHH6", 0, 1)