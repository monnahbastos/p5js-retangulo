  
 } 

function movimentoRaquete(){
  if(keyIsDown(UP_ARROW))
  yRaquete -= 10
  if(keyIsDown(DOWN_ARROW))
  yRaquete += 10
}
function mostraRaquete(){
  rect(xRaquete,yRaquete,baseRaquete,alturaRaquete)
}
  function mostraBolinha (){
    circle(xBolinha,yBolinha,diametro) 
  }
    
  
  function movimentoBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha 
  } 

  function verificacaoColisaoBorda(){
  if(xBolinha +15 > width || xBolinha -15 < 0)
    velocidadexBolinha *= -1
  if(yBolinha +15 > height || yBolinha -15 < 0)
    velocidadeyBolinha *= -1
}
