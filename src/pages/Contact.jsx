import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '../data/courses';
import { contactDetails } from '../data/contact';

const initialForm = { name: '', email: '', phone: '', course: '', message: '' };

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="17" height="17" aria-hidden="true" focusable="false">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      fill="#ffffff"
      d="M22.07 18.74c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.2-.44-2.29-1.41-.85-.75-1.42-1.67-1.59-1.95-.17-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.29 3.49 5.55 4.89.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.64-.1 1.94-.79 2.22-1.55.28-.76.28-1.4.2-1.53-.08-.14-.28-.22-.57-.36Z"
    />
    <path
      fill="#ffffff"
      d="M18.72 10.2a5.24 5.24 0 0 1 3.98 1.64 5.42 5.42 0 0 1 1.23 3.2c-.02 1.48-.75 2.76-2.04 3.58l-.02.01c-.93.57-1.6.87-2.53.95-.56.05-1.03.02-1.5-.15l-1.39-.53-.7.18.27.76.34.95c.08.23.15.46.05.69-.1.23-.46.43-1.15.58-.17.04-.34.06-.5.08-.32.03-.63-.03-.93-.15-.73-.29-1.1-.74-1.45-1.39-.39-.72-.59-1.41-.57-2.2.03-.59.24-1.14.51-1.64.35-.6.85-1.11 1.46-1.5.86-.55 1.86-.7 2.82-.44.2.06.39.16.56.26.17.1.31.1.45.03.14-.07.77-.44.95-.65.18-.21.36-.14.61-.09.24.05 1.48.7 1.73.82a.45.45 0 0 1 .18.46.65.65 0 0 1-.1.28c-.12.18-.31.3-.49.48-.18.18-.22.3-.11.52.11.22.32.48.49.69.28.35.57.73.74 1.16.15.38.22.82.09 1.2-.16.46-.53.72-.87.89-.43.22-.85.28-1.26.16-.4-.12-.7-.18-1.09-.3-.34-.1-.73-.03-1.08.18-.08.05-.15.11-.23.18-.16.13-.33.24-.58.2-.08-.01-.16-.04-.23-.08l-.44-.15-.52-.17c-.31-.11-.62-.22-.86-.41-.27-.22-.47-.48-.61-.82-.15-.36-.14-.74-.02-1.12.13-.4.52-.82.82-1.18.26-.3.55-.59.87-.84.42-.33.89-.56 1.39-.73.25-.09.49-.18.74-.25Z"
    />
  </svg>
);

/* Shared input style — white bg, dark text, blue border */
const inputStyle = (err) => ({
  width: '100%', padding: '13px 16px',
  background: '#ffffff',
  border: `1.5px solid ${err ? '#ef4444' : 'rgba(37,99,235,0.22)'}`,
  borderRadius: 10, color: '#0f172a', fontSize: '0.95rem',
  fontFamily: 'Arial, sans-serif',
  outline: 'none', transition: 'border-color 0.25s',
});

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Please write a message';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmissionError('Enquiry sending is not configured yet. Please contact us by email or WhatsApp.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError('');

    const payload = new FormData();
    payload.append('access_key', accessKey);
    payload.append('subject', `New course enquiry from ${form.name.trim()}`);
    payload.append('from_name', 'Karpanai Technologies Website');
    payload.append('replyto', form.email.trim());
    payload.append('name', form.name.trim());
    payload.append('email', form.email.trim());
    payload.append('Phone', form.phone.trim());
    payload.append('Interested Course', form.course);
    payload.append('message', form.message.trim());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The enquiry could not be sent. Please try again.');
      }

      setForm(initialForm);
      setSubmitted(true);
    } catch (error) {
      setSubmissionError(error instanceof Error && error.message !== 'Failed to fetch'
        ? `We couldn't send your enquiry: ${error.message}`
        : 'We couldn’t send your enquiry. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSubmissionError('');
  };

  return (
    <div className="page-enter contact-page" style={{ paddingTop: 70, background: '#f0f7ff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <section className="site-page-hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #dbeafe 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '60px 24px' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>

            {/* ── Left info ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="section-label" style={{ marginBottom: 16, fontFamily: 'Arial, sans-serif' }}>Get In Touch</p>
              <h1 style={{
                fontFamily: 'Arial, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, lineHeight: 1.1, marginBottom: 20,
                background: 'linear-gradient(135deg, #1e40af, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Start Your Journey
              </h1>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: 40 }}>
                Interested in our programs? Send us an enquiry and we'll get back to you.
              </p>

              {[
                { emoji: '📧', label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}` },
                { emoji: '📞', label: 'Phone', value: contactDetails.phone, href: contactDetails.phoneCallUrl, whatsappUrl: contactDetails.whatsappUrl, whatsapp: true },
                { emoji: '📞', label: 'Phone', value: contactDetails.secondaryPhone, href: contactDetails.secondaryPhoneCallUrl },
                { emoji: '📍', label: 'Location', value: contactDetails.location },
              ].map((c) => (
                <div key={`${c.label}-${c.value}`} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                    flexShrink: 0,
                  }}>
                    {c.emoji}
                  </div>
                  <div>
                    <p style={{ color: '#94a3b8', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>{c.label}</p>
                    {c.whatsapp ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>
                          {c.value}
                        </a>
                        <a
                          href={c.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat with Karpanai Technologies on WhatsApp"
                          title="WhatsApp"
                          style={{ display: 'inline-flex', width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#fff' }}
                        >
                          <WhatsAppIcon />
                        </a>
                      </div>
                    ) : c.href ? (
                      <a href={c.href} style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>{c.value}</a>
                    ) : (
                      <p style={{ color: '#0f172a', fontWeight: 600, fontFamily: 'Arial, sans-serif' }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ── Form card ── */}
            <motion.div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(37,99,235,0.15)',
                borderRadius: 24, padding: '40px 36px',
                boxShadow: '0 8px 40px rgba(37,99,235,0.1)',
              }}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    style={{ textAlign: 'center', padding: '40px 0' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div style={{ fontSize: '5rem', marginBottom: 20 }}
                      animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                      🎉
                    </motion.div>
                    <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', marginBottom: 12, color: '#2563eb' }}>
                      Enquiry sent successfully!
                    </h3>
                    <p style={{ color: '#64748b', marginBottom: 28 }}>
                      Thank you! We’ll be in touch soon.
                    </p>
                    <button className="btn-outline" onClick={() => setSubmitted(false)}>
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', marginBottom: 8, color: '#0f172a' }}>
                      Send Enquiry
                    </h2>

                    {/* Name */}
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: 6, fontWeight: 500 }}>Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required disabled={isSubmitting}
                        placeholder="Your full name" style={inputStyle(errors.name)} />
                      {errors.name && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: 6, fontWeight: 500 }}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required disabled={isSubmitting}
                        placeholder="your@email.com" style={inputStyle(errors.email)} />
                      {errors.email && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: 6, fontWeight: 500 }}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} disabled={isSubmitting}
                        placeholder="+91 XXXXX XXXXX" style={inputStyle(false)} />
                    </div>

                    {/* Course */}
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: 6, fontWeight: 500 }}>Interested Course</label>
                      <select name="course" value={form.course} onChange={handleChange} disabled={isSubmitting}
                        style={{ ...inputStyle(false), appearance: 'none', cursor: 'pointer', color: form.course ? '#0f172a' : '#94a3b8' }}>
                        <option value="">Select a course...</option>
                        {courses.map((c) => (
                          <option key={c.slug} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: 6, fontWeight: 500 }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required disabled={isSubmitting}
                        placeholder="Tell us about yourself or your questions..."
                        rows={4} style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: 100 }} />
                      {errors.message && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: 4 }}>{errors.message}</p>}
                    </div>

                    {submissionError && (
                      <p role="alert" style={{ color: '#b91c1c', fontSize: '0.88rem', margin: 0 }}>
                        {submissionError}
                      </p>
                    )}

                    <button type="submit" className="btn-primary" disabled={isSubmitting} style={{
                      marginTop: 8,
                      justifyContent: 'center',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'wait' : 'pointer',
                    }}>
                      <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span><span>{isSubmitting ? '…' : '→'}</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
