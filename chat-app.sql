-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2023 at 02:54 PM
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
  `userTo` int(11) NOT NULL,
  `senderID` int(11) DEFAULT NULL,
  `roomId` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_chat`
--

INSERT INTO `tbl_chat` (`id`, `userTo`, `senderID`, `roomId`, `message`, `filename`, `created_at`) VALUES
(138, 19, 20, 0, 'hello', NULL, 1687442580074),
(139, 19, 20, 0, 'hello', NULL, 1687442595528),
(140, 19, 20, 0, 'hi', NULL, 1687442598722),
(141, 19, 20, 0, 'hi', NULL, 1687442616874),
(142, 19, 20, 0, 'hello', NULL, 1687442707279),
(143, 20, 19, 0, 'hello', NULL, 1687442712430),
(144, 20, 19, 0, 'hello admin', NULL, 1687442724867),
(145, 19, 20, 0, 'hello pham', NULL, 1687442740526),
(146, 19, 20, 0, 'hello guy', NULL, 1687442766827),
(147, 19, 20, 0, 'hello', NULL, 1687442795051),
(148, 19, 20, 0, 'hello', NULL, 1687442818475),
(149, 19, 20, 0, 'hi guy', NULL, 1687442872752),
(150, 20, 19, 0, 'hi', NULL, 1687442877122),
(151, 20, 19, 0, 'hello', NULL, 1687442933969),
(152, 19, 20, 0, 'hi', NULL, 1687443024970),
(153, 19, 20, 0, 'hi', NULL, 1687443057055),
(154, 20, 20, 0, 'hi', NULL, 1687443065817),
(155, 20, 19, 0, 'hello', NULL, 1687443074947),
(156, 20, 19, 0, 'hi', NULL, 1687443094498),
(157, 20, 19, 0, 'hello', NULL, 1687443099700),
(158, 20, 19, 0, 'Hôm nay bạn thấy thế nào', NULL, 1687443113235),
(159, 20, 19, 0, 'Hôm nay tôi thấy ổn', NULL, 1687443119423),
(160, 20, 19, 0, 'còn bạn thì sao ', NULL, 1687443122991),
(161, 19, 20, 0, 'Tôi cũng thấy vui ', NULL, 1687443128356),
(162, 19, 20, 0, 'hoom nay trời mưa mát lắm ', NULL, 1687443134431),
(163, 20, 19, 0, 'hi cậu', NULL, 1687443152198),
(164, 19, 20, 0, 'hi tớ đây', NULL, 1687443156956),
(165, 19, 20, 0, 'có gì hong cậu', NULL, 1687443161265),
(166, 20, 19, 0, 'hong có gì cậu nhé', NULL, 1687443166285),
(167, 19, 20, 0, 'ok cậu 😍😍', NULL, 1687443180347),
(168, 20, 19, 0, 'good night cậu nha 😜😜', NULL, 1687443197638),
(169, 19, 20, 0, 'tớ làm tiếp chức năng room đây ', NULL, 1687443410835),
(170, 19, 20, 0, 'hello em ', NULL, 1687450042030),
(171, 20, 19, 0, 'hello anh', NULL, 1687450046052),
(179, 19, 20, 0, NULL, 'image_1687512203412_424552560.png', 1687512203432),
(180, 20, 19, 0, NULL, 'image_1687512207116_77187491.png', 1687512207130),
(181, 19, 20, 0, NULL, 'image_1687512595321_145580253.png', 1687512595400),
(182, 20, 19, 0, 'hello', NULL, 1687519931982),
(183, 20, 19, 0, NULL, 'image_1687520763942_466522793.png', 1687520763965),
(184, 20, 19, 0, NULL, 'image_1687521248080_578691930.png', 1687521248098),
(185, 20, 19, 0, NULL, 'image_1687521291463_124322651.png', 1687521291500),
(186, 20, 19, 0, NULL, 'image_1687521627642_236093726.png', 1687521627654),
(187, 20, 19, 0, NULL, 'image_1687522056753_37141244.png', 1687522056770),
(188, 20, 19, 0, NULL, 'image_1687522113168_995315622.png', 1687522113184),
(189, 20, 19, 0, NULL, 'image_1687526218852_431901108.png', 1687526218891),
(190, 20, 19, 0, 'hello', NULL, 1687526291796),
(191, 19, 20, 0, NULL, 'image_1687526335843_453781955.png', 1687526335865),
(192, 19, 20, 0, NULL, 'image_1687526385886_915677323.png', 1687526385912),
(193, 19, 20, 0, NULL, 'image_1687526399462_975239460.png', 1687526399476),
(194, 19, 20, 0, 'hi', NULL, 1687526459373),
(195, 19, 20, 0, NULL, 'image_1687526459357_832658503.png', 1687526459378),
(196, 19, 20, 0, 'hello', NULL, 1687526479776),
(197, 20, 19, 0, 'helo', NULL, 1687526508759),
(198, 20, 19, 0, 'hi', NULL, 1687526524542),
(199, 20, 19, 0, 'tooi xin camr onw', NULL, 1687526528725),
(200, 19, 20, 0, NULL, 'image_1687526587407_23074427.png', 1687526587430),
(201, 19, 20, 0, NULL, 'image_1687526831059_423254973.png', 1687526831094),
(202, 19, 20, 0, 'hello', NULL, 1687526858649),
(203, 19, 20, 0, NULL, 'image_1687526871169_695814943.png', 1687526871184),
(204, 19, 20, 0, 'hi', NULL, 1687526997715),
(205, 19, 20, 0, NULL, 'image_1687527009365_817039477.png', 1687527009456),
(206, 20, 19, 0, 'hello', NULL, 1687527038887),
(207, 19, 20, 0, 'hello', NULL, 1687527312366),
(208, 19, 20, 0, NULL, 'image_1687527370931_38270306.png', 1687527370954),
(209, 19, 20, 0, 'hi', NULL, 1687527402616),
(210, 19, 20, 0, 'hello', NULL, 1687527411919),
(211, 19, 20, 0, 'xi chaof', NULL, 1687527415623),
(212, 19, 20, 0, NULL, 'image_1687527493169_894937467.png', 1687527493217),
(213, 19, 20, 0, NULL, 'image_1687527574127_809367371.png', 1687527574158),
(214, 19, 20, 0, NULL, 'image_1687528246043_325253426.png', 1687528246070),
(215, 19, 20, 0, NULL, 'image_1687528267361_138104074.png', 1687528267399),
(216, 19, 20, 0, NULL, 'image_1687528400115_144784605.png', 1687528400147),
(217, 19, 20, 0, NULL, 'image_1687528531636_487235900.png', 1687528531653),
(218, 19, 20, 0, NULL, 'image_1687528546910_826772158.png', 1687528546975),
(219, 20, 19, 0, NULL, 'image_1687528589776_28642852.png', 1687528589815),
(220, 19, 20, 0, 'hello', NULL, 1687529054819),
(221, 19, 20, 0, 'hi', NULL, 1687529062353),
(222, 19, 20, 0, 'xin chào bạn', NULL, 1687529066149),
(223, 19, 20, 0, 'hi', NULL, 1687529200609),
(224, 20, 19, 0, 'heoolllo', NULL, 1687583875588),
(225, 19, 20, 0, 'hi', NULL, 1687583903618),
(226, 20, 19, 0, 'hello', NULL, 1687583909510),
(227, 20, 19, 0, 'hello', NULL, 1687583917961),
(228, 19, 20, 0, 'hi', NULL, 1687583934689),
(229, 20, 19, 0, 'hi', NULL, 1687583951746),
(230, 19, 20, 0, 'hi', NULL, 1687583980470),
(231, 20, 19, 0, 'helo', NULL, 1687583990711),
(232, 20, 19, 0, NULL, 'image_1687584011592_332733450.png', 1687584011662),
(233, 0, 19, 36, 'Hello', NULL, 1687674756784),
(234, 19, 20, NULL, 'hello', NULL, 1687676145093),
(235, 0, 20, 36, 'message text chat room', NULL, 1687676161486),
(236, 20, 19, NULL, 'hi', NULL, 1687676164121),
(237, 19, 20, NULL, 'xin chào', NULL, 1687676330270),
(238, 0, 19, 36, 'Tin nhắn test lần 2', NULL, 1687676697222),
(239, 20, 19, NULL, 'hello', NULL, 1687678177709),
(240, 20, 19, NULL, 'hi', NULL, 1687691552545),
(241, 20, 19, NULL, 'hello', NULL, 1687691554598),
(242, 19, 20, NULL, 'xin chaof ', NULL, 1687691557796),
(243, 19, 20, NULL, 'tin nhanws test 1', NULL, 1687691567260),
(244, 20, 19, NULL, 'tin nhanws test 2', NULL, 1687691576290),
(245, 19, 20, NULL, NULL, 'image_1687691582320_904384200.png', 1687691582338),
(246, 20, 19, NULL, NULL, 'image_1687691593633_782732643.png', 1687691593683),
(247, 19, 20, NULL, 'hi', NULL, 1687742962350),
(248, 19, 20, NULL, NULL, 'image_1687743018066_297087640.png', 1687743018080),
(249, 19, 20, NULL, 'hi hello', NULL, 1687743181347),
(250, 20, 19, NULL, 'hi', NULL, 1687743287514),
(251, 19, 20, NULL, 'hello 😛😛😛😛', NULL, 1687743326901),
(252, 20, 19, NULL, NULL, 'image_1687743391321_669847544.png', 1687743391377),
(253, 0, 20, 36, 'cần lắm 1 tin nhắn chuẩn ', NULL, 1687771040440),
(254, 0, 20, 36, 'hello', NULL, 1687771078219),
(255, 0, 20, 36, 'hello', NULL, 1687771108047),
(256, 0, 19, 36, 'vậy sao', NULL, 1687771114395),
(257, 0, 20, 36, 'hello', NULL, 1687771138348),
(258, 0, 19, 36, 'xin chào', NULL, 1687771160824),
(259, 0, 20, 36, 'vậy sao', NULL, 1687771232312),
(260, 0, 20, 36, 'xin chào', NULL, 1687771306099),
(261, 0, 19, 36, 'hi', NULL, 1687771337555),
(262, 0, 20, 36, 'xin chào', NULL, 1687771707579),
(263, 0, 19, 36, 'hi', NULL, 1687771719994),
(264, 20, 19, NULL, 'hi', NULL, 1687771725764),
(265, 20, 19, NULL, 'xin chào', NULL, 1687771728448),
(266, 19, 20, NULL, 'chào cậu', NULL, 1687771732314),
(267, 0, 20, 36, 'hello', NULL, 1687771759126),
(268, 0, 19, 36, 'hi', NULL, 1687771798343),
(269, 0, 20, 37, 'xin chào', NULL, 1687771828056),
(270, 0, 20, 37, 'hi', NULL, 1687772055782),
(271, 0, 20, 37, 'dị là sao ta', NULL, 1687772063970),
(272, 0, 20, 35, 'hi', NULL, 1687772140296),
(273, 0, 20, 35, 'là sao ta', NULL, 1687772155033),
(274, 0, 20, 35, 'hong hỉu', NULL, 1687772177158),
(275, 0, 20, 35, 'là sao ta ', NULL, 1687772188284),
(276, 0, 20, 35, 'là dị đó', NULL, 1687772199411),
(277, 0, 19, 35, 'dị á hả', NULL, 1687772203186),
(278, 0, 20, 35, 'dữ dị sao', NULL, 1687772230871),
(279, 0, 20, 35, 'chứ sao', NULL, 1687772246064),
(280, 0, 19, 35, 'sao nữa', NULL, 1687772269396),
(281, 0, 20, 35, 'là sao ta', NULL, 1687772285646),
(282, 0, 20, 35, 'hello', NULL, 1687772336198),
(283, 0, 20, 35, 'hi', NULL, 1687772348225),
(284, 0, 20, 35, 'hi', NULL, 1687772357774),
(285, 0, 20, 35, 'hello', NULL, 1687772370699),
(286, 0, 19, 35, 'hello', NULL, 1687772373860),
(287, 0, 20, 35, 'hi', NULL, 1687772413725),
(288, 0, 20, 35, 'hello', NULL, 1687772452351),
(289, 0, 19, 35, 'helllo', NULL, 1687772473888),
(290, 0, 19, 35, 'hi', NULL, 1687772505289),
(291, 0, 20, 35, 'hello', NULL, 1687772518465),
(292, 0, 19, 35, 'hi', NULL, 1687772543143),
(293, 0, 19, 35, 'hrllo', NULL, 1687772564154),
(294, 0, 20, 35, 'hi', NULL, 1687772647191),
(295, 0, 20, 35, 'hi', NULL, 1687772690969),
(296, 0, 19, 35, 'hi', NULL, 1687772695273),
(297, 0, 20, 35, 'hi', NULL, 1687772729248),
(298, 0, 20, 35, 'hello', NULL, 1687772865050),
(299, 0, 20, 35, 'hello 2', NULL, 1687772891462),
(300, 0, 20, 35, 'hello 3', NULL, 1687772904521),
(301, 0, 20, 35, 'hello 4', NULL, 1687772974060),
(302, 0, 19, 35, 'hello 5', NULL, 1687772988934),
(303, 0, 20, 35, 'hello 6', NULL, 1687773755664),
(304, 0, 20, 35, 'hello 7', NULL, 1687773864579),
(305, 0, 19, 35, 'hello 8', NULL, 1687773921575),
(306, 0, 19, 35, 'hello 9', NULL, 1687773938626),
(307, 0, 20, 35, 'hello 10', NULL, 1687774079316),
(308, 0, 20, 35, 'hello sowf lloo', NULL, 1687774113606),
(309, 0, 20, 35, 'vay thi sao nao', NULL, 1687774139367),
(310, 0, 20, 35, 'thif lamf sao', NULL, 1687774160117),
(311, 0, 19, 35, 'ko biet', NULL, 1687774170828),
(312, 0, 20, 35, 'ua dij hat', NULL, 1687774177806),
(313, 0, 20, 35, 'hello', NULL, 1687774330656),
(314, 0, 20, NULL, NULL, 'image_1687774349205_121643495.png', 1687774349236),
(315, 0, 20, 35, 'hi', NULL, 1687774501007),
(316, 0, 20, 35, 'hello', NULL, 1687774510970),
(317, 0, 19, 35, 'hi', NULL, 1687774636606),
(318, 0, 20, 35, 'hello', NULL, 1687774666808),
(319, 0, 19, 35, 'hi', NULL, 1687774715157),
(320, 0, 20, 35, 'hello', NULL, 1687774755134),
(321, 0, 19, 35, 'hi', NULL, 1687775029388),
(322, 0, 20, 35, 'hello', NULL, 1687775147517),
(323, 0, 19, 35, 'hi', NULL, 1687783304610),
(324, 0, 19, 35, 'hello', NULL, 1687783385934),
(325, 0, 19, 36, 'hello', NULL, 1687783451435),
(326, 0, 19, 35, 'hi', NULL, 1687783541515),
(327, 0, 20, 36, 'hi', NULL, 1687784061878),
(328, 0, 19, 36, 'hello', NULL, 1687784318932),
(329, 0, 19, 35, 'hello', NULL, 1687790110446),
(330, 0, 19, 35, 'hi', NULL, 1687790142585),
(331, 0, 19, 35, 'hi', NULL, 1687790188340),
(332, 0, 19, 35, 'hello', NULL, 1687790302893),
(333, 0, 20, 35, 'hi', NULL, 1687790359997),
(334, 0, 19, 35, 'hi', NULL, 1687790400216),
(335, 0, 20, 35, 'hello', NULL, 1687790423537),
(336, 0, 19, 35, 'hi', NULL, 1687790452802),
(337, 0, 19, 35, 'dij sao', NULL, 1687790464363),
(338, 0, 19, 35, 'ddungs rooif ', NULL, 1687790468070),
(339, 0, 19, 35, 'Dị á hả', NULL, 1687790549593),
(340, 20, 19, NULL, 'hello', NULL, 1687790557155),
(341, 20, 19, NULL, 'xin chào', NULL, 1687790559871),
(342, 19, 20, NULL, 'hi', NULL, 1687790615228),
(343, 0, 22, 36, 'xin chào', NULL, 1687790632796),
(344, 0, 22, 36, 'hôm nay dui quá', NULL, 1687790659095),
(345, 0, 20, 36, 'làm gì mà dui mà ', NULL, 1687790664163),
(346, 0, 19, 36, 'hong biết nữa', NULL, 1687790668892),
(347, 0, 22, 36, 'dị á hả', NULL, 1687790673206),
(348, 0, 20, 36, 'test 1', NULL, 1687790713951),
(349, 0, 19, 36, 'test 2', NULL, 1687790722553),
(350, 0, 22, 36, 'test 3', NULL, 1687790727957),
(351, 0, 22, 36, 'test ', NULL, 1687790761410),
(352, 0, 20, 36, 'ok', NULL, 1687790765076),
(353, 0, 19, 36, 'ok', NULL, 1687790767928),
(354, 0, 22, 36, 'dị á hả', NULL, 1687790771479),
(355, 0, 22, 36, 'là sao ta ', NULL, 1687790774560),
(356, 0, 20, 36, 'tui hong hiểu', NULL, 1687790779650),
(357, 0, 22, 36, 'là sao ta', NULL, 1687790864109),
(358, 0, 22, 36, 'tui ko rõ nữa', NULL, 1687790873609),
(359, 0, 19, 36, 'ko hỉu', NULL, 1687790878851),
(360, 0, 20, 36, 'rất khó hiểu', NULL, 1687790883873),
(361, 0, 22, 36, 'vấn đề là gì nhỉ', NULL, 1687790891882),
(362, 0, 22, 36, 'tôi ko biết nun', NULL, 1687790896617),
(363, 0, 19, 36, 'tại sao lại render ra 2 cái ', NULL, 1687790905124),
(364, 0, 22, 36, 'hello admin', NULL, 1687790962869),
(365, 0, 20, 36, 'hello pham', NULL, 1687790971724),
(366, 0, 19, 36, 'hello admin 2', NULL, 1687790977288),
(367, 0, 22, 36, 'hello admin 3', NULL, 1687791069652),
(368, 0, 20, 36, 'hello admin 4', NULL, 1687791159311),
(369, 0, 19, 36, 'hello admin 3', NULL, 1687791165363),
(370, 0, 19, 36, 'là sao ta', NULL, 1687791179499),
(371, 0, 22, 36, 'tớ hong hiểu nguyên lý lắm ', NULL, 1687791192668),
(372, 0, 22, 36, 'là sao ta', NULL, 1687791235883),
(373, 0, 20, 36, 'hong hỉu', NULL, 1687791254599),
(374, 0, 20, 36, 'vấn đề là gì', NULL, 1687791278550),
(375, 0, 20, 35, 'chưa tìm ra nguyên nhân', NULL, 1687791297390),
(376, 0, 20, 35, 'vậy được nun', NULL, 1687791321426),
(377, 0, 20, 35, 'ok nun ', NULL, 1687791326280),
(378, 0, 20, 35, 'ổn rồi ', NULL, 1687791329988),
(379, 0, 22, 36, 'vâng', NULL, 1687791334595),
(380, 0, 19, 36, 'quá ổn', NULL, 1687791339249),
(381, 0, 20, 35, 'chác là ổn chứ', NULL, 1687791345012),
(382, 0, 22, 36, 'chắc dị ', NULL, 1687791352519),
(383, 0, 22, 36, 'ò', NULL, 1687791374219),
(384, 0, 20, 36, 'rồi sao ta', NULL, 1687791380476),
(385, 0, 19, 36, 'vấn đề là gì ta', NULL, 1687791387886),
(386, 0, 20, 36, 'ko rõ nữa', NULL, 1687791422212),
(387, 0, 22, 36, 'vấn đề nan giải ghê', NULL, 1687791575295),
(388, 0, 22, 36, 'bó tay', NULL, 1687791632269),
(389, 0, 20, 36, 'bó lun cả chân', NULL, 1687791638386),
(390, 0, 19, 36, 'bó toàn thân', NULL, 1687791643575),
(391, 0, 20, 36, 'rồi xong', NULL, 1687791699361),
(392, 0, 20, 36, 'xong chưa', NULL, 1687791767437),
(393, 0, 22, 36, 'thấy tạm ổn', NULL, 1687791783104),
(394, 0, 22, 36, 'làm sao ta', NULL, 1687793435778),
(395, 0, 22, 36, 'là sao ta', NULL, 1687793593716),
(396, 0, 20, 36, 'hong hiểu ý lắm ', NULL, 1687793601420),
(397, 0, 22, 36, 'dị á hả', NULL, 1687793614242),
(398, 0, 20, 36, 'vâng', NULL, 1687793634346),
(399, 0, 22, 36, 'kê kê', NULL, 1687793753680),
(400, 0, 22, 36, 'ok ', NULL, 1687793880290),
(401, 0, 20, 36, 'vâng', NULL, 1687793884170),
(402, 0, 22, 36, 'ok', NULL, 1687793963816),
(403, 0, 19, 36, 'ok', NULL, 1687794010781),
(404, 0, 19, 36, 'vâng', NULL, 1687794015289),
(405, 0, 22, 36, 'là sao ta', NULL, 1687794060915),
(406, 22, 19, NULL, 'hello', NULL, 1687794078445),
(407, 22, 19, NULL, 'xin chào bạn', NULL, 1687794083363),
(408, 0, 22, 36, 'hong hỉu lắm ', NULL, 1687794096002),
(409, 0, 22, 36, 'laf sao ta', NULL, 1687794156179),
(410, 0, 20, 36, 'laf dij har', NULL, 1687794166656),
(411, 0, 20, 36, 'ngur hoi', NULL, 1687794388688),
(412, 0, 20, 36, 'ngur hoi', NULL, 1687794421510),
(413, 0, 20, 36, 'ngur ngon nha', NULL, 1687794439137),
(414, 0, 22, 36, 'ok babe', NULL, 1687794464794),
(415, 0, 20, 36, 'ok sowr kee lun', NULL, 1687794470723),
(416, 0, 19, 36, 'nhaats tri', NULL, 1687794475711),
(417, 0, 20, 36, 'ok nun', NULL, 1687829884185),
(418, 0, 19, 36, 'ok', NULL, 1687829898249),
(419, 0, 20, 36, 'morrning sir', NULL, 1687829908997),
(420, 0, 19, 36, 'hellp', NULL, 1687829933785),
(421, 0, 19, 35, 'vaayj har', NULL, 1687829952550),
(422, 0, 20, 35, 'chuws sao', NULL, 1687830033837),
(423, 0, 19, 35, 'sao sao', NULL, 1687830083701),
(424, 19, 20, NULL, 'hi', NULL, 1687830128626),
(425, 20, 19, NULL, 'hello', NULL, 1687830131777),
(426, 0, 20, 35, 'har', NULL, 1687830141838),
(427, 0, 22, 36, 'help', NULL, 1687830181328),
(428, 0, 22, 36, 'ok', NULL, 1687830195735),
(429, 0, 20, 36, 'ok', NULL, 1687830213439),
(430, 0, 22, 36, 'vaans ddeef laf gif ta', NULL, 1687830220020),
(431, 0, 19, 36, 'ko rox nuawx', NULL, 1687830225477),
(432, 0, 22, 36, 'laf sao ta', NULL, 1687830231106),
(433, 0, 20, 36, 'hong nhows ', NULL, 1687830237276),
(434, 0, 19, 36, 'hong biets', NULL, 1687830243101),
(435, 0, 22, 36, 'hello', NULL, 1687830247097),
(436, 0, 19, 36, 'vaang', NULL, 1687830257599),
(437, 0, 20, 36, 'vaang', NULL, 1687830261227),
(438, 0, 22, 36, 'laf sao ta', NULL, 1687830264843),
(439, 0, 20, 36, 'ok', NULL, 1687830280263),
(440, 0, 19, 36, 'ok', NULL, 1687830283290),
(441, 0, 22, 36, 'ok', NULL, 1687830296795),
(442, 0, 19, 36, 'laf sao', NULL, 1687830310116),
(443, 0, 19, 36, '123123123', NULL, 1687830324113),
(444, 0, 20, 36, '123123123', NULL, 1687830327827),
(445, 0, 19, 36, 'laf sao', NULL, 1687830334488),
(446, 0, 19, 36, 'ko bieets rox', NULL, 1687830372036),
(447, 20, 19, NULL, 'hi', NULL, 1687830382648),
(448, 19, 20, NULL, 'hello', NULL, 1687830387175),
(449, 0, 22, 36, 'of', NULL, 1687830419281),
(450, 0, 22, 36, 'kkk', NULL, 1687830431181),
(451, 0, 22, 36, 'ok', NULL, 1687830434436),
(452, 0, 19, 36, 'kkk', NULL, 1687830437673),
(453, 0, 20, 36, 'kk', NULL, 1687830443665),
(454, 0, 22, 36, 'kk', NULL, 1687830446321),
(455, 0, 19, 36, 'kkkk', NULL, 1687830449999),
(456, 0, 19, 36, 'hhh', NULL, 1687830489843),
(457, 0, 19, 36, 'hhh', NULL, 1687830509025),
(458, 0, 19, 36, 'aaa', NULL, 1687830516064),
(459, 0, 22, 36, 'bbb', NULL, 1687830524914),
(460, 0, 20, 36, 'ccc', NULL, 1687830533504),
(461, 0, 19, 36, 'ddd', NULL, 1687830539283),
(462, 0, 22, 36, 'qqq', NULL, 1687830570234),
(463, 0, 22, 36, 'www', NULL, 1687830586285),
(464, 0, 22, 36, 'eee', NULL, 1687830608228),
(465, 0, 19, 36, 'rrrr', NULL, 1687830618176),
(466, 0, 20, 36, 'mmm', NULL, 1687830627254),
(467, 0, 22, 36, 'ddd', NULL, 1687830697037),
(468, 0, 19, 36, 'fff', NULL, 1687830726878),
(469, 0, 22, 36, 'ggg', NULL, 1687830769854),
(470, 0, 19, 36, 'hhh', NULL, 1687830813429),
(471, 0, 22, 36, 'ttt', NULL, 1687830863782),
(472, 0, 19, 36, 'fff', NULL, 1687830902806),
(473, 0, 20, 36, 'hhh', NULL, 1687830908910),
(474, 0, 19, 36, 'jjj', NULL, 1687830913812),
(475, 0, 19, 36, 'yyy', NULL, 1687830929943),
(476, 0, 19, 36, 'tttt', NULL, 1687830977469),
(477, 0, 20, 36, 'yyyy', NULL, 1687830980897),
(478, 0, 19, 36, 'uuuuu', NULL, 1687830987161),
(479, 0, 19, 36, 'jjjj', NULL, 1687831044695),
(480, 0, 19, 36, 'yyyy', NULL, 1687831073396),
(481, 0, 22, 36, 'iiii', NULL, 1687831075932),
(482, 0, 22, 36, '😘😘 hello 1', NULL, 1687831096410),
(483, 0, 19, 36, '😘😘 hello 2', NULL, 1687831100183),
(484, 0, 20, 36, '😘😘 hello 3', NULL, 1687831103549),
(485, 0, 19, 36, '😘😘 hello 4', NULL, 1687831107373),
(530, 20, 19, NULL, 'hi', NULL, 1687838092002),
(531, 19, 20, NULL, 'hello', NULL, 1687838096460),
(532, 20, 19, NULL, 'hi', NULL, 1687838107210),
(533, 19, 20, NULL, 'hi', NULL, 1687838109735),
(534, 19, 20, NULL, NULL, 'image_1687838118657_49987040.png', 1687838118741),
(535, 20, 19, NULL, NULL, 'image_1687838130639_64815912.rar', 1687838130644),
(536, 0, 20, 47, 'hi', NULL, 1687838590034),
(537, 0, 19, 47, 'hello', NULL, 1687838593695),
(538, 0, 19, 47, NULL, 'image_1687838731379_725394440.png', 1687838731403),
(539, 0, 19, 47, NULL, 'image_1687838778022_469702030.rar', 1687838778031),
(540, 19, 20, NULL, 'hello', NULL, 1687847652980),
(541, 19, 20, NULL, 'hello', NULL, 1687847672880),
(542, 20, 19, NULL, 'hi', NULL, 1687847675979),
(543, 19, 20, NULL, 'hello', NULL, 1687847679478),
(544, 20, 19, NULL, 'hello ', NULL, 1687847696304),
(545, 19, 20, NULL, 'hi', NULL, 1687847698554),
(546, 19, 20, NULL, 'hoom nay troiwf ddej thees nhif', NULL, 1687847703916),
(547, 19, 20, NULL, 'ddungs oif ', NULL, 1687847710754),
(548, 19, 20, NULL, 'troiwf ddepj thees nayf thf af gi ta', NULL, 1687847717466),
(549, 19, 20, NULL, 'limit', NULL, 1687847724604),
(550, 19, 20, NULL, 'limit', NULL, 1687847724896),
(551, 19, 20, NULL, 'limit', NULL, 1687847725171),
(552, 19, 20, NULL, 'limit', NULL, 1687847725460),
(553, 19, 20, NULL, 'limit', NULL, 1687847725760),
(554, 19, 20, NULL, 'limit', NULL, 1687847726997),
(555, 20, 19, NULL, 'limit', NULL, 1687847728619),
(556, 20, 19, NULL, 'limit', NULL, 1687847728947),
(557, 20, 19, NULL, 'limit', NULL, 1687847729322),
(558, 20, 19, NULL, 'limit', NULL, 1687847729647),
(559, 20, 19, NULL, 'limitlimitlimit', NULL, 1687847731012),
(560, 20, 19, NULL, 'limit', NULL, 1687847731673),
(561, 20, 19, NULL, 'limit', NULL, 1687847732022),
(562, 20, 19, NULL, 'limit', NULL, 1687847732372),
(563, 20, 19, NULL, 'limit', NULL, 1687847732710),
(564, 20, 19, NULL, 'limitlimitlimit', NULL, 1687847733694),
(565, 20, 19, NULL, 'limit', NULL, 1687847734046),
(566, 20, 19, NULL, 'limitlimitlimitlimit', NULL, 1687847735747),
(567, 20, 19, NULL, 'limit', NULL, 1687847736521),
(568, 20, 19, NULL, 'limit', NULL, 1687847736947),
(569, 20, 19, NULL, 'limit', NULL, 1687847737348),
(570, 20, 19, NULL, 'limit', NULL, 1687847737736),
(571, 20, 19, NULL, 'limit', NULL, 1687847738076),
(572, 20, 19, NULL, 'limit', NULL, 1687847738423),
(573, 20, 19, NULL, 'limit', NULL, 1687847738804),
(574, 20, 19, NULL, 'limit', NULL, 1687847739135),
(575, 20, 19, NULL, 'limit', NULL, 1687847739774),
(576, 0, 19, 47, 'helllo', NULL, 1687848930795),
(577, 0, 20, 47, 'hi', NULL, 1687848933378),
(578, 0, 20, 47, 'hí', NULL, 1687849485828),
(579, 19, 20, NULL, 'hi', NULL, 1687849501208),
(580, 0, 19, 47, 'hello', NULL, 1687850959121),
(581, 0, 19, 47, 'hello', NULL, 1687850969392),
(582, 0, 20, 47, 'hi', NULL, 1687850979925),
(583, 0, 19, 47, 'hello', NULL, 1687850983479),
(584, 0, 22, 47, 'hi', NULL, 1687850999279),
(585, 0, 22, 47, 'xin chào các bạn', NULL, 1687851004944),
(586, 0, 22, 47, 'ddddddddddddddddddddddddddddddddddddddddddddddddd', NULL, 1687851050180),
(587, 0, 22, 47, 'ádassssssssssssssssssssssssss', NULL, 1687851076479),
(588, 0, 22, 47, 'hhhhh', NULL, 1687851091911),
(589, 0, 20, 47, 'kkkkkkk', NULL, 1687851095219),
(590, 0, 19, 47, 'iiiiiii', NULL, 1687851099531),
(591, 0, 20, 47, 'hi', NULL, 1687949450787),
(592, 0, 19, 47, 'hello', NULL, 1687949459921),
(593, 0, 20, 47, 'hi', NULL, 1687949464356),
(594, 0, 20, 47, 'hi', NULL, 1687949468364),
(595, 19, 20, NULL, 'hello', NULL, 1687949497552),
(596, 20, 19, NULL, 'hi', NULL, 1687949499982),
(597, 0, 20, 36, 'hi', NULL, 1687949507043),
(598, 0, 22, 36, 'hi', NULL, 1687949540007);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_participant`
--

CREATE TABLE `tbl_participant` (
  `id` int(11) UNSIGNED NOT NULL,
  `userId` int(11) NOT NULL,
  `roomId` int(11) NOT NULL,
  `roomName` varchar(255) NOT NULL,
  `joined_date` bigint(22) NOT NULL,
  `left_date` bigint(22) NOT NULL,
  `created_at` bigint(22) NOT NULL,
  `updated_at` bigint(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_participant`
--

INSERT INTO `tbl_participant` (`id`, `userId`, `roomId`, `roomName`, `joined_date`, `left_date`, `created_at`, `updated_at`) VALUES
(32, 19, 36, 'BE Room', 1687665881406, 0, 1687665881406, 0),
(34, 21, 36, 'BE Room', 1687665966510, 0, 1687665966510, 0),
(35, 22, 36, 'BE Room', 1687665970915, 0, 1687665970915, 0),
(36, 22, 35, 'BE Room', 1687665985580, 0, 1687665985580, 0),
(37, 20, 35, 'Dev Room', 1687665988895, 0, 1687665988895, 0),
(38, 19, 37, 'FE Room', 1687666403169, 0, 1687666403169, 0),
(46, 19, 35, 'Dev Room', 1687667638994, 0, 1687667638994, 0),
(51, 19, 38, 'Network Room', 1687668331900, 0, 1687668331900, 0),
(52, 20, 38, 'Network Room', 1687668354823, 0, 1687668354823, 0),
(55, 20, 36, 'BE Room', 1687669570724, 0, 1687669570724, 0),
(56, 20, 37, 'FE Room', 1687743581841, 0, 1687743581841, 0),
(59, 20, 47, 'Tech Room', 1687835544499, 0, 1687835544499, 0),
(60, 19, 47, 'Tech Room', 1687835658250, 0, 1687835658250, 0),
(61, 22, 47, 'Tech Room', 1687835692035, 0, 1687835692035, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_room`
--

CREATE TABLE `tbl_room` (
  `id` int(11) UNSIGNED NOT NULL,
  `roomName` varchar(255) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL,
  `updated_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_room`
--

INSERT INTO `tbl_room` (`id`, `roomName`, `created_at`, `updated_at`) VALUES
(35, 'Dev Room', 1687664812669, NULL),
(36, 'BE Room', 1687664840277, NULL),
(37, 'FE Room', 1687664846261, NULL),
(38, 'Network Room', 1687667738915, NULL),
(46, 'Net Room', 1687743520079, NULL),
(47, 'Tech Room', 1687834165153, NULL);

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
  `active` tinyint(1) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL,
  `updated_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `email`, `password`, `refresh_token`, `active`, `created_at`, `updated_at`) VALUES
(19, 'PhatPham', 'phamhoangminhphat.it@gmail.com', '$2b$10$CyXmrqbRNm3aTPV3eAGIe./03OoHFVu6RsXgsEJ0j9mYjjjyBZEa.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJ1c2VybmFtZSI6IlBoYXRQaGFtIiwiaWF0IjoxNjg3OTQ5NDc2LCJleHAiOjE2ODgyMDg2NzZ9.dYmFg-cR8a5tk_5GhPdJ60Gyq2XgK5mWSQKjlZhG2TY', 2, 1687324824607, NULL),
(20, 'admin', 'admin@gmail.com', '$2b$10$BMeXtKAMd2KmN0hcHMUecOpdVOGZPBlaNtzG7hqxTQr/0u3KTebCi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg3OTQ5NDgwLCJleHAiOjE2ODgyMDg2ODB9.88Cv1XXWzx6Lu0p6cTv-q7KXyTQ-RyES3C3LS-LbcJg', 2, 1687330892976, NULL),
(21, 'Admin1', 'admin2@gmai.com', '$2b$10$sofD2UbP3W3T6Ot8i2IeAeVnz5WRJ.jlPHdDVpfOgOTRtTQaK31Ci', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJ1c2VybmFtZSI6IkFkbWluMSIsImlhdCI6MTY4NzQzNTM3MSwiZXhwIjoxNjg3Njk0NTcxfQ.pgAteQ1pnQGzb3P1sQqqiaSyCjWprKZZYHJF0MKwP2M', NULL, 1687335376387, NULL),
(22, 'admin2', 'admin2@gmail.com', '$2b$10$BMeXtKAMd2KmN0hcHMUecOpdVOGZPBlaNtzG7hqxTQr/0u3KTebCi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJ1c2VybmFtZSI6ImFkbWluMiIsImlhdCI6MTY4Nzk0OTUzMSwiZXhwIjoxNjg4MjA4NzMxfQ.BhKMsIcm-Aym_hFWS3hKILiUBlsQRhmmNp2xHlbMw8c', 2, 1687341954790, NULL),
(23, 'admin3', 'admin3@gmail.com', '$2b$10$pem6T6ykpwLWjYdpKjd.MO2zcjC2Cm6WmgT4HEBkajx2MSUxxXeWi', NULL, NULL, 1687341978416, NULL),
(24, 'admin4', 'admin4@gmail.com', '$2b$10$UWJqaiZoSxqbZbd2EJQAg.oRd5iKjlcOJ0nfap.gg4wERdlSzeNJa', NULL, NULL, 1687341997711, NULL),
(25, 'admin5', 'admin5@gmail.com', '$2b$10$wEsRBaiSi6beaiVOB/1c7ekcPJu/cSpB4GRaNb/.7dFnElFwCYumW', NULL, NULL, 1687342002665, NULL),
(26, 'admin6', 'admin6@gmail.com', '$2b$10$lt8u3PXy05KU95B7tiUvr.Ehi7tIsFMYmAD4swg4d3AWsSCDoQWX2', NULL, NULL, 1687342054744, NULL),
(27, 'admin7', 'admin7@gmail.com', '$2b$10$QyKSfBojuVn1K8boaq.ej.AWzub1QHackOEDHTq0fi7FEspM1qiOW', NULL, NULL, 1687342059342, NULL),
(28, 'admin8', 'admin8@gmail.com', '$2b$10$jSM5QJZfLqDr0KHWVhWtsOjA0hb9sPwGy715uSNQeZ48GOA4Mxfl2', NULL, NULL, 1687342086105, NULL),
(29, 'admin9', 'admin9@gmail.com', '$2b$10$XgtgGP8VZXPO/2NJH52RMuMfWtivibokVZ/AZ6J5KchgbaeYd1MYa', NULL, NULL, 1687342173565, NULL),
(30, 'admin10', 'admin10@gmail.com', '$2b$10$RsyjBmeE3cEF9aciBQ2c3.lZZQxXwjKeBb56zF4EGk7wc.KVqBDPa', NULL, NULL, 1687342193801, NULL),
(31, 'admin11', 'admin11@gmail.com', '$2b$10$/VwA8GLofN/ZTtWQXh5.ielSyH4J9DGbmnVqHEeguIzs9g1ADe7jy', NULL, NULL, 1687342213764, NULL),
(32, 'admin12', 'admin12@gmail.com', '$2b$10$50KxHuijhnzT5FCqZY4O0.PqHmQvuwEaEcZTd/Sa0fnmjRHGOGzOq', NULL, NULL, 1687342233528, NULL),
(33, 'admin123', 'admin123@gmail.com', '$2b$10$n2LnDP6JyqHp7YNYDnKyNuZmXpnOdUMF/hOfctqIv7wyAwzBZYEn.', NULL, 1, 1687850893463, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_chat`
--
ALTER TABLE `tbl_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_participant`
--
ALTER TABLE `tbl_participant`
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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=599;

--
-- AUTO_INCREMENT for table `tbl_participant`
--
ALTER TABLE `tbl_participant`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `tbl_room`
--
ALTER TABLE `tbl_room`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
