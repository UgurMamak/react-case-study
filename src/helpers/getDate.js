export function getDateNow(currentdate) {
   const convertDate= new Date(currentdate)
    return convertDate.getMonth() + 1 + "." +
        convertDate.getDate() + "." +
        convertDate.getFullYear() + " " +
        convertDate.getHours() + ":" +
        convertDate.getMinutes() + ":" +
        convertDate.getSeconds();

    /*return currentdate.getMonth() + 1 + "." +
        currentdate.getDate() + "." +
        currentdate.getFullYear() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();*/
}
