var formatVND = new Intl.NumberFormat("VN-vn");

// TÍNH TIỀN LƯƠNG
/*
* Đầu vào:
* Cho người dùng nhập số ngày
* var soNgayLam
*
* Cách tính:
* Lương 1 ngày * số ngày làm
* tongLuong = 100.000 * soNgayLam
*
* Đầu ra:
* Hiện kết quả lương
*/

function tinhTienLuong() {
    var soNgayLam = document.getElementById("soNgayLam").value;
    var ketQua = document.getElementById("ketQua");
    console.log(soNgayLam);
    if (soNgayLam == "") {
        ketQua.className="p-3 my-2 bg-dark text-white";
        ketQua.innerHTML = "Ngày làm không được trống";
    }
    else if (soNgayLam == 0) {
        ketQua.className="p-3 my-2 bg-primary text-white";
        ketQua.innerHTML = "Không có lương nha";
    }
    else if (soNgayLam < 0) {
        ketQua.className="p-3 my-2 bg-danger text-white";
        ketQua.innerHTML = "Số ngày làm không được bé hơn 0";
    }
    else {
        var tongLuong = soNgayLam * 100000;
        tongLuong = formatVND.format(tongLuong);
        ketQua.className="p-3 my-2 bg-success text-white";
        ketQua.innerHTML = "Lương: " + tongLuong + " vnđ";
    }
}

// TÍNH GIÁ TRỊ TRUNG BÌNH
/*
* Đầu vào:
* Cho người dùng nhập 5 số thực
* var num1st - num5th
*
* Cách tính:
* soTrungBinh = (num1st + num2nd + num3rd + num4th + num5th)/5
*
* Đầu ra:
* Hiện kết quả
*/

function tinhTrungBinh() {
    var num1st = document.getElementById("num1st").value;
    var num2nd = document.getElementById("num2nd").value;
    var num3rd = document.getElementById("num3rd").value;
    var num4th = document.getElementById("num4th").value;
    var num5th = document.getElementById("num5th").value;
    var ketQua = document.getElementById("ketQua2");
    if(num1st == "" || num2nd == "" || num3rd == "" || num4th == "" || num5th == "") {
        ketQua.className="p-3 my-2 bg-dark text-white";
        ketQua.innerHTML = "Không được để trống bất kỳ số nào";
    }
    else {
        var soTrungBinh = (parseInt(num1st) + parseInt(num2nd) + parseInt(num3rd) + parseInt(num4th) + parseInt(num5th))/5;
        ketQua.className="p-3 my-2 bg-success text-white";
        ketQua.innerHTML = "Trung bình: " + soTrungBinh;
    }
}

// QUY ĐỔI TIỀN
/*
* Đầu vào:
* Cho người dùng nhập số USD
* var usd
*
* Cách tính:
* var vnd = usd * 23500
*
* Đầu ra:
* Hiện kết quả
*/

function quyDoiTien() {
    var soUsd = document.getElementById("soUsd").value;
    var ketQua = document.getElementById("ketQua3");
    if (soUsd == "") {
        ketQua.className="p-3 my-2 bg-dark text-white";
        ketQua.innerHTML = "Nhập số tiền vào!";
    }
    else if (soUsd < 0) {
        ketQua.className="p-3 my-2 bg-danger text-white";
        ketQua.innerHTML = "Không có tiền mà đòi đổi?";
    }
    else {
        var vnd = soUsd * 23500;
        ketQua.className="p-3 my-2 bg-success text-white";
        ketQua.innerHTML = "VNĐ: " + formatVND.format(vnd) + " vnđ";
    }
}

// TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
/*
* Đầu vào:
* Cho người dùng nhập chiều dài + chiều rộng
* var chieuDai
* var chieuRong
*
* Cách tính:
* var dienTich = chieuDai * chieuRong
* var chuVi = (chieuDai + chieuRong) * 2
*
* Đầu ra:
* Hiện kết quả
*/

function tinhDienTich() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    var ketQua = document.getElementById("ketQua4");
    if (chieuDai == "" || chieuRong == "") {
        ketQua.className="p-3 my-2 bg-dark text-white";
        ketQua.innerHTML = "Chiều dài hoặc rộng không được trống";
    }
    else if (chieuDai == 0 || chieuRong == 0) {
        ketQua.className="p-3 my-2 bg-danger text-white";
        ketQua.innerHTML = "Chiều dài hoặc rộng không được = 0";
    }
    else {
        var dienTich = chieuDai * chieuRong;
        ketQua.className="p-3 my-2 bg-success text-white";
        ketQua.innerHTML = "Diện tích: " + dienTich;
    }
}

function tinhChuVi() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    var ketQua = document.getElementById("ketQua4");
    if (chieuDai == "" || chieuRong == "") {
        ketQua.className="p-3 my-2 bg-dark text-white";
        ketQua.innerHTML = "Chiều dài hoặc rộng không được trống";
    }
    else if (chieuDai == 0 || chieuRong == 0) {
        ketQua.className="p-3 my-2 bg-danger text-white";
        ketQua.innerHTML = "Chiều dài hoặc rộng không được = 0";
    }
    else {
        var chuVi = (parseInt(chieuDai) + parseInt(chieuRong))/2;
        ketQua.className="p-3 my-2 bg-success text-white";
        ketQua.innerHTML = "Chu Vi: " + chuVi;
    }
}


// TÍNH TỔNG 2 KÝ SỐ
/*
* Đầu vào:
* Cho người dùng nhập vào số có 2 chữ số
* var int so_hang_chuc = soNhapVao / 10
* var int so_hang_dv = soNhapVao % 10
*
* Cách tính:
* var tong = so_hang_chuc + so_hang_dv
*
* Đầu ra:
* Hiện kết quả
*/

function tinhTong2So() {
    var soNhapVao = document.getElementById("so2ChuSo").value;
    var so_hang_chuc = soNhapVao / 10;
    var so_hang_dv = soNhapVao % 10;
    var ketQua = document.getElementById("ketQua5");
    if(soNhapVao == "") {
        ketQua.className="p-3 my-2 bg-dark text-white";
        ketQua.innerHTML = "Không được để trống!";
    }
    else if(soNhapVao > 99 || soNhapVao < 10) {
        ketQua.className="p-3 my-2 bg-danger text-white";
        ketQua.innerHTML = "Chỉ có số có 2 chữ số mới được chấp nhận!";
    }
    else {
        var tong = parseInt(so_hang_chuc) + parseInt(so_hang_dv);
        ketQua.className="p-3 my-2 bg-success text-white";
        ketQua.innerHTML = "Tổng 2 ký số: " + tong;
    }
}
