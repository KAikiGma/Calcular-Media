function calcular(){
    var b1 = Number(document.getElementById("b1").value)
    var b2 = Number(document.getElementById("b2").value)
    var b3 = Number(document.getElementById("b3").value)
    var b4 = Number(document.getElementById("b4").value)
    var media = (b1 + b2 + b3 + b4) / 4
    document.getElementById('resultado').innerHTML = `<p>Sua média é ${media}</p>`
  }