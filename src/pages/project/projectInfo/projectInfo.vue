<template>
	<view class="page" :class="{'hide' : move1 }" @click="move2 && move()">
			<head-view ref="head"> </head-view>
			<Am-NavigationBar title=" " background="#FFFFFF">
				<image slot="content" src="@/static/indexImg/logo.png" style="width: 60rpx; height: 60rpx;margin-left: 40rpx;"
				 mode="aspectFit"></image>
				<image slot="content" src="@/static/indexImg/菜单icon.png" style="width: 28rpx; height: 24rpx;margin-left: 582rpx;"
				 mode="aspectFit" @click.stop="move"></image>
			</Am-NavigationBar>
		<view class="projectInfo_head">
			<text class="head">{{titleinfo}}</text>
			<view class="body">
					<!-- <view class="" style="box-shadow: 0px 2px 4px 0px rgba(8,2,3,0.1); width: 670rpx; height: 1rpx;">	
					</view> -->
				<text class="left" v-if="url">{{url}}</text>
				<text class="left" v-else>http://www.sdari.com.cn/</text>
				<text class="right" >{{bodyinfo}}</text>
			</view>
		</view>
		<view class="projectInfo_body">
			<text>{{des}}</text>
		</view>
		
		<view class="projectInfo_colors"  >
			<rich-text v-if="content"   :nodes="content | richTextFormat"></rich-text>
		</view>
		<!-- 
		<view class="projectInfo_imgList">
			<view class="title">
				<div class="rectangle">
				</div>
				<text class="title_home">首页</text>
			</view>
			<image src="../../../static/indexImg/组1_4.png" class="img" mode=""></image>
		</view>
		
		<view class="projectInfo_imgList">
			<view class="title">
				<div class="rectangle">
				</div>
				<text class="title_home">公司介绍</text>
			</view>
			<image src="../../../static/indexImg/组1_4.png" class="img" mode=""></image>
		</view> -->
		
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
			move1: false,
			move2: false,
			ishide: true,
			num:'3',
			projectId:null,
			titleinfo:null,
			bodyinfo:null,
			des:null,
			content:null,
			url:null,
		}),
		onLoad(options) {
			console.log(options);
			this.projectId = options.id
		},
		mounted() {
				this.getProjectInfo()
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
			getProjectInfo(){
				uni.request({
					url:"http://n.chenhong.xyz/api/index/cases_info",
					data:{
						id: this.projectId
					},
					method:'GET',
					success: res => {
						console.log(res);
						if(res.data.code == 200){
							this.content = res.data.data.content;
							this.titleinfo =  res.data.data.title
							this.bodyinfo = res.data.data.category
							this.des = res.data.data.intr
							this.url = res.data.data.url
						}
					}
				})
			}
		},
		filters: {
			richTextFormat(content) {
				return content.replace(/\<img/gi, '<img style="border-radius: 5%;width: 100%; max-width: 100%; height: auto;"')/* 解决图片超出屏幕大小问题 */
				.replace(/&tp=webp&/gi, '&')/* 解决ios不显示图片问题 */
				.replace(/\<td/gi, '<td style="border: 1px solid #000000;"')/* 解决不显示表格边框问题 */
				.replace(/\<table/gi, '<table style="border: 1px solid #000000;"')/* 解决不显示表格边框问题 */
			}
		  },
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
		>.projectInfo_head{
			  padding: 50rpx 40rpx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
			>.head{
				font-size: 34rpx;
				font-family: HYQiHei 60S, HYQiHei 60S-60S;
				font-weight: bold;
				text-align: left;
				color: #333333;
				// box-shadow: 0px 2px 4px 0px rgba(8,2,3,0.1); 
			}
			>.body{
				box-sizing: border-box;
				padding: 40rpx 0;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				>.left{
					font-size: 24rpx;
					font-family: HYQiHei 50S, HYQiHei 50S-50S;
					font-weight: 50S;
					text-align: left;
					color: #808080;
				}
				>.right{
					font-size: 24rpx;
					font-family: HYQiHei 50S, HYQiHei 50S-50S;
					font-weight: 50S;
					text-align: left;
					color: #e11612;
				}
			}
		}
		>.projectInfo_body{
			padding: 50rpx 40rpx;
			box-sizing: border-box;
			font-size: 26rpx;
			font-family: HYQiHei 50S, HYQiHei 50S-50S;
			font-weight: 50S;
			text-align: justifyLeft;
			color: #333333;
		}
		>.projectInfo_colors{
			padding: 40rpx 40rpx;
		}
		>.projectInfo_bigFont{
			padding: 30rpx 40rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			>.bigFont{
				font-size: 30rpx;
				font-family: Verdana Regular, Verdana Regular-Regular;
				font-weight: bold;
				font-style: italic;
				text-align: justifyLeft;
				color: #808080;
			}
			>.bodyFont{
				margin: 40rpx 0;
				display: flex;
				flex-direction: row;
				>.bigSize{
					font-size: 141rpx;
					font-family: Verdana Bold, Verdana Bold-Bold;
					font-weight: 700;
					font-style: italic;
					text-align: justifyLeft;
					color: #333333;
				}
				>.bigSize_right{
					display: flex;
					flex-direction: column;
					padding: 10rpx 20rpx;
					>.text_kong{
						display: block;
						height: 40rpx;
						width: 80rpx;	
						margin: 20rpx auto;
					}
				}
			}
		}
		>.projectInfo_imgList{
			box-sizing: border-box;
			padding: 30rpx 40rpx;
			>.title{
				margin: 20rpx 0;
				display: flex;
				flex-direction: row;
				align-items: center;
				>.rectangle{		
					width: 16rpx; 
					height: 16rpx;
					background-color: red;
					margin: 0 10rpx 0 0;
					transform:rotate(45deg);
					-ms-transform:rotate(45deg); 	/* IE 9 */
					-moz-transform:rotate(45deg); 	/* Firefox */
					-webkit-transform:rotate(45deg); /* Safari 和 Chrome */
					-o-transform:rotate(45deg);
				}
				>.title_home{
					font-size: 24rpx;
					font-family: HYQiHei 50S, HYQiHei 50S-50S;
					font-weight: 50S;
					text-align: justifyLeft;
					color: #e11612;
				}
			}
			>.img{
				width: 670rpx;
				height: 380rpx;
			}
			&:nth-child(n-1){
				padding: 0 40rpx 20rpx 40rpx;
			}
		
		}
		>.foot_module {
			box-sizing: border-box;
			background-color: #333333;
			color: #ffffff;
			display: flex;
			flex-direction: column;
			margin: 40rpx 0 0 0;

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
