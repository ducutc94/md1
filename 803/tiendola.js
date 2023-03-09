function Tien() {
    let amount = +document.getElementById("amount").value;
    let from = +document.getElementById("from").value;
    let to = +document.getElementById("to").value;
    let  Tien = (amount*to/from);
    console.log(from)
    console.log(to)
    console.log(amount)
    console.log(Tien)
    alert("Tien" + Tien);
}
