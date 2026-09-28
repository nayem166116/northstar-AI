const $=s=>document.querySelector(s),g=(i)=>`--c1:${P[i%7][0]};--c2:${P[i%7][1]}`,ini=n=>n.split(' ').map(w=>w[0]).join('');
$('.burger').onclick=()=>$('nav').classList.toggle('open');
document.querySelectorAll('.news').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.innerHTML='<span style="font-size:13px">Thanks for subscribing.</span>'});
function filters(el,cats,grid){if(!el)return;el.innerHTML=['All',...cats].map((c,i)=>`<button class="${i?'':'on'}" data-f="${c}">${c}</button>`).join('');
el.onclick=e=>{const b=e.target.closest('button');if(!b)return;el.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
grid.querySelectorAll('[data-cat]').forEach(c=>c.style.display=(b.dataset.f==='All'||c.dataset.cat===b.dataset.f)?'':'none')}}
const uniq=a=>[...new Set(a)];
const IMG='assets/images/';
const gi=(i,p)=>`${g(i)};--img:url('images/${p}')`;
const slugify=t=>String(t||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60).replace(/-+$/,'');
const alink=t=>`article.html?a=${slugify(t)}`;
const HOMEART={'Saphira AI':'Becoming essential to the AI revolution','Zapdos Labs':'In the arena','Callie Care':'Culture of shipping, the artist as CEO, and running a full-stack company'};
const bindImgs=()=>document.querySelectorAll('[style*="--img"]:not(.imgb)').forEach(el=>{el.classList.add('imgb');const m=/url\('([^']+)'\)/.exec(el.getAttribute('style'));if(!m)return;const im=new Image();im.onload=()=>el.classList.add('imgok');im.src=m[1].replace(/^images\//,IMG)});
const mark=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${MARKS[i%MARKS.length]}"/></svg>`;
const LOGOS=[]; // add a slug here after dropping assets/images/logos/<slug>.png in place
const logo=(n,i,s)=>`<span class="tlogo">${s&&LOGOS.includes(s)?`<img class="lgimg" src="${IMG}logos/${s}.png" alt="" onerror="this.remove()">`:''}${mark(i)}<b>${n}</b></span>`;
const thumb=(p,i)=>{
 if(p[4]==='chart'){const v=[[18,'2023'],[31,'2024'],[44,'2025'],[78,'2026 est.']];return `<div class="thumb chart"><b>Estimated AI data-center power demand</b><small>GW</small><div class="bars">${v.map(([h,l],k)=>`<div class="bc"><em>${h}</em><i style="height:${h*1.9}px" class="${k==3?'hi':''}"></i><span>${l}</span></div>`).join('')}</div><span class="wm"><b class="bm"></b>VentNora</span></div>`}
 if(p[4]==='announce')return `<div class="thumb ann" style="${g(6)}"><small>Team announcement</small><h4>Say hello to<br>our newest<br><span>partner</span></h4><div class="ph2">PN</div><span class="gl gl1"></span><span class="gl gl2"></span><span class="gl gl3"></span></div>`;
 return `<div class="thumb" style="${gi(i,`blog/posts/post-${(i%6)+1}.jpg`)}"></div>`};
const postHTML=(p,i)=>`<a class="post" href="article.html" data-cat="${p[0]}">${thumb(p,i)}<h3>${p[1]}</h3><p>${p[2]}</p><div class="tags">${p[3].split(', ').map(x=>`<span>${x}</span>`).join('')}</div></a>`;

// ---- Home: graduated card carousel ----
const stage=$('#stage');
if(stage){
  const N=FOUNDERS.length;let act=3,timer;
  FOUNDERS.forEach(([co,n,st,t],i)=>{const c=document.createElement('div');c.className='card';c.style.cssText=gi(i,`home/hero-${i+1}.jpg`);
    const fo=(typeof COS!=='undefined'?COS:[]).find(x=>x.n===co);const w=fo&&fo.fo&&fo.fo[0];
    c.innerHTML=`<div class="init">${ini(co)}</div><span class="co">${co}</span>${w?`<span class="who">${w[0]}<br><small>${w[1]}</small></span>`:''}<div class="note">On our radar: <em>${co}</em>. ${t}</div>`;
    c.onclick=()=>{go(i);restart()};stage.appendChild(c)});
  const dots=$('#dots');FOUNDERS.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>{go(i);restart()};dots.appendChild(b)});
  // size per distance from centre: 0 = biggest, 1 = a bit smaller, 2 = smaller, 3+ = hidden
  const R=[[.287,.322],[.201,.297],[.143,.273],[.104,.243]],GAP=10;
  const sizes=()=>{const W=Math.max(innerWidth,320),mob=innerWidth<700;
    return R.map(([rw,rh])=>({w:Math.min(rw*W,mob?rw*W:620),h:Math.min(rh*W,mob?rh*W:700)}))};
  function layout(){const SZ=sizes();
    document.querySelector('.stage').style.height=(SZ[0].h+34)+'px';
    [...stage.children].forEach((c,i)=>{let d=i-act;if(d>N/2)d-=N;if(d<-N/2)d+=N;const a=Math.abs(d),s=SZ[Math.min(a,3)];
      let x=0;for(let j=0;j<a;j++){x+=(SZ[Math.min(j,3)].w+SZ[Math.min(j+1,3)].w)/2+GAP}x*=Math.sign(d);
      c.style.width=s.w+'px';c.style.height=s.h+'px';c.style.transform=`translate(calc(-50% + ${x}px),-50%)`;
      c.style.opacity=a>3?0:1;c.style.zIndex=10-a;c.classList.toggle('on',a===0);c.style.pointerEvents=a>3?'none':''});
    [...dots.children].forEach((b,i)=>b.classList.toggle('on',i===act))}
  function go(i){act=(i+N)%N;layout()}
  function restart(){clearInterval(timer);timer=setInterval(()=>go(act+1),5000)}
  addEventListener('resize',layout);layout();restart();
  let sx=null;stage.addEventListener('touchstart',e=>sx=e.touches[0].clientX);stage.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40){go(act+(dx<0?1:-1));restart()}sx=null});
  // reveal
  const r=$('.reveal');r.innerHTML=r.innerHTML.replace(/(<em>.*?<\/em>|\S+)/g,'<span>$1</span>');const w=[...r.querySelectorAll(':scope>span')];
  const rv=()=>{const b=r.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.85-b.top)/(innerHeight*.5)));w.forEach((x,i)=>x.classList.toggle('lit',i<p*w.length))};addEventListener('scroll',rv);rv();
  $('#stories').innerHTML=STORIES.map(([q,n,r,co,i],k)=>`<section class="band"><div class="frame story"><div class="txt"><span class="chip">Radar note</span><div class="mid"><p class="quote">${q}</p><p class="by"><b>${n}</b>${r}</p></div><a class="more" href="${alink(HOMEART[co]||co)}">Read article <i>↗</i></a></div><div class="pic" style="${gi(i,`home/story-${k+1}.jpg`)}"><span class="brand"><b class="bm"></b>${co}</span></div></div></section>`).join('');
  const ul=$('#areas'),panel=$('#panel');AREAS.forEach(([t,d],i)=>{const li=document.createElement('li');li.innerHTML=`${t}<p>${d} <a href="focus-areas.html" class="accent">Learn more ↗</a></p>`;
    li.onmouseenter=li.onclick=()=>{ul.querySelectorAll('li').forEach(x=>x.classList.remove('on'));li.classList.add('on');panel.style.cssText=gi(i+4,`focus/${['applied-ai','security','climate-energy','health-bio','fintech'][i]}.jpg`);$('#panelLabel').textContent=t};ul.appendChild(li)});ul.children[0].onclick();
  const tr=$('#track');tr.innerHTML=POSTS.map(postHTML).join('');$('#next').onclick=()=>tr.scrollBy({left:tr.firstElementChild.offsetWidth+8,behavior:'smooth'});$('#prev').onclick=()=>tr.scrollBy({left:-(tr.firstElementChild.offsetWidth+8),behavior:'smooth'});
}
// ---- Inner pages ----
if($('#teamGrid')){$('#teamGrid').innerHTML=TEAM.map(([n,r,c],i)=>`<div class="person" data-cat="${c}"><div class="ph" style="${g(i)}">${ini(n)}</div><h3>${n}</h3><p>${r}</p></div>`).join('');filters($('#teamFilters'),uniq(TEAM.map(t=>t[2])),$('#teamGrid'))}
if($('#pfGrid')){$('#pfGrid').innerHTML=COMPANIES.map(([n,c,d],i)=>`<div class="box co-card" data-cat="${c}"><div class="ph sm" style="${g(i)}">${n[0]}</div><h3>${n}</h3><p>${d}</p><span class="chip">${c}</span></div>`).join('');filters($('#pfFilters'),uniq(COMPANIES.map(c=>c[1])),$('#pfGrid'))}
if($('#focusList'))$('#focusList').innerHTML=AREAS.map(([t,d],i)=>`<section class="band"><div class="frame story"><div class="txt"><span class="chip">Focus area 0${i+1}</span><div class="mid"><p class="quote">${t}</p><p class="by"><b>${d}</b>${(()=>{const x=COMPANIES.filter(c=>c[1]===t).map(c=>c[0]).join(', ');return x?'Companies: '+x:''})()}</p></div><a class="more" href="portfolio.html">View companies <i>↗</i></a></div><div class="pic" style="${gi(i+4,`focus/${['applied-ai','security','climate-energy','health-bio','fintech'][i]}.jpg`)}"><span class="brand"><b class="bm"></b>${t}</span></div></div></section>`).join('');
if($('#fellowGrid'))$('#fellowGrid').innerHTML=["Rhea Das","Jonah Kim","Maya Stone","Eli Novak"].map((n,i)=>`<div class="person"><div class="ph" style="${g(i+2)}">${ini(n)}</div><h3>${n}</h3><p>Fellow · Cohort 4</p></div>`).join('');


// ---- About page word reveal ----
document.querySelectorAll('.reveal2').forEach(r=>{
  r.innerHTML=r.innerHTML.replace(/(\S+)/g,'<span>$1</span>');
  const w=[...r.querySelectorAll(':scope>span')];
  const rv=()=>{const b=r.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.85-b.top)/(innerHeight*.45)));w.forEach((x,i)=>x.classList.toggle('lit',i<p*w.length))};
  addEventListener('scroll',rv);rv();
});
// ---- About page: fund timeline ----
const tlEl=document.querySelector('#tl');
if(tlEl){
  tlEl.innerHTML=TIMELINE.map(([y,amt,lab,note],i)=>
    `<div class="yr${i?'':' on'}" data-i="${i}"><span class="ylab">${y}</span>
     <div class="ybody"><span class="ypill">${y}</span><b>${amt}</b><span class="yfund">${lab}</span><small>${note}</small></div></div>`).join('');
  const tab=document.createElement('span');tab.className='tltab';tlEl.parentNode.appendChild(tab);
  const place=()=>{const a=tlEl.querySelector('.yr.on');if(!a)return;tab.style.left=(a.offsetLeft+24)+'px'};
  const set=el=>{tlEl.querySelectorAll('.yr').forEach(x=>x.classList.remove('on'));el.classList.add('on');setTimeout(place,20);setTimeout(place,600)};
  tlEl.querySelectorAll('.yr').forEach(el=>{el.onmouseenter=()=>set(el);el.onclick=()=>set(el)});
  place();addEventListener('resize',place);tlEl.onscroll=place;
}
// ---- About page: founder voices fade-up on scroll ----
(()=>{const items=[...document.querySelectorAll('.vo,.fu')];if(!items.length)return;
 if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('in'));return}
 const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){
   const i=items.indexOf(e.target);e.target.style.transitionDelay=(e.target.classList.contains('fu')?0:(i%2?.12:0))+'s';
   e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -8% 0px'});
 items.forEach(i=>io.observe(i));})();
// ---- About page: rotating credo hero ----
(()=>{const rot=document.querySelector('#rot');if(!rot||typeof CREDOS==='undefined')return;
 const list=CREDOS.concat(CREDOS.slice(0,3));
 rot.innerHTML='<div class="rotin">'+list.map(([kw,ph],i)=>
   `<div class="rline${i?'':' on'}"><span class="kw">${kw}</span><span class="ph"><i>&rarr;</i> ${ph}</span></div>`).join('')+'</div>';
 const inner=rot.firstElementChild,lines=[...inner.children];let i=0;
 const dim=()=>lines.forEach((l,k)=>{const d=k-i;l.classList.toggle('on',d===0);
   l.style.opacity=d<0?0:d===0?1:d===1?.34:d===2?.16:0});
 const move=(anim=true)=>{inner.style.transition=anim?'':'none';
   inner.style.transform=`translateY(${-lines[i].offsetTop}px)`;dim();
   if(!anim)requestAnimationFrame(()=>inner.style.transition='')};
 move(false);
 setInterval(()=>{i++;if(i>=CREDOS.length){move(true);setTimeout(()=>{i=0;move(false)},900)}else move(true)},3000);
 addEventListener('resize',()=>move(false));})();
// ---- Team page ----
const fadeIn=els=>{if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
   e.target.style.transitionDelay=(e.target.dataset.d||0)+'s';e.target.classList.add('in');io.unobserve(e.target)}}),
 {threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(e=>io.observe(e))};

const tGrid=document.querySelector('#teamGrid2');
if(tGrid&&typeof PEOPLE!=='undefined'){
  const cats=[...new Set(PEOPLE.map(p=>p.c))];
  const tabs=document.querySelector('#teamTabs');
  tabs.innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${c}">${c}</button>`).join('');
  const card=(p,i)=>`<article class="tcell fu2" data-d="${(i%4)*.09}">
    <a class="tshot" href="person.html?p=${p.s}" style="${gi(i+1,`team/${p.s}.jpg`)}" aria-label="${p.n}"><span>${ini(p.n)}</span></a>
    <h3>${p.n}</h3><p>${p.r}</p>
    <a class="plus" href="person.html?p=${p.s}" aria-label="Open ${p.n}&rsquo;s profile"><i>+</i></a></article>`;
  const render=c=>{const list=PEOPLE.filter(p=>p.c===c);
    tGrid.innerHTML=list.map(card).join('');fadeIn([...tGrid.querySelectorAll('.fu2')]);bindImgs()};
  tabs.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    tabs.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    tGrid.classList.add('swap');setTimeout(()=>{render(b.dataset.c);tGrid.classList.remove('swap')},220)};
  render(cats[0]);
}

// ---- Person profile page ----
const pName=document.querySelector('#pName');
if(pName&&typeof PEOPLE!=='undefined'){
  const slug=new URLSearchParams(location.search).get('p');
  const i=Math.max(0,PEOPLE.findIndex(x=>x.s===slug)),p=PEOPLE[i];
  document.title=p.n+' · VentNora';
  pName.textContent=p.n;document.querySelector('#pRole').textContent=p.r;
  const shot=document.querySelector('#pShot');shot.style.cssText=gi(i+1,`team/banner/${p.s}.jpg`);
  document.querySelector('#pIni').textContent=ini(p.n);
  document.querySelector('#pBio').innerHTML=p.b.map(t=>`<p>${t}</p>`).join('');
  const coWrap=document.querySelector('#pCoWrap');
  if(p.co.length)document.querySelector('#pCos').innerHTML=p.co.map(c=>`<span class="cotile">${c}</span>`).join('');
  else coWrap.remove();
  document.querySelector('#pQa').innerHTML=p.q.map(([q,a])=>`<div class="qitem fu2"><h4>${q}</h4><p>${a}</p></div>`).join('');
  document.querySelector('#pPosts').innerHTML=POSTS.slice(0,4).map(postHTML).join('');
  fadeIn([...document.querySelectorAll('#personPage .fu2')]);
}
// ---- Portfolio page ----
const coGrid=document.querySelector('#coGrid');
if(coGrid&&typeof COS!=='undefined'){
  const cats=[...new Set(COS.map(c=>c.cat))],doms=[...new Set(ADDL.map(a=>a.dom))];
  let tab='Featured',filt='All';
  const tabs=document.querySelector('#pfTabs'),fMenu=document.querySelector('#fMenu'),fBtn=document.querySelector('#fBtn');
  tabs.innerHTML=['Featured','Additional'].map((t,i)=>`<button class="${i?'':'on'}" data-t="${t}">${t}</button>`).join('');
  fBtn.onclick=()=>fMenu.classList.toggle('open');
  const buildMenu=()=>{const list=tab==='Featured'?cats:doms;
    fMenu.innerHTML=['All',...list].map(c=>`<button class="${c===filt?'on':''}" data-f="${c}">${c}</button>`).join('')};
  const cell=(c,i)=>`<article class="ccell fu2" data-d="${(i%4)*.07}">
   <div class="ctile" style="${g(i+2)}"><small>${c.st}</small>${logo(c.n,i,c.s)}</div>
   <h3>${c.n}</h3><p class="ccat">${c.cat}</p>
   <div class="cdrop"><div class="cdin"><p class="cdesc">${c.d}</p>
     ${c.fo.length?`<div class="cblk"><h4>Founders</h4>${c.fo.map(f=>`<span>${f[0]}</span>`).join('')}</div>`:''}
     <div class="cblk"><h4>Funding</h4><span>${c.fund}</span></div>
     <div class="cblk"><h4>Headquarters</h4><span>${c.hq}</span></div></div></div>
   <div class="crow">${c.f
     ?`<a class="plus go" href="company.html?c=${c.s}" aria-label="Open ${c.n}"><i>&#8599;</i></a>`
     :`<button class="plus tog" aria-label="Show details for ${c.n}"><i>+</i></button>`}</div></article>`;
  const row=(a,i)=>`<div class="trow fu2" data-d="${Math.min(i,8)*.045}">
    <div class="tmain"><span class="tc name">${a.n}${a.by?` <em>${a.by}</em>`:''}</span>
      <span class="tc">${a.dom}</span><span class="tc">${a.st}</span><span class="tc">${a.sta}</span>
      <span class="tc act">${a.link
        ?`<a class="tarrow" href="company.html?c=${a.link}" aria-label="Open ${a.n}">&#8594;</a>`
        :`<button class="tarrow tg" aria-label="Show details for ${a.n}">&#8595;</button>`}</span></div>
    <div class="tdrop"><div class="tdin"><div class="tdcols">
      <p class="tdtag">${a.tag}</p>
      <div><h4>Founders</h4><p>${a.fo}</p><h4 class="mt">Website</h4><p><a class="ulink" href="${a.w}" target="_blank" rel="noopener">${a.w.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,'')}</a></p></div>
    </div></div></div></div>`;
  const render=()=>{
    if(tab==='Featured'){coGrid.className='cgrid';
      const list=COS.filter(c=>filt==='All'||c.cat===filt);
      coGrid.innerHTML=list.length?list.map(cell).join(''):'<p class="empty">No companies match that filter yet.</p>';
    }else{coGrid.className='ctable';
      const list=ADDL.filter(a=>filt==='All'||a.dom===filt);
      coGrid.innerHTML='<div class="thead"><span>Company</span><span>Domain</span><span>Stage</span><span>Status</span><span></span></div>'+
        (list.length?list.map(row).join(''):'<p class="empty">No companies match that filter yet.</p>');
    }
    fadeIn([...coGrid.querySelectorAll('.fu2')])};
  const swap=()=>{coGrid.classList.add('swap');setTimeout(()=>{render();coGrid.classList.remove('swap')},200)};
  tabs.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    tabs.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    tab=b.dataset.t;filt='All';fBtn.innerHTML='Filters <i>&#8595;</i>';buildMenu();swap()};
  fMenu.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    fMenu.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');filt=b.dataset.f;
    fMenu.classList.remove('open');fBtn.innerHTML=(filt==='All'?'Filters':filt)+' <i>&#8595;</i>';swap()};
  coGrid.onclick=e=>{
    const t=e.target.closest('.tog');
    if(t){const cellEl=t.closest('.ccell'),open=cellEl.classList.contains('open');
      coGrid.querySelectorAll('.ccell.open').forEach(x=>{x.classList.remove('open');x.querySelector('.tog i').innerHTML='+'});
      if(!open){cellEl.classList.add('open');t.querySelector('i').innerHTML='&times;'}return}
    const r=e.target.closest('.tg');
    if(r){const rowEl=r.closest('.trow'),open=rowEl.classList.contains('open');
      coGrid.querySelectorAll('.trow.open').forEach(x=>{x.classList.remove('open');x.querySelector('.tg').innerHTML='&#8595;'});
      if(!open){rowEl.classList.add('open');r.innerHTML='&#8593;'}}};
  buildMenu();render();
}
// ---- Company profile page ----
const cName=document.querySelector('#cName');
if(cName&&typeof COS!=='undefined'){
  const slug=new URLSearchParams(location.search).get('c');
  const i=Math.max(0,COS.findIndex(x=>x.s===slug)),c=COS[i];
  document.title=c.n+' · VentNora';
  cName.textContent=c.n;document.querySelector('#cCat').textContent=c.cat;
  document.querySelector('#cShot').style.cssText=gi(i+2,`companies/${c.s}.jpg`);
  document.querySelector('#cIni').textContent=c.n;
  document.querySelector('#cInv').textContent=c.inv;
  document.querySelector('#cFo').innerHTML=c.fo.length?c.fo.map(([n,r])=>`<p><b>${n}</b> &mdash; ${r}</p>`).join(''):'<p>Not disclosed</p>';
  document.querySelector('#cFund').textContent=c.fund||'Not disclosed';
  document.querySelector('#cWeb').innerHTML=c.w?`<a class="ulink" href="${c.w}" target="_blank" rel="noopener">${c.w.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,'')}</a>`:'Not available';
  document.querySelector('#cHq').textContent=c.hq;
  document.querySelector('#cSt').textContent=c.st;
  document.querySelector('#cLong').innerHTML=`<p>${c.d}</p><p>${c.l}</p>`;
  const more=COS.filter(x=>x.s!==c.s).slice(0,4);
  document.querySelector('#cMore').innerHTML=more.map((x,k)=>`<a class="ccell link" href="company.html?c=${x.s}">
    <div class="ctile" style="${g(k+3)}"><small>${x.st}</small>${logo(x.n,k+3,x.s)}</div>
    <h3>${x.n}</h3><p class="ccat">${x.cat}</p></a>`).join('');
}
// ---- Nav dropdown (keyboard + touch) ----
document.querySelectorAll('.nd').forEach(nd=>{
  const link=nd.querySelector('a');
  link.addEventListener('click',e=>{if(matchMedia('(max-width:900px)').matches){e.preventDefault();nd.classList.toggle('open')}});
});
// ---- Focus area page ----
const fTitle=document.querySelector('#fTitle');
if(fTitle&&typeof FOCUS!=='undefined'){
  const slug=new URLSearchParams(location.search).get('a');
  const fi=Math.max(0,FOCUS.findIndex(x=>x.s===slug)),a=FOCUS[fi];
  document.title=a.t+' · VentNora';
  fTitle.textContent=a.t;document.querySelector('#fSub').textContent=a.sub;
  // hero slideshow: one slide per company in the list
  const shot=document.querySelector('#fShot'),list=document.querySelector('#fList'),cap=document.querySelector('#fCap');
  const slides=a.hero.map((n,k)=>{
    const m=(typeof COS!=='undefined'?COS.find(x=>x.n===n):null);
    const x=(typeof ADDL!=='undefined'?ADDL.find(y=>y.n===n):null);
    const sl=m?m.s:(x?x.n.toLowerCase().replace(/[^a-z0-9]+/g,'-'):'');
    const img=sl?`wide/${sl}.jpg`:`focus/${a.s}.jpg`;
    const txt=m?`${m.d} On our radar at ${m.st}.`:(x?`${x.tag}`:a.cap);
    return {n,img,txt,pal:fi+1+k,href:m?`company.html?c=${m.s}`:''}});
  if(!slides.length)slides.push({n:a.t,img:`focus/${a.s}.jpg`,txt:a.cap,pal:fi+1,href:''});
  shot.insertAdjacentHTML('afterbegin',slides.map((s,k)=>`<span class="fsl${k?'':' on'}" style="${gi(s.pal,s.img)}"></span>`).join(''));
  list.innerHTML=slides.map((s,k)=>`<li><button type="button" class="fcbtn${k?'':' on'}" data-i="${k}">${s.n}</button></li>`).join('');
  cap.textContent=slides[0].txt;
  let fcur=0,ftimer;
  const fgo=k=>{fcur=(k+slides.length)%slides.length;
    shot.querySelectorAll('.fsl').forEach((el,j)=>el.classList.toggle('on',j===fcur));
    list.querySelectorAll('.fcbtn').forEach((b,j)=>b.classList.toggle('on',j===fcur));
    cap.textContent=slides[fcur].txt};
  const frestart=()=>{clearInterval(ftimer);ftimer=setInterval(()=>fgo(fcur+1),4500)};
  list.onclick=e=>{const b=e.target.closest('.fcbtn');if(!b)return;const k=+b.dataset.i;
    if(k===fcur&&slides[k].href){location.href=slides[k].href;return}
    fgo(k);frestart()};
  frestart();
  document.querySelector('#fIntro').textContent=a.intro;
  // domains
  document.querySelector('#fDoms').innerHTML=a.dom.map((d,i)=>`<section class="band"><div class="frame dwrap">
    ${i?'':'<span class="chip">Domains</span>'}
    <div class="dhead"><div><h2 class="dh">${d.h}</h2><p class="dsub">${d.sub}</p></div><p class="dpara">${d.p}</p></div>
    ${d.cos.length?'<small class="dlab">Companies we are tracking</small>':''}
    <div class="lgrid">${d.cos.map((c,k)=>{
      const m=(typeof COS!=='undefined'?COS.find(x=>x.n===c):null);
      const inner=`<span class="ltile">${logo(c,i*3+k,m?m.s:"")}</span>`;
      return m?`<a class="lcell" href="company.html?c=${m.s}">${inner}</a>`:`<span class="lcell">${inner}</span>`}).join('')}</div>
    </div></section>`).join('');
  // articles
  const tr=document.querySelector('#fTrack');
  tr.innerHTML=POSTS.map(postHTML).join('');
  const step=()=>tr.firstElementChild.offsetWidth+8;
  document.querySelector('#fNext').onclick=()=>tr.scrollBy({left:step(),behavior:'smooth'});
  document.querySelector('#fPrev').onclick=()=>tr.scrollBy({left:-step(),behavior:'smooth'});
  // team
  document.querySelector('#fTeamSub').textContent=' in '+a.t+' founders.';
  const tm=a.team.map(s=>PEOPLE.find(p=>p.s===s)).filter(Boolean);
  document.querySelector('#fTeam').innerHTML=tm.map((p,i)=>`<article class="tcell fu2" data-d="${(i%4)*.09}">
    <a class="tshot" href="person.html?p=${p.s}" style="${gi(i+1,`team/${p.s}.jpg`)}" aria-label="${p.n}"><span>${ini(p.n)}</span></a>
    <h3>${p.n}</h3><p>${p.r}</p>
    <a class="plus" href="person.html?p=${p.s}" aria-label="Open ${p.n}&rsquo;s profile"><i>+</i></a></article>`).join('');
  fadeIn([...document.querySelectorAll('#focusPage .fu2')]);
  // word reveal + section fade
  document.querySelectorAll('.reveal3').forEach(r=>{
    r.innerHTML=r.textContent.replace(/(\S+)/g,'<span>$1</span>');
    const w=[...r.children];
    const rv=()=>{const b=r.getBoundingClientRect(),pr=Math.min(1,Math.max(0,(innerHeight*.82-b.top)/(innerHeight*.45)));
      w.forEach((x,i)=>x.classList.toggle('lit',i<pr*w.length))};
    addEventListener('scroll',rv);rv()});
  fadeIn([...document.querySelectorAll('#fDoms .dwrap, .lcell')]);
}
// ---- Fellows page ----
const wMos=document.querySelector('#wMos');
if(wMos&&typeof FELLOWS!=='undefined'){
  const F=FELLOWS;
  document.querySelector('#wH1').textContent=F.h1;
  document.querySelector('#wH2').textContent=F.h2;
  const m=F.mosaic[0];
  wMos.innerHTML=`<div class="mos">
    <div class="mtile big fu2" style="${gi(1,'fellows/mosaic-1.jpg')}"><div class="mcap"><span class="mchip">${m.chip}</span><h3>${m.t}</h3><p>${m.c}</p></div></div>
    <div class="mtile tall fu2" data-d=".08" style="${gi(3,'fellows/mosaic-2.jpg')}"></div>
    <div class="mcol"><div class="mtile fu2" data-d=".16" style="${gi(5,'fellows/mosaic-3.jpg')}"></div><div class="mtile fu2" data-d=".24" style="${gi(6,'fellows/mosaic-4.jpg')}"></div></div>
  </div>`;
  document.querySelector('#wIntro').textContent=F.intro;
  document.querySelector('#wProgs').innerHTML=F.progs.map((pr,i)=>`<section class="band"><div class="frame wprog fu2">
    <span class="chip">${pr.chip}</span>
    <div class="dhead"><div><h3 class="wt">${pr.t}</h3>
      <p class="wnext"><small>${pr.next}</small><b>${pr.when}</b></p>
      <a class="btnacc" href="#wInv">${pr.cta} <i>&#8599;</i></a></div>
      <div class="wright">${pr.p?`<p class="dpara">${pr.p}</p>`:''}${pr.p2?`<p class="dpara">${pr.p2}</p>`:''}
      ${pr.quote?`<blockquote class="wq">&ldquo;${pr.quote}&rdquo;<cite>${pr.who}</cite></blockquote>`:''}</div></div>
    <div class="wshot fu2" data-d=".1" style="${gi(i+2,`fellows/programme-${i+1}.jpg`)}"></div>
  </div></section>`).join('');
  document.querySelector('#wLabsIntro').textContent=F.labsIntro;
  document.querySelector('#wLabs').innerHTML=F.labs.map((l,i)=>`<div class="lab fu2" data-d="${(i%2)*.1}"><h4>${l[0]}</h4><p>${l[1]}</p></div>`).join('');
  document.querySelector('#wInv').innerHTML=`<div class="invtxt fu2"><p>${F.involved.p}</p><a class="btnacc" href="person.html?p=lena-fischer">${F.involved.cta} <i>&#8599;</i></a></div>
    <div class="invpic fu2" data-d=".1" style="${gi(4,'fellows/get-involved.jpg')}"><span class="invname">${F.involved.name}<small>${F.involved.role}</small></span></div>`;
  const tr=document.querySelector('#wTrack');
  tr.innerHTML=POSTS.map(postHTML).join('');
  const step=()=>tr.firstElementChild.offsetWidth+8;
  document.querySelector('#wNext').onclick=()=>tr.scrollBy({left:step(),behavior:'smooth'});
  document.querySelector('#wPrev').onclick=()=>tr.scrollBy({left:-step(),behavior:'smooth'});
  document.querySelectorAll('.reveal3').forEach(r=>{
    r.innerHTML=r.textContent.replace(/(\S+)/g,'<span>$1</span>');
    const w=[...r.children];
    const rv=()=>{const b=r.getBoundingClientRect(),pr=Math.min(1,Math.max(0,(innerHeight*.82-b.top)/(innerHeight*.45)));
      w.forEach((x,i)=>x.classList.toggle('lit',i<pr*w.length))};
    addEventListener('scroll',rv);rv()});
  fadeIn([...document.querySelectorAll('#fellowsPage .fu2')]);
}

// ---- Blog page ----
if(document.querySelector('#blogPage')&&typeof BLOG!=='undefined'){
  const B=BLOG;
  const AU=['Alex Rivera','Priya Nair','Sam Okafor','Mina Park','Grace Liu','Diego Santos','Nora Bell','Omar Haddad'];
  const auth=(o,i)=>(o.au||[AU[i%AU.length]].concat(i%3===2?[AU[(i+3)%AU.length]]:[]));
  const PRESSART={
   "VentNora raises $1.1B to keep leading first rounds":"Announcing our largest fund yet: Fund XIV at $900M",
   "Why this firm keeps writing the first cheque in hard tech":"Our newest partner backs researchers early",
   "The fellows programme quietly funding student research":"Three years of the Fellows programme",
   "Inside our security watchlist":"CISOs have budget for AI security. The missing layer is the control plane",
   "Energy is the new bottleneck, says VentNora partner":"Inside the energy build",
   "A fund that measures itself in decades":"What we changed after our first hundred first calls"};
  const chips=l=>`<div class="tags">${l.map(t=>`<span>${t}</span>`).join('')}</div>`;
  document.querySelector('#bHero').innerHTML=`<div class="bhero-img" style="${gi(0,'blog/hero.jpg')}"><span class="bflag">Featured article</span><span class="bhline"></span><span class="bhv v1"></span><span class="bhv v2"></span><span class="bhbot"></span></div>
   <div class="bhcard fu2"><h2>${B.hero.t}</h2>
   <p class="bhby">By ${B.hero.by}</p><p class="bhp">${B.hero.p}</p>
   <a class="bpill" href="${alink(B.hero.t)}">${B.hero.cta} <i>&#8599;</i></a></div>`;
  {const im=document.querySelector('.bhero-img'),cd=document.querySelector('.bhcard');
   const sz=()=>im.style.setProperty('--cb',cd.offsetHeight+'px');sz();addEventListener('resize',sz);setTimeout(sz,300);}
  const head=(id,o)=>document.querySelector(id).innerHTML=`${o.h}<em>${o.e}</em>`;
  head('#bsh1',B.stories);head('#bsh2',B.views);head('#bsh3',B.port);head('#bsh4',B.firm);head('#bsh5',B.press);
  const storyHTML=(s,i)=>`<section class="band bitem" data-cat="Founder story" data-au="${auth(s,i).join('|')}" data-tag="${(s.tags||[s.tag]).filter(Boolean).join('|')}"><div class="frame brow fu2" data-d="${(i%3)*.06}">
    <a class="bthumb" href="${alink(s.t)}" style="${gi(i+1,`blog/stories/story-${(i%3)+1}.jpg`)}" aria-label="${s.t}"></a>
    <div class="btxt">${chips(auth(s,i).slice(0,1))}<h3>${s.t}</h3><p>${s.d}</p>
    <a class="bpill" href="${alink(s.t)}">Read article <i>&#8599;</i></a></div></div></section>`;
  const card=(o,i,folder,file,pal)=>`<a class="bcard bitem fu2" href="${alink(o.t)}" data-d="${(i%3)*.07}" data-cat="${(o.tags||[o.tag]).filter(Boolean)[0]||''}" data-au="${auth(o,i).join('|')}" data-tag="${(o.tags||[o.tag]).filter(Boolean).join('|')}">
    <span class="bimg" style="${gi(pal+i,`${folder}/${file}-${(i%6)+1}.jpg`)}"></span>
    <h3>${o.t}</h3><p>${o.d}</p>${chips(auth(o,i))}</a>`;
  const feeds={
    bStories:{items:B.stories.items,n:3,html:storyHTML},
    bViews:{items:B.views.items,n:6,html:(o,i)=>card(o,i,'blog/views','view',1)},
    bPort:{items:B.port.items,n:6,html:(o,i)=>card(o,i,'blog/portfolio','news',0)},
    bFirm:{items:B.firm.items,n:9,html:(o,i)=>card(o,i,'blog/firm','firm',3)}};
  Object.entries(feeds).forEach(([id,f])=>{
    f.host=document.querySelector('#'+id);f.shown=0;
    f.push=n=>{const part=f.items.slice(f.shown,f.shown+n);if(!part.length)return;
      f.host.insertAdjacentHTML('beforeend',part.map((o,k)=>f.html(o,f.shown+k)).join(''));
      f.shown+=part.length;
      const nn=f.host.querySelector('.bnone');if(nn)f.host.appendChild(nn);
      const done=f.shown>=f.items.length;
      document.querySelectorAll(`[data-more="${id}"],[data-all="${id}"]`).forEach(x=>{x.style.display=done?'none':''});};
    f.push(f.n);});
  document.querySelector('#bPress').innerHTML=B.press.items.map(p=>`<a class="pcard bitem fu2" href="${alink(PRESSART[p[1]]||p[1])}" data-cat="${p[0]}" data-au="${p[0]}" data-tag="${p[2].slice(0,4)}"><h4>${p[1]}</h4><span class="pout">${p[0]}</span><i>&#8599;</i></a>`).join('');
  // filters + search
  const uniqSort=l=>[...new Set(l.filter(Boolean))].sort((x,y)=>x.localeCompare(y));
  document.querySelectorAll('.btools[data-for]').forEach(tools=>{
    const key=tools.dataset.for,host=document.querySelector('#'+key);
    const panelWrap=document.querySelector(`.bfpwrap[data-panel="${key}"]`),panel=panelWrap.querySelector('.bfp');
    const items=()=>[...host.children].filter(n=>n.classList.contains('bitem'));
    const col=(name,vals)=>`<div class="bfcol"><h5>${name}</h5><ul>${vals.map(v=>`<li><button data-k="${name.toLowerCase()}" data-v="${v}">${v}</button></li>`).join('')}</ul></div>`;
    const build=()=>{const it=items();
      panel.innerHTML=col('Category',uniqSort(it.map(n=>n.dataset.cat)))
        +col('Author',uniqSort(it.flatMap(n=>(n.dataset.au||'').split('|'))))
        +col('Tags',uniqSort(it.flatMap(n=>(n.dataset.tag||'').split('|'))));};
    const sel={category:new Set(),author:new Set(),tags:new Set()};
    const q=tools.querySelector('.bsq');
    const apply=()=>{const t=(q.value||'').trim().toLowerCase();let shown=0;
      items().forEach(n=>{
        const cat=n.dataset.cat||'',au=(n.dataset.au||'').split('|'),tg=(n.dataset.tag||'').split('|');
        const ok=(!sel.category.size||sel.category.has(cat))
          &&(!sel.author.size||au.some(x=>sel.author.has(x)))
          &&(!sel.tags.size||tg.some(x=>sel.tags.has(x)))
          &&(!t||n.textContent.toLowerCase().includes(t));
        n.hidden=!ok;if(ok)shown++;});
      let none=host.querySelector('.bnone');
      if(!shown){if(!none){none=document.createElement('p');none.className='bnone';none.textContent='No results.';host.appendChild(none)}none.hidden=false}
      else if(none)none.hidden=true;};
    panel.onclick=e=>{const b=e.target.closest('button[data-k]');if(!b)return;
      const set=sel[b.dataset.k==='tags'?'tags':(b.dataset.k==='author'?'author':'category')];
      if(set.has(b.dataset.v)){set.delete(b.dataset.v);b.classList.remove('on')}else{set.add(b.dataset.v);b.classList.add('on')}
      apply()};
    const openPanel=on=>{panelWrap.hidden=!on;q.hidden=!on;
      tools.querySelector('.bft i').innerHTML=on?'&#8593;':'&#8595;';
      tools.querySelector('.bft').classList.toggle('on',on);
      if(on&&!panel.innerHTML)build()};
    tools.querySelector('.bft').onclick=()=>openPanel(panelWrap.hidden);
    tools.querySelector('.bfs').onclick=()=>{if(q.hidden)q.hidden=false;q.focus()};
    q.oninput=apply;
    tools._rebuild=()=>{if(!panelWrap.hidden||panel.innerHTML)build();apply()};
  });
  document.querySelectorAll('[data-more],[data-all]').forEach(btn=>btn.onclick=()=>{
    const key=btn.dataset.more||btn.dataset.all;const f=feeds[key];if(!f)return;
    f.push(btn.dataset.all?f.items.length:3);
    fadeIn([...f.host.querySelectorAll('.fu2:not(.in)')]);bindImgs();
    const tl=document.querySelector(`.btools[data-for="${key}"]`);if(tl&&tl._rebuild)tl._rebuild()});
  fadeIn([...document.querySelectorAll('#blogPage .fu2')]);
}

// ---- Article page ----
if(document.querySelector('#art')&&typeof ARTICLES!=='undefined'){
  const map={};Object.keys(ARTICLES).forEach(t=>{map[slugify(t)]=Object.assign({t},ARTICLES[t])});
  const want=new URLSearchParams(location.search).get('a');
  const a=map[want]||map[Object.keys(map)[0]];
  document.title=a.t+' \u00b7 VentNora';
  const body=a.body.map(l=>l.slice(0,3)==='## '?`<h2>${l.slice(3)}</h2>`
    :(l.slice(0,2)==='> '?`<p class="quote" style="margin:32px 0">\u201c${l.slice(2)}\u201d</p>`:`<p>${l}</p>`)).join('');
  document.querySelector('#art').innerHTML=`<span class="chip">${a.chip}</span><h1 class="left">${a.t}</h1>
   <p class="by"><b>${a.by}</b>${a.date} \u00b7 ${a.read}</p>
   <div class="pic" style="${gi(2,a.img)};margin:32px 0"></div>
   ${body}<a class="more" href="blog.html">\u2190 Back to blog</a>`;
}

bindImgs();
