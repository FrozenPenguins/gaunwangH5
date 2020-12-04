<template>
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
	</view>
</template>

<script>
</script>

<style lang="scss">
	.foot_module {
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

			>.font {
				margin: 13rpx auto;
				font-size: 18rpx;
				font-family: HYQiHei 50S, HYQiHei 50S-50S;
				font-weight: 50S;
				text-align: left;
				line-height: 20rpx;
			}
		}
	}
</style>
