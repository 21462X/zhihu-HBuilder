<template>
	<div>
		<div class="nav gutter">
			</div class="nav-bar">
				<ul class="nav-list flext-left">
				<li class="nav-item"><router-link to="/home">首页</router-link></li>
				<li class="nav-item"><router-link to="/explore">发现</router-link></li>
				<li class="nav-item"><router-link to="/question/waiting">等你来答</router-link></li>
				<li class="nav-item abs-center-right"><router-link to="/login">登录</router-link></li>
				</ul>
			</div>
		</div>
				<!-- 二级路由入口 -->
			</router-view>
		</div>
</template>

<script>
	export default{
		name:'nav',
		data(){
			return{};
		},
		created() {}
	};
</script>

<style lang="scss" scoped>
	.router-link-active{
		border-bottom: 2px solid #fff;
	}
	.gutter{
		position: relative;
		margin-bottom: 10px;
	}
</style>
