"use strict";
// Banco educativo local: sem rede, sem login e sem coleta de respostas.
// Questões iniciais e questões complementares; revisar matematicamente antes de uso em avaliações formais.
window.TRIG_BANK = [
 {
  "l": "basico",
  "t": "Triângulos",
  "q": "Num triângulo retângulo, qual razão define o seno?",
  "o": [
   "Oposto / hipotenusa",
   "Adjacente / hipotenusa",
   "Oposto / adjacente",
   "Hipotenusa / oposto"
  ],
  "a": 0,
  "e": "O seno de um ângulo agudo é a razão entre o cateto oposto e a hipotenusa."
 },
 {
  "l": "basico",
  "t": "Ângulos",
  "q": "180° correspondem a quantos radianos?",
  "o": [
   "π/2",
   "2π",
   "π",
   "π/3"
  ],
  "a": 2,
  "e": "Uma volta completa tem 360° = 2π; meia volta, 180° = π."
 },
 {
  "l": "basico",
  "t": "Ângulos notáveis",
  "q": "Qual é o valor de sen 30°?",
  "o": [
   "√3/2",
   "1/2",
   "1",
   "√2/2"
  ],
  "a": 1,
  "e": "Num triângulo 30°–60°–90°, o cateto oposto ao ângulo de 30° mede metade da hipotenusa."
 },
 {
  "l": "basico",
  "t": "Círculo",
  "q": "Em qual quadrante seno e cosseno são ambos negativos?",
  "o": [
   "I",
   "II",
   "III",
   "IV"
  ],
  "a": 2,
  "e": "No terceiro quadrante, as duas coordenadas do ponto no círculo são negativas."
 },
 {
  "l": "basico",
  "t": "Quadrantes",
  "q": "Qual o sinal de cos 120°?",
  "o": [
   "Positivo",
   "Negativo",
   "Indefinido",
   "Zero"
  ],
  "a": 1,
  "e": "120° está no segundo quadrante, onde a coordenada horizontal (cosseno) é negativa."
 },
 {
  "l": "intermediario",
  "t": "Referência",
  "q": "Qual é o seno de 150°?",
  "o": [
   "−1/2",
   "√3/2",
   "1/2",
   "−√3/2"
  ],
  "a": 2,
  "e": "150° tem referência 30°. No segundo quadrante, o seno é positivo: 1/2."
 },
 {
  "l": "intermediario",
  "t": "Período",
  "q": "Qual o período de f(x) = sen(3x)?",
  "o": [
   "6π",
   "2π/3",
   "π/3",
   "3π"
  ],
  "a": 1,
  "e": "Para sen(Bx), o período é 2π/|B|. Aqui B = 3, então 2π/3."
 },
 {
  "l": "intermediario",
  "t": "Amplitude",
  "q": "Qual a amplitude de g(x) = −2 cos x + 1?",
  "o": [
   "−2",
   "1",
   "3",
   "2"
  ],
  "a": 3,
  "e": "Amplitude é o valor absoluto do coeficiente do cosseno: |−2| = 2."
 },
 {
  "l": "intermediario",
  "t": "Identidades",
  "q": "Quanto vale sen²x + cos²x?",
  "o": [
   "0",
   "1",
   "tan x",
   "2"
  ],
  "a": 1,
  "e": "Pela relação fundamental obtida do círculo unitário, sen²x + cos²x = 1."
 },
 {
  "l": "avancado",
  "t": "Arco duplo",
  "q": "Se sen x = 3/5 e cos x = 4/5, quanto vale sen(2x)?",
  "o": [
   "24/25",
   "7/25",
   "12/25",
   "1"
  ],
  "a": 0,
  "e": "Use sen(2x)=2 sen x cos x=2·3/5·4/5=24/25."
 },
 {
  "l": "avancado",
  "t": "Lei dos cossenos",
  "q": "Dois lados medem 5 e 8 e formam 60°. Quanto mede o lado oposto?",
  "o": [
   "7",
   "√89",
   "13",
   "√49/2"
  ],
  "a": 0,
  "e": "Pela lei dos cossenos: c²=25+64−2·5·8·cos60°=89−40=49. Logo c=7."
 },
 {
  "l": "avancado",
  "t": "Identidades",
  "q": "Simplifique 1 − cos²x.",
  "o": [
   "cos²x",
   "tan²x",
   "sen²x",
   "sen 2x"
  ],
  "a": 2,
  "e": "Da relação sen²x+cos²x=1, isolamos sen²x = 1−cos²x."
 },
 {
  "l": "avancado",
  "t": "Aplicações",
  "q": "A 10 m da base, o ângulo de elevação da torre é 45°. Quanto mede a altura acima da linha de observação?",
  "o": [
   "5 m",
   "20 m",
   "10 m",
   "10√2 m"
  ],
  "a": 2,
  "e": "tg 45° = h/10 = 1, portanto h = 10 m."
 },
 {
  "l": "basico",
  "t": "Ângulos notáveis",
  "q": "Qual é o valor de cos 60°?",
  "o": [
   "1",
   "1/2",
   "√3/2",
   "0"
  ],
  "a": 1,
  "e": "No primeiro quadrante, o cosseno de 60° é 1/2."
 },
 {
  "l": "basico",
  "t": "Razões",
  "q": "Qual é o valor de tg 45°?",
  "o": [
   "1",
   "0",
   "√3",
   "−1"
  ],
  "a": 0,
  "e": "Num triângulo retângulo isósceles os catetos são iguais: tg 45°=1."
 },
 {
  "l": "basico",
  "t": "Unidades",
  "q": "90° equivalem a quantos radianos?",
  "o": [
   "π",
   "π/2",
   "2π",
   "π/4"
  ],
  "a": 1,
  "e": "90° é a quarta parte de 360°, então equivale a π/2."
 },
 {
  "l": "basico",
  "t": "Unidades",
  "q": "270° equivalem a quantos radianos?",
  "o": [
   "3π/2",
   "π/2",
   "π",
   "2π/3"
  ],
  "a": 0,
  "e": "270° = 270π/180 = 3π/2."
 },
 {
  "l": "basico",
  "t": "Círculo",
  "q": "Qual é o valor de sen 0°?",
  "o": [
   "1",
   "−1",
   "0",
   "1/2"
  ],
  "a": 2,
  "e": "No ponto (1,0) do círculo unitário, a coordenada vertical é zero."
 },
 {
  "l": "basico",
  "t": "Círculo",
  "q": "Qual é o valor de cos 180°?",
  "o": [
   "1",
   "0",
   "−1",
   "1/2"
  ],
  "a": 2,
  "e": "O ângulo de 180° corresponde ao ponto (−1,0)."
 },
 {
  "l": "basico",
  "t": "Triângulos",
  "q": "Um triângulo retângulo tem catetos 5 e 12. Qual é a hipotenusa?",
  "o": [
   "10",
   "11",
   "13",
   "17"
  ],
  "a": 2,
  "e": "Pelo Teorema de Pitágoras, √(25+144)=13."
 },
 {
  "l": "basico",
  "t": "Quadrantes",
  "q": "Qual o sinal de sen 240°?",
  "o": [
   "Positivo",
   "Negativo",
   "Zero",
   "Indefinido"
  ],
  "a": 1,
  "e": "240° está no terceiro quadrante, onde o seno é negativo."
 },
 {
  "l": "basico",
  "t": "Triângulos",
  "q": "Num triângulo 6–8–10, qual o seno do ângulo oposto ao lado 8?",
  "o": [
   "3/5",
   "4/5",
   "5/4",
   "5/3"
  ],
  "a": 1,
  "e": "Seno é cateto oposto dividido pela hipotenusa: 8/10=4/5."
 },
 {
  "l": "basico",
  "t": "Voltas",
  "q": "Uma volta completa contém quantos radianos?",
  "o": [
   "π/2",
   "π",
   "2π",
   "4π"
  ],
  "a": 2,
  "e": "360° equivalem a 2π radianos."
 },
 {
  "l": "intermediario",
  "t": "Ângulos notáveis",
  "q": "Quanto vale cos(π/3)?",
  "o": [
   "√3/2",
   "1/2",
   "1",
   "−1/2"
  ],
  "a": 1,
  "e": "π/3 rad é 60°, cujo cosseno vale 1/2."
 },
 {
  "l": "intermediario",
  "t": "Arcos",
  "q": "Quanto vale sen(5π/6)?",
  "o": [
   "−1/2",
   "1/2",
   "√3/2",
   "−√3/2"
  ],
  "a": 1,
  "e": "5π/6 é 150°. Referência 30°, seno positivo no segundo quadrante."
 },
 {
  "l": "intermediario",
  "t": "Tangente",
  "q": "Quanto vale tg(3π/4)?",
  "o": [
   "1",
   "−1",
   "0",
   "√3"
  ],
  "a": 1,
  "e": "3π/4 é 135°. A tangente é negativa no segundo quadrante e sua magnitude é 1."
 },
 {
  "l": "intermediario",
  "t": "Simetrias",
  "q": "Qual o valor de sen(−π/6)?",
  "o": [
   "1/2",
   "0",
   "−1/2",
   "−√3/2"
  ],
  "a": 2,
  "e": "A função seno é ímpar: sen(−x)=−sen x."
 },
 {
  "l": "intermediario",
  "t": "Período",
  "q": "Qual o período de cos(2x)?",
  "o": [
   "2π",
   "π",
   "π/2",
   "4π"
  ],
  "a": 1,
  "e": "Para cosseno, o período é 2π/|B|; aqui B=2."
 },
 {
  "l": "intermediario",
  "t": "Período",
  "q": "Qual é o período de tg(2x)?",
  "o": [
   "2π",
   "π",
   "π/2",
   "π/4"
  ],
  "a": 2,
  "e": "A tangente tem período fundamental π; para tg(2x), o período é π/2."
 },
 {
  "l": "intermediario",
  "t": "Imagem",
  "q": "Qual é a imagem de y=2sen x+1?",
  "o": [
   "[−1,3]",
   "[−2,2]",
   "[0,3]",
   "[1,3]"
  ],
  "a": 0,
  "e": "A linha média é 1 e a amplitude é 2; valores entre −1 e 3."
 },
 {
  "l": "intermediario",
  "t": "Identidades",
  "q": "Se cos x=3/5, quanto vale sen²x?",
  "o": [
   "3/5",
   "9/25",
   "16/25",
   "4/5"
  ],
  "a": 2,
  "e": "sen²x=1−cos²x=1−9/25=16/25."
 },
 {
  "l": "intermediario",
  "t": "Equações",
  "q": "Quais soluções de sen x=1/2 estão em 0≤x<2π?",
  "o": [
   "π/6 e 5π/6",
   "π/3 e 2π/3",
   "π/6 e 7π/6",
   "0 e π"
  ],
  "a": 0,
  "e": "O seno é positivo nos quadrantes I e II; a referência é π/6."
 },
 {
  "l": "intermediario",
  "t": "Equações",
  "q": "Quais soluções de cos x=0 estão em 0≤x<2π?",
  "o": [
   "0 e π",
   "π/2 e 3π/2",
   "π/4 e 3π/4",
   "π/6 e 5π/6"
  ],
  "a": 1,
  "e": "O cosseno zera nos eixos verticais em π/2 e 3π/2."
 },
 {
  "l": "intermediario",
  "t": "Transformações",
  "q": "Qual é a amplitude de 3cos(4x)+2?",
  "o": [
   "4",
   "2",
   "3",
   "6"
  ],
  "a": 2,
  "e": "A amplitude é |3|, independentemente do deslocamento vertical +2."
 },
 {
  "l": "intermediario",
  "t": "Periodicidade",
  "q": "Qual expressão é igual a cos(x+2π)?",
  "o": [
   "−cos x",
   "sen x",
   "cos x",
   "−sen x"
  ],
  "a": 2,
  "e": "Uma volta completa não altera o ponto no círculo unitário."
 },
 {
  "l": "intermediario",
  "t": "Referência",
  "q": "Qual o ângulo de referência de 300°?",
  "o": [
   "30°",
   "45°",
   "60°",
   "120°"
  ],
  "a": 2,
  "e": "300° está no IV quadrante: 360°−300°=60°."
 },
 {
  "l": "intermediario",
  "t": "Inversas",
  "q": "Quanto vale arccos(0)?",
  "o": [
   "0",
   "π/2",
   "π",
   "−π/2"
  ],
  "a": 1,
  "e": "arccos devolve valor em [0,π]; cos(π/2)=0."
 },
 {
  "l": "intermediario",
  "t": "Inversas",
  "q": "Quanto vale arcsen(sen(5π/6))?",
  "o": [
   "5π/6",
   "−π/6",
   "π/6",
   "π/3"
  ],
  "a": 2,
  "e": "O arco seno retorna valor principal em [−π/2,π/2]; sen(5π/6)=1/2."
 },
 {
  "l": "intermediario",
  "t": "Lei dos cossenos",
  "q": "Dois lados de 5 unidades formam 60°. Qual o terceiro lado?",
  "o": [
   "5",
   "√50",
   "10",
   "5√2"
  ],
  "a": 0,
  "e": "c²=25+25−2·5·5·(1/2)=25; c=5."
 },
 {
  "l": "intermediario",
  "t": "Área",
  "q": "Dois lados medem 4 e formam 30°. Qual é a área do triângulo?",
  "o": [
   "2",
   "4",
   "8",
   "16"
  ],
  "a": 1,
  "e": "Área = (1/2)·4·4·sen30° = 4."
 },
 {
  "l": "intermediario",
  "t": "Ondas",
  "q": "Qual o período de sen(4πt), com t em segundos?",
  "o": [
   "2 s",
   "1 s",
   "0,5 s",
   "4 s"
  ],
  "a": 2,
  "e": "T=2π/(4π)=1/2 segundo."
 },
 {
  "l": "avancado",
  "t": "Arco duplo",
  "q": "Se sen x=3/5 e cos x=4/5, quanto vale cos(2x)?",
  "o": [
   "7/25",
   "−7/25",
   "24/25",
   "1/5"
  ],
  "a": 0,
  "e": "cos2x=cos²x−sen²x=16/25−9/25=7/25."
 },
 {
  "l": "avancado",
  "t": "Soma de arcos",
  "q": "Qual é o valor de sen75°?",
  "o": [
   "(√6+√2)/4",
   "(√6−√2)/4",
   "√3/2",
   "1/2"
  ],
  "a": 0,
  "e": "sen(45°+30°)=(√6+√2)/4."
 },
 {
  "l": "avancado",
  "t": "Soma de arcos",
  "q": "Qual é o valor de cos75°?",
  "o": [
   "(√6+√2)/4",
   "(√6−√2)/4",
   "−(√6−√2)/4",
   "√2/2"
  ],
  "a": 1,
  "e": "cos(45°+30°)=(√6−√2)/4."
 },
 {
  "l": "avancado",
  "t": "Diferença de arcos",
  "q": "Qual é o valor de tg15°?",
  "o": [
   "2+√3",
   "√3",
   "2−√3",
   "√3−2"
  ],
  "a": 2,
  "e": "tg(45°−30°)=2−√3."
 },
 {
  "l": "avancado",
  "t": "Equações",
  "q": "Qual é a solução geral de tg x=1?",
  "o": [
   "x=π/4+kπ",
   "x=π/4+2kπ",
   "x=π/2+kπ",
   "x=kπ"
  ],
  "a": 0,
  "e": "A tangente tem período π; k inteiro."
 },
 {
  "l": "avancado",
  "t": "Equações",
  "q": "Qual a solução geral de cos(2x)=0?",
  "o": [
   "x=π/2+kπ",
   "x=π/4+kπ/2",
   "x=kπ/2",
   "x=2kπ"
  ],
  "a": 1,
  "e": "2x=π/2+kπ, logo x=π/4+kπ/2."
 },
 {
  "l": "avancado",
  "t": "Complexos",
  "q": "Qual é o valor de (1+i)²?",
  "o": [
   "−2",
   "2i",
   "1+i",
   "−2i"
  ],
  "a": 1,
  "e": "(1+i)²=1+2i+i²=2i."
 },
 {
  "l": "avancado",
  "t": "Complexos",
  "q": "Qual é o módulo de 3+4i?",
  "o": [
   "7",
   "25",
   "5",
   "1"
  ],
  "a": 2,
  "e": "|3+4i|=√(3²+4²)=5."
 },
 {
  "l": "avancado",
  "t": "Complexos",
  "q": "Quais argumentos representam as raízes cúbicas de 1?",
  "o": [
   "0, π/2, π",
   "0, 2π/3, 4π/3",
   "0, π, 2π",
   "π/3, π, 5π/3"
  ],
  "a": 1,
  "e": "As raízes da unidade são e^(2πik/3), para k=0,1,2."
 },
 {
  "l": "avancado",
  "t": "Gráficos",
  "q": "Qual o período de y=−3sen(2x)+4?",
  "o": [
   "π",
   "2π",
   "π/2",
   "4π"
  ],
  "a": 0,
  "e": "O período é 2π/2=π; o coeficiente vertical não o altera."
 },
 {
  "l": "avancado",
  "t": "Identidades",
  "q": "A que é igual 1+tg²x quando cos x≠0?",
  "o": [
   "cos²x",
   "sen²x",
   "sec²x",
   "2"
  ],
  "a": 2,
  "e": "Divida a identidade fundamental por cos²x: 1+tg²x=sec²x."
 },
 {
  "l": "avancado",
  "t": "Arco duplo",
  "q": "Se cos x=5/13, qual é cos(2x)?",
  "o": [
   "119/169",
   "−119/169",
   "25/169",
   "−25/169"
  ],
  "a": 1,
  "e": "cos(2x)=2cos²x−1=50/169−1=−119/169."
 },
 {
  "l": "avancado",
  "t": "Lei dos senos",
  "q": "Se A=30°, B=60° e o lado oposto a A mede 5, quanto mede o lado oposto a B?",
  "o": [
   "5",
   "10",
   "5√3",
   "5√2"
  ],
  "a": 2,
  "e": "b/sen60°=5/sen30°, então b=5√3."
 },
 {
  "l": "avancado",
  "t": "Lei dos cossenos",
  "q": "Dois lados medem 7 e 10, com ângulo entre eles de 60°. Qual o terceiro lado?",
  "o": [
   "√79",
   "√149",
   "√49",
   "√70"
  ],
  "a": 0,
  "e": "c²=7²+10²−2·7·10·cos60°=79."
 },
 {
  "l": "avancado",
  "t": "Inversas",
  "q": "Quanto vale arcsen(−√2/2)?",
  "o": [
   "3π/4",
   "−π/4",
   "−3π/4",
   "π/4"
  ],
  "a": 1,
  "e": "A imagem de arcsen está em [−π/2,π/2]."
 },
 {
  "l": "avancado",
  "t": "Inequações",
  "q": "Qual solução de sen x<0 em 0≤x<2π?",
  "o": [
   "0<x<π",
   "π≤x<2π",
   "π<x<2π",
   "π/2<x<3π/2"
  ],
  "a": 2,
  "e": "O seno é negativo estritamente no III e IV quadrantes, excluídos π e 2π."
 },
 {
  "l": "avancado",
  "t": "Polares",
  "q": "Em coordenadas polares (r,θ)=(2,π/3), qual é (x,y)?",
  "o": [
   "(1,√3)",
   "(√3,1)",
   "(2,1)",
   "(1,1)"
  ],
  "a": 0,
  "e": "x=2cosπ/3=1 e y=2senπ/3=√3."
 },
 {
  "l": "avancado",
  "t": "Complexos",
  "q": "Quanto vale (1+i)⁴?",
  "o": [
   "4",
   "−4",
   "4i",
   "−4i"
  ],
  "a": 1,
  "e": "(1+i)²=2i, então (1+i)⁴=(2i)²=−4."
 },
 {
  "l": "avancado",
  "t": "Ondas",
  "q": "Se uma oscilação completa 3 ciclos por segundo, qual o período?",
  "o": [
   "3 s",
   "π/3 s",
   "1/3 s",
   "2π/3 s"
  ],
  "a": 2,
  "e": "T=1/f=1/3 segundo."
 }
];
