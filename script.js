// Mengambil elemen navbar
const navbar = document.getElementById('navbar');

// Menambahkan event listener saat halaman di-scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        navbar.style.transition = "all 0.3s ease";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});