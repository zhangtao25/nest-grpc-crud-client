import * as moment from 'moment-timezone'

function toCamel(o) {
  if (typeof (o) == 'string') {
    o = JSON.parse(o)
  }
  let newO, origKey, newKey, value
  if (o instanceof Array) {
    newO = []
    for (origKey in o) {
      value = o[origKey]
      if (typeof value === 'object') {
        value = toCamel(value)
      }
      newO.push(value)
    }
  } else {
    newO = {}
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
        value = o[origKey]
        if (value !== null && (value.constructor === Object || value instanceof Array)) {
          value = toCamel(value)
        }
        newO[newKey] = value
      }
    }
  }
  return newO
}


function removeEmptyField(obj) {
  let newObj = {};
  if(typeof obj == "string"){
    obj = JSON.parse(obj);
  }
  if(obj instanceof Array){
    newObj = [];
  }
  if(obj instanceof Object){
    for(let attr in obj){
      if(obj.hasOwnProperty(attr) && obj[attr] !== "" && obj[attr] !== null && obj[attr] !== undefined){
        if(obj[attr] instanceof Object){
          newObj[attr] = removeEmptyField(obj[attr]);
        }else if(typeof obj[attr] == "string" && ((obj[attr].indexOf("{") > -1 && obj[attr].indexOf("}") > -1) || (obj[attr].indexOf("[") > -1 && obj[attr].indexOf("]") > -1))){
          try{
            let attrObj = JSON.parse(obj[attr]);
            if(attrObj instanceof Object){
              newObj[attr] = removeEmptyField(attrObj);
            }
          }catch (e){
            newObj[attr] = obj[attr];
          }
        }else{
          newObj[attr] = obj[attr];
        }
      }
    }
  }
  return newObj;
}

function nowTime(time = null) {
  if (time){
    return moment(time).tz('Asia/Shanghai').format("YYYY-MM-DD HH:mm:ss")
  }else {
    return moment().tz('Asia/Shanghai').format("YYYY-MM-DD HH:mm:ss")
  }

}

function getIPAdress() {
    const interfaces = require('os').networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                // console.log(alias.address);

                return alias.address
            }
        }
    }
}

export default {
  toCamel,
  removeEmptyField,
  nowTime,
    getIPAdress
}