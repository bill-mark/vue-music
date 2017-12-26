import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

export function getDiscList(){
	const url = 'https://c.y.qq.com/v8/fcg-bin/getmv_by_tag'

	const data = Object.assign({}, commonParams, {
		g_tk:2030641684,
		jsonpCallback:MusicJsonCallback8843518210083361,
		loginUin:2286449127,
		hostUin:0,
		inCharset:'utf8',
		outCharset:'GB2312',
		notice:0,
		platform:'yqq',
		needNewCode:0,
		cmd:shoubo,
		lan:all,
		format: 'json'
	})  

	return axios.get(url, {
	  params: data
	}).then((res) => {
	  return Promise.resolve(res.data)
	})
}
