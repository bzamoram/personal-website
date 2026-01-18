// Supabase Configuration
const SUPABASE_URL = 'https://dvkhqhvgedzyqhsjxcrh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2a2hxaHZnZWR6eXFoc2p4Y3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2OTkyOTksImV4cCI6MjA4NDI3NTI5OX0._RfLt9FBbQKQMP6KXx0WbLJF-7o9R_9nAzCq2To3q5o';

// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const messageDiv = document.getElementById('formMessage');
      const form = e.target;
      
      // Get form values
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
      };
      
      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      messageDiv.style.display = 'none';
      
      try {
        // Send to Supabase
        const response = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          // Success!
          messageDiv.className = 'success';
          messageDiv.style.display = 'block';
          messageDiv.textContent = '✓ Thank you! Your message has been sent successfully.';
          form.reset();
          
          // Hide message after 5 seconds
          setTimeout(() => {
            messageDiv.style.display = 'none';
            messageDiv.className = '';
          }, 5000);
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        // Error
        messageDiv.className = 'error';
        messageDiv.style.display = 'block';
        messageDiv.textContent = '✗ Failed to send message. Please try again or email me directly at bzamoramontero35@gmail.com';
        console.error('Error:', error);
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }
});

