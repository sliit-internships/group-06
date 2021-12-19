-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2021 at 07:01 PM
-- Server version: 8.0.26
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interndbsliit`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `size` varchar(300) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `registeredYear` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `registeredCounty` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `sid` int NOT NULL,
  `studentIdNumber` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `currentYear` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Year2CompletionYear` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Year2CompletionPeriod` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sepcialization` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mobile` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `homePhone` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `internshipStartDate` date NOT NULL,
  `supervisorEmail` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`sid`, `studentIdNumber`, `currentYear`, `Year2CompletionYear`, `Year2CompletionPeriod`, `sepcialization`, `name`, `mobile`, `homePhone`, `internshipStartDate`, `supervisorEmail`) VALUES
(1, 'IT18117974', 'Year 3', '2019', 'July - Nov', 'IT', 'Punchihewa D.G', '94772269563', '94112590558', '2021-04-21', 'dilpripunchihewa@gmail.com'),
(4, 'IT18187588', 'Year 4', '2019', 'July - Nov', 'IT', 'Jayasinghe J.M.H.N', '94772269563', '94112590558', '2021-04-21', 'dilpripunchihewa@gmail.com'),
(6, 'IT18173864', 'Year 4', '2019', 'July - Nov', 'IT', 'Serasinghe S.D.D.T', '94766690518', '94112590558', '2021-04-21', 'dilpripunchihewa@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `usertype` varchar(300) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `usertype`) VALUES
(1, 'it18117974@my.sliit.lk', '$2b$10$w02T2culr5FmPfJP51IrHeXuNYtJDjtn8ltG/Lkd65ARhRmPKCJQa', 'student'),
(2, 'it18122992@my.sliit.lk', '$2b$10$9.DQw3NhXUf.8jWHzd2jzeToZuLo6IeHW8ZpCD87C5O77ycVvloVi', 'student'),
(3, 'dilpripunchihewa@gmail.com', '$2b$10$6TcuruWmwgiXzDqvkK6KxOYjVECMRK0iFBpOS4aZ/bKyCqA3LDgoC', 'supervisor'),
(4, 'it18187588@my.sliit.lk', '$2b$10$m/nqM2./P2RvLNKiWmr4ouw71wanZU9u.r4dNXoWIpj.dAz1gC/JC', 'student'),
(5, 'it18117975@my.sliit.lk', '$2b$10$3rqc8F67tuecDGixC9WExOEo4cr9t8hujwqKWPryBzvZQLaOFO9me', 'student'),
(6, 'it18173864@my.sliit.lk', '$2b$10$lETnwUMeGM6DylIdPGGPy.ND9WluOqvMXHoZZ8VKeTQa16USHtn8y', 'student'),
(7, 'it18117976@my.sliit.lk', '$2b$10$JOZZqqO/2Id11r7ey6w8VepO4eQz9u4UUGjr6Vm9tAZNKTw7ceaIO', 'student'),
(8, 'it18117977@my.sliit.lk', '$2b$10$J4XjwmMyzkvtlwq1AXG3SOA9yLq9j3GXMVqixAgePtYbK6QpU6MwW', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
