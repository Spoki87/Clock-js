const handSecond=document.querySelector('[second-hand]');
const handMinute=document.querySelector('[minute-hand]');
const handHour=document.querySelector('[hour-hand]');

const setClock=()=>{
    const date=new Date();
    const seconds=date.getSeconds()/60;
    const minutes=(seconds+date.getMinutes())/60;
    const hours=(minutes+date.getHours())/12;

    handSecond.style.setProperty('--rotation',seconds*360);
    handMinute.style.setProperty('--rotation',minutes*360);
    handHour.style.setProperty('--rotation',hours*360);
}
setInterval(setClock,1000);
setClock();

