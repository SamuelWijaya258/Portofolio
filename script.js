function showSidebar(){
    document.querySelector('.sidebar').style.display = 'flex';
    document.querySelector('.sidebar-underlay').classList.add('show');
    // document.querySelector('.sidebar-underlay').style.display = 'block';
}
function hideSidebar(){
    document.querySelector('.sidebar').style.display = 'none';
    document.querySelector('.sidebar-underlay').classList.remove('show');
    // document.querySelector('.sidebar-underlay').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('discord');
    const message = document.getElementById('message')
    // Ambil nilai teks dari data-copy
    const textToCopy = copyButton.dataset.copy;
            
    copyButton.addEventListener('click', () => {
        // Cek dukungan untuk Clipboard API (modern dan direkomendasikan)
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Tampilkan pesan konfirmasi
                    message.classList.remove('hidden');
                    message.classList.add('show');
                    
                    // Sembunyikan pesan setelah 3 detik
                    setTimeout(() => {
                        message.classList.remove('show');
                        message.classList.add('hidden');
                    }, 3000); 
                })
                .catch(err => {
                    // Gagal menyalin
                    console.error('Gagal menyalin nilai:', err);
                    alert('Gagal menyalin. Coba periksa izin browser.');
                });
        } 
    });
});

const about = document.getElementById('about');
const gallery = document.getElementById('gallery');

function showPage(page){
    if(about == page){
        about.classList.remove('show');
        gallery.classList.remove('show');
        document.querySelector('.about-li').classList.add('active');
        document.querySelector('.gallery-li').classList.remove('active');
        
        setTimeout(() => 
            about.classList.add('show')
    ), 500;
    }
    else{
        gallery.classList.remove('show');
        about.classList.remove('show');
        document.querySelector('.gallery-li').classList.add('active');
        document.querySelector('.about-li').classList.remove('active');

        setTimeout(() => 
            gallery.classList.add('show')
        ), 500;
    }
}