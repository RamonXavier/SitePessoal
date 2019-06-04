var dataAtual = new Date();
var diaMes = dataAtual.getDate();
var horaDia = dataAtual.getHours();
var diaSemana = dataAtual.getDay();

var boaTarde = "Boa Tarde!!";
var bomDia = "Bom Dia!!";
var seg =
  " Segunda-feira: A segunda-feira não é um dia ruim para aqueles que sabem onde querem chegar.";

var ter =
  " Terça-Feira: Comprometa-se com suas metas e encare os obstáculos como etapas para atingir o objetivo final.";

var qua =
  " Quarta-Feira: Quanto mais um homem se aproxima de suas metas, tanto mais crescem as dificuldades.";

var qui =
  " Quinta-Feira: Quem já esteve na Lua já não tem mais metas na Terra.";

var sex = " Sexta-Feira: Disciplina é a ponte entre metas e realizações.";

var sab =
  " Sábado: Se olhar para o alvo já nos dá prazer, imagine quando atingirmos as metas sem ter perdido o foco do mesmo.";

var dom =
  " Domingo: O líder de visão é capaz de incetivar, traçar metas, alcançar objetivos e acreditar na possibilidade de sua equipe tornar-se vencedora.";

if (diaSemana == 1) {
  //segunda-feira
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + seg;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + seg;
    document.getElementById("msg").innerHTML = msg;
  }
  document.getElementById("msg").innerHTML = msg;
} else if (diaSemana == 2) {
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + ter;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + ter;
    document.getElementById("msg").innerHTML = msg;
  }
} else if (diaSemana == 3) {
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + qua;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + qua;
    document.getElementById("msg").innerHTML = msg;
  }
} else if (diaSemana == 4) {
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + qui;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + qui;
    document.getElementById("msg").innerHTML = msg;
  }
} else if (diaSemana == 5) {
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + sex;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + sex;
    document.getElementById("msg").innerHTML = msg;
  }
} else if (diaSemana == 6) {
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + sab;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + sab;
    document.getElementById("msg").innerHTML = msg;
  }
} else if (diaSemana == 7) {
  if (horaDia >= 00 && horaDia <= 12) {
    //manha
    var msg = bomDia + dom;
    document.getElementById("msg").innerHTML = msg;
  } else {
    //tarde
    var msg = boaTarde + dom;
    document.getElementById("msg").innerHTML = msg;
  }
} else {
  var msg =
    "A vida é uma série interminável de acidentes de trem com intervalos breves de felicidade!";
  document.getElementById("msg").innerHTML = msg;
}
/*
var msg = "Bom dia Profissionais! Bom início de semana!";
document.getElementById("msg").innerHTML = msg;
*/

// quando clicar no botão aconteça o fade
$(document).ready(function() {
  $("button").click(function() {
    //$("#msg").fadeIn();
    //$("#msg").fadeIn("slow");
    $("#msg").fadeIn(5000);
  });
});
