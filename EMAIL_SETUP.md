# Email Setup Instructions

The contact form is now configured to use EmailJS for sending emails. Follow these steps to complete the setup:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. **Template Name**: "Contact Form Template"
4. **Subject Line**: `New Contact Form Message - {{subject}}`
5. **Email Content** (copy this exactly):

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{from_email}}</div>
          <div style="color: #7f8c8d; font-size: 14px; margin: 5px 0"><strong>Subject:</strong> {{subject}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

6. **Important**: Make sure these exact variable names are used:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{subject}}` - email subject
   - `{{message}}` - email message

7. Click "Save" and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Configure Environment Variables
1. Create a file called `.env.local` in your project root
2. Add these variables with your actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
1. Restart your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

### Template Variables Check
1. Go to your EmailJS dashboard → "Email Templates"
2. Click on your template to edit it
3. **Verify these exact variable names are in your template:**
   - `{{from_name}}` (not `{{name}}` or `{{fromName}}`)
   - `{{from_email}}` (not `{{email}}` or `{{fromEmail}}`)
   - `{{subject}}` (not `{{title}}` or `{{Subject}}`)
   - `{{message}}` (not `{{msg}}` or `{{Message}}`)

### Common Issues
- **400 Error**: Template ID not found → Check your template ID in `.env.local`
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)
- **Email not received**: Check spam folder, verify email service is active
- **Environment variables not loading**: Restart your dev server after creating `.env.local`

### Step-by-Step Template Setup
1. In EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template" or edit existing one
3. **Subject**: `New Contact Form Message - {{subject}}`
4. **Content**: Copy the template exactly as shown above
5. **Test**: Use the "Test" button to send a test email
6. **Save**: Make sure to save the template

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- Perfect for portfolio contact forms
- Upgrade if you need more emails
