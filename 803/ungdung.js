function A() {
    let nhap1 = document.getElementById("nhap1").value;
    let nhap2 = document.getElementById("nhap2").value;
    nhap1=parseInt(nhap1)
    nhap2=parseInt(nhap2)
    let a= nhap1 + nhap2;
    document.getElementById("RD").innerHTML="ketqu" + a;
}
function S() {
    let nhap1 = document.getElementById("nhap1").value;
    let nhap2 = document.getElementById("nhap2").value;
    nhap1=parseInt(nhap1)
    nhap2=parseInt(nhap2)
    let b= nhap1-nhap2;
    document.getElementById("RD").innerHTML="ketqua" + b;
}
function M() {
    let nhap1 = document.getElementById("nhap1").value;
    let nhap2 = document.getElementById("nhap2").value;
    nhap1=parseInt(nhap1)
    nhap2=parseInt(nhap2)
    let c=nhap1*nhap2;
    document.getElementById("RD").innerHTML="ketqua" +c;
}
function D() {
    let nhap1 = document.getElementById("nhap1").value;
    let nhap2 = document.getElementById("nhap2").value;
    nhap1=parseInt(nhap1)
    nhap2=parseInt(nhap2)
    let d= nhap1/nhap2;
    document.getElementById("RD").innerHTML="ketqua" +d;

}
