-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 16, 2020 at 03:05 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vueproduct`
--
CREATE DATABASE IF NOT EXISTS `vueproduct` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `vueproduct`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'mobile', '2020-03-19', '2020-03-19 13:47:42'),
(2, 'test', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contactinformations`
--

CREATE TABLE `contactinformations` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(60) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `fax` varchar(12) NOT NULL,
  `email` varchar(200) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactinformations`
--

INSERT INTO `contactinformations` (`id`, `name`, `address`, `phone`, `fax`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'andreas', 'testvej', '24300028', '323232', 'andyhansen506@gmail.com', '2020-03-19', '2020-04-16 12:09:40');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(60) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(200) NOT NULL,
  `messages` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `address`, `phone`, `email`, `messages`, `createdAt`, `updatedAt`) VALUES
(1, 'andraes', 'testvej', '24300028', 'andyhansen506@gamil.com', 'hej med dig ', '2020-03-19', '2020-03-19'),
(2, 'andraes', 'testvej', '24300028', 'andyhansen506@gamil.com', 'hej med dig ', '2020-03-23', '2020-03-23'),
(3, 'andraes', 'testvej', '24300028', 'andyhansen506@gamil.com', 'hej med dig ', '2020-03-23', '2020-03-23'),
(4, 'andreas hansen', 'Nørregårdsvej 84', '2403', 'andreas.gr.hansen@gmail.com', 'hej', '2020-03-23', '2020-03-23'),
(5, 'andreas hansen', 'Nørregårdsvej 84', '2403', 'andreas.gr.hansen@gmail.com', 'hej', '2020-03-23', '2020-03-23'),
(6, 'andreas hansen', 'Nørregårdsvej 84', '32323232', 'andreas.gr.hansen@gmail.com', 'hej på en fredags', '2020-03-27', '2020-03-27');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `description` varchar(45) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `image` varchar(60) NOT NULL,
  `imageurl` varchar(120) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `categoryId`, `image`, `imageurl`, `createdAt`, `updatedAt`) VALUES
(7, 'andy', '40.00', 'hej', 1, 'cat.jpg', 'http://localhost:1337/file-bucket/upload_791a676b58d5a49815be8c595ecc2719.jpg', '2020-03-30', '2020-03-30 12:31:11'),
(8, 'ib', '10.00', 'hej ib ', 2, 'smiling-2362136_1280.jpg', 'http://localhost:1337/file-bucket/upload_7fe16ef6b2c2bf888039b861c55bb9d1.jpg', '2020-04-01', '2020-04-01 09:43:35'),
(9, 'km', '10.00', 'km er glad ', 1, 'gal2323.jpg', 'http://localhost:1337/file-bucket/upload_5d23a18b9b2800a1232ad0e8d5706cea.jpg', '2020-04-01', '2020-04-01 09:45:50'),
(10, 'll', '30.00', 'hej ll', 1, 'landscape-4521413_640.jpg', 'http://localhost:1337/file-bucket/upload_02743b8e2c49b90366630e446a798e72.jpg', '2020-04-01', '2020-04-01 09:46:24'),
(11, 'bb', '500.00', 'hej bb', 1, 'gal4958.jpg', 'http://localhost:1337/file-bucket/upload_e78fa0da1fdec870e7ef6ad2adbba9c9.jpg', '2020-04-01', '2020-04-01 09:46:54'),
(12, 'nn', '200.00', 'hej med dig hh', 1, 'jam-4521023_640.jpg', 'http://localhost:1337/file-bucket/upload_54b31695d4e94f22da7ed0bc9e782f76.jpg', '2020-04-01', '2020-04-01 09:48:34'),
(13, 'hh', '30.00', 'hej hh', 1, 'gal4958.jpg', 'http://localhost:1337/file-bucket/upload_fa53b9ef77e48b3a081edc60da0daa73.jpg', '2020-04-01', '2020-04-01 09:49:17'),
(14, 'ss', '60.00', 'ss', 2, 'cat.jpg', 'http://localhost:1337/file-bucket/upload_b434959f4cd5fd50b1e97d58446125bf.jpg', '2020-04-01', '2020-04-01 09:49:43'),
(15, 'dd', '40.00', 'hej dd', 2, 'gal2323.jpg', 'http://localhost:1337/file-bucket/upload_225ed7b0eb5763c2eff150125e3bb03a.jpg', '2020-04-01', '2020-04-01 09:51:13'),
(16, 'ii', '50.00', 'hej ii', 1, 'gal2323.jpg', 'http://localhost:1337/file-bucket/upload_935d2db7521dac0ed985c50ff6a32bf3.jpg', '2020-04-01', '2020-04-01 09:52:04');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(72) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@gmail.com', '$2a$10$hlOrXbmwQrhle6N4TZ0o8OPvAnyUifRUPH7aMgvigwvfwR.xfDoDu', '2020-03-19', '2020-03-19 14:53:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactinformations`
--
ALTER TABLE `contactinformations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contactinformations`
--
ALTER TABLE `contactinformations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
