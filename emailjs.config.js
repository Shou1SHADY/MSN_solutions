// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// Get them from https://www.emailjs.com/

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id_here',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
};

// Instructions:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
// 4. Get your Service ID, Template ID, and Public Key
// 5. Create a .env.local file with:
//    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
//    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
