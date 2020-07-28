<script>
export default {
	onLaunch: () => {
		console.log(
			"%cAmmmm --->>> App Launch",
			"background: #1678FF; color: white; padding: 0 6px; border-radius: 1px;"
		);
	},
	onShow: () => {
		console.log(
			"%cAmmmm --->>> App Show",
			"background: #04CE68; color: white; padding: 0 3px; border-radius: 1px;"
		);
	},
	onHide: () => {
		console.log(
			"%cAmmmm --->>> App Hide",
			"background: #777777; color: white; padding: 0 6px; border-radius: 1px;"
		);
	},
	onError: (error) => {
		console.log(
			"%c错误",
			"background: red; color: white; padding: 0 6px;",
			error
		);
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
/* #ifndef APP-PLUS-NVUE */
page {
	background: #fafbfc;
	width: 100vw;
	box-sizing: border-box;
	@include flex();
	/* #ifdef H5 */
	// min-height: calc(100vh - var(--window-bottom));/* 自定义导航栏时使用此行代码 */
	min-height: calc(100vh - var(--window-bottom) - var(--window-top));/* 原生导航栏时使用此行代码 */
	/* #endif */
	/* #ifndef H5 */
	min-height: calc(100vh);
	/* #endif */
}

page,
view,
scroll-view,
progress,
rich-text,
checkbox-group,
label,
picker-view,
radio-group,
switch,
textarea,
audio,
image,
video,
map,
text,
input,
button,
camera,
radio,
slider,
editor,
swiper,
icon {
	position: relative;
	z-index: 10;
	transition: 0.3s;
}

image {
	will-change: transform;
}

.page {
	flex: 1;
	background: $background-color;
	width: 100vw;
	box-sizing: border-box;
	@include flex();
}
/* #endif */
</style>
