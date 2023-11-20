// Contoh for-loop untuk menelusuri elemen array
const buah = ["apel", "pisang", "anggur", "jeruk"];

for (let i = 0; i < buah.length; i++) {
    console.log("Buah ke-" + i + ": " + buah[i]);
}
// Contoh for-loop untuk membuat pola bintang
const tinggiPola = 5;

for (let i = 1; i <= tinggiPola; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += "*";
    }
    console.log(bintang);
}
