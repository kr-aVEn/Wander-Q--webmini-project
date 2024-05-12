const container=document.querySelector('.container');
const signup=document.querySelector('.signuplnk');
var clickcount=0;



signup.onclick = () =>{
    if(clickcount%2==0){
    container.classList.add('work');
    signup.innerHTML="Login";
    clickcount++;
}
else{
signup.innerHTML="Sign Up";
container.classList.remove('work');
clickcount++;
}
}