import Vue from 'vue'

const navigation = (Url) =>{
			uni.navigateTo({
				url: Url
		});
		// '/pages/index/index'
		// case '/pages/business/business'://业务范围
		// 	uni.navigateTo({
		// 		url: Url
		// 	});
		// 	break;
		// case '/pages/business/business'://项目案例
		// 	uni.navigateTo({
		// 		url:  '/pages/project/project'
		// 	});
		// 	break;
		// case 3://合作客户
		// 	uni.navigateTo({
		// 		url:  '/pages/customer/customer'
		// 	});
		// 	break;
		// case 4://联系我们
		// 	uni.navigateTo({
		// 		url: '/pages/contactUs/contact'
		// 	});
		// 	break;
		// case 5://案例信息
		// 	uni.navigateTo({
		// 		url:  '/pages/project/projectInfo/projectInfo'
		// 	});
		// 	break;
		// default:
		// 	break;
	}
			


Vue.prototype.$navigation = navigation
