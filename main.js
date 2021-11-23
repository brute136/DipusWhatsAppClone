
//Funtion Emplementations

//Elemant Function

function getElemantById(arg) {
  let variable = document.getElementById(arg);
  return variable;
}

function appendRightText(str){
  userText.style.display = '';
   let p = document.createElement('p');
   let v = document.createTextNode(str);
   p.appendChild(v);
   userText.appendChild(p);
   input
}

function appendLeftText(str){
  botText.style.display = '';
  let p = document.createElement('p');
  let txt = document.createTextNode(str);
  p.appendChild(txt);
  botText.appendChild(p);
}


function botReturnText(str){
  let i = str;
  if (i == "hello"){
    let text = i + " Dipu";
    appendLeftText(text);
    return text;
  }
  else if(i == "hi" || i=="Hi" || i== "HI"){
    let text = i +" Dipu";
    appendLeftText(text);
    return text;
  }
  else if (i=="nishant"||i=="Nishanta"||i=="NISHANTA"){
    let text = "Moi Nishanta r Bot"
    appendLeftText(text);
    return text;
  }else{
    return "Oi Dipjyoti Baya Marim Tuk Kukur"
  }
  
}
//End of Element Funtion


//Funtion Emplenet 



//end 

//End Of Funtion Emplementation


//Variable Declaration 

//Bot Text View For Showing The Text. Fetch From Bot
let botText = getElemantById('left');


//User Text get Fetch By Input Som +> Html With Text As Cmd(Command)
let userText = getElemantById('right');
userText.style.display = 'none';

//Button For OnClick With QueriSelactor
let massageSend = document.querySelector('button');


//Input Of Cmd 
let cmds = document.querySelector('input');

//End Of Variable Declaration


//Main Logic

massageSend.addEventListener('click',(event)=>{
  if (cmds.value != ""){
     let x = botReturnText(cmds.value);
     
     console.log(x);
      appendRightText(cmds.value)
      let xxx = new SpeechSynthesisUtterance();
      xxx.text = String(x);
      window.speechSynthesis.speak(xxx);
      cmds.value = "";
      
  }
});

//Main Logic End