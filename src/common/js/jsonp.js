import originJSONP from 'jsonp'


//data用来拼URL
export default function jsonp(url,data,option) {
  return new Promise( (resolve,reject)=>{
      originJSONP(url,option,(err,data) => {
        if(!err){
          resolve(data)
        }else {
          reject(err)
        }
      })
  })
}

function param(data){
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&${k}=${enco}'
  }
}