document.addEventListener('DOMContentLoaded', () => {
  // Form submission handler
  const form = document.getElementById('signup-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const emailDiffs = document.getElementById('email-diffs').checked;
      const textDiffs = document.getElementById('text-diffs').checked;
      
      // In a real application, you would send this data to your server
      console.log('Form submitted with:', { email, phone, emailDiffs, textDiffs });
      
      // Replace the entire signup section with a large CTA
      const signupSection = document.querySelector('.signup');
      signupSection.innerHTML = `
        <div class="container">
          <div class="success-message">
            <h3>Thank you for signing up!</h3>
            <p>Your account has been created successfully.</p>
            <div class="success-cta">
              <p>Call <a href="tel:8556871972">(855) 687-1972</a> to get started!</p>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Add click-to-call tracking
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Phone number clicked');
      // In a real application, you might want to track this event
    });
  });
});