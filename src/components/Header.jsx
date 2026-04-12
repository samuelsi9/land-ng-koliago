export default function Header({ navOpen, onToggleNav, onNavLinkClick }) {
  return (
    <header className={`header${navOpen ? ' nav-open' : ''}`}>
      <a href="#" className="brand" aria-label="Koliago home" onClick={onNavLinkClick}>
        <img src="/img/koliago2.png" className="logo" alt="Koliago logo" />
        <span className="brand-text">
          <span className="brand-text-accent" />
          Koliago
        </span>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#how" className="main-nav-link" onClick={onNavLinkClick}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#cta" className="main-nav-link nav-cta" onClick={onNavLinkClick}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
      <button type="button" className="btn-mobile-nav" onClick={onToggleNav} aria-expanded={navOpen} aria-label="Menu">
        <ion-icon className="icon-mobile-nav icon-mobile-nav--menu" name="menu-outline" />
        <ion-icon className="icon-mobile-nav icon-mobile-nav--close" name="close-outline" />
      </button>
    </header>
  )
}
