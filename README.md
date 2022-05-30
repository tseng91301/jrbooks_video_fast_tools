#   Jrbooks Video Fast Tools
##   Editor：JingKai Tseng
##   For Desktop(Windows,Linux,MacOS) or other devices with phisical keyboard
##   使用說明：
##   初次使用：
###       1.將上面[plugin.min.js.copy.txt](https://github.com/tseng91301/jrbooks_video_fast_tools/blob/main/plugin.min.js.copy.txt)內容，或者下面程式碼全部複製
`javascript:var gotiframe=document.getElementById('ifrVideo');var iframedoc=gotiframe.contentWindow.document;var infovideo=iframedoc.getElementById('videoObj_html5_api');var spacepush=0;function handleKeyboardEvent(evt) {if (!evt) {evt = window.event;}var keycode = evt.keyCode || evt.which;if(keycode==37){infovideo.currentTime+=-5;}if(keycode==39){infovideo.currentTime+=5;}if(keycode==32){if(infovideo.paused==true){infovideo.play();}else if(infovideo.paused==false){infovideo.pause();}       }if(keycode==70){if(infovideo.playbackRate>=4.0){infovideo.playbackRate=infovideo.playbackRate;}else{infovideo.playbackRate=infovideo.playbackRate*1.1;}}if(keycode==83){if(infovideo.playbackRate<=0.1){infovideo.playbackRate=infovideo.playbackRate;}else{infovideo.playbackRate=infovideo.playbackRate*0.9;}}if(keycode==38){infovideo.volume+=0.05}if(keycode==40){infovideo.volume+=-0.05}}infovideo.addEventListener('keydown',handleKeyboardEvent);document.addEventListener('keydown',handleKeyboardEvent);`
![](https://i.imgur.com/wSzrhJQ.png)

###       2.打開瀏覽器，新增書籤，書籤名稱自訂，好記就好，網址部分請將剛剛複製的內容全部貼上即可

![](https://i.imgur.com/V69M0pY.png)

![](https://i.imgur.com/oYKJXj0.png)

![](https://i.imgur.com/uPeYQo6.png)

###       3.若無法新增成功，請檢察網址內容的開頭是否有'javascript:'，若沒有請自行打上
##   平常使用時：
###       1.打開補課影片播放頁面(有影片的地方)
###       2.點擊瀏覽器內的書籤，點擊剛剛製作的書籤，到畫面回到原本影片播放區即匯入成功
##   使用方法：
###       方向右→：快近5秒
###      方向左←：快退5秒
###       方向上↑：音量+
###       方向下↓：音量-
###       按鍵F：速度增快
###       按鍵S：速度減慢
###       空白鍵：暫停/播放
##   錯誤排解：
###       1.在放大模式時按鍵後無反應：
####           點幾次影片空白處(只要不是下面功能表列都可)
###       2.在一般模式時按鍵後無反應：
####           點幾次網頁空白處