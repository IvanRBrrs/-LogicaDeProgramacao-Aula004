
function calcular (){
    
    let valor1 = document.getElementById('valor_1').value;
    let valor2 = document.getElementById('valor_2').value; 
    let resultado = document.getElementById('resultado');
    if (valor1 > valor2){
        resultado.innerHTML = (`${valor1} é maior que ${valor2}`)
    } else if(valor2 > valor1){
        resultado.innerHTML = (`${valor2} é maior que ${valor1}`)
    } else if(valor2 == valor1){
        resultado.innerHTML = (`${valor2} é igual a ${valor1}`)
    }
}
function testar (){
    
    let numero1 = document.getElementById('numero_1').value;
    
    let resultado = document.getElementById('resultado:');
    if (numero1 > 0){
        resultado.innerHTML = (`${numero1} é positivo`)
    } else if(numero1 < 0 ){
        resultado.innerHTML = (`${numero1} é negativo`)
    } else if(numero1 == 0 ){
        resultado.innerHTML = (`${numero1} é zero`)
    }
}
function texto (){
    
    let letra1 = document.getElementById('letra').value;
    
    let resultado = document.getElementById('Resultado:');
    if (letra1 == 'M' ){
        resultado.innerHTML = (`${letra1} sexo é masculino`)
    } else if(letra1 == 'F' ){
        resultado.innerHTML = (`${letra1} sexo é feminino`)
    } else if(letra1 == 'A' || 'B' || 'C' || 'D' ||'E' || 'G' || 'H' || 'I' || 'J' || 'K' || 'L' || 'N' || 'O' || 'P' || 'Q' || 'R' || 'S' || 'T' || 'U' || 'V' || 'W' || 'X' || 'Y' || 'Z' )
    {   resultado.innerHTML = (`${letra1} sexo É inválido`)
    }

}
function nota (){
    
    let number = document.getElementById('nota').value;
    
    let resultado = document.getElementById('Igual');
    if ( number == 10 ){
        resultado.innerHTML = (`${number}.0 Aprovado com distinção.`)
    } else if(number < 7 ){
        resultado.innerHTML = (`${number}.0 Reprovado`)
    } else if( number >= 7 ){
        resultado.innerHTML = (`${number}.0 Aprovado`)
    } 
}
function Type (){
    
    let tipo1 = document.getElementById('tipo').value;
    
    let resultado5 = document.getElementById('ResultadoCouV');
    
    if(tipo1 == 'A' || tipo1 == 'a' || tipo1 == 'E' || tipo1 == 'e' || tipo1 == 'I' || tipo1 == 'i' || tipo1 == 'O'|| tipo1 == 'o' || tipo1 == 'U' || tipo1 == 'u'){
        resultado5.innerHTML = (`${tipo1} É vogal`);
    }else{
        resultado5.innerHTML = (`${tipo1} É consoante ou invalido`);
    }
}
function calc (){
    
    let Val1 = document.getElementById('value_1').value;
    let Val2 = document.getElementById('value_2').value; 
    let Val3 = document.getElementById('value_3').value; 
    let resultCalc = document.getElementById('resultCalc');
    let resultCalcMn = document.getElementById('resultCalcMn');
    
    if (Val1 > Val2 && Val1 > Val3){
        resultCalc.innerHTML = (`${Val1} é maior que ${Val2} e ${Val3}`)
    } else if (Val2 > Val1 && Val2 > Val3){
        resultCalc.innerHTML = (`${Val2} é maior que ${Val1} e ${Val3}`)
    } else if (Val3 > Val1 && Val3 > Val2){
        resultCalc.innerHTML = (`${Val3} é maior que ${Val1} e ${Val2}`)
    } if (Val3 < Val1 && Val3 < Val2){
        resultCalcMn.innerHTML = (`${Val3} é menor que ${Val1} e ${Val2}`)
    } else if (Val2 < Val1 && Val2 < Val3){
        resultCalcMn.innerHTML = (`${Val2} é menor que ${Val1} e ${Val3}`)
    } else if (Val1 < Val2 && Val1 < Val3){
        resultCalcMn.innerHTML = (`${Val1} é menor que ${Val2} e ${Val3}`)
    }
}
function Hora (){
    
    let hora1 = document.getElementById('hora').value;
    
    let Return = document.getElementById('Return');

    if (hora1 == 'M' || hora1 == 'm'){
        Return.innerHTML = (`bom dia`);
    } else if(hora1 == 'V' || hora1 == 'v'){
        Return.innerHTML = (`boa tarde`);
    } else if(hora1 == 'N' || hora1 == 'n'){
        Return.innerHTML = (`boa noite`);
    } else{ 
        Return.innerHTML = (`inválido`);
    }
}
function tip (){
    
    let Preco1 = document.getElementById('preco_1').value;
    let Preco2 = document.getElementById('preco_2').value; 
    let Preco3 = document.getElementById('preco_3').value;

    let resultTip = document.getElementById('resultTip');
    
    if (Preco3 < Preco1 && Preco3 < Preco2){
        resultTip.innerHTML = (`Produto de preço ${Preco3}.00 é melhor compra que os produtos de ${Preco1}.00 e ${Preco2}.00`)
    } else if (Preco2 < Preco1 && Preco2 < Preco3){
        resultTip.innerHTML = (`Produto de preço ${Preco2}.00 é melhor compra que os produtos de ${Preco1}.00 e ${Preco3}.00`)
    } else if (Preco1 < Preco2 && Preco1 < Preco3){
        resultTip.innerHTML = (`Produto de preço ${Preco1}.00 é melhor compra que os produtos de ${Preco2}.00 e ${Preco3}.00`)
    } else{
        resultTip.innerHTML = (`invalido`)
    }
}
function media (){
    
    let Mes2 = parseInt(document.getElementById('mes_2').value); 
    let Mes1 = parseInt(document.getElementById('mes_1').value);
    let Mes3 = parseInt(document.getElementById('mes_3').value);
    let Mes4 = parseInt(document.getElementById('mes_1').value);
    let Mes5 = parseInt(document.getElementById('mes_2').value); 
    let Mes6 = parseInt(document.getElementById('mes_3').value);
    
    let mediaM = parseInt((Mes1 + Mes2 + Mes3 + Mes4 + Mes5 + Mes6) / 6);

    let resultMedia = document.getElementById('resultMedia');

    if (mediaM == 0 || mediaM <= 3.9 ){
        resultMedia.innerHTML = (`Média semestral foi ${mediaM} - Aluno conceito E - Reprovado`)
    } else if (mediaM == 4 || mediaM <= 5.9){
        resultMedia.innerHTML = (`Média semestral foi ${mediaM} - Aluno conceito D - Reprovado`)
    } else if (mediaM == 6 || mediaM <= 7.4){
        resultMedia.innerHTML = (`Média semestral foi ${mediaM} - Aluno conceito C - Aprovado`)
    } else if (mediaM == 7.5 || mediaM <= 8.9){
        resultMedia.innerHTML = (`Média semestral foi ${mediaM} - Aluno conceito B - Aprovado`)
    } else if (mediaM == 9 || mediaM <= 10){
        resultMedia.innerHTML = (`Média semestral foi ${mediaM} - Aluno conceito A - Aprovado`)
    } else{
        resultMedia.innerHTML = (`invalido`)
    }
}















    















