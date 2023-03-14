function doanso() {
    let sodau=+prompt("nhap khoang:");
    let random=Math.floor(Math.random()*sodau);
    console.log(random);
    let number;
    let count=0;
    do{
        count++;
        if (count>3){
            alert("ban da het luot");
            break;
        }
        number=prompt("nhap so ban chon");
        if(random===number){
            alert("chuc mung ban da chien thang");
            break;
        }else if(number<random){
            alert("so ban be hon");
        }else {
            alert("so ban lon hon");
        }
    }while (count<4)
}