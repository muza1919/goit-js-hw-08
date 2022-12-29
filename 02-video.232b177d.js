const e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("video-current-time",e.seconds)}),1e3)),t.on("play",(()=>{const e=localStorage.getItem("video-current-time");e&&t.setCurrentTime(e)}));
//# sourceMappingURL=02-video.232b177d.js.map
