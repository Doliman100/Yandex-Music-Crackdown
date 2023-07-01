'use strict';

const url = document.currentScript.src;

const xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();

window.eval(`${xhr.responseText.replace(/if\(this\._\$j([0-9A-Z])\(\)\)t="muted";else{if\(s\._\$j([0-9A-Z])\)return!1;if\(this\._\$j([0-9A-Z])&&this\._\$j([0-9A-Z])<\(new Date\)\.valueOf\(\)\)return this\._\$j([0-9A-Z])=!1,this\._\$e([a-z])\(\);this\._\$j([0-9A-Z])\|\|a\.premium\?t=!1:"number"==typeof this\._\$j([0-9A-Z])&&this\._\$j([0-9A-Z])\(\)&&\(t=this\._\$j([0-9A-Z])\)}return /, 'return this._$j$1()&&(t="muted"),')}\n//# sourceURL=${url}#patch`);
