/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : student

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-20 17:31:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banji
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `phone` varchar(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `content` varchar(20) NOT NULL,
  `img` char(200) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banji
-- ----------------------------
INSERT INTO `data` VALUES ('1', '', 'lili', '', '../images/boy-1.jpg');


-- ----------------------------
-- Table structure for kecheng
-- ----------------------------
DROP TABLE IF EXISTS `meges`;
CREATE TABLE `meges` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `time` varchar(30) CHARACTER SET utf8 NOT NULL,
  `contentt` varchar(30) CHARACTER SET utf8 NOT NULL,
  `images` varchar(30) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of kecheng
-- ----------------------------
INSERT INTO `meges` VALUES ('1', '2018-09-26', '88787845656','');


