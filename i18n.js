// i18n.js - Internationalization for Glundia Landing Page
// Detects browser language and switches between English and Spanish

(function() {
    'use strict';

    // Language detection
    function detectLanguage() {
        const savedLang = localStorage.getItem('glundia-lang');
        if (savedLang) return savedLang;

        const browserLang = navigator.language || navigator.userLanguage;
        // Spanish variants: es, es-ES, es-MX, es-AR, etc.
        return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
    }

    // Set current language
    let currentLang = detectLanguage();

    // Apply translations
    function applyTranslations(lang) {
        currentLang = lang;
        localStorage.setItem('glundia-lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-en and data-es attributes
        document.querySelectorAll('[data-en][data-es]').forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                // For meta tags, update content attribute
                if (element.tagName === 'META') {
                    element.setAttribute('content', text);
                } 
                // For title tag, update text content
                else if (element.tagName === 'TITLE') {
                    element.textContent = text;
                }
                // For other elements, update text or innerHTML
                else {
                    element.textContent = text;
                }
            }
        });

        // Update language toggle button
        const langToggle = document.getElementById('current-lang');
        if (langToggle) {
            langToggle.textContent = lang.toUpperCase();
        }
    }

    // Language toggle handler
    function setupLanguageToggle() {
        const toggleButton = document.getElementById('lang-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                const newLang = currentLang === 'en' ? 'es' : 'en';
                applyTranslations(newLang);
            });
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyTranslations(currentLang);
            setupLanguageToggle();
        });
    } else {
        applyTranslations(currentLang);
        setupLanguageToggle();
    }
})();
