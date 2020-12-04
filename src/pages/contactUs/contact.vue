<template>
	<view class="page" :class="{'hide' : move1 }" @click="move2 && move()">
		<head-view ref="head"> </head-view>
		<Am-NavigationBar title=" " background="#FFFFFF">
			<image slot="content" src="../../static/indexImg/logo.png" style="width: 60rpx; height: 60rpx;margin-left: 40rpx;"
			 mode="aspectFit"></image>
			<image slot="content" src="../../static/indexImg/菜单icon.png" style="width: 28rpx; height: 24rpx;margin-left: 582rpx;"
			 mode="aspectFit" @click.stop="move"></image>
		</Am-NavigationBar>
		<view class="swiper_banner">
			<swiper class="swiper_banner" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				<block v-for="(item, index) in bannerList" :key="index">
					<swiper-item>
						<image :src="item.images" class="banner_css" mode="aspectFill"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="contanct_contanct">
			<text class="title">联系方式</text>
			<text class="contanct_infoFont">电话：021-69557550</text>
			<text class="contanct_infoFont">手机：13521041245</text>
			<text class="contanct_infoFont">邮箱：hr@willmid.com</text>
			<text class="contanct_infoFont">地址：上海市青浦区虹桥世界中心L1-A</text>
		</view>
		<view class="contanct_info">
			<text class="title">商务合作</text>
			<input placeholder="贵姓" class="contanct_inputFont" v-model="userInfo.name" />
			<input placeholder="电话" class="contanct_inputFont" v-model="userInfo.phone" />
			<input placeholder="邮箱" class="contanct_inputFont" v-model="userInfo.email" />
			<textarea placeholder="内容" class="contanct_inputFont" v-model="userInfo.frombody" />
			<text class="sub" @click="postInfo">提交</text>
		</view>
		<view class="company_info">
			<text class="title" >闻峥文化传播有限公司</text>
			<view class="imglist">
				<image src="../../static/contact/微博.png" class="company img" mode=""></image>
					<image src="../../static/contact/QQ.png" class="company img" mode=""></image>
					<image src="../../static/contact/微信.png" class="company img" mode=""></image>
				</view>
			</view>	
		<view class="foot_module">
			<view class="foot_module_Navigation">
				<text class="tabbar">全部</text>
				<text class="tabbar">网站设计</text>
				<text class="tabbar">移动设计</text>
				<text class="tabbar">品牌形象</text>
				<text class="tabbar">电商设计</text>
				
			</view>
			<view class="foot_module_foot">
				<text class="foot_font">XSWLMADJD.PWE PELECE CALL WE</text>
				<text class="foot_font">沪ICP备09109183号-25</text>
			</view>
		</view>
	</view>
</template>

<script>
	import head from "@/components/common/title-head/head.vue"
	export default {
		data: () => ({
			index: null,
			isvisible: false,
			move1: false,
			move2: false,
			ishide: true,
			num:'5',
			page:1,
			userInfo:{
				 name: null,
				                email: null,
				                phone: null,
				                frombody: null,
			},
			bannerList:[],
			contactList:[]
		}),
		mounted() {
		this.getBanner()

		},
		methods: {
			move() {
				this.$refs.head.tabShow(!this.move1,this.num)
				this.move1 = !this.move1
				this.move2 = !this.move2
				this.ishide = !this.ishide
			},
			isPrototypeOf() {
				this.isvisible = !this.isvisible
			},
			getBanner() {
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/index', //仅为示例，并非真实接口地址。
					method: 'GET' ,//请求方式  或GET
					success: res => {
						
						this.bannerList = res.data.data
						console.log(this.bannerList);
					}
				})
			},
			postInfo(){
				let name1 = this.userInfo.name
				let email1= this.userInfo.email
				let phone1 = this.userInfo.phone
				let content1 = this.userInfo.frombody
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/contactus', //仅为示例，并非真实接口地址。
					data:{
						name: name1,
						email: email1,
						phone: phone1,
						content: content1,
					},
					header:{
						'content-type': 'application/x-www-form-urlencoded', 
					},
					method: 'POST' ,//请求方式  或GET
					success: res => {
						console.log(res);
						if(res.data.code == 200){
							uni.showToast({
								title:'提交成功',
								icon:'none'
							})
							this.userInfo.name = null
							this.userInfo.phone = null
							this.userInfo.email = null
							this.userInfo.frombody = null
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.page {
		display: flex;
		width: 100vw;
		min-height: 100vh;
		left: 0;
		&.hide {
			left: -70vw;
		}
		.swiper_banner {
			height: 460rpx;

			.banner_css {
				width: 750rpx;
				height: 460rpx;
			}
		}

		>.contanct_contanct {
			padding: 50rpx 40rpx;
		
			display: flex;
			flex-direction: column;
			>.title{
				font-size: 30rpx;
				font-family: HYQiHei 60S, HYQiHei 60S-60S;
				font-weight: 60S;
				font-weight: bold;
				text-align: left;
				color: #e11612;
				line-height: 20rpx;						
			}
			>.contanct_infoFont{
				font-size: 26rpx;
				color: #333333;
				margin: 15rpx 0 0 7rpx; 
				&:nth-child(2){
					margin: 80rpx 0 0 7rpx;		
				}	
			}
				
		}
		>.contanct_info{
			margin: 50rpx 40rpx  100rpx 40rpx;
			display: flex;
			flex-direction: column;
			
			>.title{
				font-size: 30rpx;
				font-family: HYQiHei 60S, HYQiHei 60S-60S;
				font-weight: 60S;
				font-weight: bold;
				text-align: left;
				color: #e11612;
				line-height: 20rpx;						
			}
			>.contanct_inputFont{
				font-size: 26rpx;
				color: #333333;
				margin: 20rpx 0 0 7rpx; 
				padding-bottom: 10rpx;
				border-bottom: 1rpx solid #d2d2d2;
				
				&:nth-child(2){
					margin: 60rpx 0 0 7rpx;		
				}
				&:nth-child(5){
					margin: 15rpx 0 110rpx 7rpx;		
							border-bottom: 1rpx solid transparentize($color: #ffffff, $amount: 0);
				}
				
			}
			>.sub{
				width: 100rpx;
				height: 36rpx;
				margin: 20rpx 5rpx;
				font-size: 24rpx;
				text-align: center;
				margin-left: auto;
				color: red;
				border: 1rpx solid #e11612;
			}
				
		}
		>.company_info{
			display: flex;
			padding: 40rpx 40rpx;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			>.title{
				justify-content: flex-start;
				font-size: 26rpx;
				font-family: HYQiHei 70S, HYQiHei 70S-70S;
				font-weight: 70S;
				text-align: left;
				color: #808080;
			}
			>.imglist{
				>.img{
					margin: 0 10rpx;
					width: 22rpx;
					height: 18rpx;
					&:last-child{
					}
			}
			
			}
		}
		>.foot_module {
			box-sizing: border-box;
			background-color: #333333;
			color: #ffffff;
			display: flex;
			flex-direction: column;
			>.foot_module_Navigation {
				margin: 40rpx 0;
				text-align: center;
				display: flex;
				flex-direction: row;
				>.tabbar {
					flex: 1;
					font-size: 22rpx;
					letter-spacing: 1rpx;

					&:nth-child(n+2) {
						border-left: 0.5rpx solid rgba(255, 255, 255, 0.3);
						flex: 1;
						font-size: 22rpx;
						letter-spacing: 1rpx;
					}
				}
			}

			>.foot_module_foot {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 24rpx auto;

				>.foot_font {
					margin: 13rpx auto;
					font-size: 18rpx;
					font-family: HYQiHei 50S, HYQiHei 50S-50S;
					font-weight: 50S;
					text-align: left;
					line-height: 20rpx;
				}
			}
		}
	}
</style>
