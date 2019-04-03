
/**用户信息**/
CREATE TABLE ring_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  emotion INT,                    #情感  0-恋爱中  1-已婚  2-恋爱中
  phone VARCHAR(16),
	email VARCHAR(64),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #真实姓名，如王小明
  sex INT,                  #性别  0-女  1-男
	love VARCHAR(100),       #真爱宣言
	hobby VARCHAR(100)			#喜好
);

/**插入用户数据**/
INSERT INTO ring_user VALUES
(1, 'tom', '123456', 0, '18037860927', 'tom@163.com', NULL, '汤姆', 1, NULL, '登山'),
(2, 'dingding', '123456', NULL, '18838889999', 'dingding@163.com', NULL, '丁克', 1, NULL, '颠三倒四多'),
(3, 'dangdang', '123456', NULL, '15066669999', 'dangdang@163.com', NULL, '林当', 0, NULL, '第三方发');

-- 首页新品推荐表  
CREATE TABLE index_recommend(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  rming VARCHAR(255),
  r_abstract VARCHAR(255)
);
INSERT INTO index_recommend VALUES
(1,'img/pro1.png','<p>本款戒圈上镌刻” Pure love age”，意为纯爱年代。戒圈边缘微镶钻石，光芒熠熠动人。</p>
						<p>戒圈上镌刻” Pure love age”，意为纯爱年代</p>
						<p>字体设计圆润，银白色光泽下显得更加柔美</p>
						<p>戒圈边缘微镶钻石，光芒熠熠动人</p>
						<p><a href="product_detail.html?lid=1">查看详情</a></p>'),
(2,'img/pro2.png','<p>白色18K金与黄色18K金相结合，在戒圈中间汇合，女戒白色18K金排镶钻石</p>
						<p>双色搭配，眼前一亮</p>
						<p>两人因爱情而互相吸引，设计精巧动人</p>
						<p>双色衬托肤色，更显钻石闪亮</p>
						<p><a href="product_detail.html?lid=2">查看详情</a></p>'),
(3,'img/pro3.png','<p>白色18K金与黄色18K金相结合，在戒圈中间汇合，女戒白色18K金排镶钻石</p>
						<p>双色搭配，眼前一亮</p>
						<p>两人因爱情而互相吸引，设计精巧动人</p>
						<p>双色衬托肤色，更显钻石闪亮</p>
						<p><a href="product_detail.html?lid=2">查看详情</a></p>'),
(4,'img/pro4.png','<p>白色18K金与黄色18K金相结合，在戒圈中间汇合，女戒白色18K金排镶钻石</p>
						<p>双色搭配，眼前一亮</p>
						<p>两人因爱情而互相吸引，设计精巧动人</p>
						<p>双色衬托肤色，更显钻石闪亮</p>
						<p><a href="product_detail.html?lid=2">查看详情</a></p>');
-- 商品列表
-- 首页新品推荐表  
CREATE TABLE ring_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price INT,
  p_img VARCHAR(255),
  p_describle VARCHAR(2000)
);
INSERT INTO ring_product VALUES
(1,'山盟海誓 7分 H色',45499,'img/pro1.png',null),
(2,'FOREVER 系列 守护骑士对戒',32888,'img/pro1.png',null),
(3,'TRUE LOVE系列 典雅 40分H色',54336,'img/pro1.png',null),
(4,'JUST YOU系列 挚爱款 30分 H色',36988,'img/pro1.png',null);
INSERT INTO ring_product VALUES
(5,'MY HEART系列 奢华款 70分 H色',12939,'img/product/pro_brand1.jpg',null),
(6,'JUST YOU系列 挚爱款 30分 H色',28888,'img/product/pro_brand2.jpg',null),
(7,'WEDDING系列 新娘捧花15分 I-J色',46988,'img/product/pro_brand3.jpg',null),
(8,'LOVE LINE系列 简奢款 50分 G色',32228,'img/product/pro_brand4.jpg',null),
(9,'WEDDING系列 爱的捧花 13分',36988,'img/product/pro_brand5.jpg',null),
(10,'JUST YOU系列 简奢款 30分 G色',18889,'img/product/pro_brand6.jpg',null),
(11,'DR PARIS 52 系列 浪漫款30分',32299,'img/product/pro_brand7.jpg',null),
(12,'MY HEART系列 简奢款 50分 H色',25588,'img/product/pro_brand8.jpg',null),
(13,'TRUE LOVE系列 典雅 40分H色',26699,'img/product/pro_brand9.jpg',null),
(14,'LOVE LINE系列 简奢款 40分 F色',28888,'img/product/pro_brand10.jpg',null),
(15,'FOREVER系列 经典款 50分 J色',58888,'img/product/pro_brand11.jpg',null),
(16,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'FOREVER系列 经典款 50分 J色',58888,'img/product/pro_brand11.jpg',null);
INSERT INTO ring_product VALUES(null,'LOVE LINE系列 简奢款 50分 G色',32228,'img/product/pro_brand4.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
INSERT INTO ring_product VALUES(null,'JUST YOU系列 挚爱款 30分 H色',59999,'img/product/pro_brand12.jpg',null);
-- 购物车数据表ring_cart
create table ring_cart(
  id int primary key AUTO_INCREMENT,
  uid int,
  pid int,
  price decimal(10,2),
  pname varchar(255),
  count int
);
insert into ring_cart values(null,1,1,45499,'山盟海誓 7分 H色',1);
insert into ring_cart values(null,1,2,32888,'FOREVER 系列 守护骑士对戒',1);
insert into ring_cart values(null,1,3,54336,'TRUE LOVE系列 典雅 40分H色',1);
insert into ring_cart values(null,1,4,36988,'JUST YOU系列 挚爱款 30分 H色',1);
insert into ring_cart values(null,1,5,12939,'MY HEART系列 奢华款 70分 H色',1);
insert into ring_cart values(null,1,6,28888,'JUST YOU系列 挚爱款 30分 H色',1);
alter table ring_cart add column img varchar(255);