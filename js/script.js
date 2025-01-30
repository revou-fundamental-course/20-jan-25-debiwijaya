// Ini File Javascript

// Kalkulator BMI
function hitungbmi() {
    var berat = document.getElementById("berat-badan").value;
    var tinggi = document.getElementById("input-tinggi-badan").value / 100;  // Convert height to meters
    var umur = document.getElementById("usia").value;

    // Alert data kosong
    if (berat === "" || tinggi === "" || umur === "") {
        alert("Semua data harus diisi!");
        return;
    }
// Alert umur minimal
    if (umur < 18) {
        alert("Kalkulator hanya untuk 18 tahun ke atas");
        return;
    } else {
        var bmi = berat / (tinggi * tinggi);
        document.getElementById("contenthasil").style.display = "block";
        document.getElementById("contentunderweight").style.display = "none";
        document.getElementById("contentoverweight").style.display = "none";
        document.getElementById("result-bmi").textContent = bmi.toFixed(1);

        // Display hasil dari BMI
        if (bmi < 18.5) {
            document.getElementById("hasilKualitas").textContent = "Berat Badan Kurang";
            document.getElementById("hasilKet").textContent = "Anda kekurangan berat badan";
            document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori kekurangan berat badan. <br /> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
            document.getElementById("kualitasBMI").textContent = "Hasil BMI < 18.5";
            document.getElementById("contentunderweight").style.display = "block";
        } else if (bmi < 22.9) {
            document.getElementById("hasilKualitas").textContent = "Normal";
            document.getElementById("hasilKet").textContent = "Anda memiliki berat badan ideal. Good job!!";
            document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori berat badan yang normal. <br /> Tetap pertahankan berat badan Anda dan jaga keseimbangan antara pola makan dan aktivitas fisik Anda.";
            document.getElementById("kualitasBMI").textContent = "Hasil BMI diantara 18.5 dan 22.9";
        } else if (bmi < 25) {
            document.getElementById("hasilKualitas").textContent = "Berat Badan Lebih";
            document.getElementById("hasilKet").textContent = "Anda memiliki berat badan berlebih";
            document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori overweight. <br /> Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.";
            document.getElementById("kualitasBMI").textContent = "Hasil BMI diantara 23 dan 25";
            document.getElementById("contentoverweight").style.display = "block";
        } else {
            document.getElementById("hasilKualitas").textContent = "Obesitas";
            document.getElementById("hasilKet").textContent = "Anda berada dalam kategori obesitas";
            document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori obesitas. <br /> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.";
            document.getElementById("kualitasBMI").textContent = "Hasil BMI lebih dari 25";
            document.getElementById("contentoverweight").style.display = "block";
        }
    }
    window.location.href = '#hasil';
}

// Fungsi untuk tombol reset
function clearbmi() {
    // Untuk hapus form value
    document.getElementById("berat-badan").value = '';
    document.getElementById("input-tinggi-badan").value = '';
    document.getElementById("usia").value = '';

    // Hide result sections and reset text content
    document.getElementById("contenthasil").style.display = "none";
    document.getElementById("contentunderweight").style.display = "none";
    document.getElementById("contentoverweight").style.display = "none";
    document.getElementById("hasilKualitas").textContent = "";
    document.getElementById("hasilKet").textContent = "";
    document.getElementById("saranBMI").textContent = "";
    document.getElementById("kualitasBMI").textContent = "";
    document.getElementById("result-bmi").textContent = "0";

    // Kembali ke atas untuk pengisian data
    window.location.href = '#hasil';
}

