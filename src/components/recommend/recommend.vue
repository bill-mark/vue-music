<template>
<div class="recommend" ref="recommend">
  <div class="recommend-content">	
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
		<div class="recommend-list">
			<h1 class="list-title">热门歌单推荐</h1>
			<ul>
			  <li @click="selectItem(item)" v-for="item in discList.mvlist" class="item">
			    <div class="icon">
			      <img width="60" height="60" :src="item.picurl">
			    </div>
			    <div class="text">
			      <h2 class="name" v-html="item.singer_name"></h2>
			      <p class="desc" v-html="item.mvtitle"></p>
			    </div>
			  </li>
			</ul>
		</div>
	</div>
  </div>
</div>
</template>

<script type="text/javascript">
import Slider from '../../base/slider/slider.vue'
import {getDiscList} from '../../api/recommend'
export default{
	components:{
		Slider
	},
	data(){
		return {
			recommends:[],
			discList:
			{
		        "lan": "all",
		        "mvlist": [
		            {
		                "listennum": 1029886,
		                "mv_id": 1435607,
		                "mvdesc": "三小只滑雪放烟火度过美好时光",
		                "mvscore": 0,
		                "mvtitle": "我们的时光",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225121.gif",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 34412,
		                "singer_mid": "000zmpju02bEBm",
		                "singer_name": "TFBOYS",
		                "singerid": 34412,
		                "singermid": "000zmpju02bEBm",
		                "singername": "TFBOYS",
		                "singers": [
		                    {
		                        "id": 34412,
		                        "mid": "000zmpju02bEBm",
		                        "name": "TFBOYS"
		                    }
		                ],
		                "vid": "h0025mylc42"
		            },
		            {
		                "listennum": 1071,
		                "mv_id": 1436022,
		                "mvdesc": "将《芳华》哀而不伤的情感升华",
		                "mvscore": 0,
		                "mvtitle": "绒花 (《芳华》电影片尾曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225505.jpg",
		                "pub_date": "2017-12-19",
		                "publictime": "2017-12-19",
		                "singer_id": 4419,
		                "singer_mid": "003WlPvN2EvRaj",
		                "singer_name": "韩红",
		                "singerid": 4419,
		                "singermid": "003WlPvN2EvRaj",
		                "singername": "韩红",
		                "singers": [
		                    {
		                        "id": 4419,
		                        "mid": "003WlPvN2EvRaj",
		                        "name": "韩红"
		                    }
		                ],
		                "vid": "q0025fahdjg"
		            },
		            {
		                "listennum": 317,
		                "mv_id": 1435987,
		                "mvdesc": "古巨基自导自演机械人设计师",
		                "mvscore": 0,
		                "mvtitle": "初心 (泰禾人寿保险广告歌)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/l00253wjgob_496_280/0",
		                "pub_date": "2017-12-19",
		                "publictime": "2017-12-19",
		                "singer_id": 3347,
		                "singer_mid": "000NFT2p1GbnPB",
		                "singer_name": "古巨基",
		                "singerid": 3347,
		                "singermid": "000NFT2p1GbnPB",
		                "singername": "古巨基",
		                "singers": [
		                    {
		                        "id": 3347,
		                        "mid": "000NFT2p1GbnPB",
		                        "name": "古巨基"
		                    }
		                ],
		                "vid": "l00253wjgob"
		            },
		            {
		                "listennum": 1784,
		                "mv_id": 1435859,
		                "mvdesc": "听芒叉的温暖歌声度过圣诞节",
		                "mvscore": 0,
		                "mvtitle": "그놈의 크리스마스 (Lonely Christmas) (那家伙的圣诞节)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225507.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 968960,
		                "singer_mid": "003fJxgn36jULV",
		                "singer_name": "몬스타엑스",
		                "singerid": 968960,
		                "singermid": "003fJxgn36jULV",
		                "singername": "몬스타엑스",
		                "singers": [
		                    {
		                        "id": 968960,
		                        "mid": "003fJxgn36jULV",
		                        "name": "몬스타엑스"
		                    }
		                ],
		                "vid": "a0025mnqh9n"
		            },
		            {
		                "listennum": 12847,
		                "mv_id": 1435880,
		                "mvdesc": "鞠婧祎单飞后首支单曲",
		                "mvscore": 0,
		                "mvtitle": "分裂时差",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/s00254nzikr_496_280/0",
		                "pub_date": "2017-12-19",
		                "publictime": "2017-12-19",
		                "singer_id": 940634,
		                "singer_mid": "003XXZcL1OS12F",
		                "singer_name": "鞠婧祎",
		                "singerid": 940634,
		                "singermid": "003XXZcL1OS12F",
		                "singername": "鞠婧祎",
		                "singers": [
		                    {
		                        "id": 940634,
		                        "mid": "003XXZcL1OS12F",
		                        "name": "鞠婧祎"
		                    }
		                ],
		                "vid": "s00254nzikr"
		            },
		            {
		                "listennum": 95,
		                "mv_id": 1435253,
		                "mvdesc": "废墟乐队周云山教你弹《你好吗》",
		                "mvscore": 0,
		                "mvtitle": "《与音乐吉他小课堂》第20集 周云山 | 《你好吗》",
		                "picurl": "http://y.gtimg.cn/music/common/upload/uploadt_mv_recommend_conf/225462.jpg",
		                "pub_date": "2017-12-19",
		                "publictime": "2017-12-19",
		                "singer_id": 28054,
		                "singer_mid": "000HvQWT4Wstnz",
		                "singer_name": "周云山",
		                "singerid": 28054,
		                "singermid": "000HvQWT4Wstnz",
		                "singername": "周云山",
		                "singers": [
		                    {
		                        "id": 28054,
		                        "mid": "000HvQWT4Wstnz",
		                        "name": "周云山"
		                    }
		                ],
		                "vid": "z00256b21zi"
		            },
		            {
		                "listennum": 6439,
		                "mv_id": 1435824,
		                "mvdesc": "方大同将音乐与童书结合",
		                "mvscore": 0,
		                "mvtitle": "Catch A Dream (《艾美梦游》主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/i00250a3i0g_496_280/0",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 1066,
		                "singer_mid": "003zHcYF44FVEV",
		                "singer_name": "方大同",
		                "singerid": 1066,
		                "singermid": "003zHcYF44FVEV",
		                "singername": "方大同",
		                "singers": [
		                    {
		                        "id": 1066,
		                        "mid": "003zHcYF44FVEV",
		                        "name": "方大同"
		                    }
		                ],
		                "vid": "i00250a3i0g"
		            },
		            {
		                "listennum": 18191,
		                "mv_id": 1435740,
		                "mvdesc": "黄绮珊献唱《琅琊榜之风起长林》",
		                "mvscore": 0,
		                "mvtitle": "清平愿 (《琅琊榜之风起长林》电视剧片尾曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225130.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 210,
		                "singer_mid": "001nMsEp1RMsiO",
		                "singer_name": "黄绮珊",
		                "singerid": 210,
		                "singermid": "001nMsEp1RMsiO",
		                "singername": "黄绮珊",
		                "singers": [
		                    {
		                        "id": 210,
		                        "mid": "001nMsEp1RMsiO",
		                        "name": "黄绮珊"
		                    }
		                ],
		                "vid": "b0025uvq418"
		            },
		            {
		                "listennum": 9990,
		                "mv_id": 1435320,
		                "mvdesc": "与意大利著名歌唱家全新演绎",
		                "mvscore": 0,
		                "mvtitle": "Perfect Symphony",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/l0025piz0e4_496_280/0",
		                "pub_date": "2017-12-15",
		                "publictime": "2017-12-15",
		                "singer_id": 29222,
		                "singer_mid": "0045p4Sz0LIwL5",
		                "singer_name": "Ed Sheeran",
		                "singerid": 29222,
		                "singermid": "0045p4Sz0LIwL5",
		                "singername": "Ed Sheeran",
		                "singers": [
		                    {
		                        "id": 29222,
		                        "mid": "0045p4Sz0LIwL5",
		                        "name": "Ed Sheeran"
		                    },
		                    {
		                        "id": 9306,
		                        "mid": "001ho5Fy4Ya32J",
		                        "name": "Andrea Bocelli"
		                    }
		                ],
		                "vid": "l0025piz0e4"
		            },
		            {
		                "listennum": 4799,
		                "mv_id": 1435408,
		                "mvdesc": "袁娅维铿锵有力唱响热血战歌",
		                "mvscore": 0,
		                "mvtitle": "御龙将军台 (《御龙在天》五周年金曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225133.jpg",
		                "pub_date": "2017-12-17",
		                "publictime": "2017-12-17",
		                "singer_id": 36691,
		                "singer_mid": "00472DR10Ytv83",
		                "singer_name": "袁娅维",
		                "singerid": 36691,
		                "singermid": "00472DR10Ytv83",
		                "singername": "袁娅维",
		                "singers": [
		                    {
		                        "id": 36691,
		                        "mid": "00472DR10Ytv83",
		                        "name": "袁娅维"
		                    }
		                ],
		                "vid": "j0025i8s9nh"
		            },
		            {
		                "listennum": 2451,
		                "mv_id": 1435830,
		                "mvdesc": "许佳慧打破水逆勇敢爱",
		                "mvscore": 0,
		                "mvtitle": "逆流者",
		                "picurl": "http://y.gtimg.cn/music/common/upload/uploadt_mv_recommend_conf/225411.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 29942,
		                "singer_mid": "003y7ffP36dk5J",
		                "singer_name": "许佳慧",
		                "singerid": 29942,
		                "singermid": "003y7ffP36dk5J",
		                "singername": "许佳慧",
		                "singers": [
		                    {
		                        "id": 29942,
		                        "mid": "003y7ffP36dk5J",
		                        "name": "许佳慧"
		                    }
		                ],
		                "vid": "p00252yyn3k"
		            },
		            {
		                "listennum": 21433,
		                "mv_id": 1426837,
		                "mvdesc": "《琅琊榜之风起长林》燃战主题曲",
		                "mvscore": 0,
		                "mvtitle": "清平愿 (《琅琊榜之风起长林》电视剧宣传曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/223023.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 15980,
		                "singer_mid": "0042v82i28rTJ9",
		                "singer_name": "多亮",
		                "singerid": 15980,
		                "singermid": "0042v82i28rTJ9",
		                "singername": "多亮",
		                "singers": [
		                    {
		                        "id": 15980,
		                        "mid": "0042v82i28rTJ9",
		                        "name": "多亮"
		                    }
		                ],
		                "vid": "d0025x9s9c5"
		            },
		            {
		                "listennum": 2680,
		                "mv_id": 1435836,
		                "mvdesc": "刘忻献唱《亲爱的她们》",
		                "mvscore": 0,
		                "mvtitle": "如果有一天 (《亲爱的她们》电视剧主题曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225540.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 31710,
		                "singer_mid": "002mKVtV3AnQyX",
		                "singer_name": "刘忻",
		                "singerid": 31710,
		                "singermid": "002mKVtV3AnQyX",
		                "singername": "刘忻",
		                "singers": [
		                    {
		                        "id": 31710,
		                        "mid": "002mKVtV3AnQyX",
		                        "name": "刘忻"
		                    }
		                ],
		                "vid": "p0025981zmv"
		            },
		            {
		                "listennum": 1529,
		                "mv_id": 1435624,
		                "mvdesc": "有酒有氛围也有故事",
		                "mvscore": 0,
		                "mvtitle": "품 (POOM)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225137.jpg",
		                "pub_date": "2017-12-17",
		                "publictime": "2017-12-17",
		                "singer_id": 183885,
		                "singer_mid": "000BIEVV0HikXf",
		                "singer_name": "에디킴",
		                "singerid": 183885,
		                "singermid": "000BIEVV0HikXf",
		                "singername": "에디킴",
		                "singers": [
		                    {
		                        "id": 183885,
		                        "mid": "000BIEVV0HikXf",
		                        "name": "에디킴"
		                    }
		                ],
		                "vid": "p0025ymv2is"
		            },
		            {
		                "listennum": 2524,
		                "mv_id": 1435352,
		                "mvdesc": "与吴倩上演一段虐心的遗憾情感",
		                "mvscore": 0,
		                "mvtitle": "如果雨之后",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/t0025oj70kq_496_280/0",
		                "pub_date": "2017-12-19",
		                "publictime": "2017-12-19",
		                "singer_id": 200521,
		                "singer_mid": "0022bqqN3dRfN4",
		                "singer_name": "周兴哲",
		                "singerid": 200521,
		                "singermid": "0022bqqN3dRfN4",
		                "singername": "周兴哲",
		                "singers": [
		                    {
		                        "id": 200521,
		                        "mid": "0022bqqN3dRfN4",
		                        "name": "周兴哲"
		                    }
		                ],
		                "vid": "t0025oj70kq"
		            },
		            {
		                "listennum": 25,
		                "mv_id": 1435921,
		                "mvdesc": "意大利型男DJ兄弟的歌依旧炸！",
		                "mvscore": 0,
		                "mvtitle": "Parade",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225582.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 177080,
		                "singer_mid": "002b6sON40vgMB",
		                "singer_name": "Vinai",
		                "singerid": 177080,
		                "singermid": "002b6sON40vgMB",
		                "singername": "Vinai",
		                "singers": [
		                    {
		                        "id": 177080,
		                        "mid": "002b6sON40vgMB",
		                        "name": "Vinai"
		                    }
		                ],
		                "vid": "x0025fvwzhh"
		            },
		            {
		                "listennum": 1645,
		                "mv_id": 1435591,
		                "mvdesc": "这个boy把情话说得真诚有力",
		                "mvscore": 0,
		                "mvtitle": "Wife You Up",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225145.jpg",
		                "pub_date": "2017-12-17",
		                "publictime": "2017-12-17",
		                "singer_id": 1146756,
		                "singer_mid": "004RR8l43Fy2dj",
		                "singer_name": "Russ",
		                "singerid": 1146756,
		                "singermid": "004RR8l43Fy2dj",
		                "singername": "Russ",
		                "singers": [
		                    {
		                        "id": 1146756,
		                        "mid": "004RR8l43Fy2dj",
		                        "name": "Russ"
		                    }
		                ],
		                "vid": "h0025y9z9mh"
		            },
		            {
		                "listennum": 5363,
		                "mv_id": 1435593,
		                "mvdesc": "最强NBA代言人科比主题曲",
		                "mvscore": 0,
		                "mvtitle": "SuperNBA (《最强NBA》手游主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/p0025cfajyn_496_280/0",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 13716,
		                "singer_mid": "001PVcZX1QojtW",
		                "singer_name": "欧阳靖",
		                "singerid": 13716,
		                "singermid": "001PVcZX1QojtW",
		                "singername": "欧阳靖",
		                "singers": [
		                    {
		                        "id": 13716,
		                        "mid": "001PVcZX1QojtW",
		                        "name": "欧阳靖"
		                    }
		                ],
		                "vid": "p0025cfajyn"
		            },
		            {
		                "listennum": 769,
		                "mv_id": 1435702,
		                "mvdesc": "休·杰克曼等演《马戏之王》LIVE版",
		                "mvscore": 0,
		                "mvtitle": "Come Alive (《马戏之王》原声)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225148.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 56807,
		                "singer_mid": "004gbsfc1uugKT",
		                "singer_name": "Hugh Jackman",
		                "singerid": 56807,
		                "singermid": "004gbsfc1uugKT",
		                "singername": "Hugh Jackman",
		                "singers": [
		                    {
		                        "id": 56807,
		                        "mid": "004gbsfc1uugKT",
		                        "name": "Hugh Jackman"
		                    },
		                    {
		                        "id": 14323,
		                        "mid": "003NMexb21sFtw",
		                        "name": "Zac Efron"
		                    },
		                    {
		                        "id": 28691,
		                        "mid": "003bylin09tX9H",
		                        "name": "Zendaya"
		                    },
		                    {
		                        "id": 1236585,
		                        "mid": "002rKUut2SUyWF",
		                        "name": "Keala Settle"
		                    }
		                ],
		                "vid": "q002558jib3"
		            },
		            {
		                "listennum": 2316,
		                "mv_id": 1435728,
		                "mvdesc": "性感又有点可爱的魅力女人",
		                "mvscore": 0,
		                "mvtitle": "PINK LABEL",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225149.jpg",
		                "pub_date": "2017-12-17",
		                "publictime": "2017-12-17",
		                "singer_id": 207583,
		                "singer_mid": "000MuxbC34DHXN",
		                "singer_name": "레이샤",
		                "singerid": 207583,
		                "singermid": "000MuxbC34DHXN",
		                "singername": "레이샤",
		                "singers": [
		                    {
		                        "id": 207583,
		                        "mid": "000MuxbC34DHXN",
		                        "name": "레이샤"
		                    }
		                ],
		                "vid": "d002512x2mi"
		            },
		            {
		                "listennum": 23,
		                "mv_id": 1435945,
		                "mvdesc": "大海与夕阳还有振奋人心的音乐",
		                "mvscore": 0,
		                "mvtitle": "Writing Life",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225589.jpg",
		                "pub_date": "2017-12-18",
		                "publictime": "2017-12-18",
		                "singer_id": 170383,
		                "singer_mid": "003mnqt248F3BV",
		                "singer_name": "Goodbye Holiday",
		                "singerid": 170383,
		                "singermid": "003mnqt248F3BV",
		                "singername": "Goodbye Holiday",
		                "singers": [
		                    {
		                        "id": 170383,
		                        "mid": "003mnqt248F3BV",
		                        "name": "Goodbye Holiday"
		                    }
		                ],
		                "vid": "c0025zpdipd"
		            },
		            {
		                "listennum": 94,
		                "mv_id": 1435104,
		                "mvdesc": "Charlotte精心制作的MV",
		                "mvscore": 0,
		                "mvtitle": "I'm A Lie",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/225594.jpg",
		                "pub_date": "2017-12-19",
		                "publictime": "2017-12-19",
		                "singer_id": 37915,
		                "singer_mid": "002hBWZk1IoZQy",
		                "singer_name": "Charlotte Gainsbourg",
		                "singerid": 37915,
		                "singermid": "002hBWZk1IoZQy",
		                "singername": "Charlotte Gainsbourg",
		                "singers": [
		                    {
		                        "id": 37915,
		                        "mid": "002hBWZk1IoZQy",
		                        "name": "Charlotte Gainsbourg"
		                    }
		                ],
		                "vid": "e0025ac328h"
		            },
		            {
		                "listennum": 1867403,
		                "mv_id": 1407598,
		                "mvdesc": "泫雅回归展现超特级性感！",
		                "mvscore": 0,
		                "mvtitle": "Lip & Hip",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/220085.gif",
		                "pub_date": "2017-12-04",
		                "publictime": "2017-12-4",
		                "singer_id": 10415,
		                "singer_mid": "0040tgjy2qm5bG",
		                "singer_name": "현아",
		                "singerid": 10415,
		                "singermid": "0040tgjy2qm5bG",
		                "singername": "현아",
		                "singers": [
		                    {
		                        "id": 10415,
		                        "mid": "0040tgjy2qm5bG",
		                        "name": "현아"
		                    }
		                ],
		                "vid": "e0025ustnrd"
		            },
		            {
		                "listennum": 238016,
		                "mv_id": 1434578,
		                "mvdesc": "张靓颖用音乐诠释女英雄的成长",
		                "mvscore": 0,
		                "mvtitle": "红蔷薇 (《红蔷薇》电视剧主题曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/224134.jpg",
		                "pub_date": "2017-12-15",
		                "publictime": "2017-12-15",
		                "singer_id": 4607,
		                "singer_mid": "000aw4WC2EQYTv",
		                "singer_name": "张靓颖",
		                "singerid": 4607,
		                "singermid": "000aw4WC2EQYTv",
		                "singername": "张靓颖",
		                "singers": [
		                    {
		                        "id": 4607,
		                        "mid": "000aw4WC2EQYTv",
		                        "name": "张靓颖"
		                    }
		                ],
		                "vid": "d0025waa6ur"
		            },
		            {
		                "listennum": 273397,
		                "mv_id": 1429437,
		                "mvdesc": "泰妍温暖感性的圣诞曲",
		                "mvscore": 0,
		                "mvtitle": "This Christmas",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/223429.gif",
		                "pub_date": "2017-12-12",
		                "publictime": "2017-12-12",
		                "singer_id": 12967,
		                "singer_mid": "000Dt3oh13pg4o",
		                "singer_name": "태연",
		                "singerid": 12967,
		                "singermid": "000Dt3oh13pg4o",
		                "singername": "태연",
		                "singers": [
		                    {
		                        "id": 12967,
		                        "mid": "000Dt3oh13pg4o",
		                        "name": "태연"
		                    }
		                ],
		                "vid": "f0025b2hme9"
		            },
		            {
		                "listennum": 209566,
		                "mv_id": 1432893,
		                "mvdesc": "林俊杰新专首波同名主打",
		                "mvscore": 0,
		                "mvtitle": "伟大的渺小",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/a0025dncrh9_496_280/0",
		                "pub_date": "2017-12-14",
		                "publictime": "2017-12-14",
		                "singer_id": 4286,
		                "singer_mid": "001BLpXF2DyJe2",
		                "singer_name": "林俊杰",
		                "singerid": 4286,
		                "singermid": "001BLpXF2DyJe2",
		                "singername": "林俊杰",
		                "singers": [
		                    {
		                        "id": 4286,
		                        "mid": "001BLpXF2DyJe2",
		                        "name": "林俊杰"
		                    }
		                ],
		                "vid": "a0025dncrh9"
		            },
		            {
		                "listennum": 35123,
		                "mv_id": 1435400,
		                "mvdesc": "陈粒献唱COSMO时尚美丽盛典",
		                "mvscore": 0,
		                "mvtitle": "COSMOS (COSMO时尚美丽盛典主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/z002551i6pf_496_280/0",
		                "pub_date": "2017-12-15",
		                "publictime": "2017-12-15",
		                "singer_id": 940748,
		                "singer_mid": "004WgCsE3KBddt",
		                "singer_name": "陈粒",
		                "singerid": 940748,
		                "singermid": "004WgCsE3KBddt",
		                "singername": "陈粒",
		                "singers": [
		                    {
		                        "id": 940748,
		                        "mid": "004WgCsE3KBddt",
		                        "name": "陈粒"
		                    }
		                ],
		                "vid": "z002551i6pf"
		            },
		            {
		                "listennum": 718716,
		                "mv_id": 1407838,
		                "mvdesc": "李荣浩联手张靓颖献唱《女儿国》",
		                "mvscore": 0,
		                "mvtitle": "女儿国 (《西游记女儿国》电影主题曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/uploadt_mv_recommend_conf/220581.jpg",
		                "pub_date": "2017-12-06",
		                "publictime": "2017-12-6",
		                "singer_id": 4607,
		                "singer_mid": "000aw4WC2EQYTv",
		                "singer_name": "张靓颖",
		                "singerid": 4607,
		                "singermid": "000aw4WC2EQYTv",
		                "singername": "张靓颖",
		                "singers": [
		                    {
		                        "id": 4607,
		                        "mid": "000aw4WC2EQYTv",
		                        "name": "张靓颖"
		                    },
		                    {
		                        "id": 60505,
		                        "mid": "000aHmbL2aPXWH",
		                        "name": "李荣浩"
		                    }
		                ],
		                "vid": "n0025ujfoin"
		            },
		            {
		                "listennum": 953710,
		                "mv_id": 1395858,
		                "mvdesc": "走心的浓烈的“嘉尔式”Hip-hop",
		                "mvscore": 0,
		                "mvtitle": "OKAY",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/218034.jpg",
		                "pub_date": "2017-11-30",
		                "publictime": "2017-11-30",
		                "singer_id": 179603,
		                "singer_mid": "00216fJA496xQG",
		                "singer_name": "王嘉尔",
		                "singerid": 179603,
		                "singermid": "00216fJA496xQG",
		                "singername": "王嘉尔",
		                "singers": [
		                    {
		                        "id": 179603,
		                        "mid": "00216fJA496xQG",
		                        "name": "王嘉尔"
		                    }
		                ],
		                "vid": "b0025ekt3d5"
		            },
		            {
		                "listennum": 1067400,
		                "mv_id": 1354369,
		                "mvdesc": "动画里的爱情更触动人心",
		                "mvscore": 0,
		                "mvtitle": "烟花 (《烟花》电影同名主题曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/129372.jpg",
		                "pub_date": "2017-11-24",
		                "publictime": "2017-11-24",
		                "singer_id": 170650,
		                "singer_mid": "001nmqIV2nx5Hu",
		                "singer_name": "DAOKO",
		                "singerid": 170650,
		                "singermid": "001nmqIV2nx5Hu",
		                "singername": "DAOKO",
		                "singers": [
		                    {
		                        "id": 170650,
		                        "mid": "001nmqIV2nx5Hu",
		                        "name": "DAOKO"
		                    },
		                    {
		                        "id": 49236,
		                        "mid": "000LExWa0hMj4m",
		                        "name": "米津玄師"
		                    }
		                ],
		                "vid": "r0025xqz0gr"
		            },
		            {
		                "listennum": 230213,
		                "mv_id": 1426832,
		                "mvdesc": "袁娅维剖心献声催人泪下",
		                "mvscore": 0,
		                "mvtitle": "说散就散 (《前任3：再见前任》电影主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/y00257obhi3_496_280/0",
		                "pub_date": "2017-12-12",
		                "publictime": "2017-12-12",
		                "singer_id": 36691,
		                "singer_mid": "00472DR10Ytv83",
		                "singer_name": "袁娅维",
		                "singerid": 36691,
		                "singermid": "00472DR10Ytv83",
		                "singername": "袁娅维",
		                "singers": [
		                    {
		                        "id": 36691,
		                        "mid": "00472DR10Ytv83",
		                        "name": "袁娅维"
		                    }
		                ],
		                "vid": "y00257obhi3"
		            },
		            {
		                "listennum": 95050,
		                "mv_id": 1435141,
		                "mvdesc": "Sia圣诞MV三部曲的终篇，感动",
		                "mvscore": 0,
		                "mvtitle": "Underneath The Mistletoe",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/224470.jpg",
		                "pub_date": "2017-12-15",
		                "publictime": "2017-12-15",
		                "singer_id": 7015,
		                "singer_mid": "004ItgA32BhfdC",
		                "singer_name": "Sia",
		                "singerid": 7015,
		                "singermid": "004ItgA32BhfdC",
		                "singername": "Sia",
		                "singers": [
		                    {
		                        "id": 7015,
		                        "mid": "004ItgA32BhfdC",
		                        "name": "Sia"
		                    }
		                ],
		                "vid": "i0025ysoizu"
		            },
		            {
		                "listennum": 130701,
		                "mv_id": 1435005,
		                "mvdesc": "迪丽热巴首次挑战摇滚曲风",
		                "mvscore": 0,
		                "mvtitle": "赴一场生命的冒险 (端游《蛮荒搜神记》超燃版)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/224126.jpg",
		                "pub_date": "2017-12-15",
		                "publictime": "2017-12-15",
		                "singer_id": 1099829,
		                "singer_mid": "001FcyzJ3m0hbQ",
		                "singer_name": "迪丽热巴",
		                "singerid": 1099829,
		                "singermid": "001FcyzJ3m0hbQ",
		                "singername": "迪丽热巴",
		                "singers": [
		                    {
		                        "id": 1099829,
		                        "mid": "001FcyzJ3m0hbQ",
		                        "name": "迪丽热巴"
		                    }
		                ],
		                "vid": "l0025pvtyio"
		            },
		            {
		                "listennum": 310594,
		                "mv_id": 1426603,
		                "mvdesc": "兔瓦斯女孩们敲级可爱了",
		                "mvscore": 0,
		                "mvtitle": "Heart Shaker",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_y_mv_conf/223006.jpg",
		                "pub_date": "2017-12-11",
		                "publictime": "2017-12-11",
		                "singer_id": 1040218,
		                "singer_mid": "001p0vF44ewiwB",
		                "singer_name": "TWICE",
		                "singerid": 1040218,
		                "singermid": "001p0vF44ewiwB",
		                "singername": "TWICE",
		                "singers": [
		                    {
		                        "id": 1040218,
		                        "mid": "001p0vF44ewiwB",
		                        "name": "TWICE"
		                    }
		                ],
		                "vid": "n00254qeelw"
		            },
		            {
		                "listennum": 111238,
		                "mv_id": 1432994,
		                "mvdesc": "林俊杰词曲全创作英文曲",
		                "mvscore": 0,
		                "mvtitle": "Until The Day (《伟大的渺小》英语版)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/n0025mk7cxh_496_280/0",
		                "pub_date": "2017-12-14",
		                "publictime": "2017-12-14",
		                "singer_id": 4286,
		                "singer_mid": "001BLpXF2DyJe2",
		                "singer_name": "林俊杰",
		                "singerid": 4286,
		                "singermid": "001BLpXF2DyJe2",
		                "singername": "林俊杰",
		                "singers": [
		                    {
		                        "id": 4286,
		                        "mid": "001BLpXF2DyJe2",
		                        "name": "林俊杰"
		                    }
		                ],
		                "vid": "n0025mk7cxh"
		            },
		            {
		                "listennum": 381451,
		                "mv_id": 1389059,
		                "mvdesc": "《寻梦环游记》原声欢快愉悦",
		                "mvscore": 0,
		                "mvtitle": "Remember Me (Dúo) (《寻梦环游记》电影主题曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/214542.jpg",
		                "pub_date": "2017-11-20",
		                "publictime": "2017-11-20",
		                "singer_id": 21559,
		                "singer_mid": "002hkau74SmJBr",
		                "singer_name": "Miguel",
		                "singerid": 21559,
		                "singermid": "002hkau74SmJBr",
		                "singername": "Miguel",
		                "singers": [
		                    {
		                        "id": 21559,
		                        "mid": "002hkau74SmJBr",
		                        "name": "Miguel"
		                    },
		                    {
		                        "id": 20535,
		                        "mid": "0005rTot4YNdNz",
		                        "name": "Natalia Lafourcade"
		                    }
		                ],
		                "vid": "h0025eff8oa"
		            },
		            {
		                "listennum": 497151,
		                "mv_id": 1410863,
		                "mvdesc": "前卫抽象视觉展现不凡气质",
		                "mvscore": 0,
		                "mvtitle": "B.M.",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/i0025ytbii1_496_280/0",
		                "pub_date": "2017-12-06",
		                "publictime": "2017-12-6",
		                "singer_id": 180646,
		                "singer_mid": "002yeznU3VAVEV",
		                "singer_name": "吴亦凡",
		                "singerid": 180646,
		                "singermid": "002yeznU3VAVEV",
		                "singername": "吴亦凡",
		                "singers": [
		                    {
		                        "id": 180646,
		                        "mid": "002yeznU3VAVEV",
		                        "name": "吴亦凡"
		                    }
		                ],
		                "vid": "i0025ytbii1"
		            },
		            {
		                "listennum": 223670,
		                "mv_id": 1410964,
		                "mvdesc": "张惠妹把故事唱成歌还给你",
		                "mvscore": 0,
		                "mvtitle": "连名带姓",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/l0025ql5k4r_496_280/0",
		                "pub_date": "2017-12-06",
		                "publictime": "2017-12-6",
		                "singer_id": 141,
		                "singer_mid": "003JGrNQ3RjelA",
		                "singer_name": "张惠妹",
		                "singerid": 141,
		                "singermid": "003JGrNQ3RjelA",
		                "singername": "张惠妹",
		                "singers": [
		                    {
		                        "id": 141,
		                        "mid": "003JGrNQ3RjelA",
		                        "name": "张惠妹"
		                    }
		                ],
		                "vid": "l0025ql5k4r"
		            },
		            {
		                "listennum": 276260,
		                "mv_id": 1397383,
		                "mvdesc": "那英献唱节目《国家宝藏》",
		                "mvscore": 0,
		                "mvtitle": "一眼千年 (《国家宝藏》主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/w00253b0r40_496_280/0",
		                "pub_date": "2017-11-30",
		                "publictime": "2017-11-30",
		                "singer_id": 137,
		                "singer_mid": "003LCFXH0eodXv",
		                "singer_name": "那英",
		                "singerid": 137,
		                "singermid": "003LCFXH0eodXv",
		                "singername": "那英",
		                "singers": [
		                    {
		                        "id": 137,
		                        "mid": "003LCFXH0eodXv",
		                        "name": "那英"
		                    }
		                ],
		                "vid": "w00253b0r40"
		            },
		            {
		                "listennum": 217852,
		                "mv_id": 1393485,
		                "mvdesc": "Tizzy T&Jony J献唱《芳华》",
		                "mvscore": 0,
		                "mvtitle": "想把你留在这里 (《芳华》电影推广曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/217372.jpg",
		                "pub_date": "2017-11-27",
		                "publictime": "2017-11-27",
		                "singer_id": 1106674,
		                "singer_mid": "000UismY3Pa6Qh",
		                "singer_name": "Tizzy T",
		                "singerid": 1106674,
		                "singermid": "000UismY3Pa6Qh",
		                "singername": "Tizzy T",
		                "singers": [
		                    {
		                        "id": 1106674,
		                        "mid": "000UismY3Pa6Qh",
		                        "name": "Tizzy T"
		                    },
		                    {
		                        "id": 1106725,
		                        "mid": "003Am5Ce3VwVZJ",
		                        "name": "Jony J"
		                    }
		                ],
		                "vid": "l0025jotn2u"
		            },
		            {
		                "listennum": 76131,
		                "mv_id": 1421116,
		                "mvdesc": "百大DJ连冠小马丁联手塔叔新单",
		                "mvscore": 0,
		                "mvtitle": "So Far Away",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/219122.jpg",
		                "pub_date": "2017-12-08",
		                "publictime": "2017-12-8",
		                "singer_id": 965,
		                "singer_mid": "000gELB619OfVG",
		                "singer_name": "David Guetta",
		                "singerid": 965,
		                "singermid": "000gELB619OfVG",
		                "singername": "David Guetta",
		                "singers": [
		                    {
		                        "id": 965,
		                        "mid": "000gELB619OfVG",
		                        "name": "David Guetta"
		                    },
		                    {
		                        "id": 160774,
		                        "mid": "003gHa6S2vmcbq",
		                        "name": "Martin Garrix"
		                    },
		                    {
		                        "id": 2072147,
		                        "mid": "003Yhhvl48r9XK",
		                        "name": "Romy Dya"
		                    },
		                    {
		                        "id": 12080,
		                        "mid": "0011ykf12w4Hpl",
		                        "name": "Jamie Scott"
		                    }
		                ],
		                "vid": "u0025vde3ut"
		            },
		            {
		                "listennum": 370215,
		                "mv_id": 1394138,
		                "mvdesc": "林俊杰梦幻声线助阵爱情童话",
		                "mvscore": 0,
		                "mvtitle": "小瓶子 (《假如王子睡着了》电影印象曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_recommend_conf/217176.jpg",
		                "pub_date": "2017-11-28",
		                "publictime": "2017-11-28",
		                "singer_id": 4286,
		                "singer_mid": "001BLpXF2DyJe2",
		                "singer_name": "林俊杰",
		                "singerid": 4286,
		                "singermid": "001BLpXF2DyJe2",
		                "singername": "林俊杰",
		                "singers": [
		                    {
		                        "id": 4286,
		                        "mid": "001BLpXF2DyJe2",
		                        "name": "林俊杰"
		                    }
		                ],
		                "vid": "c00257c9jkm"
		            },
		            {
		                "listennum": 141407,
		                "mv_id": 1412234,
		                "mvdesc": "EXO日文新曲短版MV，打call！",
		                "mvscore": 0,
		                "mvtitle": "Electric Kiss (短版Ver.1)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/221038.jpg",
		                "pub_date": "2017-12-05",
		                "publictime": "2017-12-5",
		                "singer_id": 38578,
		                "singer_mid": "001QVwtq3l8cKC",
		                "singer_name": "EXO",
		                "singerid": 38578,
		                "singermid": "001QVwtq3l8cKC",
		                "singername": "EXO",
		                "singers": [
		                    {
		                        "id": 38578,
		                        "mid": "001QVwtq3l8cKC",
		                        "name": "EXO"
		                    }
		                ],
		                "vid": "v002531zgh9"
		            },
		            {
		                "listennum": 143589,
		                "mv_id": 1412703,
		                "mvdesc": "容祖儿、韩寒合作电影主题曲",
		                "mvscore": 0,
		                "mvtitle": "重生 (《解忧杂货店》电影主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/z0025lv7jds_496_280/0",
		                "pub_date": "2017-12-07",
		                "publictime": "2017-12-7",
		                "singer_id": 118,
		                "singer_mid": "001uXFgt1kpLyI",
		                "singer_name": "容祖儿",
		                "singerid": 118,
		                "singermid": "001uXFgt1kpLyI",
		                "singername": "容祖儿",
		                "singers": [
		                    {
		                        "id": 118,
		                        "mid": "001uXFgt1kpLyI",
		                        "name": "容祖儿"
		                    }
		                ],
		                "vid": "z0025lv7jds"
		            },
		            {
		                "listennum": 722920,
		                "mv_id": 1413617,
		                "mvdesc": "王源首支英文单曲MV上线！",
		                "mvscore": 0,
		                "mvtitle": "Sleep",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/f002513p08z_496_280/0",
		                "pub_date": "2017-12-07",
		                "publictime": "2017-12-7",
		                "singer_id": 161301,
		                "singer_mid": "000IBYF50SRnXP",
		                "singer_name": "王源",
		                "singerid": 161301,
		                "singermid": "000IBYF50SRnXP",
		                "singername": "王源",
		                "singers": [
		                    {
		                        "id": 161301,
		                        "mid": "000IBYF50SRnXP",
		                        "name": "王源"
		                    }
		                ],
		                "vid": "f002513p08z"
		            },
		            {
		                "listennum": 247433,
		                "mv_id": 1399005,
		                "mvdesc": "李宇春向现实挥出的一记猛拳",
		                "mvscore": 0,
		                "mvtitle": "一趟",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/v0025jht4bk_496_280/0",
		                "pub_date": "2017-12-01",
		                "publictime": "2017-12-1",
		                "singer_id": 4615,
		                "singer_mid": "002ZOuVm3Qn20Y",
		                "singer_name": "李宇春",
		                "singerid": 4615,
		                "singermid": "002ZOuVm3Qn20Y",
		                "singername": "李宇春",
		                "singers": [
		                    {
		                        "id": 4615,
		                        "mid": "002ZOuVm3Qn20Y",
		                        "name": "李宇春"
		                    }
		                ],
		                "vid": "v0025jht4bk"
		            },
		            {
		                "listennum": 871696,
		                "mv_id": 1382141,
		                "mvdesc": "变身飞虎队员演绎限制級话题作",
		                "mvscore": 0,
		                "mvtitle": "戒烟",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/p0025rbpwso_496_280/0",
		                "pub_date": "2017-11-20",
		                "publictime": "2017-11-20",
		                "singer_id": 60505,
		                "singer_mid": "000aHmbL2aPXWH",
		                "singer_name": "李荣浩",
		                "singerid": 60505,
		                "singermid": "000aHmbL2aPXWH",
		                "singername": "李荣浩",
		                "singers": [
		                    {
		                        "id": 60505,
		                        "mid": "000aHmbL2aPXWH",
		                        "name": "李荣浩"
		                    }
		                ],
		                "vid": "p0025rbpwso"
		            },
		            {
		                "listennum": 65683,
		                "mv_id": 1413832,
		                "mvdesc": "徐浩诠释男女主青涩恋情",
		                "mvscore": 0,
		                "mvtitle": "两个人的恋爱 (《龙日一 , 你死定了》网剧主题曲)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/221940.jpg",
		                "pub_date": "2017-12-08",
		                "publictime": "2017-12-8",
		                "singer_id": 156053,
		                "singer_mid": "0010DrXn3I8Xp3",
		                "singer_name": "徐浩",
		                "singerid": 156053,
		                "singermid": "0010DrXn3I8Xp3",
		                "singername": "徐浩",
		                "singers": [
		                    {
		                        "id": 156053,
		                        "mid": "0010DrXn3I8Xp3",
		                        "name": "徐浩"
		                    }
		                ],
		                "vid": "l00253rpcuz"
		            },
		            {
		                "listennum": 27700,
		                "mv_id": 1435170,
		                "mvdesc": "南征北战献唱《枪神记》主题曲",
		                "mvscore": 0,
		                "mvtitle": "我们的光芒 (《枪神记》动画主题曲)",
		                "picurl": "http://puui.qpic.cn/qqvideo_ori/0/j0025cn5nvj_496_280/0",
		                "pub_date": "2017-12-14",
		                "publictime": "2017-12-14",
		                "singer_id": 69205,
		                "singer_mid": "003ZQQb64D5317",
		                "singer_name": "南征北战NZBZ",
		                "singerid": 69205,
		                "singermid": "003ZQQb64D5317",
		                "singername": "南征北战NZBZ",
		                "singers": [
		                    {
		                        "id": 69205,
		                        "mid": "003ZQQb64D5317",
		                        "name": "南征北战NZBZ"
		                    }
		                ],
		                "vid": "j0025cn5nvj"
		            },
		            {
		                "listennum": 137590,
		                "mv_id": 1411065,
		                "mvdesc": "BTS日文版“扔麦”酷炸！",
		                "mvscore": 0,
		                "mvtitle": "MIC Drop (日文版)",
		                "picurl": "http://y.gtimg.cn/music/common/upload/t_mv_latest_rec/221552.jpg",
		                "pub_date": "2017-12-05",
		                "publictime": "2017-12-5",
		                "singer_id": 162691,
		                "singer_mid": "001TpDgn4SxyJn",
		                "singer_name": "BTS",
		                "singerid": 162691,
		                "singermid": "001TpDgn4SxyJn",
		                "singername": "BTS",
		                "singers": [
		                    {
		                        "id": 162691,
		                        "mid": "001TpDgn4SxyJn",
		                        "name": "BTS"
		                    }
		                ],
		                "vid": "r0025fc03kr"
		            }
		        ],
		        "name": "",
		        "sum": 50	    
			}
		}
	},
	created(){
       this.getRecommend()
	},
	methods:{
		loadImage() {
		  if (!this.checkloaded) {
		    this.checkloaded = true
		 //   this.$refs.scroll.refresh()
		  }
		},
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
				//console.log(this.recommends)
			})
			.catch((error)=>{
				console.log(error)
			})
		},
		_getDiscList(){
			getDiscList.then((res)=>{
				if(res.code === ERR_OK){
					console.log(res.data)
				}
			})
		}
	}
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>






