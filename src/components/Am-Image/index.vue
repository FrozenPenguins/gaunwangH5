<template>
	<view v-if="stop" class="IMAGE" @click.stop="onClick">
		<image lazy-load :style="[
			width && `${width}rpx`,
			height && `${height}rpx`,
			padding && padding,
			margin && margin
		]" :src="imgSrc ? 'static/default.jpg' : src" :mode="mode" @load="load" @error="error"></image>
		<image class="DEFAULT" :class="{'HIDE' : hide}" src="static/loading.gif" mode="aspectFill"></image>
	</view>
	<view v-else class="IMAGE" @click="onClick">
		<image lazy-load :style="[
			width && `${width}rpx`,
			height && `${height}rpx`,
			padding && padding,
			margin && margin
		]" :src="imgSrc ? 'static/default.jpg' : src" :mode="mode" @load="load" @error="error"></image>
		<image class="DEFAULT" :class="{'HIDE' : hide}" src="static/loading.gif" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		props: {
			width: {
				type: [String, Number, Boolean],
				default: false
			},
			height: {
				type: [String, Number, Boolean],
				default: false
			},
			margin: {
				type: [String, Boolean],
				default: false
			},
			padding: {
				type: [String, Boolean],
				default: false
			},
			mode: {
				type: String,
				default: 'aspectFill'
			},
			src: {
				type: [String, Boolean],
				default: false
			},
			stop: {
				type: Boolean,
				default: false
			}
		},
		data: () => ({
			imgSrc: false,
			hide: false
		}),
		methods: {
			load(event) {
				this.hide = true
			},
			error(event) {
				this.imgSrc = true
			},
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.IMAGE {
		position: relative;
		overflow: hidden;
		> image {
			height: 100%;
			width: 100%;
			&.DEFAULT {
				position: absolute;
				left: 0;
				transition: 1s;
				&.HIDE {
					opacity: 0;
				}
			}
		}
	}
</style>
