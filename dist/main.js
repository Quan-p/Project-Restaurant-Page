(()=>{"use strict";function t(t,e){var n=document.createElement("button");n.setAttribute("id",t);var i=document.createElement("span");return i.textContent=e,n.appendChild(i),n.classList.add("tabs"),n}function e(t,e){var n=document.createElement("img");return n.setAttribute("id","tableImg"),n.classList.add("homeFood"),n.setAttribute("src",t),n.setAttribute("alt",e),content.appendChild(n),n}const n=function(){var t=document.getElementById("content");e("https://pbs.twimg.com/media/DAuME7uVwAAYBCK.jpg","Dining tables with food");const n=function(){var t=document.createElement("section");t.classList.add("section"),t.setAttribute("id","about-section");var e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);var n=document.createElement("p");return n.classList.add("section-description"),n.textContent="We offer the best food from all over Middle-Earth, allowing you to escape into the greatest fictional world. Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit.",t.appendChild(n),t}();var i;(i=document.querySelector(".tabs.active"))&&i.classList.remove("active"),document.getElementById("home").classList.add("active"),t.appendChild(n)};var i,a,c;(function(){const e=document.getElementById("content");var n=function(t,e){var n=document.createElement("header");n.setAttribute("id","header");var i=document.createElement("h1");return i.textContent="Middle-Earth Dining",n.appendChild(i),n}();e.appendChild(n);var i,a=function(e){var n=document.createElement("nav");n.setAttribute("id","nav");var i=t("home","home"),a=t("menu","menu"),c=t("contact","contact");return n.appendChild(i),n.appendChild(a),n.appendChild(c),n}();e.appendChild(a),(i=document.createElement("main")).classList.add("tabContent"),i.setAttribute("id","tabContent"),document.getElementById("content").appendChild(i)})(),n(),i=document.getElementById("home"),a=document.getElementById("menu"),c=document.getElementById("contact"),i.addEventListener("click",n),a.addEventListener("click",(function(){var t;(t=document.querySelector(".tabs.active"))&&t.classList.remove("active"),document.getElementById("menu").classList.add("active")})),c.addEventListener("click",(function(){var t;(t=document.querySelector(".tabs.active"))&&t.classList.remove("active"),document.getElementById("contact").classList.add("active")}))})();