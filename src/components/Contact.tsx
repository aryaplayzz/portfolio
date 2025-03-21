import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { PortfolioData } from '../types/portfolio';

interface ContactProps {
  data: Pick<PortfolioData, 'name' | 'email' | 'github' | 'linkedin'>;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all fields.',
      });
      setLoading(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.',
      });
      setLoading(false);
      return;
    }

    try {
      // My EmailJS credentials
      const serviceId = 'service_nn2hvcz'; // Your service ID
      const templateId = 'template_6pv4fwb'; // Your template ID
      const publicKey = 'eK0swvp58DAg6BiC5'; // Your public key
      
      // Prepare template parameters to match EmailJS template variables
      // This ensures the visitor's email is used as the reply-to address
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: data.name,
        from_name: formData.name,
        from_email: formData.email,
        subject: `New Contact Form Message from ${formData.name}`,
        reply_to: formData.email
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.text === 'OK') {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I will get back to you as soon as possible.',
        });
        // Reset form fields
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-indigo-50 opacity-70"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-50 opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get In Touch
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left column - Contact Info */}
              <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-700 md:w-1/2 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <p className="mt-2 text-indigo-100">
                    Reach out and let's start a conversation
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <button 
                        onClick={copyEmailToClipboard}
                        className="ml-3 text-indigo-100 hover:text-white hover:underline transition-colors duration-300 flex items-center"
                      >
                        {data.email}
                        <span className={`ml-2 text-xs bg-indigo-500 px-2 py-1 rounded-full transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                          Copied!
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-medium">Connect with me</h3>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors duration-300"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors duration-300"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Contact Form */}
              <div className="p-8 md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900">Send me a message</h3>
                
                {formStatus.submitted && (
                  <div className={`mt-4 p-3 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="How can I help you? - Please include your email address in the message for me to get back to you."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 