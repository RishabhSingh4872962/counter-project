const value=document.getElementById("value");
let state=0;
const incrementBtn=document.getElementById("incrementBtn")
const decrementBtn=document.getElementById("decrementBtn")
const clearBtn=document.getElementById("clearBtn");

const error=document.getElementById("error");

function clearBtnState() {
    if (state>0) {
        clearBtn.style.display="block";
    }else{
        clearBtn.style.display="none"; 
    }
}

function val(state) {
    return `Your Current Count is:${state}`;
}

function errorShow() {
    if (state<0) {
        error.hidden=false;
        state=0;
        value.innerHTML=val(state);
    }else{
        error.hidden=true;
    }

}
errorShow()
clearBtnState()
function increment(){
    state+=1;
    value.innerHTML=val(state);
    clearBtnState();
    errorShow()
}
function decrement(){
    state-=1;
    value.innerHTML=val(state);
    clearBtnState();
    errorShow()
}
function handleClear(){
    state=0;
    value.innerHTML=val(state);
   clearBtnState();
   errorShow()
}


