class Students {
    name;
    age;
    from;

    constructor(name, age, from) {
        this.name = name;
        this.age = age;
        this.from = from;

    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getFrom() {
        return this.from;
    }
}

let studen1 = new Students('Nam', 18, 'HN')
let studen2 = new Students('Tung', 19, 'HP')
let studen3 = new Students('Nguyen', 17, 'TN')
let studen4 = new Students('Tien Bry', 16, 'VN')
let studen5 = new Students('Huan Rose', 18, 'HCM')
let arr = [studen1, studen2, studen3, studen4, studen5]

let flag1 = true;

function show() {
    let str = "<table id='table' >"
    str += "<tr>";
    str += "<th > STT </th>"
    str += "<th > Ten </th>"
    str += "<th > Tuoi </th>"
    str += "<th > Que quan </th>"
    // str += "<th colspan='4'> Product Name </th>"
    str += "<th colspan='4' style='text-align: center'> Action </th>"
    str += "<th style='color: red'>" + arr.length + " Product </th>"
    str += "</tr>"
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>";
        str += "<td >" + (i + 1) + "</td>";
        str += "<td style='text-align: left'>" + arr[i].getName() + "</td>";
        str += "<td >" + arr[i].getAge() + "</td>";
        str += "<td colspan='2'>" + arr[i].getFrom() + "</td>";
        str += "<td><button onclick='edit(" + i + ")' >Edit</button></td>";
        str += "<td><button onclick='delet(" + i + ")'style='font-size: small'>Delete</button></td>";
        str += "<tr>";
    }
    str += "</table>";
    document.getElementById("show").innerHTML = str;
    if (flag1) {
        document.getElementById("show").style.display= "block";
        flag1 = false
    } else {
        document.getElementById("show").style.display= "none";
        flag1 = true
    }
}

function inputInfo() {
    let name = prompt("Nhap Ten:");
    let age = prompt("Nhap Tuoi:");
    let from = prompt("Nhap que quan:");
    arr1 = new Students(name, age, from);
    return arr1
}

function add() {
    let addnew = inputInfo();
    arr.push(addnew);
    show();

}

function edit(index) {
    let editNew = inputInfo()
    arr.splice(index, 1, editNew);
    show();

}

function delet(index) {
    if (confirm("Ban Thuc Su muon xoa") === true) {
        arr.splice(index, 1)
        show()
    }


}

function search() {
    let text = document.getElementById("input").value;
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (text === arr[i].getName()) {
            console.log(arr[i])
            flag = false;
            document.getElementById("show2").innerHTML =
                "Ten: " + arr[i].getName() +
                "<br>Tuoi: " + arr[i].getAge() +
                "<br>Den tu:  " + arr[i].getFrom();
        }
    }
    if (flag === true) {
        alert("Khong tim thay    " + text + "    trong danh sach")
    }
}

