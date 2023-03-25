function test1() {
    let username = document.getElementById('dangnhap').value;
    let password = document.getElementById('password').value;
    let flag = true;
    if (username === undefined || username === "") {
        alert("nhap ten dang ki");
        flag = false;
    } else if (password === undefined || password === "") {
        alert("Nhap mat khau");
        flag = false;
    }
    if (flag) {
        dangki();
    }

}

function dangki() {
    let username = document.getElementById('dangnhap').value;
    let password = document.getElementById('password').value;
    let password1 = document.getElementById("password1").value;
    let email=document.getElementById("email").value;
    let sdt= document.getElementById("sdt").value;
    let i = 0;
    do {
        if (username === account[i].getUsername()) {
            alert("trung ten dang nhap")
            alert("nhap lai ten")
        }
        i++;
    }
    while (i < account.length) ;
    if (password === password1) {
        alert("ban da dang ki thanh cong");
        // let newpeople=new Account(username,password,email,sdt);
        // account.push(newpeople);
        // console.log(account);
        // window.location.href = "http://localhost:63342/untitled/2303/taofrom.html?_ijt=q73d5ekr6ufdugn84m3ttmlv6m&_ij_reload=RELOAD_ON_SAVE";
    } else {
        alert("mat khau khong trung khop");
    }
    let newpeople=new Account(username,password,email,sdt);
    account.push(newpeople);
    console.log(account);
    window.location.href = "http://localhost:63342/untitled/2303/taofrom.html?_ijt=q73d5ekr6ufdugn84m3ttmlv6m&_ij_reload=RELOAD_ON_SAVE";
}