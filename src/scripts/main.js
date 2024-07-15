AOS.init();

const dataDoEvento= new Date ("Jan 16, 2025 20:00:00");
const timeStampDoEvento=dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual=agora.getTime();
    const distAteOEvento=timeStampDoEvento - timeStampAtual;
    const formulaDia = 1000 * 60 * 60 * 24;
    const formulaHoras = 1000 * 60 * 60;
    const formulaMinutos = 1000 * 60;
    const diasAteoEvento= Math.floor(distAteOEvento /formulaDia);
    const horasAteoEvento = Math.floor((distAteOEvento % formulaDia)/formulaHoras);
    const minutosAteoEvento=Math.floor((distAteOEvento % formulaHoras)/formulaMinutos);
    const segundosAteoEvento=Math.floor((distAteOEvento % formulaMinutos)/1000);
    document.getElementById('contador').innerHTML=` será em: ${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`;
    if(distAteOEvento<0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML=' já passou :( Senti sua falta!';
    }
},1000);