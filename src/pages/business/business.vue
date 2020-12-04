<template>
	<view class="page" :class="{'hide' : move1 }" @click="move2 && move()">
		<head-view ref="head"></head-view>
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
		<view class="business_body">
			<view class="body" v-for="(item , index) in businessList" :key="index">
				<image :src="item.images" class="img" mode="aspectFill"></image>
				<text class="title">{{item.title}}</text>
				<text class="body_font" ><text v-for="(ite , ind) in item.tab" :key="ind">{{ite}}<text v-if="ind<item.tab.length-1">,</text></text></text>
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
			num:'2',
			that:this,
			bannerList:[],
			businessList:[]
		}),
		mounted() {
			this.getBanner()
				this.getBusiness()
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
			getBusiness(){
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/cases_category', //仅为示例，并非真实接口地址。
					method: 'GET' ,//请求方式  或GET
					success: res => {
						this.businessList = res.data.data
						console.log(this.businessList);
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

		>.business_body {
			box-sizing: border-box;
			padding: 50rpx 40rpx;
			display: flex;
			flex-direction: column;

			>.body {
				display: flex;
				flex-direction: column;
				margin: 40rpx auto;
				padding-bottom: 20rpx;
				background: #ffffff;
				box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05); 

				&:first-child {
					margin: 10rpx 0 30rpx 0;
				}

				&:last-child {
					margin: 10rpx 0 60rpx 0;
				}

				>.img {
					width: 670rpx;
					height: 360rpx;
					background-color: red;
				}

				>.title {
					margin: 30rpx 0 12rpx 0;
					font-size: 32rpx;
					color: #333333;
				}

				>.body_font {
					font-size: 24rpx;
					font-family: HYQiHei 45S, HYQiHei 45S-45S;
					font-weight: 45S;
					text-align: left;
					color: #808080;
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
