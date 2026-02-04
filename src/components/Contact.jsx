import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // EmailJS configuration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'nayeem0412@gmail.com',
                },
                publicKey
            );

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! I will get back to you soon.',
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            content: 'Flat: A8, House: 1B, Road: 12, Kollyanpur, Dhaka - 1207',
            color: 'text-primary-500',
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            content: 'nayeem0412@gmail.com',
            color: 'text-secondary-500',
        },
        {
            icon: FaPhone,
            title: 'Phone',
            content: '01614629336',
            color: 'text-primary-500',
        },
    ];

    const socialLinks = [
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/na', label: 'LinkedIn' },
        { icon: FaFacebook, url: 'https://facebook.com/mohammadabulhayatt/', label: 'Facebook' },
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-purple-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Contact Content */}
                <div className="bg-white rounded-3xl shadow-2xl card-shadow p-8 md:p-12 -mb-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center ${info.color} flex-shrink-0`}>
                                                <info.icon className="text-xl" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-600">{info.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-4">
                                    Follow Me
                                </h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white hover-scale shadow-md hover:shadow-lg transition-default"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="text-xl" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Send Me a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-default"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-default"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-default"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-default resize-none"
                                    ></textarea>
                                </div>

                                {/* Status Message */}
                                {submitStatus.message && (
                                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover-scale shadow-md hover:shadow-lg transition-default ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
