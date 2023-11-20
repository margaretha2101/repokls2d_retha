const prompt = require("prompt-sync")({ sigint: true });

let username;
let password;

while (true) {
    username = prompt("Enter your username: ");
    password = prompt("Enter your password: ");

    if (username === "admin" && password === "16322076") {
        console.log("Anda berhasil Login");
        break;
    } else {
        console.log("Username atau password yang Anda masukkan salah");
    }
}
