import{a as v,S,i as d}from"./assets/vendor-BJ7ir7Fo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b="https://pixabay.com/api/",w="54246906-f81d1c2d6c5eb45f9ea82e11c";async function q(t,r){return(await v.get(b,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),B=new S(".gallery a");function M(t){const r=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:o,views:s,comments:g,downloads:L})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${n}" alt="${e}" />
        </a>
        <ul class="image-info">
          <li class="info-point">
            <p class="info-descr"> Likes </p>
            <p class="info-value">${o}</p>
          </li>
           <li class="info-point">
            <p class="info-descr"> Views </p>
            <p class="info-value">${s}</p>
           </li>
           <li class="info-point">
            <p class="info-descr"> Comments </p>
            <p class="info-value">${g}</p>
           </li>
           <li class="info-point">
           <p class="info-descr"> Downloads </p>
           <p class="info-value">${L}</p>
           </li>
        </ul>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",r),B.refresh()}function $(){p.innerHTML=""}function O(){m.classList.remove("is-hidden")}function P(){m.classList.add("is-hidden")}function x(){h.classList.remove("is-hidden")}function c(){h.classList.add("is-hidden")}const u=document.querySelector(".form"),E=document.querySelector(".load-more");let i=1,l="",f=0;async function y(){try{O();const t=await q(l,i),r=t.hits;if(i===1&&r.length===0){c(),d.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}M(r),f=Math.ceil(t.totalHits/15),i>=f?(c(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):x(),i+=1,A()}catch(t){console.error(t)}finally{P()}}u.addEventListener("submit",t=>{t.preventDefault(),l=t.target.elements["search-text"].value.trim(),l&&(i=1,$(),c(),y(),u.reset())});E.addEventListener("click",y);function A(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
