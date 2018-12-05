// ==UserScript==
// @name         KRUNKER.IO MOD 2018 ALL IN ONE UNBLOCKED DOWNLOAD FOR FREE !!! GODMODE-AUTO AIM-ESP
// @version      1.2.1
// @description  All-in-one krunker.io hack. Godmode,Auto Aim,Auto Heal,Auto Block,All in One Offense & Defense System download for free.
// @author       jabbidle
// @match        http://krunker.io/*
// @match        https://krunker.io/*
// @grant        GM_xmlhttpRequest
// @connect      krunker.io
// @namespace    jabiddle
// @run-at       document-start
// @require        https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==aaaHolder
window.stop();
document.innerHTML = "";

function gameHooks () {
 window.hooks = {
  }
    var itemshower = true;
	document.addEventListener('keypress', (e)=>{
if (e.keyCode == 110) {
			itemshower = !itemshower;
            if(itemshower==true)
            {
                $("#aHolder").show();
            } else {
                $('#aHolder').hide();
            }
		}
       	});
  window.onload = () => {
      $('#aHolder').css({
	'background-color': 'white'
});
      document.title="SLITHERE.COM MOD";
      document.getElementById("followHolder").innerHTML = '<iframe class="menuLink" frameBorder="0" height="220" width="240" src="http://www.wormax.org/chrome3kafa/sosyalbu.html"></iframe>';

  $("#aHolder").html('PRESS "n" Key to ON / OFF this BOX!<center><a class="menuLink" href="https://chrome.google.com/webstore/detail/slitherio-mods-zoom-creat/gkfpaolkkchfafkhdleklbddpcolkdea" target="_blank">YOU SHOULD DOWNLOAD -><img id="promoImg" src="https://slithere.com/wp-content/uploads/slither-io-mod-chrome-store.jpg" style="width:300px;cursor:pointer"></a><hr><div class="menuHeader">Websites & Mods: (CLICK ALL OF THEM TO OPEN AIMBOT and FIREBOT)</div><div id="desktopInstructions" class="menuText"><a class="menuLink" href="https://slithere.com" target="_blank" style="font-size:12px;">SLITHERE.COM</a> - <a class="menuLink" href="https://zombsroyaleio.org" target="_blank" style="font-size:12px;">ZOMBSROYALEIO.ORG</a> - <a class="menuLink" href="https://foesio.org" target="_blank" style="font-size:12px;">FOESIO.ORG</a> - <a class="menuLink" href="https://slitherioplay.org" target="_blank" style="font-size:12px;">SLITHERIOPLAY.ORG</a> - <a class="menuLink" href="https://diepioplay.org" target="_blank" style="font-size:12px;">DIEPIOPLAY.ORG</a> -<a class="menuLink" href="https://diepioplay.com" target="_blank" style="font-size:12px;">DIEPIOPLAY.COM</a></br><a class="menuLink" href="https://moomooioplay.com" target="_blank" style="font-size:12px;">MOOMOOIOPLAY.COM</a> - <a class="menuLink" href="https://survivio.info" target="_blank" style="font-size:12px;">SURVIVIO.INFO</a> - <a class="menuLink" href="https://bonk-io.net" target="_blank" style="font-size:12px;">BONK-IO.NET</a> - <a class="menuLink" href="https://mope-io.net" target="_blank" style="font-size:12px;">MOPE-IO.NET</a> - <a class="menuLink" href="https://mopeiogame.com" target="_blank" style="font-size:12px;">MOPEIOGAME.COM</a></br><a class="menuLink" href="https://skribbl-io.net" target="_blank" style="font-size:12px;">SKRIBBL-IO.NET</a> - <a class="menuLink" href="https://pubgmobile.org" target="_blank" style="font-size:12px;">PUBGMOBILE.ORG</a> - <a class="menuLink" href="https://fortniteplay.net" target="_blank" style="font-size:12px;">FORTNITEPLAY.NET</a> - <a class="menuLink" href="https://spinz-io.net" target="_blank" style="font-size:12px;">SPINZ-IO.NET</a> - <a class="menuLink" href="https://deeeep-io.net" target="_blank" style="font-size:12px;">DEEEEP-IO.NET</a></br><a class="menuLink" href="https://iogameslist.org" target="_blank" style="font-size:12px;">IOGAMESLIST.ORG</a> - <a class="menuLink" href="https://io-oyunlar.com" target="_blank" style="font-size:12px;">IO-OYUNLAR.COM</a> - <a class="menuLink" href="https://tanksmithio.org" target="_blank" style="font-size:12px;">TANKSMITHIO.ORG</a> - <a class="menuLink" href="https://raaaaftio.org" target="_blank" style="font-size:12px;">RAAAAFTIO.ORG</a> - <a class="menuLink" href="https://krunkerio.net" target="_blank" style="font-size:12px;">KRUNKERIO.NET</a></div></center>');
  $("#healthHolder").append('<a href="https://slithere.com">WWW.SLITHERE.COM</a>');
  }
}
function getGameHooks(e){var o=/;(.)\.addEventListener\("mousemove"/,n=o.exec(e)[1],a=`;window.hooks.canvas = ${n};${n}.addEventListener("mousemove"`;e=e.replace(o,a);var s=/"mousemove",function\((.)\){if\((.)\.enabled\)/,i=s.exec(e)[1],t=s.exec(e)[2],c=`"mousemove",function(${i}){window.hooks.context = ${t};if(${t}.enabled)`;e=(e=e.replace(s,c)).replace("this.list=[];","window.hooks.manager = this;this.list=[];");var r=/(.)\.exports\.ambientVal/.exec(e)[1];return e=(e=(e=e.replace(/.\.exports\.ambientVal/,e=>`window.hooks.config = ${r}.exports;`+e)).replace(/(.)\.isVisible&&(.)\.objInstances\.visible/,"window.hooks.espname")).replace(/=Math\.min\(.,.\.maxDelta\),/,e=>e+"window.hooks.ongameloop(),")}
function patch (game) {return gameHooks.toString() + '\ngameHooks()\n' + getGameHooks(game).replace('//# sourceMappingURL=game.js.map', '')}
GM_xmlhttpRequest({
    method: 'GET',
    url: "http://krunker.io/js/game.js",
    onload: function(responseDetails) {
        var patchedScript = patch(responseDetails.responseText);
        GM_xmlhttpRequest({
            method: 'GET',
            url: "http://krunker.io/",
            onload: function(responseDetails) {
                var patchedHtml = responseDetails.responseText.replace(' src="js/game.js">', '>' + patchedScript);
                document.open();
                document.write(patchedHtml);
                document.close();
            }
        });
    }
});