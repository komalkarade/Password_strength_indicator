const passinput=document.getElementById("input-pass");
const out=document.getElementById("output");
passinput.addEventListener('input',function(){

    console.log(passinput.value);
    let password=passinput.value;
    if(password.length< 8){
        out.innerText='password is to short';
        out.style.color='red';

    }
    else{
     if(password.search(/[a-z]/)=== -1){

        out.innerText='Password is missing a lowercase letter';
        out.style.color='red';
    }
    else if(password.search(/[A-Z]/)=== -1){
        out.innerText='Password is missing a Uppercase letter';
        out.style.color='red';
    }
    else if(password.search(/[0-9]/)=== -1){
        out.innerText='Password is missing a Number letter';
        out.style.color='red';
    }

    else if(password.search(/[%\$\#\@\,\!\^\&\*\.\?\<\>]/)=== -1){
        out.innerText='Password is missing a Special letter';
        out.style.color='red';
    }
    else
    {
        out.innerText='password is strong';
        out.style.color='green';
        ///a-z A-Z 0-9 SPecial chracter
     }
}}

);
