
// // alert("hilooo");

// // 2.in ra console
// console.log('helo mấy cưng');

// // 3.in ra thẳng bàn mình
// document.getElementById("text").textContent="alo 123"

// //  Data type (kiểu dữ liệu)
// // kiểu dữ liệu + tên biến
// //  chữ, số..............
// // var là variable
// var name2; // -> định nghĩa biến
// var age;
// name2 = "Anh Huy";// khai báo giá trị (assign, initialized)
// age = 18;
// var ageString ="18" 
// console.log(name2); // undefine -> chưa xác định
//  document.getElementById("text").textContent = name2;

// var tagName = document.getElementById("text2")
// tagName.textContent = name2

// console.log(age); // -> số là màu xanh
// console.log(ageString); // chữ là đen




function tinhDiem(){
    var toan = document.getElementById("toan").value;
    var van = document.getElementById("van").value;
    var anh = document.getElementById("anh").value;
    var li = document.getElementById("li").value;
    var  hoa = document.getElementById("hoa").value;
    var  sinh = document.getElementById("sinh").value;
    

    toan = Number(toan)
    van = Number( van)
    anh = Number( anh)
    li = Number(li)
    hoa = Number(hoa)
    sinh = Number(sinh)

    var diemTB = (toan + van + anh + sinh + li + hoa)/6
    var diemKhoiA = (toan + li + hoa)/3
    var alertTag = document.getElementById("result")

    alertTag.innerHTML =""
    // tạo cái thẻ mới 
    var diemTrungBinhP = document.createElement("p")
    diemTrungBinhP.textContent = "diem trung bình la: " + diemTB.toFixed(1)
    var diemKhoiAP = document.createElement("p")
    diemKhoiAP.textContent = "diem trung bình khối a la: " + diemKhoiA.toFixed(1)
    // đưa tag vô làm con của thằng alerTag
    alertTag.appendChild(diemTrungBinhP)
    alertTag.appendChild(diemKhoiAP)

    document.getElementById("result").style.display = "block"

    // var diemKhoiA = (toan + li + hoa)/3
    // var diemKhoiATag = document.getElementById("khoiA")
    // console.log(diemKhoiA );
    // diemKhoiATag.textContent = "Điểm trung bình khối A:" + diemKhoiA.toFixed(1)
    // diemKhoiATag.style.display ="block"
}

function reset(){

    document.getElementById("toan").value="";
    document.getElementById("van").value="";
    document.getElementById("anh").value="";
    document.getElementById("li").value="";
    document.getElementById("hoa").value="";
    document.getElementById("sinh").value ="";
}
