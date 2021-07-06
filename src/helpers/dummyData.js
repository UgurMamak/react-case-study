export function getDummyData(){
   return  JSON.parse(localStorage.getItem('data'));
}

export function setDummyData(data){
   return localStorage.setItem('data',JSON.stringify(data));
}