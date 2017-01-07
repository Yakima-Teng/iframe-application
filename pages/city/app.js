/**
 * Author: Yakima Teng
 * Date: 5/28
 * Email: cleveryun@163.com
 */
'use strict';
var app = new Vue({
  el: '#app',
  data: {
    numOfItemsPerRow: 8,
    curProvinceIndex: 0,
    allCities: {
      "北京": ["北京"],
      "天津": ["天津"],
      "上海": ["上海"],
      "重庆": ["重庆"],
      "河北": ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"],
      "山西": ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁", "塑州"],
      "陕西": ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"],
      "山东": ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "荷泽", "菏泽"],
      "河南": ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店", "济源"],
      "辽宁": ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"],
      "吉林": ["长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边", "延吉"],
      "黑龙江": ["哈尔滨", "齐齐哈尔", "鸡西", "鹤岗", "双鸭山", "大庆", "伊春", "佳木斯", "七台河", "牡丹江", "黑河", "绥化", "大兴安岭", "松花江", "农垦"],
      "江苏": ["南京", "无锡", "徐州", "常州", "苏州", "南通", "连云港", "淮安", "盐城", "扬州", "镇江", "泰州", "宿迁", "昆山", "张家港", "海安", "太仓", "常熟", "金坛"],
      "浙江": ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水", "东阳", "萧山", "嘉善"],
      "安徽": ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城"],
      "江西": ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"],
      "福建": ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德", "晋江"],
      "湖北": ["武汉", "黄石", "十堰", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施州", "神农架", "仙桃", "沙市"],
      "湖南": ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西州", "大庸", "醴陵"],
      "四川": ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝州", "甘孜州", "凉山州", "达县"],
      "贵州": ["贵阳", "六盘水", "遵义", "安顺", "铜仁", "黔西南州", "毕节", "黔东南州", "黔南州"],
      "云南": ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "思茅", "临沧", "楚雄州", "红河州", "文山州", "西双版纳州", "大理州", "德宏州", "怒江州", "迪庆州", "东川", "普洱"],
      "广东": ["广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"],
      "海南": ["海口", "三亚", "琼州"],
      "甘肃": ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉", "庆阳", "定西", "陇南", "临夏州", "甘南州"],
      "青海": ["西宁", "海东", "海北州", "黄南州", "海南州", "果洛州", "玉树州", "海西州"],
      "内蒙古": ["呼和浩特", "包头", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "兴安盟", "锡林郭勒盟", "阿拉善盟", "乌海"],
      "新疆": ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "昌吉州", "博尔州", "巴音郭楞州", "阿克苏", "克孜勒苏柯尔克孜州", "喀什", "和田", "伊犁哈萨克州", "塔城", "阿勒泰", "石河子", "阿拉尔", "图木舒克", "五家渠"],
      "西藏": ["拉萨", "昌都", "山南", "日喀则", "那曲", "阿里", "林芝"],
      "广西": ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"],
      "宁夏": ["银川", "石嘴山", "吴忠", "固原", "中卫"],
      "港澳台": ["台湾省", "香港特别行政区", "澳门特别行政区"]
    },
    originalPositions: [],
    indexOfCurLastCardByEye: 30,
    arrowDirections: [],
    curCardsArrByEye: []
    // curCardsArrByEye: [7,6,5,4,3,2,1,0,8,9,10,11,12,13,14,15,23,22,21,20,19,18,17,16,24,25,26,27,28,29,30]
  },
  methods: {
    setLayout: function() {
      var _this = this
      var $cards = $('.card')

      var cols = _this.numOfItemsPerRow
      var rows = Math.ceil(Object.keys(_this.allCities).length / cols)

      var cardWidth = (1 / cols).toFixed(5) * 100 + '%'
      var cardHeight = (1 / rows).toFixed(5) * 100 + '%'

      $cards.css({
        width: cardWidth,
        height: cardHeight
      }).filter('.active-province').removeClass('active-province')

      var tempRow = []
      _this.originalPositions= []


      for (var i = 0, len = $cards.length; i < len; i++) {
        var transX = 100 * (i % 8 - 4) + '%'
        var transY = 100 * (Math.floor(i/8) - 2) + '%'
        var trans = 'translate(' + transX + ',' + transY + ')'

        $cards.eq(i).css({ transform: trans })

        _this.originalPositions.push({ transform: trans })

        // result in _this.curCardsArrByEye similar to [7,6,5,4,3,2,1,0,8,9,10,11,12,13,14,15,23,22,21,20,19,18,17,16,24,25,26,27,28,29,30]
        var rowNum = Math.floor(i / cols)
        var add = rowNum % 2 === 0 ? Array.prototype.unshift : Array.prototype.push
        add.call(tempRow, i)
        if (tempRow.length === 8) {
          _this.curCardsArrByEye = _this.curCardsArrByEye.concat(tempRow)
          tempRow = []
        }
      }

      _this.indexOfCurLastCardByEye = _this.curCardsArrByEye[_this.curCardsArrByEye.length - 1]
    },
    toggleHighlight: function(newProvinceIndex) {
      var _this = this
      var oldProvinceIndex = _this.curProvinceIndex
      var $cards = $('.card')
      var $oldElem = $cards.eq(oldProvinceIndex)
      var $newElem = $cards.eq(newProvinceIndex)

      if ($newElem.hasClass('active-province')) {
        $newElem.removeClass('active-province').css(_this.originalPositions[newProvinceIndex])
      } else {
        $oldElem.removeClass('active-province').css(_this.originalPositions[oldProvinceIndex])
        $newElem.addClass('active-province').css({ transform: 'translate(-50%, -50%) rotateY(180deg)' })
      }

      _this.curProvinceIndex = newProvinceIndex
    },
    walkAround: function() {
      var _this = this
      var arr = []
      var $cards = $('.card')
      var total = _this.originalPositions.length

      // [7,6,5,4,3,2,1,0,  8,9,10,11,12,13,14,15,  23,22,21,20,19,18,17,16,  24,25,26,27,28,29,30,31,  33,32]
      // [6,5,4,3,2,1,0,  7,8,9,10,11,12,13,  20,19,18,17,16,15,14,  21,22,23,24,25,26,27,  31,30,29,28]
      var idx = _this.curCardsArrByEye.indexOf(_this.indexOfCurLastCardByEye)
      _this.indexOfCurLastCardByEye = _this.curCardsArrByEye[idx - 1]

      var tempArr = []
      for (var i = 0; i < total; i++) {
        var rowNum = Math.floor(i / _this.numOfItemsPerRow)
        if (i === total - 1) {
          arr[i] = _this.originalPositions[_this.numOfItemsPerRow - 1]
        } else if (
          (rowNum % 2 === 0 && i % _this.numOfItemsPerRow === 0) ||
          (rowNum % 2 === 1 && i % _this.numOfItemsPerRow === _this.numOfItemsPerRow - 1)
        ) {
          arr[i] = _this.originalPositions[i + 8]
        } else {
          arr[i] = _this.originalPositions[rowNum % 2 === 0 ? (i - 1) : (i + 1)]
        }
      }
      _this.originalPositions = arr

      for (var i = 0; i < total; i++) {
        $cards.eq(i).not('.active-province').css(_this.originalPositions[i])
        if (i === _this.curCardsArrByEye[idx]) {
          $cards.eq(i).not('.active-province').addClass('z-index-low').hide(300, function () {
            $(this).removeClass('z-index-high').fadeIn(300)
          })
        }
      }

      _this.setArrowDirections()
      _this.colorElements('.card header', .6)
    },
    walkingAround: function() {
      var _this = this
      var timer = setInterval(_this.walkAround, 1000)

      setTimeout(function() {
        clearInterval(timer)
      }, 6400000)
    },
    setArrowDirections: function() {
      var _this = this
      var arrDirections = []
      var arrCards = []
      var total = _this.originalPositions.length
      var left = 'fa-chevron-left'
      var right = 'fa-arrow-right'
      var down = 'fa-arrow-circle-o-down'

      for (var i = 0; i < total; i++) {
        var rowNum = Math.floor(i / _this.numOfItemsPerRow)
        if (i === 0) {
          arrCards.push(_this.curCardsArrByEye[total - 1])
        } else {
          arrCards.push(_this.curCardsArrByEye[i - 1])
        }
        // [7,6,5,4,3,2,1,0,  8,9,10,11,12,13,14,15,  23,22,21,20,19,18,17,16,  24,25,26,27,28,29,30,31,  33,32]
        // [6,5,4,3,2,1,0,  7,8,9,10,11,12,13,  20,19,18,17,16,15,14,  21,22,23,24,25,26,27,  31,30,29,28]
        if (i === 0) {
          arrDirections[_this.curCardsArrByEye[total - 1]] = left
        } else if (
          (i === total - 1) ||
          (rowNum % 2 === 1 && i % _this.numOfItemsPerRow !== _this.numOfItemsPerRow - 1)
        ) {
          arrDirections[_this.curCardsArrByEye[i - 1]] = right
        } else if (i % _this.numOfItemsPerRow === _this.numOfItemsPerRow - 1) {
          arrDirections[_this.curCardsArrByEye[i - 1]] = down
        } else {
          arrDirections[_this.curCardsArrByEye[i - 1]] = left
        }
      }
      _this.curCardsArrByEye = arrCards
      _this.arrowDirections = arrDirections
    },
    rgba2Color: function(r, g, b, a) {
      a = a || 1
      var round = Math.round
      return 'rgba(' + round(r) + ',' + round(g) + ',' + round(b) + ',' + a + ')';
    },
    colorElements: function(cssSelector, phase) {
      var _this = this
      var $elements = $(cssSelector)
      var len = $elements.length
      var center = 200 + 55*Math.random()
      var width = 255 - center
      var frequency = Math.PI * 2 / len

      phase = phase || 0

      for (var i = 0; i < len; i++) {
        var r = Math.sin(frequency * i + 2 + phase) * width + center
        var g = Math.sin(frequency * i + phase) * width + center
        var b = Math.sin(frequency * i + 4 + phase) * width + center
        var bgColor = _this.rgba2Color(r, g, b, Math.random())
        $elements.eq(i).css('background-color', bgColor)
      }
    }
  },
  init: function() {},
  ready: function() {
    var _this = this
    _this.setLayout()
    _this.walkingAround()
    $('body').show()
    $(window).resize(function() {
      _this.setLayout()
    })
  }
})
