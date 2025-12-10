import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for contacting us! This is a demo form.");
    };

    return (
        <div className="contact-page">
            <section className="section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1>Get in Touch</h1>
                    <p className="subheading" style={{ marginTop: '16px', color: 'var(--color-text-main)' }}>
                        Whether you need a Chartered Accountant in Pune or a global offshore finance team, we’re happy to help.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-split">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-block">
                                <h3>📞 Book a Discovery Call</h3>
                                <p>The fastest way to get started is to book a 15-min discovery call.</p>
                                <button className="btn-primary" style={{ marginTop: '16px' }}>Book a time on Calendar</button>
                            </div>

                            <div className="info-block">
                                <h3>📍 Visit Us in Pune</h3>
                                <p><strong>SABS & CO</strong><br />
                                    Office 101, Business Bay,<br />
                                    Baner Road, Pune, Maharashtra 411045<br />
                                    India</p>
                            </div>

                            <div className="info-block">
                                <h3>📧 Email Us</h3>
                                <p>hello@sabs.co.in<br />
                                    careers@sabs.co.in</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h3>Send us a message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="you@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label>I am interested in...</label>
                                    <select>
                                        <option>Chartered Accountancy Service (India)</option>
                                        <option>Global Outsourced Bookkeeping</option>
                                        <option>Careers</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="How can we help?" required></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
