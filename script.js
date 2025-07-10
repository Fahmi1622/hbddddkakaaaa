// Mengambil nama pengguna dari localStorage
const userName = localStorage.getItem('userName');

// Fungsi untuk mengirim pesan ke WhatsApp
function sendWhatsAppMessage() {
    const message = `Selamat ulang tahun, ${userName}! Semoga semua impianmu menjadi kenyataan!`;
    const phoneNumber = '6288213952962'; // Ganti dengan nomor WhatsApp Anda
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Membuka tautan WhatsApp di tab baru
    window.open(url, '_blank');
}

// Menambahkan event listener pada tombol kirim pesan di halaman 4
document.addEventListener('DOMContentLoaded', function() {
    const waButton = document.querySelector('.send-wa-button'); // Pastikan tombol memiliki kelas ini
    if (waButton) {
        waButton.addEventListener('click', sendWhatsAppMessage);
    }

    // Memastikan musik diputar jika belum, atau melanjutkan jika sudah
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicPlayed = localStorage.getItem('musicPlayed');

    if (!musicPlayed) {
        // Jika musik belum pernah diputar
        backgroundMusic.play().then(() => {
            localStorage.setItem('musicPlayed', 'true'); // Tandai bahwa musik sudah diputar
        }).catch(function(error) {
            console.log("Musik tidak dapat diputar: ", error);
        });
    } else {
        // Jika musik sudah diputar sebelumnya
        backgroundMusic.play().catch(function(error) {
            console.log("Musik tidak dapat diputar secara otomatis: ", error);
        });
    }
});
