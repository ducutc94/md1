let people = new Account("luffy", "123")
let people1 = new Account("Nam", "1234567")
let people2 = new Account("zoro", "12345678")
let people3 = new Account("nami", "123456789")
let people4 = new Account("brook", "123456999")
let people5 = new Account("jinbei", "12345643")
let account = [people, people1, people2, people3, people4, people5]
window.localStorage.setItem("dangnhap", JSON.stringify(account))
account = JSON.parse(localStorage.getItem("dangnhap"));

function test() {
    let tendangnhap = document.getElementById("dangnhap").value;
    let password = document.getElementById("password").value;
    let flag = true;
    if (tendangnhap === undefined || tendangnhap === "") {
        alert("Moi nhap lai ten dang nhap:")
        flag = false
    } else if (password === undefined || password === "") {
        alert("moi nhap lai mat khau")
        flag = false
    }
    if (flag) {
        dangnhap();
    }
}

function dangnhap() {
    localStorage.getItem("ok")
    let tendangnhap = document.getElementById("dangnhap").value;
    let password = document.getElementById("password").value;
    let flag = true;
    for (let i = 0; i < account.length; i++) {
        if (tendangnhap === account[i].username) {
            if (password === account[i].password) {
                flag = false;
            }
        }

    }
    if (flag) {
        localStorage.setItem("ok", false);
        alert("dang nhap that bai")
    } else {
        localStorage.setItem("ok", true);
        window.location.href = "http://localhost:63342/untitled/Casestudy/casestudy.html?_ijt=qcrgehf5h5hftqumvbjf74anfl&_ij_reload=RELOAD_ON_SAVE"
    }
}
