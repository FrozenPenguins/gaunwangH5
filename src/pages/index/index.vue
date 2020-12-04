<template>
	<view class="page" :class="{'hide' : move1 }" @click="move2 && move()">
		<Am-NavigationBar title=" " background="#FFFFFF">
			<image slot="content" src="../../static/indexImg/logo.png" style="width: 60rpx; height: 60rpx;margin-left: 40rpx;"
			 mode="aspectFit"></image>
			<image slot="content" src="../../static/indexImg/菜单icon.png" style="width: 36rpx; height: 32rpx;margin-left: 582rpx;"
			 mode="aspectFit" @click.stop="move"></image>
		</Am-NavigationBar>
		<head-view ref="head" num="1"></head-view>
		<view class="swiper_banner">
			<swiper class="swiper_banner" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				<block v-for="(item, index) in bannerList" :key="index">
					<swiper-item>
						<image :src="item.images" class="banner_css" mode="aspectFill"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="business_module">
			<view style="display: flex;align-items: center;">
				<text style="font-size: 32rpx;font-weight: bold;text-align: justifyLeft;color: #333333;letter-spacing: 2rpx;"
				 @click="$navigation('/pages/business/business')">业务范围</text>
				<text style="margin-left: auto;font-size: 26rpx;font-weight: 50S;text-align: justifyLeft;color: #808080;letter-spacing: 1rpx;"
				 @click="$navigation('/pages/business/business')">更多</text>
				<image src="../../static/indexImg/箭头.png" style="width: 10rpx;height: 17rpx;padding: 12rpx;"></image>
			</view>
			<view class="business_module_body">
				<view class="business_module_bodyImg" v-for="(item , index ) in businessList" :key="index">
					<image :src="item.images" class="business_bodyImg" mode="aspectFill"></image>
					<text class="business_bodyFont">{{item.title}}</text>
				</view>
			</view>

		</view>
		<view class="project_module">
			<view style="display: flex;align-items: center;">
				<text style="font-size: 32rpx;font-weight: bold;text-align: justifyLeft;color: #333333;letter-spacing: 2rpx;"
				 @click="$navigation('/pages/project/project')">项目案例</text>
				<text style="margin-left: auto;font-size: 26rpx;font-weight: 50S;text-align: justifyLeft;color: #808080;letter-spacing: 1rpx;">更多</text>
				<image src="../../static/indexImg/箭头.png" style="width: 10rpx;height: 17rpx;padding: 12rpx;"></image>
			</view>
			<view class="project_module_Navigation tabBar">
				<text class="project_module_NavigationFont list" @click="show(projectBody=1)" :class="{selectshow: projectBody==1}">全部</text>
				<text class="project_module_NavigationFont" @click="show(projectBody=2)" :class="{selectshow: projectBody==2}">网站设计</text>
				<text class="project_module_NavigationFont" @click="show(projectBody=3)" :class="{selectshow: projectBody==3}">移动设计</text>
				<text class="project_module_NavigationFont" @click="show(projectBody=4)" :class="{selectshow: projectBody==4}">品牌形象</text>
				<text class="project_module_NavigationFont" @click="show(projectBody=5)" :class="{selectshow: projectBody==5}">电商设计</text>
			</view>
			<view v-if="projectBody==1" class="project_module_body">
				<view class="project_module_bodyList frist" v-for="(item ,index) in projectList" :key="index">
					<view class="project_module_bodyIBmg">
						<image :src="item.images" class="project_bodyImg" mode="aspectFill"></image>
					</view>
					<text class="project_module_bodyTitle" @click="nt(item.id)">{{item.title}}</text>
					<view class="project_module_bodyIntroduce">
						<text class="project_Font left">企业/集团/工业</text>
						<text class="project_Font right">{{item.category}}</text>
					</view>
				</view>
			</view>
			<view v-else-if="projectBody==2" class="project_module_body">
				<view class="project_module_bodyList frist" v-for="(item ,index) in projectList" :key="index">
					<view class="project_module_bodyIBmg">
						<image :src="item.images" class="project_bodyImg" mode="aspectFill"></image>
					</view>
					<text class="project_module_bodyTitle" @click="nt(item.id)">{{item.title}}</text>
					<view class="project_module_bodyIntroduce">
						<text class="project_Font left">企业/集团/工业</text>
						<text class="project_Font right">{{item.category}}</text>
					</view>
				</view>
			</view>
			<view v-else="projectBody==3" class="project_module_body">
				<view class="project_module_bodyList frist" v-for="(item ,index) in projectList" :key="index">
					<view class="project_module_bodyIBmg">
						<image :src="item.images" class="project_bodyImg" mode="aspectFill"></image>
					</view>
					<text class="project_module_bodyTitle" @click="nt(item.id)">{{item.title}}</text>
					<view class="project_module_bodyIntroduce">
						<text class="project_Font left">企业/集团/工业</text>
						<text class="project_Font right">{{item.category}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="customer_module">
			<view style="display: flex;align-items: center;">
				<text style="font-size: 32rpx;font-weight: bold;text-align: justifyLeft;color: #333333;letter-spacing: 2rpx;"
				 @click="$navigation('/pages/customer/customer')">合作客户</text>
				<text style="margin-left: auto;font-size: 26rpx;font-weight: 50S;text-align: justifyLeft;color: #808080;letter-spacing: 1rpx;"
				 @click="$navigation('/pages/customer/customer')">更多</text>
				<image src="../../static/indexImg/箭头.png" style="width: 10rpx;height: 17rpx;padding: 12rpx;"></image>
			</view>
			<view class="customer_module_body">
				<view v-for="(item,index) in contactList" :key="index">
					<image  :src="item.images" class="img" style="width: 206rpx;height: 210rpx;" mode=""></image>
				</view>
				
			</view>

		</view>
		<view class="foot_module">
			<view class="foot_module_Navigation">
				<text class=" tabbar">全部</text>
				<text class="tabbar">网站设计</text>
				<text class="tabbar">移动设计</text>
				<text class="tabbar">品牌形象</text>
				<text class="tabbar">电商设计</text>
			</view>
			<view class="foot_module_foot">
				<text class="font">XSWLMADJD.PWE PELECE CALL WE</text>
				<text class="font">沪ICP备09109183号-25</text>
			</view>
		</view>
		<image src="../../static/indexImg/电话.png" class="callImg" :class="{'hide' : move1 }" @click="$navigation('/pages/contactUs/contact')"></image>
	</view>

</template>
<script>
	export default {
		name: 'App',
		data: () => ({
			projectBody: 1,
			tiaozhuanUrl: null,
			index: null,
			isvisible: false,
			move1: false,
			move2: false,
			ishide: true,
			num: '1',
			bannerList:[],//首页轮番图
			businessList:[],//业务列表
			projectList:[],//项目列表
			contactList:[],//合作客户列表
		}),
		mounted() {
			this.getBanner()
			this.getBusiness()
			this.getProjectList()
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
			getProjectList(){
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/cases_lits', //仅为示例，并非真实接口地址。
					data:{
						page:1,
					},
					method: 'GET' ,//请求方式  或GET
					success: res => {
						console.log(res);
						if(res.data.data.data.length>3){
							res.data.data.data.forEach((item,index) => {
								if(index==3) return
								this.projectList.push(item)
							})
						}
						this.projectList = res.data.data.data
					}
				})
			},
			getContactList(){
				uni.request({
					url: 'http://n.chenhong.xyz/api/index/partners', //仅为示例，并非真实接口地址。
					data:{
						page:1,
					},
					method: 'GET' ,//请求方式  或GET
					success: res => {
						console.log(11,res);
						if(res.data.data.data.length>6){
							res.data.data.data.forEach((item,index) => {
								if(index==6) return
								this.contactList.push(item)
							})
						}
						this.contactList = res.data.data.data
					}
				})
			},
			nt(id){
				uni.navigateTo({
					url:`/pages/project/projectInfo/projectInfo?id=${id}`
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.page {
		display: flex;
		width: 100vw;
		min-height: 100vh;
		left: 0;

		&.hide {
			left: -70vw;

		}

		.swiper_banner {
			height: 1100rpx;

			.banner_css {
				width: 100%;
				height: 100%;
			}
		}

		>.business_module {
			box-sizing: border-box;
			padding: 40rpx 40rpx;

			>.business_module_hear {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			>.business_module_body {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 40rpx auto;

				>.business_module_bodyImg {
					flex-direction: column;
					display: flex;
					align-items: center;
					padding: 24rpx 0 0 0;
				}

				>.business_module_bodyImg:nth-child(2n) {
					padding: 24rpx 0 0 30rpx;
				}
			}
		}

		>.project_module {
			box-sizing: border-box;
			padding: 40rpx 40rpx;

			>.project_module_Navigation {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin: 40rpx 0 0 0;

				>.project_module_NavigationFont {
					width: max-content;
					flex-direction: row;
					text-align: left;
					font-size: 26rpx;
					color: #808080;
					padding-bottom: 6rpx;
					border-bottom: 5rpx solid transparent;

					&.selectshow {
						color: red;
						border-bottom-color: red;


					}
				}
			}

			>.project_module_body {
				display: flex;
				flex-direction: column;
				padding: 0 20rpx 20rpx 0;

				>.project_module_bodyList {
					margin: 40rpx 0 0 0;

					&.frist {
						margin: 0 0 0 0;
					}

					>.project_module_bodyTitle {
						margin: 10rpx 0 10rpx 22rpx;
						font-size: 28rpx;
						font-weight: 50S;
						text-align: justifyLeft;
						color: #333333;
						letter-spacing: 1rpx;
					}

					>.project_module_bodyIntroduce {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						padding-bottom: 20rpx;
						margin-top: 5rpx;
						background: #ffffff;
						box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);

						>.project_Font {
							font-size: 24rpx;
							color: #b3b3b3;
							letter-spacing: 1rpx;
							justify-content: space-between;

							&.left {
								margin: 0 0 0 25rpx;
							}

							&.right {
								margin: 0 7rpx 0 25rpx;
								color: red;

							}

						}
					}


				}
			}
		}

		>.customer_module {
			box-sizing: border-box;
			padding: 40rpx 40rpx;



			>.customer_module_body {
				margin: 40rpx auto;
				display: flex;
				flex-wrap: wrap;

				>.img {
					margin: 13rpx 19rpx;
					border: 0.5rpx;


					&:nth-child(3n+1) {
						margin: 13rpx 5rpx 13rpx 0;
					}

					&:nth-child(3n) {
						margin: 13rpx 0rpx 13rpx 0;
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
				margin: 15rpx auto;

				>.font {
					margin: 13rpx auto;
					font-size: 18rpx;
					font-family: HYQiHei 50S, HYQiHei 50S-50S;
					font-weight: 50S;
					text-align: left;
					line-height: 10rpx;


				}
			}

		}

		.business_bodyImg {
			width: 320rpx;
			height: 200rpx;
		}

		.business_bodyFont {
			font-size: 26rpx;
			font-weight: 50S;
			text-align: justifyLeft;
			color: #333333;
			letter-spacing: 1rpx;
			padding: 10rpx;
		}

		.project_bodyImg {
			width: 670rpx;
			height: 300rpx;
		}

		>.callImg {
			position: fixed;
			width: 80rpx;
			height: 80rpx;
			opacity: 0.8;
			right: 20px;
			bottom: 270rpx;

			&.hide {
				display: none;
			}
		}
	}
</style>
