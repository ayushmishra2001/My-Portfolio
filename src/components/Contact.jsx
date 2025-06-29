import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteContent } from '../data/content.js';

const Contact = () => {
  const { contact, social } = siteContent;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {contact.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 sm:p-3 rounded-lg">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 sm:p-3 rounded-lg">
                  <Phone className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</h4>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 sm:p-3 rounded-lg">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {social.map((link) => {
                  const IconComponent = LucideIcons[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300 touch-manipulation"
                      aria-label={link.name}
                    >
                      <IconComponent className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <CheckCircle className="text-green-500 mx-auto mb-3 sm:mb-4" size={40} />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 touch-manipulation text-sm sm:text-base"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;