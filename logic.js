username = document.getElementById("name");
email = document.getElementById("email");
occasion = document.getElementById("occasion");
month = document.getElementById("month");
day = document.getElementById("day");
year = document.getElementById("year");

function checkDate(day, month, year) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var today = new Date();
    if (year < 1900 || year > today.getFullYear()) return false;
    if (month < 1 && month > 12) return false;
    if (day > 0) {
        if (month == 2 && isLeapYear(year)) days[1] = 29; 
        let monthdays = days[month-1];
        if (day <= monthdays) return true;
    }
    return false;
}

function  isLeapYear(year) {
    if ((year % 400 == 0) && (year % 100 == 0))
        return true;
    if ((year % 4 ==0) && (year % 100 != 0))
        return true;
    return false;
}