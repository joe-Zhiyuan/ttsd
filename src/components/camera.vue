<template>
	<div class='warp' ref="warp">
		<video class="video" ref="videoEl"></video>
		<button ref="btn" @click="shoot">截屏</button>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			};
		},
		mounted () {
			// 使用video显示摄像头录制的视频
			const videoEl = this.$refs.videoEl;
			// 调用摄像头录制视频功能
			async function checkCamera() {
				const navigator = window.navigator.mediaDevices;
				// 判断是否有摄像头
				const devices = await navigator.enumerateDevices();
				console.log('devices：' + devices)
				// 判断是否有权限同意使用摄像头
				const stream = navigator.getUserMedia({
					audio: false,
					video: {
						width: 500,
						height: 300,
						// facingMode: { // 后置摄像头
						// 	exact: "environment"
						// },
						facingMode: 'user',
					}
				}).then(res => { // 允许使用
					console.log(res)
					// 是否有video
					if (!videoEl) return;
					// 赋值信息流给video srcObject不是src
					videoEl.srcObject = res;
					videoEl.play();
				}).catch(e => { // 禁止使用或报错
					console.log('没有摄像头权限，请重置网页权限使用！' + e)
				})


			}
			console.log(stream)
			checkCamera();
		},
		methods: {
			// 截屏功能
			shoot () {
				// video元素
				const videoEl = this.$refs.videoEl;
				// 包裹元素
				const warp = this.$refs.warp;
				// 是否有video
				if (!videoEl && !warp) return;
				const canvas = document.createElement('canvas');
				canvas.width = 500;
				canvas.height = 300;
				console.log(canvas.width, canvas.height)
				// canvas 上下文对象
				const ctx = canvas.getContext('2d');
				ctx?.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
				warp.appendChild(canvas);
			},
		},
	}
</script>

<style scoped>
	.video {
		transform: rotateY(180deg);
	}
</style>
