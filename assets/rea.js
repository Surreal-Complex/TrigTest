"use strict";
(function(){
const byId=id=>document.getElementById(id);
const format=(n,d=3)=>Math.abs(n)<1e-10?"0":n.toLocaleString("pt-BR",{maximumFractionDigits:d});
const menu=byId("menu-toggle"),nav=byId("site-nav");
if(menu&&nav){
 menu.addEventListener("click",()=>{const open=nav.classList.toggle("is-open");menu.setAttribute("aria-expanded",String(open));});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");menu.setAttribute("aria-expanded","false");}));
}
const angle=byId("angle-range");
if(angle){
 function drawCircle(){
  const deg=Number(angle.value),r=deg*Math.PI/180,cs=Math.cos(r),sn=Math.sin(r),x=150+111*cs,y=150-111*sn;
  for(const [id,at,val] of [["circle-ray","x2",x],["circle-ray","y2",y],["circle-point","cx",x],["circle-point","cy",y],["circle-cos","x2",x],["circle-sin","x1",x],["circle-sin","x2",x],["circle-sin","y2",y]]){byId(id).setAttribute(at,String(val));}
  byId("angle-out").textContent=deg+"°";byId("circle-sen-value").textContent=format(sn);byId("circle-cos-value").textContent=format(cs);
  byId("circle-tan-value").textContent=Math.abs(cs)<1e-9?"indefinida":format(sn/cs);
  const q=deg%90===0?"Sobre um eixo":deg<90?"1º quadrante":deg<180?"2º quadrante":deg<270?"3º quadrante":"4º quadrante";
  byId("circle-quadrant").textContent=q;
  byId("circle-diagram").setAttribute("aria-label","Círculo unitário: ângulo "+deg+" graus, seno "+format(sn)+", cosseno "+format(cs)+", tangente "+(Math.abs(cs)<1e-9?"indefinida":format(sn/cs)));
 }
 angle.addEventListener("input",drawCircle);drawCircle();
}
const amp=byId("amp-range"),freq=byId("freq-range"),shift=byId("shift-range");
if(amp&&freq&&shift){
 function drawGraph(){
  const a=Number(amp.value),b=Number(freq.value),d=Number(shift.value);
  const parts=[];
  for(let i=0;i<=300;i++){
   const t=i/300,x=34+392*t,y=145-(a*Math.sin(b*2*Math.PI*t)+d)*31;
   parts.push((i?"L":"M")+x.toFixed(2)+" "+y.toFixed(2));
  }
  byId("wave-path").setAttribute("d",parts.join(" "));
  byId("amp-out").textContent=format(a,1);byId("freq-out").textContent=format(b,0);byId("shift-out").textContent=format(d,1);
  byId("wave-amplitude").textContent=format(a,1);
  const prd=2*Math.PI/b;
  byId("wave-period").textContent=b===1?"2π":b===2?"π":b===4?"π/2":"2π/"+b;
  byId("wave-center").textContent="y = "+format(d,1);
  byId("wave-diagram").setAttribute("aria-label","Gráfico de "+format(a,1)+" seno de "+b+" x mais "+format(d,1)+". Amplitude "+a+", período "+format(prd)+" radianos, linha média "+d);
 }
 [amp,freq,shift].forEach(el=>el.addEventListener("input",drawGraph));drawGraph();
}
const degIn=byId("convert-deg");
if(degIn){
 const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
 function convert(){
  const v=Number(degIn.value);
  if(degIn.value.trim()===""||!Number.isFinite(v)){byId("convert-out").textContent="Informe um ângulo válido.";return;}
  const rad=v*Math.PI/180;
  let unit="";
  if(Number.isInteger(v)&&Math.abs(v)<1000000){
   let n=v,d=180,g=gcd(n,d);n/=g;d/=g;
   unit=n===0?"0":d===1?(n===1?"π":n===-1?"−π":n+"π"):(n===1?"π":n===-1?"−π":n+"π")+"/"+d;
  }else unit=format(v/180,5)+"π";
  byId("convert-out").textContent=format(v,2)+"° = "+unit+" rad ≈ "+format(rad,5)+" rad";
 }
 degIn.addEventListener("input",convert);convert();
}
const quiz=byId("quiz-start");
if(quiz){
 const bank=window.TRIG_BANK||[];
 let sequence=[],position=0,points=0,responded=false;
 const game=byId("quiz-game"),opts=byId("quiz-options"),msg=byId("quiz-result"),next=byId("quiz-next");
 function render(){
  if(position>=sequence.length){
   byId("quiz-question").textContent="Treino concluído!";
   byId("quiz-label").textContent="Resultado";
   byId("quiz-progress").textContent=sequence.length+"/"+sequence.length;
   opts.replaceChildren();
   msg.textContent="Você acertou "+points+" de "+sequence.length+" questões. Reveja as explicações, estude os capítulos relacionados e tente novamente.";
   next.hidden=true;return;
  }
  responded=false;const q=sequence[position];
  byId("quiz-label").textContent=q.t;
  byId("quiz-progress").textContent=(position+1)+"/"+sequence.length;
  byId("quiz-question").textContent=q.q;
  byId("quiz-score").textContent=String(points);
  msg.textContent="";opts.replaceChildren();
  next.hidden=true;
  q.o.forEach((choice,i)=>{const b=document.createElement("button");b.type="button";b.textContent=String.fromCharCode(65+i)+") "+choice;b.addEventListener("click",()=>answer(i,b));opts.appendChild(b);});
 }
 function answer(i,b){
  if(responded)return;responded=true;const q=sequence[position],correct=i===q.a;
  if(correct)points++;
  opts.querySelectorAll("button").forEach((el,index)=>{el.disabled=true;if(index===q.a)el.classList.add("correct");});
  if(!correct)b.classList.add("wrong");
  msg.textContent=(correct?"Correto! ":"Quase lá! ")+q.e;byId("quiz-score").textContent=points;next.hidden=false;next.textContent=position===sequence.length-1?"Ver resultado":"Próxima questão";
 }
 quiz.addEventListener("click",()=>{
  const level=byId("quiz-level").value;
  sequence=bank.filter(q=>level==="todos"||q.l===level);
  sequence=[...sequence];for(let i=sequence.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[sequence[i],sequence[j]]=[sequence[j],sequence[i]];}sequence=sequence.slice(0,level==="todos"?10:6);
  position=0;points=0;game.hidden=false;render();
  game.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});
 });
 next.addEventListener("click",()=>{if(!responded)return;position++;render();});
}

document.querySelectorAll("[data-copy-target]").forEach(button=>{
 button.addEventListener("click",async()=>{
  const target=byId(button.getAttribute("data-copy-target"));
  const feedback=button.parentElement?.querySelector(".copy-feedback");
  if(!target)return;
  const citation=target.innerText.trim();
  try{
   if(!navigator.clipboard?.writeText)throw new Error("Área de transferência indisponível");
   await navigator.clipboard.writeText(citation);
   if(feedback)feedback.textContent="Copiado! Confira os campos @@@@.";
  }catch(error){
   if(feedback)feedback.textContent="Selecione o texto acima e copie manualmente.";
  }
 });
});
})();