//Browser language
function navigatorLang(){
  var type = navigator.appName;
  if (type == 'Netscape'){
    return navigator.language;
  } else {
    return navigator.userLanguage;
  }
}
//Browser protocol
function isProtocol(){
  var result = false;
  if (window.location.protocol == 'http:'){
    result = true;
  }
  return result;
}
//Execute jump
var userAgents = navigatorLang();
var mobileURL = '';
if (userAgents.match(/zh-CN/i)){
  var isMobile = navigator.userAgent.match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i);
  if (isMobile){
    var result = window.location.href.match(/^http(s)?:\/\/(otq\.|mww\.|tlh\.|yua\.|srla\.|srcyrl\.|m[0-9]{1,3}\.|.{2}\.)/i);
    if (result){
      if (isProtocol()){
        mobileURL = window.location.href.replace('//', '//m.');
      } else {
        mobileURL = window.location.href.replace('https://', 'http://m.');
      }
    } else {
      if (isProtocol()){
        mobileURL = window.location.href.replace('//www.', '//m.');
      } else {
        mobileURL = window.location.href.replace('https://www.', 'http://m.');
      }
    }
    window.location.href = mobileURL;
  }
}