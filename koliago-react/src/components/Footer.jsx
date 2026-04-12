import GooglePlayIcon from './GooglePlayIcon.jsx'

const APP_STORE = 'https://apps.apple.com/us/app/koliago/id6760557417'
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-stores" role="navigation" aria-label="Download the app">
          <a
            href={APP_STORE}
            className="store-badge store-badge--apple store-badge--footer"
            id="store-badge-footer-apple"
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
            className="store-badge store-badge--google store-badge--footer js-android-download-modal"
            id="store-badge-footer-google"
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

        <ul className="footer-social" aria-label="Social media">
          <li>
            <a href="#" className="footer-social-btn" aria-label="Koliago on LinkedIn">
              <ion-icon name="logo-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-btn" aria-label="Koliago on Instagram">
              <ion-icon name="logo-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-btn" aria-label="Koliago on X (Twitter)">
              <ion-icon name="logo-twitter" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <nav className="footer-links" aria-label="Site links">
          <div className="footer-links-grid">
            <ul className="footer-links-col">
              <li>
                <a href="#cta" className="footer-plain-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer-plain-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-plain-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="footer-plain-link">
                  Support Center
                </a>
              </li>
            </ul>
            <ul className="footer-links-col">
              <li>
                <a href="#how" className="footer-plain-link">
                  How it works
                </a>
              </li>
              <li>
                <a href="#how" className="footer-plain-link">
                  Categories
                </a>
              </li>
              <li>
                <a href="#price" className="footer-plain-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer-plain-link">
                  About Koliago
                </a>
              </li>
            </ul>
            <ul className="footer-links-col">
              <li>
                <a href={APP_STORE} className="footer-plain-link">
                  App Store
                </a>
              </li>
              <li>
                <a href="#" className="footer-plain-link js-android-download-modal">
                  Google Play
                </a>
              </li>
              <li>
                <a href="#how" className="footer-plain-link">
                  Fresh deals
                </a>
              </li>
              <li>
                <a href="#" className="footer-plain-link">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <p className="footer-attribution">
          Made with <span className="footer-attribution__heart" aria-label="love">&#9829;</span> by{' '}
          <span className="footer-attribution__brand">Codigo</span> &copy; {year}
        </p>
      </div>
    </footer>
  )
}
