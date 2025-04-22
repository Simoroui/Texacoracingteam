/**
 * Texaco Racing Team Tunisia - Script Principal
 * Gère les interactions utilisateur et les effets visuels du site
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== Éléments DOM =====
    const header = document.querySelector('.header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const parallaxSections = document.querySelectorAll('.parallax-section');
    const scrollElements = document.querySelectorAll('[data-aos]');
    const backToTopBtn = document.querySelector('.back-to-top');
    const preloader = document.querySelector('.preloader');
    
    // ===== Preloader =====
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 500);
        });
    }
    
    // ===== Navigation Mobile =====
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Fermer la navigation mobile quand un lien est cliqué
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileNavToggle.classList.remove('active');
            }
        });
    });
    
    // ===== Header au défilement et bouton retour en haut =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Afficher/masquer le bouton retour en haut
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Déclenchement des animations au scroll
        animateOnScroll();
        
        // Effet parallax pour les sections avec background
        parallaxEffect();
    });
    
    // Fonctionnalité retour en haut
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== Parallax Effect =====
    function parallaxEffect() {
        parallaxSections.forEach(section => {
            const scrollPosition = window.pageYOffset;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // Vérifier si la section est visible dans la fenêtre
            if (scrollPosition > sectionTop - window.innerHeight && 
                scrollPosition < sectionTop + sectionHeight) {
                // Calculer la valeur de décalage pour l'effet parallax
                const parallaxOffset = (scrollPosition - sectionTop) * 0.5;
                section.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
            }
        });
    }
    
    // ===== Animations au défilement =====
    function animateOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        
        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    }
    
    // Déclenchement initial des animations
    animateOnScroll();
    
    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Formulaire de contact =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi de formulaire
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            // Simule un délai d'envoi
            setTimeout(function() {
                contactForm.reset();
                submitBtn.textContent = 'Envoyé !';
                
                setTimeout(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 2000);
                
                alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            }, 1500);
        });
    }
    
    // ===== Formulaire de newsletter =====
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = '...';
            
            // Simule un délai d'envoi
            setTimeout(function() {
                newsletterForm.reset();
                submitBtn.textContent = 'Merci !';
                
                setTimeout(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 2000);
                
                alert('Merci de vous être abonné à notre newsletter !');
            }, 1000);
        });
    }
    
    // ===== Animation pour les disciplines =====
    const disciplineCards = document.querySelectorAll('.discipline-card');
    disciplineCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ===== Initialiser la glissière d'événements =====
    initEventSlider();
    
    function initEventSlider() {
        // Code pour initialiser un slider simple (version manuelle)
        const eventsSlider = document.querySelector('.events-slider');
        if (!eventsSlider) return;
        
        const eventCards = eventsSlider.querySelectorAll('.event-card');
        if (eventCards.length <= 1) return;
        
        let currentIndex = 0;
        const cardWidth = eventCards[0].offsetWidth;
        const cardMargin = 30; // Correspond à la valeur de gap dans CSS
        
        // Fonction pour afficher les cartes courantes
        function updateSlider() {
            if (window.innerWidth >= 768) {
                // Ne rien faire sur les écrans larges où tout est affiché
                eventsSlider.style.transform = 'translateX(0)';
                return;
            }
            
            const offset = -(currentIndex * (cardWidth + cardMargin));
            eventsSlider.style.transform = `translateX(${offset}px)`;
        }
        
        // Mise à jour au redimensionnement de la fenêtre
        window.addEventListener('resize', updateSlider);
        
        // Initialisation
        if (window.innerWidth < 768) {
            eventsSlider.style.transition = 'transform 0.4s ease';
            
            // Boutons de navigation (peuvent être ajoutés via JS)
            const prevBtn = document.createElement('button');
            prevBtn.classList.add('slider-nav', 'prev-btn');
            prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevBtn.addEventListener('click', () => {
                currentIndex = Math.max(0, currentIndex - 1);
                updateSlider();
            });
            
            const nextBtn = document.createElement('button');
            nextBtn.classList.add('slider-nav', 'next-btn');
            nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextBtn.addEventListener('click', () => {
                currentIndex = Math.min(eventCards.length - 1, currentIndex + 1);
                updateSlider();
            });
            
            // Ajouter les boutons autour du slider
            eventsSlider.parentElement.insertBefore(prevBtn, eventsSlider);
            eventsSlider.parentElement.appendChild(nextBtn);
        }
    }
    
    // ===== Galerie d'images avec lightbox simple =====
    initGallery();
    
    function initGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                
                const img = document.createElement('img');
                img.src = imgSrc;
                
                const closeBtn = document.createElement('button');
                closeBtn.className = 'lightbox-close';
                closeBtn.innerHTML = '&times;';
                
                lightbox.appendChild(img);
                lightbox.appendChild(closeBtn);
                document.body.appendChild(lightbox);
                
                // Empêcher le défilement du body
                document.body.style.overflow = 'hidden';
                
                // Animation d'ouverture
                setTimeout(() => {
                    lightbox.classList.add('active');
                }, 10);
                
                // Fermeture du lightbox
                closeBtn.addEventListener('click', closeLightbox);
                lightbox.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeLightbox();
                    }
                });
                
                function closeLightbox() {
                    lightbox.classList.remove('active');
                    setTimeout(() => {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        });
    }
}); 