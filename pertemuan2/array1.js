const prompt = require("prompt-sync")({sigint: true});

console.log('Masukkan jumlah mahasiswa: ');
let jumlahMahasiswa = parseInt(prompt());

console.log('=====================');
console.log('INPUT NILAI MAHASISWA');
console.log('=====================');

let dataMahasiswa = [];

for (let i = 0; i < jumlahMahasiswa; i++) {
  console.log(`Masukkan data mahasiswa ke-${i + 1}:`);
  let nim = prompt('Masukkan NIM:');
  let nama = prompt('Masukkan Nama:');
  let nilaiAngka = parseInt(prompt('Masukkan Nilai Angka:'));

  let nilaiHuruf, statusKelulusan;

  if (nilaiAngka >= 80) {
    nilaiHuruf = 'A';
    statusKelulusan = 'Lulus';
  } else if (nilaiAngka >= 70 && nilaiAngka < 80) {
    nilaiHuruf = 'B';
    statusKelulusan = 'Lulus';
  } else if (nilaiAngka >= 60 && nilaiAngka < 70) {
    nilaiHuruf = 'C';
    statusKelulusan = 'Lulus';
  } else if (nilaiAngka >= 50 && nilaiAngka < 60) {
    nilaiHuruf = 'D';
    statusKelulusan = 'Mengulang';
  } else {
    nilaiHuruf = 'E';
    statusKelulusan = 'Mengulang';
  }

  let dataSatuan = [i + 1, nim, nama, nilaiAngka, nilaiHuruf, statusKelulusan];
  dataMahasiswa.push(dataSatuan);
}

console.log('=====================');
console.log('DAFTAR NILAI MAHASISWA');
console.log('=====================');

for (let i = 0; i < dataMahasiswa.length; i++) {
  let [nomorUrut, nim, nama, nilaiAngka, nilaiHuruf, statusKelulusan] = dataMahasiswa[i];
  console.log(`Nilai mahasiswa ke-${nomorUrut}:`);
  console.log(`NIM: ${nim}`);
  console.log(`Nama: ${nama}`);
  console.log(`Nilai Angka: ${nilaiAngka}`);
  console.log(`Nilai Huruf: ${nilaiHuruf}`);
  console.log(`Status Kelulusan: ${statusKelulusan}`);
  console.log('======================');
}
