
//infovideo.play();
/*more: https://siongui.github.io/zh/2018/10/08/javascript-keyboard-event-arrow-key-example/ */
/*-------------------------------------------------------------------------------------------*/
var gotiframe=document.getElementById('ifrVideo');
var iframedoc=gotiframe.contentWindow.document;
var infovideo=iframedoc.getElementById('videoObj_html5_api');
var spacepush=0;
function handleKeyboardEvent(evt) {
    if (!evt) {evt = window.event;} // for old IE compatible
    var keycode = evt.keyCode || evt.which; // also for cross-browser compatible

    if(keycode==37){
        infovideo.currentTime+=-5;
    }
    if(keycode==39){
        infovideo.currentTime+=5;
    }
    if(keycode==32){
        if(infovideo.paused==true){
            infovideo.play();
        }else if(infovideo.paused==false){
            infovideo.pause();
        }    
    }
    if(keycode==70){
        if(infovideo.playbackRate>=4.0){
            infovideo.playbackRate=infovideo.playbackRate;
        }else{
            infovideo.playbackRate=infovideo.playbackRate*1.1;
        }
    }
    if(keycode==83){
        if(infovideo.playbackRate<=0.1){
            infovideo.playbackRate=infovideo.playbackRate;
        }else{
            infovideo.playbackRate=infovideo.playbackRate*0.9;
        }
    }
    if(keycode==38){
        infovideo.volume+=0.05
    }
    if(keycode==40){
        infovideo.volume+=-0.05
    }
}

infovideo.addEventListener('keydown',handleKeyboardEvent);
document.addEventListener('keydown',handleKeyboardEvent);

  /*-------------------------------------------------------------------------------------------*/
