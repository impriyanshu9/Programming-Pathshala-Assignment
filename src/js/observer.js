"use strict";

const allObserverableElems = document.querySelectorAll('[data-observerable_elem]')
const counterAniElems = document.querySelectorAll("[data-textcounter]")

const createObserver = function(elemArr){
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    elemArr.forEach(element => {
        observer.observe(element);
    });
}

function handleIntersect(entries) {
    entries.forEach((entry) => {
        if(entry.target.dataset.textcounter){
            if(entry.isIntersecting){
                textcounter(entry.target)
            }
        }else{
            if (entry.isIntersecting) { 
                entry.target.classList.remove("opacity-0");
                entry.target.classList.add("opacity-100");
            } else {
                entry.target.classList.add("opacity-0");
                entry.target.classList.remove("opacity-100");
            }
        }
    })
}
function textcounter(elem){
    const endNum = parseInt(elem.dataset.textcounter);
    let currentNum = 1;
    const countAdd = setInterval(() => {
        currentNum++
        currentNum > endNum ? clearInterval(countAdd) :  elem.innerText = currentNum;
    }, 4);
}

createObserver(allObserverableElems)
createObserver(counterAniElems)
