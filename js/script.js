// document ready
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // Preloader
    // ==========================================
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }, 1500); // 1.5 seconds loading simulation

    // ==========================================
    // AOS Initialize
    // ==========================================
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // ==========================================
    // Particles.js Config for falling petals / light dust
    // ==========================================
    if(document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#D4AF37", "#FFD700", "#F4E4A4"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" },
                    "polygon": { "nb_sides": 5 },
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": { "enable": true, "speed": 2, "size_min": 0.5, "sync": false }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "bubble" },
                    "onclick": { "enable": false, "mode": "repulse" },
                    "resize": true
                },
                "modes": {
                    "bubble": { "distance": 250, "size": 6, "duration": 2, "opacity": 1, "speed": 3 }
                }
            },
            "retina_detect": true
        });
    }

    // ==========================================
    // Background Music Toggle
    // ==========================================
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    // Function to update icon based on state
    function updateMusicUI(playing) {
        if(playing) {
            musicBtn.classList.add('playing');
            musicBtn.querySelector('.music-icon').innerHTML = '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>';
        } else {
            musicBtn.classList.remove('playing');
            musicBtn.querySelector('.music-icon').innerHTML = '<path d="M9 18V5l12-2v13"></path><line x1="1" y1="1" x2="23" y2="23"></line>'; // crossed out icon
        }
    }

    // Aggressive Auto-play Logic
    const attemptAutoplay = () => {
        if (!isPlaying && bgMusic.paused) {
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    updateMusicUI(true);
                    // Remove listeners once successfully playing
                    ['click', 'touchstart', 'mousemove', 'scroll', 'keydown'].forEach(evt => {
                        window.removeEventListener(evt, attemptAutoplay);
                    });
                }).catch(e => {
                    // Browser still blocking, wait for next user action
                    isPlaying = false;
                    updateMusicUI(false);
                });
            }
        }
    };

    // Try initially on load
    attemptAutoplay();

    // Bind seamlessly to every possible user micro-interaction
    ['click', 'touchstart', 'mousemove', 'scroll', 'keydown'].forEach(evt => {
        window.addEventListener(evt, attemptAutoplay, { once: true, passive: true });
    });

    // Toggle playing state when explicitly clicking the button
    musicBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // so it doesn't trigger the body click auto-play logic simultaneously
        if (isPlaying || !bgMusic.paused) {
            bgMusic.pause();
            isPlaying = false;
            updateMusicUI(false);
        } else {
            bgMusic.play().then(() => {
                isPlaying = true;
                updateMusicUI(true);
            }).catch(e => console.log('Audio play failed', e));
        }
    });


    // ==========================================
    // Countdown Timer
    // ==========================================
    const countDownDate = new Date("Apr 29, 2026 18:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        if(daysEl) {
            daysEl.innerHTML = days < 10 ? '0' + days : days;
            document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
            document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "<div class='time-box'><span>Just Married!</span></div>";
            }
        }
    }, 1000);

    // ==========================================
    // Lightbox for Gallery
    // ==========================================
    const modal = document.getElementById("lightbox");
    const modalImg = document.getElementById("lightbox-img");
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.querySelector(".close-lightbox");

    if(modal && galleryItems) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if(img) {
                    modal.style.display = "flex";
                    modalImg.src = img.src;
                }
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });

        // Close when clicking outside image
        modal.addEventListener('click', function(e) {
            if(e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});

// ==========================================
// Download Card Feature
// ==========================================
function downloadCard() {
    const card = document.querySelector('.invite-card');
    const buttons = document.getElementById('card-action-btns');
    
    // Hide the buttons so they don't appear in the downloaded image
    if (buttons) buttons.style.display = 'none';

    html2canvas(card, {
        scale: 2, // higher resolution
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        // Restore buttons
        if (buttons) buttons.style.display = 'flex';
        
        const link = document.createElement('a');
        link.download = 'Reshu_Vikas_Wedding_Card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error("Error generating card image:", err);
        if (buttons) buttons.style.display = 'flex';
        alert("Sorry, there was an issue generating the image.");
    });
}

// ==========================================
// Share Card Feature
// ==========================================
async function shareCard() {
    const card = document.querySelector('.invite-card');
    const buttons = document.getElementById('card-action-btns');
    
    // Hide buttons during capture
    if (buttons) buttons.style.display = 'none';

    try {
        const canvas = await html2canvas(card, {
            scale: 2, 
            useCORS: true,
            backgroundColor: null
        });
        
        if (buttons) buttons.style.display = 'flex';

        // Convert canvas to blob
        canvas.toBlob(async (blob) => {
            if (!blob) {
                alert("Failed to generate image.");
                return;
            }
            const file = new File([blob], "Reshu_Vikas_Wedding_Card.png", { type: "image/png" });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'Reshu & Vikas Wedding',
                        text: 'You are cordially invited to the wedding of Reshu & Vikas!'
                    });
                } catch (err) {
                    console.error('Error sharing:', err);
                }
            } else {
                alert("Image sharing is not supported directly on this browser. You can use the Download button to save the card instead!");
                // Fallback to URL sharing
                if(navigator.share) {
                    navigator.share({title:'Reshu & Vikas Wedding', text: 'You are cordially invited to the wedding of Reshu & Vikas!', url: window.location.href}).catch(console.error);
                }
            }
        }, "image/png");
    } catch (err) {
        console.error("Error generating card image for share:", err);
        if (buttons) buttons.style.display = 'flex';
        alert("Sorry, there was an issue generating the image for sharing.");
    }
}
