var nama = "MARGARETHA MISNAWATI";
tahun_lahir = "2004";
tahun_lahir = parseInt(tahun_lahir);
var kategorigenerasi;
  if (tahun_lahir >= 1944 && tahun_lahir <= 1964) {
    kategorigenerasi= "Baby Boomer";
  } else if (tahun_lahir >= 1965 && tahun_lahir <= 1979) {
    kategorigenerasi= "Generasi X";
  } else if (tahun_lahir >= 1980 && tahun_lahir <= 1994) {
    kategorigenerasi= "Generasi Y (Millennials)";
  } else if (tahun_lahir >= 1995 && tahun_lahir <= 2015) {
    kategorigenerasi= "Generasi Z";
  } else {
    kategorigenerasi= "Tidak Diketahui";
  }
console.log("Kategori Generasi : " + kategorigenerasi);

