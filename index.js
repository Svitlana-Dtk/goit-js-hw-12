import{a as v,S,i as c}from"./assets/vendor-BJ7ir7Fo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const w="https://pixabay.com/api/",b="54246906-f81d1c2d6c5eb45f9ea82e11c";async function q(t,r){return(await v.get(w,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),B=new S(".gallery a");function M(t){const r=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:o,views:s,comments:y,downloads:L})=>`
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
            <p class="info-value">${y}</p>
           </li>
           <li class="info-point">
           <p class="info-descr"> Downloads </p>
           <p class="info-value">${L}</p>
           </li>
        </ul>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),B.refresh()}function $(){f.innerHTML=""}function P(){p.classList.remove("is-hidden")}function O(){p.classList.add("is-hidden")}function x(){m.classList.remove("is-hidden")}function h(){m.classList.add("is-hidden")}const d=document.querySelector(".form"),E=document.querySelector(".load-more");let i=1,l="",u=0;async function g(){try{h(),P();const t=await q(l,i),r=t.hits;if(i===1&&r.length===0){c.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}M(r),u=Math.ceil(t.totalHits/15),i>=u?c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):x(),i+=1,R()}catch(t){console.error(t),c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{O()}}d.addEventListener("submit",t=>{t.preventDefault(),l=t.target.elements["search-text"].value.trim(),l&&(i=1,$(),h(),g(),d.reset())});E.addEventListener("click",g);function R(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
