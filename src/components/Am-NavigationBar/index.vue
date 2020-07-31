<template>
	<view class="NAVIGATION-BAR" :style="[
		background ? { background } : {}
	]">
		<view v-if="blurry" class="blurry"></view>
		<view class="STATUS-BAR" :style="[
			{ height: `${systemInfo.statusBarHeight}px` },
			statusBackground ? { background: statusBackground } : {}
		]"></view>
		<view class="NAVIGATION" :style="[
			mp ? { height: `${capsule.height + (capsule.top - systemInfo.statusBarHeight + (ios ? 2 : -1)) * 2}px` } : {}
		]">
			<text class="title" :style="[
				color ? { color } : {},
				mp ? { padding: `0 ${(systemInfo.screenWidth - capsule.right) * 2 + capsule.width}px`} : {}
			]">{{ title || 'Vue-UniApp-Project' }}</text>
			<view class="content" :style="[
				mp ? { paddingRight: `${(systemInfo.screenWidth - capsule.right) * 2 + capsule.width}px`} : {}
			]">
				<slot name="content"></slot>
			</view>
		</view>
		<slot name="more"></slot>
	</view>
</template>

<script>
	export default {
		props: {
			background: {
				type: [String, Boolean],
				default: false
			},
			statusBackground: {
				type: [String, Boolean],
				default: false
			},
			color: {
				type: [String, Boolean],
				default: false
			},
			title: {
				type: [String, Boolean],
				default: false
			},
			blurry: {
				type: Boolean,
				default: false
			}
		},
		data: () => ({
			systemInfo: uni.getSystemInfoSync(),
			// #ifdef MP
			capsule: uni.getMenuButtonBoundingClientRect(),
			// #endif
			mp: false,
			ios: false
		}),
		created() {
			// #ifdef MP
			this.mp = true
			// #endif
			if (this.systemInfo.system.indexOf("iOS") != -1) {
				this.ios = true
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.NAVIGATION-BAR {
		transition: .3s;
		position: sticky;
		top: 0;
		z-index: 9999;
		width: 100vw;
		background: rgba($color: #000000, $alpha: .1);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		> .blurry {
			position: absolute;
			z-index: 8;
			width: 100vw;
			height: 100%;
			backdrop-filter: blur(10px);
		}
		> .STATUS-BAR {
			
		}
		> .NAVIGATION {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			height: 100rpx;
			> .title {
				width: 100vw;
				box-sizing: border-box;
				text-align: center;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				position: absolute;
				z-index: 9;
				font-size: 36rpx;
				font-weight: bold;
				color: #333333;
			}
			> .content {
				position: absolute;
				z-index: 10;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 100%;
				width: 100vw;
				box-sizing: border-box;
			}
		}
	}
</style>
