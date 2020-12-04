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
		<view class="center_tabBar">
				<text class="font list" @click="show(projectBody=1)" :class="{selectshow: projectBody==1}">全部</text>
				<text class="font" @click="show(projectBody=2)" :class="{selectshow: projectBody==2}">网站设计</text>
				<text class="font" @click="show(projectBody=3)" :class="{selectshow: projectBody==3}">移动设计</text>
				<text class="font" @click="show(projectBody=4)" :class="{selectshow: projectBody==4}">品牌形象</text>
				<text class="font" @click="show(projectBody=5)" :class="{selectshow: projectBody==5}">电商设计</text>
		</view>
		<view class="project_body">
			<view class="project_body_list" v-for="(item , index ) in projectList" :key="index"   @click="nt(item.id)">
				<image :src="item.images" class="img" mode="aspectFill"></image>	
				<text class="project title">{{item.title}}</text>
				<view class="project bodyfont">
					<text class=" left">{{item.subtitle}}</text>
					<text class=" right">{{item.category}}</text>
				</view>
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
			projectBody: 1,
			index: null,
			isvisible: false,
			move1: false,
			move2: false,
			ishide: true,
			num:'3',
			bannerList:[],
			projectList:[],
		}),
		mounted() {
			this.getBanner()
				this.getProjectList()
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
			getProjectList(){
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/cases_lits', //仅为示例，并非真实接口地址。
					data:{
						page:1,
					},
					method: 'GET' ,//请求方式  或GET
					success: res => {
						console.log(res.data.data);
						this.projectList = res.data.data.data
					}
				})
			},
			nt(id) {
				uni.navigateTo({
					url:`/pages/project/projectInfo/projectInfo?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.page{
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
		>.center_tabBar{
			display: flex;
			flex-direction: row;
			padding: 40rpx 40rpx 5rpx 40rpx;
			display: inline-block;
			>.font{
				flex: 1;
				flex-direction: row;
				text-align: left;
				margin: 20rpx 40rpx 20rpx 0rpx;
				font-size: 26rpx;
				color: #808080;		
				&:first-child{
					margin: 10rpx 70rpx 10rpx 0;
				}
				&:last-child{
					margin: 10rpx 0 10rpx 10rpx ;
				}		
			}
			>.selectshow{	
				color: red;
				padding-bottom: 5rpx;
				border-bottom: 5rpx solid red; 

			}
		}
		>.project_body{
			box-sizing: border-box;
			padding: 0 40rpx 50rpx 40rpx;
			display: flex;
			flex-direction: column;
			>.project_body_list{	
				margin: 40rpx auto;
				&:first-child{
					margin: 0 auto;
				}
				&:last-child{
					margin: 0 0 100rpx 0;
				}
				>.img{
					margin-top: 20rpx;
					width: 670rpx;
					height: 300rpx;
				}
				>.title{
					margin: 10rpx 0 10rpx 22rpx;
					font-size: 28rpx;
					font-weight: 50S;
					text-align: justifyLeft;
					color: #333333;
					letter-spacing: 1rpx;
				}
				>.bodyfont{
					display: flex;
					flex-direction: row;
					justify-content: space-between;	
					margin-top: 5rpx;
					>.left {
						font-size: 22rpx;
						color: #b3b3b3;
						letter-spacing: 1rpx;
						justify-content: space-between;
						margin: 0 0 0 25rpx;
					}	
					>.right {
						font-size: 22rpx;
						color: #b3b3b3;
						letter-spacing: 1rpx;
						justify-content: space-between;
						margin: 0 27rpx 0 25rpx;
						color: red;		
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
