"use strict";!function(){window.menu={};var s=document.querySelector(".nav__toggle"),t=document.querySelector(".nav__list"),e=function(e){e.preventDefault(),s.classList.contains("open")?(s.classList.remove("open"),s.classList.add("close"),t.style.display="none"):(s.classList.remove("close"),s.classList.add("open"),t.style.display="flex")};s.addEventListener("touchstart",e),s.addEventListener("click",e)}();