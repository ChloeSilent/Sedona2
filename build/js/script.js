"use strict";!function(){window.script={};var t=document.querySelector(".video__video"),c=(document.querySelector("progress-bar"),document.querySelector(".watched-Line")),r=document.querySelector(".watched-indicator"),e=document.querySelector("#play-pause"),n=document.querySelector("#repeat"),s=document.querySelector("#full-screen"),d=function(){c.style.width="0%",r.style.left="0%",e.className="play",t.currentTime=0};e.addEventListener("click",function(){t.paused?(e.classList.add("play"),e.classList.remove("pause"),t.play()):(e.classList.add("pause"),e.classList.remove("play"),t.pause())}),t.addEventListener("timeupdate",function(){var e=t.currentTime/t.duration;c.style.width=100*e+"%",r.style.left=100*e+"%"}),t.addEventListener("ended",d),n.addEventListener("click",d),s.addEventListener("click",function(){t.requestFullscreen()})}();