export function getDateNow(currentdate) {
    return currentdate.getMonth() + 1 + "." +
        currentdate.getDate() + "." +
        currentdate.getFullYear() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
}