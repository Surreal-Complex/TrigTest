'use strict';
const byId=id=>document.getElementById(id);
const format=(n,d=3)=>Math.abs(n)<1e-10?'0':n.toLocaleString('pt-BR',{maximumFractionDigits:d,minimumFractionDigits:0});

// Menu responsivo, com retorno a estado fechado após navegar.
const toggle=byId('menuToggle'),nav=byId('menuPrincipal');
toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(isOpen));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));

// Coordenadas no círculo unitário: (cos(theta), sin(theta)).
const angleRange=byId('angleRange'),angleOutput=byId('angleOutput');
function paintCircle(){
 const deg=Number(angleRange.value),rad=deg*Math.PI/180;
 const c=Math.cos(rad),s=Math.sin(rad),x=170+113*c,y=150-113*s;
 byId('radiusLine').setAttribute('x2',x);byId('radiusLine').setAttribute('y2',y);
 byId('anglePoint').setAttribute('cx',x);byId('anglePoint').setAttribute('cy',y);
 byId('cosProjection').setAttribute('x2',x);
 byId('sinProjection').setAttribute('x1',x);byId('sinProjection').setAttribute('x2',x);byId('sinProjection').setAttribute('y2',y);
 angleOutput.textContent=`${deg}°`;byId('sinValue').textContent=format(s);byId('cosValue').textContent=format(c);
 let quad='Eixo';if(deg%90!==0){quad=deg<90?'I':deg<180?'II':deg<270?'III':'IV';}
 byId('quadrantValue').textContent=quad;
 byId('unitCircle').setAttribute('aria-label',`Círculo trigonométrico. Ângulo ${deg} graus, seno ${format(s)}, cosseno ${format(c)}. ${quad==='Eixo'?'Sobre um dos eixos':'Quadrante '+quad}.`);
}
angleRange.addEventListener('input',paintCircle);paintCircle();

// Gráfico de f(x) = A sin(Bx), 0 <= x <= 2pi.
const amplitude=byId('amplitudeRange'),frequency=byId('frequencyRange');
function paintSine(){
 const A=Number(amplitude.value),B=Number(frequency.value);
 let parts=[];for(let i=0;i<=240;i++){
  const x=38+i*(367/240),t=2*Math.PI*i/240,y=125-83*(A/3)*Math.sin(B*t);
  parts.push(`${i===0?'M':'L'}${x.toFixed(2)} ${y.toFixed(2)}`);
 }
 byId('sinePath').setAttribute('d',parts.join(' '));
 byId('amplitudeOutput').textContent=format(A,1);byId('frequencyOutput').textContent=String(B);
 byId('ampValue').textContent=format(A,1);byId('periodValue').textContent=B===1?'2π':B===2?'π':'2π/3';
 byId('sineGraph').setAttribute('aria-label',`Gráfico da função ${format(A,1)} vezes seno de ${B}x, com amplitude ${format(A,1)} e período ${B===1?'2 pi':B===2?'pi':'2 pi dividido por 3'}.`);
}
amplitude.addEventListener('input',paintSine);frequency.addEventListener('input',paintSine);paintSine();

// Correção formativa: nenhuma informação é enviada a servidor.
const questions={
 q1:{answer:'b',reason:'Para o ângulo θ, o seno é a razão entre o cateto oposto e a hipotenusa.'},
 q2:{answer:'a',reason:'No triângulo notável de 30°, o seno vale 1/2.'},
 q3:{answer:'c',reason:'150° está no segundo quadrante, onde o cosseno é negativo.'},
 q4:{answer:'a',reason:'Para sen(Bx), o período é 2π/|B|. Com B = 2, o período é π.'},
 q5:{answer:'c',reason:'sen(2x) = 2·sen x·cos x = 2·(3/5)·(4/5) = 24/25.'},
 q6:{answer:'b',reason:'tg 45° = altura/10 = 1. Assim, a altura é 10 m, nas condições dadas.'}
};
const form=byId('quizForm'),result=byId('quizResult');
form.addEventListener('submit',event=>{
 event.preventDefault();let score=0,responded=0;
 Object.entries(questions).forEach(([name,item])=>{
  const selected=form.querySelector(`input[name="${name}"]:checked`),feedback=byId(`feedback-${name}`);
  if(!selected){feedback.className='answer-feedback incorrect';feedback.textContent='Selecione uma resposta. '+item.reason;return;}
  responded++;const correct=selected.value===item.answer;if(correct)score++;
  feedback.className='answer-feedback '+(correct?'correct':'incorrect');feedback.textContent=(correct?'Correto! ':'Revise: ')+item.reason;
 });
 result.hidden=false;
 result.textContent=`Você acertou ${score} de ${Object.keys(questions).length} questões. ${responded<6?`Você deixou ${6-responded} sem resposta. `:''}${score===6?'Excelente! Continue investigando e experimente o jogo.':'Leia as explicações e retome os módulos correspondentes para aprender com as respostas.'}`;
 result.focus();
});
form.addEventListener('reset',()=>{result.hidden=true;result.textContent='';Object.keys(questions).forEach(key=>{const f=byId(`feedback-${key}`);f.textContent='';f.className='answer-feedback';});});
