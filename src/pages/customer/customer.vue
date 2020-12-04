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
		<view class="customer_body">
			<view v-for="(item,index) in contactList" :key="index" class="customer_body list">
				<image :src="item.images" class="img" style="width: 206rpx;height: 210rpx;" mode=""></image>
			</view>
			<view class="btnlist">
				<image src="../../static/customer/01_2@2x.png" class="btn upper" @click="chaxun(-1)"></image>
				<image src="../../static/customer/02_2@2x.png" class="btn next" @click="chaxun(1)"></image>
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
			num: '4',
			page:1,
			bannerList: [],
			contactList: [],
		}),
		mounted() {
			this.getBanner()
			this.getContactList()
		},
		methods: {
			move() {
				this.$refs.head.tabShow(!this.move1, this.num)
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
					method: 'GET', //请求方式  或GET
					success: res => {

						this.bannerList = res.data.data
						console.log(this.bannerList);
					}
				})
			},
			getContactList() {
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/partners', //仅为示例，并非真实接口地址。
					data: {
						page: this.page,
						pageSize: 12
					},
					method: 'GET', //请求方式  或GET
					success: res => {
						console.log(11, res);
						if (res.data.data.data.length > 12) {
							res.data.data.data.forEach((item, index) => {
								if (index == 12) return
								this.contactList.push(item)
							})
						}
						this.contactList = res.data.data.data
					}
				})
			},
			chaxun(el) {
				if (el < 0) {
					console.log(11);
					if (this.page == 1) {
						return
					}else{
						this.page = this.page + el
						this.getContactList()
						return
					}
					
				}
				if(this.contactList.length< 12 ){
					return 
				}else{
					this.page = this.page + el
					this.getContactList()
				}


			}
		}
	}
</script>

<style lang="scss">
	.page {
		display: flex;
		width: 100vw;
		min-height: 100vh;

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

		>.customer_body {
			padding: 50rpx 40rpx;
			display: flex;
			flex-wrap: wrap;

			>.list {

				>.img {
					margin: 0rpx 15rpx 13rpx 0;
					border: 0.5rpx;

					&:nth-child(3n+1) {
						margin: 0 14rpx 13rpx 0;
					}

					&:nth-child(3n) {
						margin: 0 0rpx 13rpx 0;
					}
				}
			}

			>.btnlist {
				padding: 50rpx 40rpx 70rpx 40rpx;
				width: calc(100vw - 40rpx - 40rpx);
				display: flex;
				flex-direction: row;
				justify-content: center;

				>.btn {
					width: 45rpx;
					height: 40rpx;
					margin: 0 40rpx;
				}
			}
		}

		>.foot_module {
			position: absolute;
			bottom: 1rpx;
			width: 100%;
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
