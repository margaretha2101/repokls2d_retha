const prompt = require("prompt-sync")({sigint: true});

let nim, nama, angka, huruf, confirm="";

while (confirm !== "q"){

nim=prompt("Masukkan NIM : ");
nama= prompt("Masukkan Nama : ");
angka=prompt("Masukkan Nilai Angka");

if(angka >= 80){
    huruf = "A";
} else if (angka >= 70){
    huruf = "B";
}else if (angka >= 60){
    huruf = "C";
}else if (angka >= 50){
    huruf = "D";
}else {
    huruf = "E";
}
console.log("Nilai Huruf : " + huruf);
confirm = prompt(
    "Tekan sembarang tombol untuk menginput atau q untuk keluar :"
    );
};
