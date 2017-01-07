/**
 * Author: Yakima Teng
 * Date: 5/28
 * Email: cleveryun@163.com
 */
'use strict';
var app = new Vue({
	el: '#app',
	data: {
		windowWidth: '',
		windowHeight: '',
		curProvinceIndex: 0,
		allCities: {
			"北京": ["北京"],
			"天津": ["天津"],
			"河北": ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"],
			"山西": ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁", "塑州"],
			"内蒙古": ["呼和浩特", "包头", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "兴安盟", "锡林郭勒盟", "阿拉善盟", "乌海"],
			"辽宁": ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"],
			"吉林": ["长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边", "延吉"],
			"黑龙江": ["哈尔滨", "齐齐哈尔", "鸡西", "鹤岗", "双鸭山", "大庆", "伊春", "佳木斯", "七台河", "牡丹江", "黑河", "绥化", "大兴安岭", "松花江", "农垦"],
			"上海": ["上海"],
			"江苏": ["南京", "无锡", "徐州", "常州", "苏州", "南通", "连云港", "淮安", "盐城", "扬州", "镇江", "泰州", "宿迁", "昆山", "张家港", "海安", "太仓", "常熟", "金坛"],
			"浙江": ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水", "东阳", "萧山", "嘉善"],
			"安徽": ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城"],
			"福建": ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德", "晋江"],
			"江西": ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"],
			"山东": ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "荷泽", "菏泽"],
			"河南": ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店", "济源"],
			"湖北": ["武汉", "黄石", "十堰", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施州", "神农架", "仙桃", "沙市"],
			"湖南": ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西州", "大庸", "醴陵"],
			"广东": ["广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"],
			"广西": ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"],
			"海南": ["海口", "三亚", "琼州"],
			"重庆": ["重庆"],
			"四川": ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝州", "甘孜州", "凉山州", "达县"],
			"贵州": ["贵阳", "六盘水", "遵义", "安顺", "铜仁", "黔西南州", "毕节", "黔东南州", "黔南州"],
			"云南": ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "思茅", "临沧", "楚雄州", "红河州", "文山州", "西双版纳州", "大理州", "德宏州", "怒江州", "迪庆州", "东川", "普洱"],
			"西藏": ["拉萨", "昌都", "山南", "日喀则", "那曲", "阿里", "林芝"],
			"陕西": ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"],
			"甘肃": ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉", "庆阳", "定西", "陇南", "临夏州", "甘南州"],
			"青海": ["西宁", "海东", "海北州", "黄南州", "海南州", "果洛州", "玉树州", "海西州"],
			"宁夏": ["银川", "石嘴山", "吴忠", "固原", "中卫"],
			"新疆": ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "昌吉州", "博尔州", "巴音郭楞州", "阿克苏", "克孜勒苏柯尔克孜州", "喀什", "和田", "伊犁哈萨克州", "塔城", "阿勒泰", "石河子", "阿拉尔", "图木舒克", "五家渠"]
		},
		originalCardPositions: [],
		idLoading: true,
		isAnimating: false,
		isWalking: false,
		animationInterval: 150,
		indexOfCurLastCardByEye: 30,
		arrowDirections: [],
		colorIndices: [],
		curCardsArrByEye: [7,6,5,4,3,2,1,0,8,9,10,11,12,13,14,15,23,22,21,20,19,18,17,16,24,25,26,27,28,29,30]
	},
	computed: {
		distanceX: function() {
			return this.windowWidth * 0.125;
		},
		distanceY: function() {
			return this.windowHeight * 0.25;
		}
	},
	methods: {
		isSamePosition: function(v1, v2) {
			return Math.abs(parseFloat(v1) - parseFloat(v2)) < this.windowWidth / 100;
		},
		drawParticles: function(elementId) {
			var mycanvas = document.getElementById(elementId);
			var ctx = mycanvas.getContext('2d');
			ctx.clearRect(0,0,500,500);
			var timer = setInterval(function() { //画粒子
				function drawPartic(ctx,r) {
					ctx.save();
					ctx.beginPath();
					ctx.moveTo(r,0);
					for (var i = 0; i < 10; i++) {
						ctx.rotate(Math.PI/Math.random()*20); //旋转图形，这是生成图形的关键
						ctx.lineTo(r,0);
					}
					ctx.closePath();
					ctx.fill();
					ctx.restore();
				}
				ctx.fillRect(0,0,500,500); //填充区的大小为500*500
				ctx.save();
				ctx.translate(250,250); //将当前坐标移动到(250,250)位置上
				ctx.beginPath(); //拟定半径
				ctx.arc(0,0,200,0,Math.PI*2,true); //画出一个半径为200的圆
				// ctx.clip(); //裁剪上面的圆

				// 对裁剪区域进行加样式处理
				var linearGradient = ctx.createLinearGradient(0,-300,0,250); //设定起始点
				linearGradient.addColorStop(0, '#ff0000'); //渐变色0
				linearGradient.addColorStop(1, '#004080'); //渐变色1
				ctx.fillStyle = linearGradient;
				ctx.fillRect(-250,-250,500,500); //裁剪的重要一步，由于上面已经开始了translate，因此这里需要调整到-250,
				for (var j=1; j<250;j++) { //生成的粒子的密度
					ctx.save();
					ctx.fillStyle = '#ffff00';
					ctx.translate(250-Math.floor(Math.random()*500), 250-Math.floor(Math.random()*500));
					drawPartic(ctx, Math.floor(Math.random()*10)); //粒子生成
					ctx.restore();
				}
				ctx.restore();
			},100);
			setTimeout(function() {
				clearInterval(timer);
			}, 600000);
		},
		colorTransition: function(elementId) {
			var self = this;
			console.log(elementId);
			var mycanvas = document.getElementById(elementId);
			var ctx = mycanvas.getContext('2d');
			ctx.clearRect(0,0,500,500);
			var i = 0;
			var timer = setInterval(function() {
				var gradient = ctx.createRadialGradient(250,250,0,250,250,250);
				gradient.addColorStop(i*0, 'magenta');
				gradient.addColorStop(i*(1/5), 'blue');
				gradient.addColorStop(i*(1/2), 'green');
				gradient.addColorStop(i*(3/4), 'yellow');
				gradient.addColorStop(i*1, 'red');
				ctx.fillStyle = gradient;
				i+=0.1;
				if (i>=1) i = 0;
				ctx.fillRect(0,0,500,500);
			}, 50);
			setTimeout(function() {
				clearInterval(timer);
			}, 300000);
			mycanvas.onmouseout = function() {
				setTimeout(function() {
					if (timer) clearInterval(timer);
					self.drawParticles(elementId);
				}, 1000);
			};
		},
		toggleHighlight: function(newProvinceIndex) {
			var self = this,
				oldProvinceIndex = self.curProvinceIndex,
				$cards = $('.card'),
				$oldElement = $cards.eq(oldProvinceIndex),
				$newElement = $cards.eq(newProvinceIndex);
			if ($cards.eq(newProvinceIndex).hasClass('active-province')) {
				$cards.eq(newProvinceIndex).removeClass('active-province').css(self.originalCardPositions[newProvinceIndex]);
			}
			else {
				$cards.removeClass('active-province').eq(newProvinceIndex).addClass('active-province').css({
					top: self.windowHeight * 0.5 + 'px',
					left: self.windowWidth * 0.5 + 'px'
				});
			}
			if (newProvinceIndex !== oldProvinceIndex && !self.isSamePosition($oldElement.css('left'), self.originalCardPositions[oldProvinceIndex].left)) {
				$oldElement.css(self.originalCardPositions[oldProvinceIndex]);
				if ($oldElement.hasClass('active-province')) $oldElement.removeClass('active-province');
			}
			this.curProvinceIndex = newProvinceIndex;
		},
		setLayout: function() {
			var i,
				self = this,
				$cards = $('.card'),
				total = $cards.length;
			self.originalCardPositions= [];
			self.windowWidth = $(window).width();
			self.windowHeight = $(window).height();
			$('.card.active-province').removeClass('active-province');
			for (i = 0; i < total; i++) {
				$cards.eq(i).css({
					top: self.distanceY * 0.5 + self.distanceY * (Math.floor(i/8)) + 'px',
					left: self.distanceX * 0.5 + self.distanceX * (i%8) + 'px'
				});
				self.originalCardPositions.push({
					top: self.distanceY * 0.5 + self.distanceY * (Math.floor(i/8)) + 'px',
					left: self.distanceX * 0.5 + self.distanceX * (i%8) + 'px'
				});
			}
			this.curCardsArrByEye = [7,6,5,4,3,2,1,0,8,9,10,11,12,13,14,15,23,22,21,20,19,18,17,16,24,25,26,27,28,29,30];
			this.indexOfCurLastCardByEye = 30;
			// if (this.isWalking) {
			//     this.walkAround();
			// }
		},
		clickCard: function(cardIndex) {
			var $cards = $('.card'),
				self = this;
			$cards.eq(cardIndex).trigger('click');
			self.curProvinceIndex = cardIndex;
		},
		triggerAnimation: function(startIndex) {
			var i = startIndex || 0,
				self = this,
				interval = self.animationInterval,
				total = $('.card').length,
				timer = setInterval(function() {
					if (i < total) self.clickCard(i++);
					else clearInterval(timer);
				}, interval);
			self.isAnimating = true;
			setTimeout(function() {
				self.clickCard(total - 1);
				setTimeout(function() {
					self.isAnimating = false;
					self.walkingAround();
				}, interval);
			}, interval * (total + 1));
		},
		walkAround: function() {
			var i, j, k,
				self = this,
				arr = [],
				$cards = $('.card'),
				total = self.originalCardPositions.length;
			if (self.indexOfCurLastCardByEye === 7) self.indexOfCurLastCardByEye = 30;
			else if (self.indexOfCurLastCardByEye === 8) self.indexOfCurLastCardByEye = 0;
			else if (self.indexOfCurLastCardByEye === 23) self.indexOfCurLastCardByEye = 15;
			else if (self.indexOfCurLastCardByEye === 24) self.indexOfCurLastCardByEye = 16;
			else if (Math.floor(self.indexOfCurLastCardByEye / 8) % 2 === 0) ++self.indexOfCurLastCardByEye;
			else --self.indexOfCurLastCardByEye;
			for (i = 0; i < total; i++) {
				(function(i) {
					if (i === 0) arr[i] = self.originalCardPositions[8];
					else if (i === 15) arr[i] = self.originalCardPositions[23];
					else if (i === 16) arr[i] = self.originalCardPositions[24];
					else if (i === 30) arr[i] = self.originalCardPositions[7];
					else if (Math.floor(i/8) % 2 === 0) arr[i] = self.originalCardPositions[i-1];
					else arr[i] = self.originalCardPositions[i+1];
				})(i);
			}
			self.originalCardPositions = arr;
			// console.log(self.originalCardPositions);
			for (j = 0; j < total; j++) {
				if (j === self.indexOfCurLastCardByEye) {
					$cards.eq(j).not('.active-province').removeClass('transition').fadeOut().css(self.originalCardPositions[j]);
					(function(i) {
						setTimeout(function() {
							$cards.eq(i).addClass('transition').fadeIn();
						}, 300);
					})(j);
				}
				else {
					$cards.eq(j).not('.active-province').css(self.originalCardPositions[j]);
				}
			}
			self.setArrowDirections();
			self.colorElements('.card header', .6);
		},
		walkingAround: function() {
			var self = this,
				timer = setInterval(function() {
					self.walkAround();
				}, 1000);
			// make page available to response for clicking event
			self.isWalking = true;
			self.walkAround(self.indexOfCurLastCardByEye);
			setTimeout(function() {
				clearInterval(timer);
				self.isWalking = false;
			}, 6400000);
		},
		setArrowDirections: function() {
			var i, j,
				arr = [],
				cardsArr = [],
				colorIndices = [],
				total = $('.card').length,
				left = 'fa-chevron-left',
				right = 'fa-arrow-right',
				down = 'fa-arrow-circle-o-down';
			for (j = 0; j < total; j++) {
				if (j === 0) cardsArr.push(this.curCardsArrByEye[total - 1]);
				else cardsArr.push(this.curCardsArrByEye[j - 1]);
			}
			this.curCardsArrByEye = cardsArr;
			for (i = 0; i < total; i++) {
				if (i===6 || i===7 || i===8 || i===9) colorIndices[this.curCardsArrByEye[i]] = 'red';
				else if (i===14 || i===15 || i===16 || i===17) colorIndices[this.curCardsArrByEye[i]] = 'brown';
				else if (i===22 || i===23 || i===24 || i===25) colorIndices[this.curCardsArrByEye[i]] = 'yellow';
				else colorIndices[this.curCardsArrByEye[i]] = '';

				if ((i>=0 && i<=6) || (i>=16 && i<=22)) arr[this.curCardsArrByEye[i]] = left;
				else if (i===7 || i===15 || i===23) arr[this.curCardsArrByEye[i]] = down;
				else arr[this.curCardsArrByEye[i]] = right;
			}
			this.colorIndices = colorIndices;
			this.arrowDirections = arr;
		},
		// not used here
		rgb2ColorForOldBrowser: function() {
			function byte2Hex(n) {
				var nybHexString = "0123456789ABCDEF";
				return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
			}
			return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
		},
		// not used here
		rgb2Color: function(r, g, b) {
			return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
		},
		rgba2Color: function(r, g, b, a) {
			a = a || 1;
			return 'rgba(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ',' + a + ')';
		},
		// not used here
		writeSin: function(freq) {
			var v, r, g, b,
				self = this,
				frequency = freq || .010,
				amplitude = 127,
				center = 128;
			for (var j = 0; j < 32; j++) {
				frequency+=0.050;
				for (var i = 0; i < 32; i++) {
					r = Math.sin(frequency * i) * amplitude + center;
					g = Math.sin(frequency * i + 2*Math.PI/3) * amplitude + center;
					b = Math.sin(frequency * i + 4*Math.PI/3) * amplitude + center;
					// Note that &#9608; is a unicode character that makes a solid block
					document.write('<span style="color:' + self.rgb2Color(r, g, b) + ';">&#9608;</span>');
				}
				document.write('<br>');
			}
		},
		// not used here
		makeColorGradient: function(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {
			var i, r, g, b,
				self = this;
			center = center || 128;
			width = width || 127;
			len = len || 50;
			for (i = 0; i < len; i++) {
				r = Math.sin(frequency1 * i + phase1) * width + center;
				g = Math.sin(frequency2 * i + phase2) * width + center;
				b = Math.sin(frequency3 * i + phase3) * width + center;
				document.write('<span style="color:' + self.rgb2Color(r, g, b) + ';">&#9608;</span>');
			}
			document.write('<br>');
		},
		// not used here
		colorText: function(str, phase) {
			var i, r, g, b,
				self = this,
				center = 128,
				width = 127,
				frequency =Math.PI*2/str.length;
			phase = phase || 0;
			for (i = 0; i < str.length; i++) {
				r = Math.sin(frequency * i + 2 + phase) * width + center;
				g = Math.sin(frequency * i + phase) * width + center;
				b = Math.sin(frequency * i + 4 + phase) * width + center;
				document.write('<span style="color:' + self.rgb2Color(r, g, b) + ';">' + str.substr(i,1) + '</span>');
			}
			document.write('<br>');
		},
		colorElements: function(cssSelector, phase) {
			var i, r, g, b,
				$els = $(cssSelector),
				self = this,
				center = 200 + 55*Math.random(),
				width = 255 - center,
				frequency =Math.PI*2/$els.length,
				arr = [7,6,5,4,3,2,1,0,8,9,10,11,12,13,14,15,23,22,21,20,19,18,17,16,24,25,26,27,28,29,30].sort(function(a, b) {
					return Math.random() > .5;
				});
			phase = phase || 0;
			for (i = 0; i < $els.length; i++) {
				r = Math.sin(frequency * i + 2 + phase) * width + center;
				g = Math.sin(frequency * i + phase) * width + center;
				b = Math.sin(frequency * i + 4 + phase) * width + center;
				$els.eq(arr[i]).css({
					'background-color': self.rgba2Color(r, g, b, Math.random())
				});
			}
		}
	},
	init: function() {},
	created: function() {
		(function(self) {
			// todo: compute size of cards
			$(document).ready(function() {
				self.setLayout();
				self.drawParticles('mycanvas');
			});
			$(window).resize(function() {
				self.setLayout();
			});
			setTimeout(function() {
				self.triggerAnimation();
				// value of indexOfCurLastCardByEye variable is now 30
				// self.setArrowDirections();
			}, 600);
			self.isLoading = false;
		})(this);
	}
});
