// This is a JavaScript file

$(document).on("click", "#calcular", function(){
 
$("#nome").val()

//-----------------------------------//
var entrada = $("#entrada").val();

var horaEntrada = entrada.split(':')[0];
var minutosEntrada= entrada.split(':')[1];

var saida = $("#saida").val();

var horaSaida = saida.split(':')[0];
var minutosSaida= saida.split(':')[1];

minutosSaida = minutosSaida * 60;

minutosEntrada = minutosEntrada * 60;

var tempoSaida = minutosSaida + horaSaida;

var tempoEntrada = minutosEntrada + horaEntrada;

var TempoTotal = tempoSaida - tempoEntrada;

if($("#funcao").val() == 1){
  var valor = TempoTotal * 70
}
if($("#funcao").val() == 2){
  var valor = TempoTotal * 60
}
if($("#funcao").val() == 3){
  var valor = TempoTotal * 80
}
if($("#funcao").val() == 4){
  var valor = TempoTotal * 90
}

$("#valor").val(valor);

//-----------------------------------------//


}); 