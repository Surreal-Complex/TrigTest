"use strict";
(function(){
 const root=document.getElementById("trilha");if(!root)return;
 const details=[...root.querySelectorAll("details.accordion")];const search=document.getElementById("study-search"),feedback=document.getElementById("study-search-feedback");
 const enable=document.getElementById("progress-enable"),clear=document.getElementById("progress-clear"),summary=document.getElementById("progress-summary");
 const key="trig:progress:v1";const checks=[];let active=false;let completed={};
 const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
 search.addEventListener("input",()=>{const term=norm(search.value.trim());let count=0;details.forEach(d=>{const hay=norm(d.textContent);d.hidden=!!term&&!hay.includes(term);if(!d.hidden)count++;});feedback.textContent=count+" de "+details.length+" módulos exibidos.";});
 function persist(){try{localStorage.setItem(key,JSON.stringify(completed));return true;}catch(e){summary.textContent="Armazenamento indisponível ou bloqueado. Marcações válidas apenas até sair da página.";return false;}}
 function tally(){const n=checks.filter(el=>el.checked).length;summary.textContent=n+" de "+checks.length+" módulos concluídos neste navegador."}
 function activate(){active=true;enable.hidden=true;clear.hidden=false;details.forEach((d,i)=>{const label=document.createElement("label");label.className="study-complete";const checkbox=document.createElement("input");checkbox.type="checkbox";checkbox.checked=!!completed[i];checkbox.setAttribute("aria-label","Marcar módulo "+(i+1)+" como concluído");checkbox.addEventListener("change",()=>{completed[i]=checkbox.checked;persist();tally()});label.append(checkbox,document.createTextNode(" Estudei este módulo"));d.querySelector(".accordion-content").appendChild(label);checks.push(checkbox)});tally();}
 let found=null;try{found=localStorage.getItem(key)}catch(e){};
 if(found!==null){try{const parsed=JSON.parse(found);if(parsed&&typeof parsed==="object")completed=parsed;}catch(e){}activate();}
 enable.addEventListener("click",()=>{if(active)return;completed={};persist();activate()});
 clear.addEventListener("click",()=>{if(!window.confirm("Apagar todas as marcações de estudo deste navegador?"))return;completed={};checks.forEach(c=>c.checked=false);try{localStorage.removeItem(key)}catch(e){};active=false;details.forEach(d=>{const label=d.querySelector(".study-complete");if(label)label.remove()});checks.length=0;enable.hidden=false;clear.hidden=true;summary.textContent="Marcações apagadas. Acompanhamento desativado."});
})();