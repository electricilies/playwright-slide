### Automate getting "TKB"

use ... to open a real browser and do these steps

- go to: https://student.uit.edu.vn/
- search for textbox name "Tên truy cập", click on that, enter "23520161"
- search for textbox name "Mật khẩu", click on that, enter "<pass>"
- search for "What is the abbreviation for", it will be a random string but it should give a hint in bracket "()", fill in that value (this is dynamically generated, you have to parse the value)
- click "Đăng nhập" button
- go to this page to get the schedule `https://student.uit.edu.vn/sinhvien/tkb`

Write a typescript script (not a test script) to do all of these steps, printout those cells in the table which match /^[A-Z]{2,3}\d*\.\w+(\.\d+)? .*/

The password is ...
