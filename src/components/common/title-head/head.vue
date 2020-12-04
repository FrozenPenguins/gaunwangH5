<template>
	<view class="hide_right" :class="{'show': show}">
		<view class="hide_text">
			<text class="text" ></text>
			<text class="text"@click="$navigation( '/pages/index/index')"  :class="{'showtext': this.selectId=='1'}">首页</text>
			<text class="text"@click="$navigation( '/pages/business/business')" :class="{'showtext': this.selectId=='2'}">业务范围</text>
			<text class="text"@click="$navigation('/pages/project/project')" :class="{'showtext': this.selectId=='3'}">项目案例</text>
			<text class="text"@click="$navigation('/pages/customer/customer')" :class="{'showtext':this.selectId=='4'}">合作客户</text>
			<text class="text"@click="$navigation('/pages/contactUs/contact')" :class="{'showtext': this.selectId=='5'}">联系我们</text>
		</view>
	</view>
</template>

<script>
		export default {
			props: {
				move1: {
					type: Boolean
				},
				num:{
					type:String
				}
			},
			data: () => ({
				show: false,
				selectId:1
				}),
			methods: {
				tabShow(bl ,number) {
					this.show = bl
					this.selectId = number
					console.log(this.selectId)
				}
			}
		}
	</script>
</script>

<style lang="scss">
	.hide_right {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 100vw;
		right: -70vw;
		
		background-color: #F2F2F2;
		&.show {
			left: 30vw;
			right: 0;
			
		}

		>.hide_text {
			margin: 40rpx 0 0 0;
			display: flex;
			flex-direction: column;
			text-align: right;
			>.text {
				padding: 20rpx 20rpx 20rpx 0;
				font-size: 26rpx;
				color: #5D5D5D;
			}
			>.showtext{
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
				background-color: #ffffff;
			}
		}
	}
</style>
