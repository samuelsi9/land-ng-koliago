const steps = [
  {
    variant: "a",
    badge: "01",
    title: "Browse and add to cart",
    text: "Explore fresh groceries and add your favorite items to your cart in just a few taps.",
    img: "/img/app/app-screen-14.png",
    alt: "Koliago app — browse and preferences",
  },
  {
    variant: "b",
    badge: "02",
    title: "Confirm your cart and address",
    text: "Review your selected items and choose your delivery address and quickly.",
    img: "/img/app/app-screen-15.png",
    alt: "Koliago app — cart and checkout",
  },
  {
    variant: "c",
    badge: "03",
    title: "Select delivery time",
    text: "Pick a convenient date and time that fits your schedule.",
    img: "/img/app/app-screen-16.png",
    alt: "Koliago app — delivery tracking",
  },
  {
    variant: "d",
    badge: "04",
    title: "Place your order",
    text: "Confirm everything and place your order — we’ll handle the rest and deliver to your place.",
    img: "/img/app/app-screen-18.png",
    alt: "Koliago app — order confirmation",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <div className="how-intro">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">How does ordering work?</h2>
          <p className="how-intro__lead">
            From fresh picks to fast delivery, Koliago makes grocery shopping
            simple, clear, and quick — so you can spend less time shopping and
            more time enjoying your meals.
          </p>
          <a href="#how" className="how-intro__cta">
            Browse categories
          </a>
        </div>

        <div className="how-steps">
          {steps.map((s) => (
            <article
              key={s.badge}
              className={`how-step-card how-step-card--${s.variant}`}
            >
              <div className="how-step-card__body">
                <span className="how-step-card__badge">{s.badge}</span>
                <h3 className="how-step-card__title">{s.title}</h3>
                <p className="how-step-card__text">{s.text}</p>
              </div>
              <div className="how-step-card__visual">
                <div className="how-step-card__frame">
                  <img src={s.img} className="step-img" alt={s.alt} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
