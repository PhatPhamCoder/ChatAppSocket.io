-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2023 at 10:47 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_chat`
--

CREATE TABLE `tbl_chat` (
  `id` int(11) UNSIGNED NOT NULL,
  `roomID` int(11) DEFAULT NULL,
  `userFrom` int(11) NOT NULL,
  `userTo` int(11) NOT NULL,
  `senderID` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_chat`
--

INSERT INTO `tbl_chat` (`id`, `roomID`, `userFrom`, `userTo`, `senderID`, `message`, `created_at`) VALUES
(22, NULL, 12, 15, 12, 'Hello bro, This is first message', 1687406667634),
(23, NULL, 19, 20, 19, 'hello', 1687406987178),
(24, NULL, 19, 20, 19, 'hello guy', 1687407390375),
(25, NULL, 19, 20, 19, 'hello ❤️', 1687408512889),
(26, NULL, 19, 20, 19, 'HELLO', 1687414715420),
(27, NULL, 20, 19, 20, 'hello', 1687415466729),
(28, NULL, 20, 19, 20, 'hello', 1687415562941),
(29, NULL, 19, 20, 19, 'hey man', 1687415689560),
(30, NULL, 19, 20, 19, 'hello', 1687416878906),
(31, NULL, 19, 20, 19, 'hello', 1687417515258),
(32, NULL, 20, 19, 20, 'hello man 🥰', 1687417537253),
(33, NULL, 19, 20, 19, 'hello', 1687418853639),
(34, NULL, 20, 19, 20, 'hi', 1687419916625),
(35, NULL, 19, 20, 19, 'xin chào', 1687419979740),
(36, NULL, 19, 20, 19, 'hello', 1687420247171),
(37, NULL, 19, 20, 19, NULL, 1687420305318),
(38, NULL, 19, 20, 19, NULL, 1687420427565),
(39, NULL, 19, 20, 19, NULL, 1687420470429),
(40, NULL, 19, 20, 19, NULL, 1687420515191),
(41, NULL, 19, 20, 19, NULL, 1687420541869),
(42, NULL, 19, 20, 19, NULL, 1687420648349),
(43, NULL, 19, 20, 19, NULL, 1687420685400),
(44, NULL, 19, 20, 19, 'hello', 1687420700950),
(45, NULL, 19, 20, 19, 'hello', 1687420715898),
(46, NULL, 19, 20, 19, 'hihihihihi', 1687420755160),
(47, NULL, 19, 20, 19, '123123', 1687420844845),
(48, NULL, 19, 20, 19, '45645', 1687420952736),
(49, NULL, 19, 20, 19, '789', 1687421086918),
(50, NULL, 20, 19, 20, 'hello', 1687421245709),
(51, NULL, 19, 20, 19, 'hello', 1687421314388),
(52, NULL, 19, 20, 19, 'hello', 1687421412090),
(53, NULL, 19, 20, 19, 'hi', 1687421739863),
(54, NULL, 19, 20, 19, '123', 1687421961673),
(55, NULL, 19, 20, 19, 'hello', 1687422245684),
(56, NULL, 20, 19, 20, 'hello', 1687422261005),
(57, NULL, 20, 19, 20, 'hi', 1687422325956),
(58, NULL, 19, 20, 19, 'hello', 1687422431047),
(59, NULL, 19, 20, 19, 'hi', 1687422499172),
(60, NULL, 19, 20, 19, 'helo Pham', 1687422650947),
(61, NULL, 20, 19, 20, 'helo admin', 1687422661881),
(62, NULL, 19, 20, 19, 'hello Pham', 1687422719701),
(63, NULL, 19, 20, 19, 'hello Pham', 1687422747053),
(64, NULL, 20, 19, 20, 'hello admin', 1687422759318),
(65, NULL, 20, 19, 20, 'helo Pham', 1687422804007),
(66, NULL, 20, 19, 20, 'hi admin', 1687422861293),
(67, NULL, 20, 19, 20, 'hello pham', 1687422867442),
(68, NULL, 19, 20, 19, 'hello pham', 1687422872446),
(69, NULL, 19, 20, 19, '2023', 1687422882834),
(70, NULL, 20, 19, 20, 'hi', 1687422886954),
(71, NULL, 20, 19, 20, 'hello', 1687422890626),
(72, NULL, 19, 20, 19, 'hi', 1687422900457),
(73, NULL, 20, 19, 20, 'hi Pham', 1687422967905),
(74, NULL, 19, 20, 19, 'Hi ADMIN', 1687423062919),
(75, NULL, 20, 19, 20, 'Hi ADMIN', 1687423074368),
(76, NULL, 19, 20, 19, 'hi Pham', 1687423110459),
(77, NULL, 20, 19, 20, 'Hi admin', 1687423118067),
(78, NULL, 20, 19, 20, 'HI PHAM', 1687423174286),
(79, NULL, 20, 19, 20, 'hi pham', 1687423211516),
(80, NULL, 20, 19, 20, 'tôi test tin nhắn lần 1', 1687423230792),
(81, NULL, 19, 20, 19, 'tôi test tin nhắn lần 2', 1687423236270);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_room`
--

CREATE TABLE `tbl_room` (
  `id` int(11) UNSIGNED NOT NULL,
  `roomName` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL,
  `updated_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_room`
--

INSERT INTO `tbl_room` (`id`, `roomName`, `active`, `created_at`, `updated_at`) VALUES
(1, 'JavaScript', 1, 1687228526411, 0),
(2, 'Python', 1, 1687228526411, 0),
(3, 'PHP', 1, 1687228526411, 0),
(4, 'C#', 1, 1687228526411, 0),
(5, 'Ruby', 1, 1687228526411, 0),
(6, 'Java', 1, 1687228526411, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `roomID` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL,
  `updated_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `email`, `password`, `refresh_token`, `roomID`, `active`, `created_at`, `updated_at`) VALUES
(19, 'PhatPham', 'phamhoangminhphat.it@gmail.com', '$2b$10$CyXmrqbRNm3aTPV3eAGIe./03OoHFVu6RsXgsEJ0j9mYjjjyBZEa.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJ1c2VybmFtZSI6IlBoYXRQaGFtIiwiaWF0IjoxNjg3NDIzMTk0LCJleHAiOjE2ODc2ODIzOTR9.1JiUQyhD73Sl9ZRIMyiOyCeQv9EiaWTV9Q47u9h7SjQ', NULL, NULL, 1687324824607, NULL),
(20, 'admin', 'admin@gmail.com', '$2b$10$BMeXtKAMd2KmN0hcHMUecOpdVOGZPBlaNtzG7hqxTQr/0u3KTebCi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg3NDIzMTkxLCJleHAiOjE2ODc2ODIzOTF9.iC3cCcVhoHzo5Dlvif5fV1oL8xpP9WU2TFe0sCO3B0U', NULL, NULL, 1687330892976, NULL),
(21, 'Admin1', 'admin2@gmai.com', '$2b$10$sofD2UbP3W3T6Ot8i2IeAeVnz5WRJ.jlPHdDVpfOgOTRtTQaK31Ci', NULL, NULL, NULL, 1687335376387, NULL),
(22, 'admin2', 'admin2@gmail.com', '$2b$10$rlaa0yPPTa9hlpXQJ7Hff.NPeBBFB.2oYC7RKlN1ZFUKj22BxhNam', NULL, NULL, NULL, 1687341954790, NULL),
(23, 'admin3', 'admin3@gmail.com', '$2b$10$pem6T6ykpwLWjYdpKjd.MO2zcjC2Cm6WmgT4HEBkajx2MSUxxXeWi', NULL, NULL, NULL, 1687341978416, NULL),
(24, 'admin4', 'admin4@gmail.com', '$2b$10$UWJqaiZoSxqbZbd2EJQAg.oRd5iKjlcOJ0nfap.gg4wERdlSzeNJa', NULL, NULL, NULL, 1687341997711, NULL),
(25, 'admin5', 'admin5@gmail.com', '$2b$10$wEsRBaiSi6beaiVOB/1c7ekcPJu/cSpB4GRaNb/.7dFnElFwCYumW', NULL, NULL, NULL, 1687342002665, NULL),
(26, 'admin6', 'admin6@gmail.com', '$2b$10$lt8u3PXy05KU95B7tiUvr.Ehi7tIsFMYmAD4swg4d3AWsSCDoQWX2', NULL, NULL, NULL, 1687342054744, NULL),
(27, 'admin7', 'admin7@gmail.com', '$2b$10$QyKSfBojuVn1K8boaq.ej.AWzub1QHackOEDHTq0fi7FEspM1qiOW', NULL, NULL, NULL, 1687342059342, NULL),
(28, 'admin8', 'admin8@gmail.com', '$2b$10$jSM5QJZfLqDr0KHWVhWtsOjA0hb9sPwGy715uSNQeZ48GOA4Mxfl2', NULL, NULL, NULL, 1687342086105, NULL),
(29, 'admin9', 'admin9@gmail.com', '$2b$10$XgtgGP8VZXPO/2NJH52RMuMfWtivibokVZ/AZ6J5KchgbaeYd1MYa', NULL, NULL, NULL, 1687342173565, NULL),
(30, 'admin10', 'admin10@gmail.com', '$2b$10$RsyjBmeE3cEF9aciBQ2c3.lZZQxXwjKeBb56zF4EGk7wc.KVqBDPa', NULL, NULL, NULL, 1687342193801, NULL),
(31, 'admin11', 'admin11@gmail.com', '$2b$10$/VwA8GLofN/ZTtWQXh5.ielSyH4J9DGbmnVqHEeguIzs9g1ADe7jy', NULL, NULL, NULL, 1687342213764, NULL),
(32, 'admin12', 'admin12@gmail.com', '$2b$10$50KxHuijhnzT5FCqZY4O0.PqHmQvuwEaEcZTd/Sa0fnmjRHGOGzOq', NULL, NULL, NULL, 1687342233528, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_room`
--
ALTER TABLE `tbl_room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `tbl_room`
--
ALTER TABLE `tbl_room`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
