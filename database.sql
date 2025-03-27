-- create database rentACar;
-- use rentACar;

-- CREATE TABLE
--     Locations (
--         location_id INT PRIMARY KEY AUTO_INCREMENT,
--         city VARCHAR(50) NOT NULL,
--         city_photo VARCHAR(255) NOT NULL,
--         city_desc TEXT NOT NULL
--     );

-- CREATE TABLE
--     Cars (
--         car_id INT PRIMARY KEY AUTO_INCREMENT,
--         year INT NOT NULL,
--         types VARCHAR(20) NOT NULL,
--         brands VARCHAR(20) NOT NULL,
--         location_id INT NOT NULL,
--         FOREIGN KEY (location_id) REFERENCES Locations (location_id) ON DELETE CASCADE
--     );

-- CREATE TABLE
--     Car_Description (
--         car_id INT PRIMARY KEY,
--         car_name VARCHAR(50) NOT NULL,
--         car_desc TEXT NOT NULL,
--         mileage INT NOT NULL,
--         transmission VARCHAR(20) NOT NULL,
--         seats INT NOT NULL,
--         baggage INT NOT NULL,
--         price INT NOT NULL,
--         FOREIGN KEY (car_id) REFERENCES Cars (car_id) ON DELETE CASCADE
--     );

-- CREATE TABLE
--     Features (
--         id INT PRIMARY KEY AUTO_INCREMENT,
--         feature_name VARCHAR(50) NOT NULL
--     );

-- CREATE TABLE
--     Car_Feature (
--         id INT PRIMARY KEY AUTO_INCREMENT,
--         car_id INT NOT NULL,
--         feature_id INT NOT NULL,
--         FOREIGN KEY (car_id) REFERENCES Cars (car_id) ON DELETE CASCADE,
--         FOREIGN KEY (feature_id) REFERENCES Features (id) ON DELETE CASCADE
--     );

-- insert into
--     features (feature_name)
-- values
--     ('Sunroof'),
--     ('Wireless Charging'),
--     ('Parking Sensors'),
--     ('Rear Camera'),
--     ('Built-in GPS'),
--     ('Cruise Control'),
--     ('Bluetooth');

-- insert into Locations  (city, city_photo, city_desc) values
-- ('Palm Jumeirah', 'https://i.hizliresim.com/k8566dz.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'), 
-- ('JBR', 'https://i.hizliresim.com/n3ci479.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
-- ('Downtown Dubai', 'https://i.hizliresim.com/l2jwp8j.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
-- ('Dubai Marina','https://i.hizliresim.com/sypanbq.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

-- insert into Cars (year,types,brands,location_id) values
-- ('2022','SUV','Mercedes Benz','1'),
-- ('2021','Convertible','Ferrari','2'),
-- ('2024','Luxury','Porsche','2'),
-- ('2024','Convertible','BMW','3'),
-- ('2020','SUV','Audi','3'),
-- ('2024','SUV','Porsche','4'),
-- ('2022','Sports','BMW','4');

-- insert into Car_Description (car_id,car_name, car_desc, mileage, transmission, seats, baggage, price ) values
-- ('6','Porsche Cayenne Coupe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','5800', 'Automatic', '5', '4' , '5000'),
-- ('7','BMW M4 Competition','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','4700', 'Automatic', '5', '6','1300'),
-- ('4','BMW I8','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','6800', 'Manual', '2', '3','4500'),
-- ('5','Audi RS Q3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','4500', 'Automatic', '5', '6','2000'),
-- ('2','Ferrari 458','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','6100', 'Manual', '2', '2','3900'),
-- ('3','Porsche 992','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','5500', 'Automatic', '2', '3','2100'),
-- ('1','Mercedes Benz G 63','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','7700', 'Automatic', '5', '6','2900');

-- insert into Car_Feature (car_id, feature_id) values 
-- (1,2 ),
-- (1,3 ),
-- (1,4),
-- (1,5 ),
-- (1,6 ),
-- (1,7 ),
-- (2,1 ),
-- (2,2 ),
-- (2,3 ),
-- (2,5 ),
-- (2,7 ),
-- (3,1),
-- (3,3),
-- (3,4),
-- (3,5),
-- (3,6),
-- (4,3),
-- (4,4),
-- (4,5),
-- (4,6),
-- (5,2),
-- (5,3),
-- (5,4),
-- (5,5),
-- (5,7),
-- (6,1),
-- (6,2),
-- (6,3),
-- (6,4),
-- (6,5),
-- (6,6),
-- (6,7),
-- (7,2),
-- (7,3),
-- (7,5),
-- (7,6);


-- SELECT cd.car_name, f.feature_name
-- FROM Cars car
-- JOIN Car_Description cd ON car.car_id = cd.car_id
-- JOIN Car_Feature cf ON car.car_id = cf.car_id
-- JOIN Features f ON cf.feature_id = f.id;

