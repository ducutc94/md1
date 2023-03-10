function hoahong() {
    let tienhang=+document.getElementById("tienhang").value;
    // a la hoa hong 5% tu 50-->100tr
    let a=tienhang*5/100
    // b la hoa hong 7% tu 100-->150tr
    let b=tienhang*7/100
    // c la hoa hong 10% tu >150tr
    let c=tienhang*10/100
    if (tienhang<"50"){
        document.getElementById("Hienthi").innerHTML="Khong co hoa hong"
    }else if(tienhang<"100"){
        document.getElementById("Hienthi").innerHTML="Tien hoa hong la:  "+ a+"  Tr.";
    }else if(tienhang<"150"){
        document.getElementById("Hienthi").innerHTML="Tien hoa hong la:  "+b+"  Tr.";
    }else {
        document.getElementById("Hienthi").innerHTML="Tien hoa hong la:  "+c+"  Tr.";
    }
    
}