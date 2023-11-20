const prompt = require("prompt-sync")({sigint: true});
console.log('Masukkan jumlah mahasiswa:');
let jumlahMahasiswa = parseInt(prompt());

console.log('=====================');
console.log('INPUT NILAI MAHASISWA');
console.log('=====================');

let dataMahasiswa = [];
let totalNilai = 0;

for (let i = 0; i < jumlahMahasiswa; i++) {
  console.log(`Masukkan data mahasiswa ke-${i + 1}`);
  let nim = prompt('Masukkan NIM:');
  let nama = prompt('Masukkan Nama:');
  

  // Memisahkan nilai angka
  let nilaiNormatif = parseInt(prompt('Masukkan Nilai Normatif (0-100):'));
  let nilaiTugas = parseInt(prompt('Masukkan Nilai Tugas (0-100):'));
  let nilaiUTS = parseInt(prompt('Masukkan Nilai UTS (0-100):'));
  let nilaiUAS = parseInt(prompt('Masukkan Nilai UAS (0-100):'));
    console.log('=====================');
  // Menghitung nilai angka berdasarkan persentase
  let nilaiAngka = (nilaiNormatif * 0.1) + (nilaiTugas * 0.2) + (nilaiUTS * 0.3) + (nilaiUAS * 0.4);

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

  totalNilai += nilaiAngka;
}

console.log('DAFTAR NILAI MASAHSIAWA');
console.log('=====================');

for (let i = 0; i < dataMahasiswa.length; i++) {
  let [nomorUrut, nim, nama, nilaiAngka, nilaiHuruf, statusKelulusan] = dataMahasiswa[i];
  console.log(`Nilai mahasiswa ke-${nomorUrut}`);
  console.log(`NIM:${nim}`);
  console.log(`Nama:${nama}`);
  console.log(`Nilai Angka: ${nilaiAngka}`);
  console.log(`Nilai Huruf :${nilaiHuruf}`);
  console.log(`Status kelulusan:${statusKelulusan}`);
  console.log('=====================');
}

// Tantangan 1: Rata-rata nilai
let rataRata = totalNilai / jumlahMahasiswa;
console.log(`Rata-rata Nilai: ${rataRata.toFixed(2)}`);

// Tantangan 2: Memecah nilai angka menjadi nilai normatif, tugas, UTS, dan UAS
console.log('=====================');
console.log('PECAHAN NILAI ANGKA');
console.log('=====================');

for (let i = 0; i < dataMahasiswa.length; i++) {
  let [nomorUrut, nim, nama, nilaiAngka] = dataMahasiswa[i];
  let normatif = (nilaiAngka * 100) / 10;
  let tugas = (nilaiAngka * 100) / 20;
  let uts = (nilaiAngka * 100) / 30;
  let uas = (nilaiAngka * 100) / 40;

  console.log(`Nilai mahasiswa ke-${nomorUrut}`);
  console.log('=====================');
  console.log(`Nilai Normatif: ${normatif.toFixed(2)}`);
  console.log(`Nilai Tugas: ${tugas.toFixed(2)}`);
  console.log(`Nilai UTS: ${uts.toFixed(2)}`);
  console.log(`Nilai UAS: ${uas.toFixed(2)}`);

}
