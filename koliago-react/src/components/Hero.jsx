import GooglePlayIcon from './GooglePlayIcon.jsx'

const APP_STORE = 'https://apps.apple.com/us/app/koliago/id6760557417'

export default function Hero({ sectionRef }) {
  return (
    <section className="section-hero" ref={sectionRef}>
      <div className="hero-store-links">
        <a
          href={APP_STORE}
          className="store-badge store-badge--apple"
          id="store-badge-header"
          aria-label="Download on the App Store"
        >
          <span className="store-badge__icon" aria-hidden="true">
            <ion-icon name="logo-apple" />
          </span>
          <span className="store-badge__text">
            <span className="store-badge__kicker">Download on the</span>
            <span className="store-badge__store">App Store</span>
          </span>
        </a>
        <a
          href="#"
          className="store-badge store-badge--google js-android-download-modal"
          id="store-badge-google-hero"
          aria-label="Get it on Google Play — Android download info"
        >
          <span className="store-badge__icon" aria-hidden="true">
            <GooglePlayIcon />
          </span>
          <span className="store-badge__text">
            <span className="store-badge__kicker">GET IT ON</span>
            <span className="store-badge__store">Google Play</span>
          </span>
        </a>
      </div>

      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            <span className="hero-heading-line hero-heading-line--highlight" id="background-span">
              Bring the
              <span className="hero-accent">Store</span>
            </span>
            <br />
            to your
            <span className="hero-accent">Door</span>
          </h1>
          <p className="hero-description">
            Koliago delivers farm-fresh groceries in minutes. Explore categories, track your order live, and enjoy
            stress-free shopping every day.
          </p>
          <a href="#how" className="btn btn-full margin-right-sn">
            How to Order
          </a>
          <a href="#how" className="btn btn-outline">
            See Categories
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src="/img/customers/customer-1.jpg" alt="Happy customer 1" />
              <img src="/img/customers/customer-2.jpg" alt="Happy customer 2" />
              <img src="/img/customers/customer-3.jpg" alt="Happy customer 3" />
            </div>
            <p className="delivered-text">
              Make our customers Happy
              <br />
              <span>4.6</span>
              (10.1k review)
            </p>
          </div>
          <div className="hero-floating-items" aria-hidden="true">
            <span className="hero-float hero-float-1">🍒</span>
            <span className="hero-float hero-float-2">🌽</span>
            <span className="hero-float hero-float-3">🌶️</span>
            <span className="hero-float hero-float-4">🍇</span>
          </div>
        </div>
        <div className="hero-img-box">
          <div className="hero-image-wrap">
            <img src="/img/koliago3.png" className="hero-img" alt="Groceries delivery hero image" />
          </div>
        </div>
      </div>
      <div className="hero-phone-strip">
        <div className="container hero-phones-wrap">
          <div className="hero-store-box">
            <h3 className="hero-store-title">
              Grab
              <span className="hero-accent"> Fresh</span>
              Groceries Near You
            </h3>
            <div className="hero-store-links">
              <a
                href={APP_STORE}
                className="store-badge store-badge--apple"
                aria-label="Download on the App Store"
              >
                <span className="store-badge__icon" aria-hidden="true">
                  <ion-icon name="logo-apple" />
                </span>
                <span className="store-badge__text">
                  <span className="store-badge__kicker">Download on the</span>
                  <span className="store-badge__store">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="store-badge store-badge--google js-android-download-modal"
                id="store-badge-google-strip"
                aria-label="Get it on Google Play — Android download info"
              >
                <span className="store-badge__icon" aria-hidden="true">
                  <GooglePlayIcon />
                </span>
                <span className="store-badge__text">
                  <span className="store-badge__kicker">GET IT ON</span>
                  <span className="store-badge__store">Google Play</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hero-phones">
            <img src="/img/app/app-screen-7.png" className="hero-phone hero-phone-left" alt="App screen preview left" />
            <img
              src="/img/app/app-screen-9.png"
              className="hero-phone hero-phone-center"
              alt="App screen preview center"
            />
            <img
              src="/img/app/app-screen-10.png"
              className="hero-phone hero-phone-right"
              alt="App screen preview right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
