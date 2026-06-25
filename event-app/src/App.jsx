import "./App.css";
import { useState } from "react";

import {
  FaTicketAlt,
  FaCalendarAlt,
  FaUsers,
  FaUser,
  FaPhoneAlt,
  FaStar,
  FaEnvelope
} from "react-icons/fa";

function App() {

  const [tickets, setTickets] = useState(1);

  const [showContactPopup, setShowContactPopup] = useState(false);

  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          Moment Maker
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#categories">Events</a>
          </li>

          <li>
            <a href="#tickets">Tickets</a>
          </li>

          <li>
            <a href="#login">Login</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        <button className="nav-btn">
          Book Now
        </button>

      </nav>

      {/* HERO */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-left">

          <span className="hero-tag">
            #1 Event Management Platform
          </span>

          <h1>
            Create Amazing Events
            Without The Stress
          </h1>

          <p>
            Plan weddings, concerts,
            conferences and festivals
            with one powerful platform.
          </p>

          <div className="hero-buttons">

            <a href="#tickets">
              <button className="primary-btn">
                Book Tickets
              </button>
            </a>

            <a href="#categories">
              <button className="secondary-btn">
                Explore Events
              </button>
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
            alt="event"
          />

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">
          <FaTicketAlt className="icon" />
          <h3>Ticket Booking</h3>
          <p>
            Easy online booking
            system for events.
          </p>
        </div>

        <div className="feature-card">
          <FaCalendarAlt className="icon" />
          <h3>Event Planning</h3>
          <p>
            Manage events with
            ease and confidence.
          </p>
        </div>

        <div className="feature-card">
          <FaUsers className="icon" />
          <h3>Guest Management</h3>
          <p>
            Track and manage
            attendees efficiently.
          </p>
        </div>

        <div className="feature-card">
          <FaStar className="icon" />
          <h3>Premium Experience</h3>
          <p>
            Deliver memorable
            experiences every time.
          </p>
        </div>

      </section>

      {/* EVENT CATEGORIES */}

      <section
        id="categories"
        className="categories"
      >

        <h2>
          Event Categories
        </h2>

        <div className="category-grid">

          <div className="category-card">

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
              alt="Wedding"
            />

            <h3>
              Wedding Events
            </h3>

          </div>

          <div className="category-card">

            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
              alt="Concert"
            />

            <h3>
              Music Festivals
            </h3>

          </div>

          <div className="category-card">

            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80"
              alt="Corporate"
            />

            <h3>
              Corporate Events
            </h3>

          </div>

          <div className="category-card">

            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
              alt="College"
            />

            <h3>
              College Fests
            </h3>

          </div>

        </div>

      </section>
      {/* FEATURED EVENTS */}

      <section className="featured-events">

        <h2>Featured Events</h2>

        <div className="event-grid">

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
              alt="event"
            />
            <h3>Summer Music Fest</h3>
            <p>Live concerts & entertainment.</p>
            <button
  onClick={() =>
    alert(
      "Event Details 🎉\nDate: 15 July 2026"
    )
  }
>
  View Details
</button>
          </div>

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
              alt="event"
            />
            <h3>Luxury Wedding Expo</h3>
            <p>Premium wedding planning solutions.</p>
            <button
  onClick={() =>
    alert(
      "Event Details 🎉\nDate: 30 July 2026"
    )
  }
>
  View Details
</button>
          </div>

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
              alt="event"
            />
            <h3>Business Summit</h3>
            <p>Corporate networking and growth.</p>
            <button
  onClick={() =>
    alert(
      "Event Details 🎉\nDate: 15 August 2026"
    )
  }
>
  View Details
</button>
          </div>

        </div>

      </section>

      {/* TICKET BOOKING */}

      <section
        id="tickets"
        className="booking-section"
      >

        <h2>Book Your Tickets</h2>

        <div className="booking-card">

          <FaTicketAlt className="booking-icon" />

          <h3>Music Festival Ticket</h3>

          <p>₹999 Per Ticket</p>

          <div className="counter">

            <button
              onClick={() =>
                setTickets(
                  tickets > 1
                    ? tickets - 1
                    : 1
                )
              }
            >
              -
            </button>

            <span>{tickets}</span>

            <button
              onClick={() =>
                setTickets(
                  tickets + 1
                )
              }
            >
              +
            </button>

          </div>

          <h4>
            Total: ₹{tickets * 999}
          </h4>
          <div className="payment-section">

  <h3>Select Payment Method</h3>

  <button
    className="pay-btn"
    onClick={() =>
      alert("Opening UPI Payment 📱")
    }
  >
    UPI Payment
  </button>

  <button
    className="pay-btn"
    onClick={() =>
      alert("Opening Card Payment 💳")
    }
  >
    Card Payment
  </button>

</div>

         <button
  className="book-btn"
  onClick={() => setShowBookingPopup(true)}
>
  Confirm Booking
</button>
        </div>

      </section>
      {
  showBookingPopup && (
    <div className="popup-overlay">
      <div className="popup">

        <div className="success-icon">
          🎉
        </div>

        <h2>Booking Successful</h2>

        <p>
          Total Amount ₹{tickets * 999}
        </p>

        <button
          className="popup-btn"
          onClick={() => setShowBookingPopup(false)}
        >
          Done
        </button>

      </div>
    </div>
  )
}

      {/* LOGIN */}

      <section
        id="login"
        className="login-section"
      >

        <h2>Login</h2>

        <div className="login-card">

          <FaUser className="login-icon" />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

         <button
  onClick={() => setShowLoginPopup(true)}
>
  Login
</button>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="contact-section"
      >

        <h2>Contact Us</h2>

        <div className="contact-card">

          <FaEnvelope className="contact-icon" />

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <textarea
            placeholder="Write your message..."
          ></textarea>

          <button
  onClick={() => setShowContactPopup(true)}
>
  Send Message
</button>

        </div>

      </section>
      {
  showLoginPopup && (
    <div className="popup-overlay">
      <div className="popup">
        <div className="success-icon">✓</div>

        <h2>Login Successful</h2>

        <p>
          Welcome back to Moment Maker.
        </p>

        <button
          className="popup-btn"
          onClick={() =>
            setShowLoginPopup(false)
          }
        >
          Continue
        </button>

      </div>
    </div>
  )
}

      {
  showContactPopup && (
    <div className="popup-overlay">

      <div className="popup">

        <div className="success-icon">
          ✓
        </div>

        <h2>
          Message Sent Successfully!
        </h2>

        <p>
          Thank you for contacting us.
          We will get back to you soon.
        </p>

<button
  className="popup-btn"
  onClick={() => setShowContactPopup(false)}
>
  Okay, Got It
</button>      

      </div>

    </div>
  )
}

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-content">

          <div>

            <h2>Moment Maker</h2>

            <p>
              Professional Event
              Management Platform.
            </p>

          </div>

          <div>

            <h3>Quick Links</h3>

            <p>Home</p>
            <p>Events</p>
            <p>Tickets</p>
            <p>Contact</p>

          </div>

          <div>

            <h3>Contact</h3>

            <p>support@momentmaker.com</p>
            <p>+91 9876543210</p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Moment Maker.
          All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;