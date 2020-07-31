<template>
	<view class="ICON-FONT" :class="[
		fontFamily,
		`${prefix}-${type}`
	]" :style="[
		size ? { fontSize: `${size}rpx` } : {},
		color ? { color } : {}
	]"></view>
</template>

<script>
export default {
	data: () => ({
		prefix: 'CR',
		fontFamily: 'CarRepair'
	}),
	props: {
		type: {
			type: String
		},
		size: {
			type: [Boolean, String],
			default: false
		},
		color: {
			type: [Boolean, String],
			default: false
		}
	}
};
</script>

<style>
	@import "scss/index.scss";
	.ICON-FONT {
		font-size: 8.5rpx;
	}
</style>
