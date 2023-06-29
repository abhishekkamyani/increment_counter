const counters = document.querySelectorAll('.counter');

counters.forEach((counter) =>{
    counter.innerHTML = 0;

    const updateCounter = () =>{
        
        const targetCount = + counter.getAttribute('data-target');

        const presentCount = Number(counter.innerHTML);

        const incr = targetCount / 100;

        if(presentCount < targetCount){
           counter.innerHTML =   Math.round(presentCount + incr);
           setTimeout(updateCounter, 30);
        }
        else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();
});