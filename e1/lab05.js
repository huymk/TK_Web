m = prompt("Mời bạn nhập MSSV: ");
n = prompt("Mời bạn nhập Họ Tên: ");
p = prompt("Mời bạn nhập Lớp: ");

document.write(
  "<table width='300px' border='1' cellspacing = '0' cellpadding = '0'"
);
document.write("<tr>");
document.write("<td colspan='3' align='center'>Danh sách sinh viên</td>");
document.write("<tr>");

document.write(
  "<td align='center'>MSSV</td><td align='center'>Họ Tên</td><td align='center'> Lớp</td>"
);

document.write("<tr>");
document.write("<td align='center'>" + m + "</td>");
document.write("<td align='center' >" + n + "</td>");
document.write("<td align='center'>" + p + "</td>");
