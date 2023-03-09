function yes() {
    alert("<3");

}function dichuyen(){
    let x= Math.round(Math.random()*window.innerHeight);
    let y= Math.round(Math.random()*window.innerWidth);
    document.getElementById("no").style.left=x+'px';
    document.getElementById("no").style.top=y+'px';
    console.log(x)
    console.log(y)
}



//Lay cao rong cua trinh duyet. 750 1500
// let rong = window.innerWidth
// document.documentElement.clientWidth
// document.body.clientWidth;
// let cao = window.innerHeight
// document.documentElement.clientHeight
// document.body.clientWidth;
// document.getElementById("cao").innerHTML="cao"+cao+"rong"+rong;