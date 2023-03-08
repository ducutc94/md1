function Tien() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let Tien;
    console.log(from);
    console.log(to);
    if (from == "vn" && to == "usd") {
        Tien = "Tien" + (amount / 23000) + "$";
    } else if (from == "usd" && to=="vn") {
        Tien = "Tien" + (amount * 23000) + "D";
    } else if (from == "vn") {
        Tien = "Tien" + amount + "D";
    } else {
        Tien = "Tien" + amount + "$";
    }
   document.getElementById("Tien").innerHTML=Tien;
}
