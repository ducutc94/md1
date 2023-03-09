function login() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;
    if (b == "123") {
        if (a == "admin") {
            document.getElementById("rd").innerHTML="TK admin ngu ngao ngo";
        } else if (a == "user") {
            document.getElementById("rd").innerHTML="TK user";
        }
    } else {
        document.getElementById("rd").innerHTML="TK k ton tai";
    }

}