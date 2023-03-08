function Tong() {
    let vatli = document.getElementById("vatli").value;
    let hoahoc = document.getElementById("hoahoc").value;
    let sinhhoc = document.getElementById("sinhhoc").value;
    vatli = parseInt(vatli)
    hoahoc = parseInt(hoahoc)
    sinhhoc = parseInt(sinhhoc)
    let tong = (vatli + hoahoc + sinhhoc);
        document.getElementById("diem").innerHTML="Diem" +tong;
    // vatli = parseInt(vatli)
    // hoahoc = parseInt(hoahoc)
    // sinhhoc = parseInt(sinhhoc)
    }
function TB() {
    let vatli = +document.getElementById("vatli").value;
    let hoahoc = +document.getElementById("hoahoc").value;
    let sinhhoc = +document.getElementById("sinhhoc").value;
    let TB = (vatli + hoahoc + sinhhoc)/3;
    document.getElementById("diem").innerHTML="Diem:" +TB;

}