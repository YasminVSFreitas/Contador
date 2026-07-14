function contar(){
var ini = document.getElementById ('txti')
var fim = document.getElementById ('txtf')
var passo = document.getElementById ('txtp')
var res = document.getElementById('res')


if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) { // verificar as caixas onde digita os numeros, se n digitar nada ou zero, n funciona
    window.alert('[ERRO] Faltam dados!')
} else {
   res.innerHTML = 'Contando:' //  se tudo estiver certo, vai aparecer esse aviso

   var i = Number(ini.value) // value é usado para dar valor a alguma coisa e poder usar esse valor
   var f = Number(fim.value) 
   var p = Number(passo.value) // convertendo as variaveis para que reconheça como numero para dar certo a contagem

   if ( i < f){ // se o valor do inicio for menor que o do fnal contagem crescente
   for(var c = i; c <= f; c += p){ // utilizado para fazer a contagem dos numeros, pular, mostrar a sequencia
     res.innerHTML += `${c} \u{1F449}` // mostra a resposta. nO FINAL, adiciona um emoji antes de cada numero

   }
       
  
} else {
    // contagem regressiva
    for(var c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
    }

}
 res.innerHTML += `\u{1F3C1}` // no final da contagem, vai aparecer um emoji de bandeirinha
}
}