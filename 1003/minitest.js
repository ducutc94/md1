function nhap() {
    let a = +document.getElementById("canh1").value;
    let b = +document.getElementById("canh2").value;
    let c = +document.getElementById("canh3").value;
    if (a > "0" && b > "0" && c > "0") {
        if (a + b > c || a + c > b || b + c > a) {
            if (a ==b && a==c) {
                document.getElementById("hienthi").innerHTML = "day la tam giac deu";
            } else if (a === c || a === b || b === c) {
                document.getElementById("hienthi").innerHTML = "day la tam giac can";
            } else if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
                document.getElementById("hienthi").innerHTML = "day la tam giac vuong";
            } else {
                document.getElementById("hienthi").innerHTML = "tam giac";
            }
        }
    }else {
        alert("k phai tam giac");
    }
}