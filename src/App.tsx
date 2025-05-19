import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faTruck, 
  faCalendarAlt, 
  faLeaf, 
  faRecycle,
  faMapMarkerAlt,
  faClock,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <FontAwesomeIcon icon={faTruck} className="logo-icon" />
            <span>Inver Grove Sanitation</span>
          </div>
          <div className="nav-links">
            <Link to="overview" smooth={true} duration={500}>Overview</Link>
            <Link to="services" smooth={true} duration={500}>Services</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
            <Link to="yard-waste" smooth={true} duration={500}>Yard Waste</Link>
            <Link to="holidays" smooth={true} duration={500}>Holidays</Link>
          </div>
        </div>
      </nav>

      <header className="hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Inver Grove Sanitation</h1>
          <p className="hero-subtitle">Local family owned and operated since 1997</p>
          <div className="hero-cta">
            <Link to="contact" smooth={true} duration={500} className="cta-button primary">
              Contact Us
            </Link>
            <a href="tel:651-457-1615" className="cta-button secondary">
              <FontAwesomeIcon icon={faPhone} />
              Call Now
            </a>
          </div>
        </div>
      </header>

      <section id="overview" className="section">
        <div className="container">
          <h2>Company Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <img src="/images/professional-service.jpg" alt="Professional Service" className="card-image" />
              <FontAwesomeIcon icon={faTruck} className="section-icon" />
              <h3>Professional Service</h3>
              <p>Reliable garbage and recycling collection for your home or business</p>
            </div>
            <div className="overview-card">
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" alt="Service Area" className="card-image" />
              <FontAwesomeIcon icon={faMapMarkerAlt} className="section-icon" />
              <h3>Service Area</h3>
              <p>Servicing Inver Grove Heights, South St. Paul, Rosemount and Coates</p>
            </div>
            <div className="overview-card">
              <img src="/images/pickup.jpg" alt="Timely Pickup" className="card-image" />
              <FontAwesomeIcon icon={faClock} className="section-icon" />
              <h3>Timely Pickup</h3>
              <p>Consistent and reliable service on your scheduled days</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img 
                src="/images/ResidentialCollection.jpg" 
                alt="Residential Collection" 
                className="card-image"
              />
              <FontAwesomeIcon icon={faTruck} className="service-icon" />
              <h3>Residential Collection</h3>
              <p>Weekly garbage and recycling pickup for your home</p>
            </div>
            <div className="service-card">
              <img 
                src="/images/RecyclingServices.jpg" 
                alt="Recycling Services" 
                className="card-image"
              />
              <FontAwesomeIcon icon={faRecycle} className="service-icon" />
              <h3>Recycling Services</h3>
              <p>Environmentally responsible waste management</p>
            </div>
            <div className="service-card">
              <img 
                src="/images/YardWaste.jpg" 
                alt="Yard Waste" 
                className="card-image"
              />
              <FontAwesomeIcon icon={faLeaf} className="service-icon" />
              <h3>Yard Waste</h3>
              <p>Seasonal yard waste collection and disposal</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>We're here to help with all your waste management needs</p>
              <div className="contact-list">
                <a href="tel:651-457-1615" className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <span className="label">Main Phone</span>
                    <span className="value">651-457-1615</span>
                  </div>
                </a>
                <a href="tel:651-336-9979" className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <span className="label">Support Line</span>
                    <span className="value">651-336-9979</span>
                  </div>
                </a>
                <a href="mailto:Igsanitation97@gmail.com" className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <span className="label">Email</span>
                    <span className="value">Igsanitation97@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Request Information</h3>
              <a href="mailto:Igsanitation97@gmail.com" className="cta-button primary">
                <FontAwesomeIcon icon={faEnvelope} />
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="yard-waste" className="section yard-waste-section">
        <div className="container">
          <h2>Yard Waste Collection</h2>
          <div className="yard-waste-content">
            <div className="yard-waste-info">
              <img src="/images/yard-waste.jpg" alt="Yard Waste" className="section-image" />
              <FontAwesomeIcon icon={faLeaf} className="section-icon" />
              <p>Please contact us prior to your service day with how many bags you will have.</p>
              <div className="notice">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>YARD WASTE COLLECTION ENDS THE WEEK OF NOV 11</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="holidays" className="section holiday-section">
        <div className="container">
          <h2>Holiday Schedule</h2>
          <div className="holiday-content">
            <FontAwesomeIcon icon={faCalendarAlt} className="section-icon" />
            <div className="holiday-list">
              <div className="holiday-item">
                <h3>Thanksgiving (Nov 28, 2024)</h3>
                <p>Thursday routes delayed 1 day</p>
              </div>
              <div className="holiday-item">
                <h3>Christmas Day (Dec 25, 2024)</h3>
                <p>Wednesday & Thursday routes delayed 1 day</p>
              </div>
              <div className="holiday-item">
                <h3>New Year's Day (Jan 1, 2025)</h3>
                <p>Wednesday & Thursday routes delayed 1 day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <FontAwesomeIcon icon={faTruck} />
              <span>Inver Grove Sanitation</span>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Inver Grove Sanitation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
