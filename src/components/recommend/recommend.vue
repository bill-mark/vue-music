<template>
<div class="recommend" ref="recommend">
	<div>
		<div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
		  <slider>
		    <div v-for="item in recommends">
		      <a :href="item.linkUrl">
		        <img class="needsclick" @load="loadImage" :src="item.picUrl">
		      </a>
		    </div>
		  </slider>
		</div>
	</div>
</div>
</template>

<script type="text/javascript">
import Slider from '../../base/slider/slider.vue'
export default{
	components:{
		Slider
	},
	data(){
		return {
			recommends:[]
		}
	},
	created(){
       this.getRecommend()
	},
	methods:{
		getRecommend(){
			this.$http.get("musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",{
	           params:{
	           	 g_tk:453485667,
	           	 uin:2286449127,
	           	 format:'json',
	           	 inCharset:'utf-8',
	           	 outCharset:'utf-8',
	           	 notice:0,
	           	 platform:'h5',
	             needNewCode:1,
	             _:1512716925669,
	           }
			})
			.then( (res)=>{
				this.recommends = res.data.data.slider
				console.log(this.recommends)
			})
			.catch((error)=>{
				console.log(error)
			})
		}
	}
}

</script>

<style type="text/css" rel="stylesheet/stylus">
	
</style>






