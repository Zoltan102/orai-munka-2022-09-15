const a = [];

export function hozzaad(x){
    if (x < 0){
        console.log("Érvénytelen érték!")
    } else{
        a.push(x);
    }
}
export function atlag(){
    let osszeg = 0;
    for (let i = 0; i < a.length; i++){
        osszeg += a[i];
    }
    return osszeg / a.length;
}
