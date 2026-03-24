// Initialize AOS (Animate on Scroll)
AOS.init({ 
    duration: 800, 
    once: true 
});

// --- DARK MODE TOGGLE ---
const modeBtn = document.getElementById('mode-btn');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = modeBtn.querySelector('i');
    
    // Switch icons between moon and sun
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// --- MODAL IMAGE VIEWER ---
function openImg(src, title, cap) {
    document.getElementById('modal-img').src = src;
    document.getElementById('modal-caption').innerText = title + ": " + cap;
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll when modal open
}

function closeImg() { 
    document.getElementById('modal').style.display = 'none'; 
    document.body.style.overflow = 'auto'; // Restore scroll
}

// --- GUESTBOOK FUNCTION ---
function addMessage() {
    const nameInput = document.getElementById('name');
    const msgInput = document.getElementById('message');
    const name = nameInput.value;
    const msg = msgInput.value;
    
    if(!name || !msg) {
        return alert("Isi dulu ya!");
    }

    const list = document.getElementById('messages-list');
    const item = document.createElement('div');
    
    // Apply styles directly as per original code
    item.style.cssText = "background:var(--card-bg); color:var(--text-color); padding:20px; border-radius:15px; margin:20px auto; max-width:600px; box-shadow:0 10px 20px rgba(0,0,0,0.05);";
    item.innerHTML = "<strong>" + name + "</strong><p style='margin-top:10px; opacity:0.8;'>" + msg + "</p>";
    
    // Add to top of the list
    list.prepend(item);

    // Clear inputs
    nameInput.value = '';
    msgInput.value = '';
}

// --- SLICK CAROUSEL INITIALIZATION ---
$(document).ready(function(){
    $('.slick-gallery').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
});