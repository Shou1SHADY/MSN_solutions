import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import emailjs from '@emailjs/browser';

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Check if EmailJS is properly configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id' || 
        templateId === 'your_template_id' || 
        publicKey === 'your_public_key') {
      alert("Email service is not configured yet. Please contact us directly or try again later.");
      setIsLoading(false);
      return;
    }

    const formData = {
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setIsSubmitted(true);
        event.target.reset();
        alert("Thank you! Your message has been sent successfully. We'll get back to you ASAP.");
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        if (error.status === 400) {
          alert("Email service configuration error. Please contact us directly or try again later.");
        } else {
          alert("Sorry, there was an error sending your message. Please try again or contact us directly.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? 'Sending...' : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
