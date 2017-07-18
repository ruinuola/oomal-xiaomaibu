var app = require( 'koa' )();
var router = require( 'koa-router' )();

// router.get('/',function *(next){
// 	this.body = 'hello koa!'
// });

// router.get('/api',function *(next){
// 	this.body = 'test data'
// });

// router.post('/api/post', koaBody, function *(next){
// 	console.log(this.request.body);
// 	this.body = JSON.stringify(this.request.body)
// })

// 首页-店铺信息
 var storeInfoData = require( './home/storeInfo.js' )
 router.get('/api/storeInfo', function *(next) {
 	this.body = storeInfoData
 })

// 待处理-待发配送
 var waitSendData = require( './orderDate/wait_send.js' )
 router.get('/api/waitHandleSend', function *(next) {
 	this.body = waitSendData
 })

// 待处理-待发配送
 var refundData = require( './orderDate/refund.js' )
 router.get('/api/waitHandleRefund', function *(next) {
 	this.body = refundData
 })

// 订单管理-进行中
 var inProcessDate = require( './orderDate/inProcess.js' )
 router.get('/api/inProcess', function *(next) {
 	this.body = inProcessDate
 })

// 订单管理-完成
 var finishData = require( './orderDate/finish.js' )
 router.get('/api/finish', function *(next) {
 	this.body = finishData
 })

//商品库
var proData = require('./pro/pro_ku.js')
router.get ('/api/pro_ku',function *(next){
 this.body = proData
})

//搜索列表
var searchListData = require('./search/search_list.js')
router.get ('/api/search_list',function *(next){
 this.body = searchListData
})

//商品管理-出售中
var chuShouData = require('./pro_gov/chu_shou.js')
router.get ('/api/chuShou',function *(next){
 this.body = chuShouData
})

//商品管理-仓库
var cangkuData = require('./pro_gov/cangku.js')
router.get ('/api/cangku',function *(next){
 this.body = cangkuData
})

//商品管理-已售空
var shoukongData = require('./pro_gov/shoukong.js')
router.get ('/api/shoukong',function *(next){
 this.body = shoukongData
})

//商品详情
var proDetailData = require('./pro_gov/pro_detail.js')
router.get ('/api/proDetail',function *(next){
 this.body = proDetailData
})

//已创建活动
var yetActiveData = require('./active/yet_active.js')
router.get ('/api/yetActive',function *(next){
 this.body = yetActiveData
})

//运费设置
var yunfeiData = require('./yunfei/yunfei.js')
router.get ('/api/yunfei',function *(next){
 this.body = yunfeiData
})

//历史账单
var history_menuData = require('./money/history_menu.js')
router.get ('/api/history_menu',function *(next){
 this.body = history_menuData
})

//财务明细
var month_detailData = require('./money/month_detail.js')
router.get ('/api/month_detail',function *(next){
 this.body = month_detailData
})

//申请提现
var apply_moneyData = require('./money/apply_money.js')
router.get ('/api/apply_money',function *(next){
 this.body = apply_moneyData
})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);