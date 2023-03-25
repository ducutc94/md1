let people = new Account("ducpro", "123456", "ducutc5394@gmail.com", "05282te82801")
let people1 = new Account("sdafagfafa", "1234567", "ducutc54394@gmail.com", "0528282801")
let people2 = new Account("sdafagfafa", "12345678", "ducuttretc94@gmail.com", "0528rtete282801")
let people3 = new Account("sdafagfafa", "123456789", "ducutc9tre4@gmail.com", "0528tre282801")
let people4 = new Account("sdafagfafa", "123456999", "ducutrtec94@gmail.com", "052tre8282801")
let people5 = new Account("sdafagfafa", "12345643", "ducutctree94@gmail.com", "0528tre282801")
let account = [people, people1, people2, people3, people4, people5]
// console.log(account)

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
    let tendangnhap = document.getElementById("dangnhap").value;
    let password = document.getElementById("password").value;
    let flag = true;
    for (let i = 0; i < account.length; i++) {
        if (tendangnhap === account[i].getUsername()) {
            if (password === account[i].getPassword()) {
                flag = false;
            }
        }

    }
    if (flag) {
        alert("dang nhap that bai")
    } else {
        window.location.href = "http://localhost:63342/untitled/2203/ungdungquanli.html?_ijt=8i1uo6dcib84t01ma9pmprbmta&_ij_reload=RELOAD_ON_SAVE"
    }

}

function dangki1() {
    window.location.href = "http://localhost:63342/untitled/2303/form%20dki.html?_ijt=vguqpfh5u47hes7ave2fhlic84&_ij_reload=RELOAD_ON_SAVE";

}
