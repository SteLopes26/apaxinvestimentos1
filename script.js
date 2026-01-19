
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Form Submission Handling
    const proposalForm = document.querySelector('.proposal-form');
    if (proposalForm) {
        proposalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = proposalForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Obrigado! Recebemos seus dados e entraremos em contato com sua proposta em breve.');
                proposalForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }
    // Exclusive FAQ Accordion: only one open at a time
    const faqDetails = document.querySelectorAll('.faq-section details');
    faqDetails.forEach(detail => {
        detail.addEventListener('toggle', function () {
            if (this.open) {
                faqDetails.forEach(other => {
                    if (other !== this) {
                        other.open = false;
                    }
                });
            }
        });
    });
    });
