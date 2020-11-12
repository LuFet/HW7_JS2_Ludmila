window.onload=function(){
    let watermark="Введите логин";
    let input=document.forms[0].login;
    initInput();

    input.onfocus=function(){
        if(input.value==watermark){
            input.value="";
        }
        input.onblur=function(){
            if(input.value==""){
                initInput();
            }
        }
        function initInput(){
            input.value=watermark;
        }
    }
}

