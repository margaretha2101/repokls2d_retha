// Input dari pengguna
var beratBadan = 56;
var tinggiBadan = 1.58;

// Menghitung BMI
var bmi = beratBadan / (tinggiBadan * tinggiBadan);

// Menentukan kategori BMI
var kategoriBMI;

if (bmi < 18.5) {
  kategoriBMI = "Terlalu Kurus";
} else if (bmi >= 18.5 && bmi < 25) {
  kategoriBMI = "Langsing/Sehat";
} else {
  kategoriBMI = "Gemuk";
}

// Menampilkan hasil
console.log("Nilai BMI : " + bmi);
console.log("Kategori BMI : " + kategoriBMI);

