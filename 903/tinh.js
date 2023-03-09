function Tinh() {
    let a = +document.getElementById("soa").value;
    let b = +document.getElementById("sob").value;
    let Tong = a+b;
    let Hieu = a-b;
    let Nhan = a*b;
    let Chia = a/b;
    let du = a%b;
    let mu = a**a*b*b;
    document.getElementById("Tinh").innerHTML="Tong la :"+ a + "+" + b + "="+Tong;
    document.getElementById("Hieu").innerHTML="Hieu"+Hieu;
    document.getElementById("Nhan").innerHTML="Tich"+Nhan;
}