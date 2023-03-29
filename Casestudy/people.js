// window.localStorage.setItem("products" , JSON.stringify(onpiece))
let onpiece = JSON.parse(window.localStorage.getItem("products"))
let show = localStorage.getItem("ok");

function display(onpiece) {

    console.log(onpiece)
    if (show === "true") {
        showdiv()
        let str = "<table id='danhSach'>";
        str += "<tr id='tr1'>";
        str += "<th>ID</th>"
        str += "<th>Tên</th>"
        str += "<th>Tuổi</th>"
        str += "<th>Từ</th>"
        str += "<th colspan='3'>Sức Mạnh</th>"
        str += "<th>Chức Vụ</th>"
        str += "<th colspan='2'>Wanted</th>"
        str += "<th>Tiền thưởng</th>"
        str += "<th colspan='4'>Tùy Chỉnh</th>"
        str += "<th>" + onpiece.length + "Thuyền Viên" + " </th>"
        str += "<tr>";
        for (let i = 0; i < onpiece.length; i++) {
            str += "<tr>";
            str += "<td>" + onpiece[i].id + "</td>";
            str += "<td>" + onpiece[i].name + "</td>";
            str += "<td>" + onpiece[i].age + "</td>";
            str += "<td>" + onpiece[i].from + "</td>";
            str += "<td colspan='3' class='zoom1'><img src='" + onpiece[i].devil + "' height=100 width=100 /></td>";
            str += "<td colspan='2'>" + onpiece[i].position + "</td>";
            str += "<td class='zoom1'> <img src=' " + onpiece[i].image + "' height=100 width=100 /> </td>";
            str += "<td>" + onpiece[i].bonus + "</td>";
            str += "<td><button onclick='edit(" + i + ")'>SỬA</button></td>";
            str += "<td><button onclick='dele(" + i + ")'>XÓA</button></td>";

            str += "</tr>";
        }
        str += "</table>";
        document.getElementById("show").innerHTML = str;
    }
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let from = document.getElementById("from").value;
    let fruit = document.getElementById("fruit").value;
    let position = document.getElementById("position").value;
    let image = document.getElementById("gold").value;
    let bonus = document.getElementById("bonus").value;
    let newpeople = new Onepiece(id, name, age, from, fruit, position, image, bonus);
    onpiece.push(newpeople);
    window.localStorage.setItem("products", JSON.stringify(onpiece))
    display(onpiece);
}

function dele(index) {
    if (confirm("Bạn có thực sự muốn xóa" + "?")) {
        onpiece.splice(index, 1)
        window.localStorage.setItem("products", JSON.stringify(onpiece))
        display(onpiece);
    }

}

function search() {
    document.getElementById("showsearch").innerHTML = "";
    document.getElementById("show").innerHTML = "";
    let flag = true
    let serach = document.getElementById("search").value;
    for (let i = 0; i < onpiece.length; i++) {
        if (serach.toUpperCase() === onpiece[i].name.toUpperCase()) {
            let onepieceShow = [onpiece[i]];
            display(onepieceShow);
            flag = false;
        }
    }
    if (flag) {
        document.getElementById("showsearch").innerHTML = "Hải tặc " + serach + "  không có trong danh sách";
    }
}

let demo;

function edit(index) {
    document.getElementById("id").value = onpiece[index].id;
    document.getElementById("name").value = onpiece[index].name;
    document.getElementById("age").value = onpiece[index].age;
    document.getElementById("from").value = onpiece[index].from;
    document.getElementById("fruit").value = onpiece[index].devil;
    document.getElementById("position").value = onpiece[index].position;
    document.getElementById("gold").value = onpiece[index].image;
    document.getElementById("bonus").value = onpiece[index].bonus;
    demo = index;
    display(onpiece);
}

function save() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let from = document.getElementById("from").value;
    let fruit = document.getElementById("fruit").value;
    let position = document.getElementById("position").value;
    let image = document.getElementById("gold").value;
    let bonus = document.getElementById("bonus").value;
    onpiece[demo] = new Onepiece(id, name, age, from, fruit, position, image, bonus);
    window.localStorage.setItem("products", JSON.stringify(onpiece))
    display(onpiece);
    alert("Bạn đã cập nhật thành công:")
}

function login() {
    window.location.href = "taofrom.html"
    display(onpiece);
}

function exit() {
    localStorage.setItem("ok", false);
    window.location.href = "casestudy.html"

}

function showdiv() {
    document.getElementById("bang2").style.display = "block";
}

function resfesh() {
    window.location.href = "casestudy.html";
}

function clearAll() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("from").value = "";
    document.getElementById("fruit").value = "";
    document.getElementById("position").value = "";
    document.getElementById("gold").value = "";
    document.getElementById("bonus").value = "";

}

