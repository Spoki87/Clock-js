const handSecond=document.querySelector('[second-hand]');
const handMinute=document.querySelector('[minute-hand]');
const handHour=document.querySelector('[hour-hand]');

setInterval(setClock,1000);

const Rotation=(element, ratio)=>{
    element.style.setProperty('--rotation',ratio*360);

}

const setClock=()=>{
    const date=new Date();
    const seconds=date.getSeconds()/60;
    const minutes=(seconds+date.getMinutes())/60;
    const hours=(minutes+date.getHours())/12;

    Rotation(handSecond,seconds);
    Rotation(handMinute,minutes);
    Rotation(handHour,hours);
}

setClock();

