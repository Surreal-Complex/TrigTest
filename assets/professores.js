"use strict";
(function(){
 const bank=window.TRIG_BANK||[];
 const byId=id=>document.getElementById(id);
 const generate=byId("teacher-generate"),print=byId("teacher-print");
 if(!generate||!print)return;
 const topic=byId("teacher-topic"),level=byId("teacher-level"),count=byId("teacher-count"),mode=byId("teacher-mode"),showAnswers=byId("teacher-answers");
 const sheet=byId("teacher-sheet"),notice=byId("teacher-feedback"),answerKey=byId("teacher-answer-key");
 [...new Set(bank.map(q=>q.t))].sort((a,b)=>a.localeCompare(b,"pt-BR")).forEach(name=>{
  const option=document.createElement("option");option.value=name;option.textContent=name;topic.appendChild(option);
 });
 const letter=i=>String.fromCharCode(65+i);
 function item(tag,content){const el=document.createElement(tag);el.textContent=content;return el;}
 function toggleAnswers(){answerKey.hidden=!showAnswers.checked;}
 showAnswers.addEventListener("change",toggleAnswers);
 generate.addEventListener("click",()=>{
  const eligible=bank.filter(q=>(topic.value==="todos"||q.t===topic.value)&&(level.value==="todos"||q.l===level.value));
  if(!eligible.length){notice.textContent="Nenhuma questão corresponde aos filtros. Escolha outro tema ou nível.";sheet.hidden=true;print.disabled=true;return;}
  const shuffled=[...eligible];for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  const picked=shuffled.slice(0,Number(count.value));sheet.replaceChildren();answerKey.replaceChildren();
  sheet.appendChild(item("h3","Folha de atividades — Trigonometria Interativa"));
  sheet.appendChild(item("p","Nome: ______________________________________   Turma: __________   Data: ___/___/_____"));
  sheet.appendChild(item("p","Tema: "+(topic.value==="todos"?"Diversos":topic.value)+" • Nível: "+level.selectedOptions[0].textContent+". Justifique seu raciocínio e registre as etapas."));
  const list=document.createElement("ol");list.className="teacher-generated-list";
  const answers=document.createElement("ol");
  picked.forEach(q=>{
   const li=document.createElement("li");li.appendChild(item("p",q.q));
   if(mode.value==="multipla"){
    const options=document.createElement("ol");options.className="teacher-choice-list";
    q.o.forEach((o,i)=>options.appendChild(item("li",letter(i)+") "+o)));li.appendChild(options);
   }else li.appendChild(item("p","Resposta e justificativa: ______________________________________________________"));
   list.appendChild(li);
   const answer=document.createElement("li");
   answer.textContent=(mode.value==="multipla"?letter(q.a)+") "+q.o[q.a]+". ":"")+q.e;
   answers.appendChild(answer);
  });
  sheet.appendChild(list);
  answerKey.appendChild(item("h3","Gabarito comentado"));answerKey.appendChild(answers);sheet.appendChild(answerKey);
  sheet.hidden=false;print.disabled=false;toggleAnswers();
  notice.textContent=picked.length+" questões prontas. Confira o gabarito, ajuste os filtros ou imprima; no navegador, você pode salvar como PDF.";
  sheet.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
 });
 print.addEventListener("click",()=>{if(!sheet.hidden)window.print()});
})();
