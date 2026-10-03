import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '../data/courses';
import { contactDetails } from '../data/contact';

const initialForm = { name: '', email: '', phone: '', course: '', message: '' };

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
    <path
      d="M7.5 18.2 5.2 19.3l1.2-2.3A7.7 7.7 0 1 1 18.8 12a7.6 7.6 0 0 1-11.3 6.2Z"
      fill="none"
      stroke="#2563eb"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 9.5h6M9 12h4.5" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
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
