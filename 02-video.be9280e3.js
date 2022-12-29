!function(){var e=document.querySelector("iframe"),t=new Player(e),o="video-current-time";t.on("timeupdate",throttle((function(e){localStorage.setItem(o,e.seconds)}),1e3)),t.on("play",(function(){var e=localStorage.getItem(o);e&&t.setCurrentTime(e)}))}();
//# sourceMappingURL=02-video.be9280e3.js.map
