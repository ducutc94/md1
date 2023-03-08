function Tong() {
    let vatli = +document.getElementById("vatli").value;
    let hoahoc = +document.getElementById("hoahoc").value;
    let sinhhoc = +document.getElementById("sinhhoc").value;
    let tong = (vatli + hoahoc + sinhhoc);
    console.log("diem" + tong);

}
function TB() {
    let vatli = +document.getElementById("vatli").value;
    let hoahoc = +document.getElementById("hoahoc").value;
    let sinhhoc = +document.getElementById("sinhhoc").value;
    let TB = (vatli + hoahoc + sinhhoc)/3;
    document.getElementById("diem").innerHTML="Diem:" +TB;

}