<script>
export default {
	onLaunch: () => {
		// #ifdef  H5 || MP
		console.log(
			"%cAmmmm --->>> App Launch",
			"background: url(http://img.willmid.com/images/2020/07/08/4k_7e8c8.jpg); background-size: cover; background-position: center; color: white; padding: 3px 6px; border-radius: 3px; font-weight: bold;"
		);
		// #endif
		// #ifndef  H5 || MP
		console.log("Ammmm --->>> App Launch");
		// #endif
	},
	onShow: () => {
		// #ifdef  H5 || MP
		console.log(
			"%cAmmmm --->>> App Show",
			"background: url(http://img.willmid.com/images/2020/07/08/4k_7e8c8.jpg); background-size: cover; background-position: center; color: white; padding: 3px 6px; border-radius: 3px; font-weight: bold;"
		);
		// #endif
		// #ifndef  H5 || MP
		console.log("Ammmm --->>> App Show");
		// #endif
	},
	onHide: () => {
		// #ifdef  H5 || MP
		console.log(
			"%cAmmmm --->>> App Hide",
			"background: url(http://img.willmid.com/images/2020/07/08/4k_7e8c8.jpg); background-size: cover; background-position: center; color: white; padding: 3px 6px; border-radius: 3px; font-weight: bold;"
		);
		// #endif
		// #ifndef  H5 || MP
		console.log("Ammmm --->>> App Hide");
		// #endif
	},
	onError: (error) => {
		// #ifdef  H5 || MP
		console.log(
			"%c错误 --->>> ",
			"background: url(http://img.willmid.com/images/2020/07/08/4k_7e8c8.jpg); background-size: cover; background-position: center; color: white; padding: 3px 6px; border-radius: 3px; font-weight: bold;",
			error
		);
		// #endif
		// #ifndef  H5 || MP
		console.log("错误 --->>>", error);
		// #endif
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
