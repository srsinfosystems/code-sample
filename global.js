/**
 * Created by sanjay on 02-Oct-16.
 */
transformRequest = function(obj){
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");

}
count = function(obj) {
    var count=0;
    for(var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            ++count;
        }
    }
    return count;
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
getMessageFromResponse =  function(obj){
    var msgArray=[];
    var msgString='';
    var separater = '\n';
    if(obj.data && isArray(obj.data)){
        msgArray = obj.data;
    }else if(obj.error && isArray(obj.error)){
        msgArray = obj.error;
    }else if(obj.error && obj.error.message){
        msgString = obj.error.message;
    }else if(obj.error && obj.error){
        msgString = obj.error;
    }

    if(msgArray && msgArray.length>=1)
    msgArray.forEach(function(message)
    {
        if (msgString == '')
            separater = '';
        else
            separater = '\n';
        msgString = msgString + separater + message
    })
    return msgString;
}
function isArray(object)
{
    if (object.constructor === Array) return true;
    else return false;
}
function ParseDate(s) {
    var dt = Date.parse(s);
    console.log(dt);
    return dt;
}