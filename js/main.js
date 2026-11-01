const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const DEMO='<div class="demo"><b>Demo mode.</b> This website is a preview build, so no payment, booking or enquiry is processed and no data is saved. Live payments and bookings will be switched on at launch.</div>';
const CLASSES=[
{n:'Yoga',i:'class-yoga.jpg',d:'Mobility, breathing and recovery in a calm studio.'},
{n:'Zumba',i:'class-zumba.jpg',d:'High-energy dance cardio that never feels like a workout.'},
{n:'CrossFit',i:'class-crossfit.jpg',d:'Coached strength and conditioning, scaled to your level.'},
{n:'Cardio',i:'class-cardio.jpg',d:'Guided treadmill, bike and rower sessions for stamina.'}];
const TIMES=[['Mon','6:30 AM','Yoga'],['Mon','6:00 PM','CrossFit'],['Tue','7:00 AM','Cardio'],['Tue','7:00 PM','Zumba'],['Wed','6:30 AM','Yoga'],['Wed','6:00 PM','CrossFit'],['Thu','7:00 AM','Cardio'],['Thu','7:00 PM','Zumba'],['Fri','6:30 AM','Yoga'],['Fri','6:00 PM','CrossFit'],['Sat','8:00 AM','Zumba'],['Sat','10:00 AM','Cardio']];
const TRAINERS=[
{n:'Rahul Verma',r:'Head Strength Coach',i:'trainer-1.jpg',x:'9 years',c:['ACE Certified Personal Trainer','CrossFit Level 2'],s:['Strength','Muscle gain','Powerlifting'],b:'Rahul builds programmes around progressive overload and clean technique. He has coached beginners and competitive lifters alike.'},
{n:'Neha Kapoor',r:'Weight Loss & Nutrition Coach',i:'trainer-2.jpg',x:'7 years',c:['ISSA Fitness Trainer','Certified Nutrition Coach'],s:['Weight loss','Zumba','Diet planning'],b:'Neha combines training with simple, sustainable nutrition plans. Her members focus on habits that last, not crash diets.'},
{n:'Arjun Malhotra',r:'Functional & Mobility Trainer',i:'trainer-3.jpg',x:'6 years',c:['NASM Corrective Exercise Specialist','RYT 200 Yoga Teacher'],s:['Mobility','Yoga','Injury recovery'],b:'Arjun helps members move better and train pain-free. His sessions suit desk workers, seniors and anyone returning from injury.'}];
const PLANS=[
{n:'Basic',p:[1200,3300,11000],f:['Full gym floor access','Locker and shower','Cardio zone','Open 6 AM to 11 PM']},
{n:'Pro',p:[1800,4900,16500],t:1,f:['Everything in Basic','All group classes','Free fitness assessment','Diet and workout plan','Wi-Fi and lounge access']},
{n:'Elite',p:[2600,7200,24000],f:['Everything in Pro','Personal trainer, 8 sessions a month','Priority class booking','Body composition tracking','Guest pass, 2 a month']}];
const GAL=['gallery-1','gallery-2','gallery-3','gallery-5','gallery-6','gallery-7','gallery-8'];
const REV=[{n:'Karan S.',i:'member-1.jpg',t:'Lost 11 kg in five months. The trainers adjust the plan every week, and the gym is always clean.'},{n:'Priya D.',i:'member-2.jpg',t:'The morning classes keep me consistent. Booking a seat is easy and the coaches know every member by name.'},{n:'Amit R.',i:'member-3.jpg',t:'Good equipment, never overcrowded, and fair pricing. I renewed for a full year without thinking twice.'}];
const inr=n=>'₹'+n.toLocaleString('en-IN');
/* chrome */
const mk=(h,id)=>{const e=$(id);if(e)e.innerHTML=h};
mk(`<div class="wrap"><a class="logo" href="index.html" aria-label="A.R Fitness Gym Club home"><img src="images/logo-white.png" alt="A.R Fitness Gym Club"></a>
<ul id="menu"><li><a href="index.html#classes">Classes</a></li><li><a href="index.html#trainers">Trainers</a></li><li><a href="index.html#membership">Membership</a></li><li><a href="index.html#gallery">Gallery</a></li><li><a href="index.html#reviews">Reviews</a></li><li><a href="index.html#contact">Contact</a></li></ul>
<div class="cta"><a class="btn line sm" href="member.html">Member login</a><a class="btn sm" href="index.html#membership">Join now</a><button class="burger" aria-label="Menu" aria-expanded="false"><i></i></button></div></div>`,'#nav');
mk(`<div class="wrap"><div class="g"><div><img src="images/logo-white.png" alt="A.R Fitness Gym Club"><p style="max-width:320px">Coached training, modern equipment and a clean space to train every day.</p></div>
<div><h4>Explore</h4><a href="index.html#classes">Classes</a><a href="index.html#trainers">Trainers</a><a href="index.html#membership">Membership</a><a href="index.html#gallery">Gallery</a><a href="index.html#reviews">Reviews</a><a href="member.html">Member portal</a></div>
<div><h4>Visit us</h4><a>12 Fitness Street, Sample City 400001</a><a href="tel:+910000000000">+91 00000 00000</a><a href="mailto:hello@arfitness.example">hello@arfitness.example</a><a>Daily, 6 AM to 11 PM</a></div></div>
<div class="c">© <span id="yr"></span> A.R Fitness Gym Club. Demo website.</div></div>`,'#foot');
$('#yr')&&($('#yr').textContent=new Date().getFullYear());
const nav=$('#nav');
$('.burger').onclick=e=>{const o=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
/* modal */
const modal=document.createElement('div');modal.className='modal';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');document.body.appendChild(modal);
let lastFocus;
function openM(html,cls=''){lastFocus=document.activeElement;modal.className='modal on '+(cls.includes('lb')?'lb':'');modal.innerHTML=`<div class="mb ${cls}"><button class="x" aria-label="Close">×</button>${html}</div>`;$('.x',modal).onclick=closeM;$('.x',modal).focus();document.body.style.overflow='hidden'}
function closeM(){modal.classList.remove('on');document.body.style.overflow='';lastFocus&&lastFocus.focus()}
modal.addEventListener('click',e=>{if(e.target===modal)closeM()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
const formDone=(t,m)=>`<h3>${t}</h3><p>${m}</p>${DEMO}<button class="btn" style="margin-top:20px" onclick="closeM()">Close</button>`;
window.closeM=closeM;window.openM=openM;window.formDone=formDone;
/* splash (once per session) */
const sp=$('#splash');
if(sp){if(sessionStorage.getItem('arSplash')){sp.remove();document.body.classList.add('go')}else{document.body.style.overflow='hidden';setTimeout(()=>{sp.classList.add('out');document.body.classList.add('go');document.body.style.overflow='';sessionStorage.setItem('arSplash','1');setTimeout(()=>sp.remove(),900)},2200)}}
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.style.transitionDelay)setTimeout(()=>e.target.style.transitionDelay='',1600)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
const revAll=()=>$$('.rev:not(.in)').forEach(e=>io.observe(e));
/* home */
if($('#hero')){
 const im=$$('#hero img'),dt=$$('#hero .dots b');let k=0;
 setInterval(()=>{im[k].classList.remove('on');dt[k].classList.remove('on');k=(k+1)%im.length;im[k].classList.add('on');dt[k].classList.add('on')},5000);
 $('#cls').innerHTML=CLASSES.map(c=>`<article class="card cls rev"><img src="images/${c.i}" alt="${c.n} class" loading="lazy"><div class="b"><h3>${c.n}</h3><p>${c.d}</p></div></article>`).join('');
 $('#tt').innerHTML='<tr><th>Day</th><th>Time</th><th>Class</th><th></th></tr>'+TIMES.map((t,i)=>`<tr><td>${t[0]}</td><td>${t[1]}</td><td>${t[2]}</td><td><button class="slot" data-i="${i}">Book a seat</button></td></tr>`).join('');
 $$('.slot').forEach(b=>b.onclick=()=>{const t=TIMES[b.dataset.i];openM(`<h3>Book a seat</h3><p>${t[2]}, ${t[0]} at ${t[1]}</p><form class="f" id="bf"><label>Full name<input required placeholder="Your name"></label><label>Phone<input required type="tel" placeholder="Mobile number"></label><button class="btn">Confirm booking</button></form>`);
  $('#bf').onsubmit=e=>{e.preventDefault();$('.mb').innerHTML='<button class="x" onclick="closeM()" aria-label="Close">×</button>'+formDone('Booking request received',`Your seat for ${t[2]} on ${t[0]} at ${t[1]} would be confirmed here.`)}});
 $('#trs').innerHTML=TRAINERS.map((t,i)=>`<button class="card tr rev" data-i="${i}"><img src="images/${t.i}" alt="${t.n}" loading="lazy"><div class="b"><h3>${t.n}</h3><p>${t.r}</p><span class="more">View profile</span></div></button>`).join('');
 $$('.tr').forEach(b=>b.onclick=()=>{const t=TRAINERS[b.dataset.i];openM(`<div class="tp"><img src="images/${t.i}" alt="${t.n}"><div class="b"><h3>${t.n}</h3><p style="margin-bottom:8px">${t.r}, ${t.x} experience</p><strong>Specialities</strong><div class="chips">${t.s.map(s=>`<span>${s}</span>`).join('')}</div><strong>Certifications</strong><div class="chips">${t.c.map(s=>`<span>${s}</span>`).join('')}</div><p>${t.b}</p><a class="btn sm" href="#contact" onclick="closeM()">Ask about training</a></div></div>`,'big')});
 let bi=0;const pr=()=>{$('#pl').innerHTML=PLANS.map((p,i)=>`<article class="card plan ${p.t?'pop':''} rev in">${p.t?'<span class="tag">Most popular</span>':''}<h3>${p.n}</h3><div class="price">${inr(p.p[bi])}<small> / ${['month','3 months','year'][bi]}</small></div><ul>${p.f.map(f=>`<li>${f}</li>`).join('')}</ul><button class="btn ${p.t?'':'line'}" data-i="${i}">Join ${p.n}</button></article>`).join('');
  $$('#pl .btn').forEach(b=>b.onclick=()=>{const p=PLANS[b.dataset.i];openM(`<h3>Join ${p.n}</h3><p>${inr(p.p[bi])} per ${['month','3 months','year'][bi]}</p><form class="f" id="jf"><label>Full name<input required></label><div class="two"><label>Phone<input required type="tel"></label><label>Email<input required type="email"></label></div><label>Card number<input required inputmode="numeric" placeholder="0000 0000 0000 0000"></label><div class="two"><label>Expiry<input required placeholder="MM/YY"></label><label>CVV<input required type="password" maxlength="4"></label></div><button class="btn">Pay ${inr(p.p[bi])}</button></form>`);
   $('#jf').onsubmit=e=>{e.preventDefault();$('.mb').innerHTML='<button class="x" onclick="closeM()" aria-label="Close">×</button>'+formDone('Payment step completed',`Your ${p.n} membership would be activated here and a receipt emailed to you.`)}})};
 $$('.seg button').forEach((b,i)=>b.onclick=()=>{bi=i;$$('.seg button').forEach(x=>x.classList.toggle('on',x===b));pr()});pr();
 $('#gal').innerHTML=GAL.map((g,i)=>`<button data-i="${i}" aria-label="Open photo ${i+1}"><img src="images/${g}.jpg" alt="Gym photo ${i+1}" loading="lazy"></button>`).join('');
 $$('#gal button').forEach(b=>b.onclick=()=>openM(`<img src="images/${GAL[b.dataset.i]}.jpg" alt="Gym photo">`,'lb'));
 $('#prev').onclick=()=>$('#gal').scrollBy({left:-$('#gal').clientWidth*.8,behavior:'smooth'});$('#next').onclick=()=>$('#gal').scrollBy({left:$('#gal').clientWidth*.8,behavior:'smooth'});
 $('#rv').innerHTML=REV.map(r=>`<article class="card rv rev"><p class="q">“${r.t}”</p><div class="who"><img src="images/${r.i}" alt="${r.n}" loading="lazy"><div><strong>${r.n}</strong><small>Member</small></div></div></article>`).join('');
 $('#cf').onsubmit=e=>{e.preventDefault();openM(formDone('Enquiry received','Our team would reply to your message within one working day.'));e.target.reset()};
}
/* member portal */
if($('#lg')){
 $('#lg').onsubmit=e=>{e.preventDefault();$('#login').style.display='none';$('#dash').classList.add('on');scrollTo(0,0)};
 $('#out').onclick=()=>{$('#dash').classList.remove('on');$('#login').style.display=''};
 $('#cal').innerHTML=Array.from({length:30},(_,i)=>`<i class="${[1,2,4,5,7,8,10,12,14,15,17,19,21,22,24,26,28].includes(i+1)?'p':''}">${i+1}</i>`).join('');
 const PL={Diet:[['Breakfast','Oats, 3 egg whites, banana'],['Lunch','Roti, dal, paneer, salad'],['Snack','Curd with fruit or sprouts'],['Dinner','Grilled chicken or tofu, vegetables']],Workout:[['Mon','Chest and triceps'],['Tue','Back and biceps'],['Wed','Cardio and core'],['Thu','Legs and glutes'],['Fri','Shoulders and mobility']]};
 const sh=k=>{$('#pls').innerHTML=PL[k].map(r=>`<li><strong>${r[0]}</strong><span>${r[1]}</span></li>`).join('');$$('.tabs button').forEach(b=>b.classList.toggle('on',b.textContent===k))};
 $$('.tabs button').forEach(b=>b.onclick=()=>sh(b.textContent));sh('Workout');
 const pay=[['12 Oct 2026','Pro, quarterly',4900],['12 Jul 2026','Pro, quarterly',4900],['12 Apr 2026','Basic, monthly',1200]];
 $('#pay').innerHTML=pay.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${inr(p[2])}</td><td><button class="slot rc">Receipt</button></td></tr>`).join('');
 $$('.rc').forEach(b=>b.onclick=()=>openM(formDone('Receipt','A digital receipt would be available to download here.')));
 $('#renew').onclick=()=>openM(formDone('Renew membership','Online renewal and auto-renew options would open here.'));
}
/* stagger */
$$('#cls,#trs,#rv,.pts,.strip .wrap').forEach(g=>[...g.children].forEach((c,i)=>{c.classList.add('rev');c.style.transitionDelay=i*110+'ms'}));
revAll();
/* motion */
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!$('#splash'))document.body.classList.add('go');
$$('[data-split]').forEach(h=>{let n=0;h.innerHTML=h.textContent.trim().split(/\s+/).map(w=>`<span class="sw"><span style="--i:${n++}">${w}</span></span>`).join(' ')});
$$('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')},{passive:true}));
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,to=+el.dataset.count,suf=el.dataset.suf||'',t0=performance.now();
 if(reduce){el.textContent=to.toLocaleString('en-IN')+suf;return}
 const f=t=>{const p=Math.min((t-t0)/1600,1),v=Math.round(to*(1-Math.pow(1-p,4)));el.textContent=v.toLocaleString('en-IN')+suf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
$$('[data-count]').forEach(e=>{if(!reduce)e.textContent='0'+(e.dataset.suf||'');cio.observe(e)});
const prog=$('#prog'),hbg=$('.hbg'),stg=$('.stage'),pbg=$('.pbg'),ctab=$('.ctab'),trk=$('#trk');
let tk=false,lastY=-1;
function frame(){tk=false;const y=scrollY,vh=innerHeight,h=document.documentElement.scrollHeight-vh;
 if(prog)prog.style.transform=`scaleX(${h>0?Math.min(y/h,1):0})`;
 nav.classList.toggle('stuck',y>30);
 if(reduce)return;
 if(hbg&&y<vh*1.3){hbg.style.transform=`translate3d(0,${y*.28}px,0)`;if(stg)stg.style.translate=`0 ${-y*.05}px`}
 if(pbg&&ctab){const r=ctab.getBoundingClientRect();if(r.bottom>0&&r.top<vh)pbg.style.transform=`translate3d(0,${(r.top+r.height/2-vh/2)*-.18}px,0)`}
 if(trk){const w=trk.scrollWidth/3;trk.style.transform=`translate3d(${-((y*.45)%w)}px,0,0)`}}
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(frame)}},{passive:true});addEventListener('resize',frame);frame();
