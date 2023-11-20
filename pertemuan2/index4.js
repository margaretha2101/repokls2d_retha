const prompt = require("prompt-sync")({ sigint: true });

const jumlahMahasiswa = parseInt(prompt("Masukkan jumlah mahasiswa: "));

// Perulangan for untuk mengumpulkan data dari setiap mahasiswa
for (let i = 1; i <= jumlahMahasiswa; i++) {
    console.log(`Data Mahasiswa ke-${i}:`);

    // Input NIM
    const nim = prompt("NIM: ");

    // Input Nama
    const nama = prompt("Nama: ");

    // Input Nilai
    const nilai = parseFloat(prompt("Nilai: "));

    // Tentukan indeks nilai
    let indeks;
    if (nilai >= 80) {
        indeks = 'A';
    } else if (nilai >= 70 && nilai < 80) {
        indeks = 'B';
    } else if (nilai >= 60 && nilai < 70) {
        indeks = 'C';
    } else if (nilai >= 50 && nilai < 60) {
        indeks = 'D';
    } else {
        indeks = 'E';
    }

    // Tampilkan hasil
    console.log(`Mahasiswa dengan NIM ${nim}, Nama ${nama}, dan Nilai ${nilai} mendapatkan indeks ${indeks}\n`);
}
let userInput = '';
while (userInput.toLowerCase() !== 'q') {

    userInput = prompt("Tekan 'q' untuk keluar, atau enter untuk melanjutkan: ");
}

