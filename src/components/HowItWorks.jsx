const steps = [
  {
    variant: 'a',
    badge: '01',
    title: 'Choose your grocery preferences',
    text: 'Browse fresh produce, pantry essentials, and daily offers. Save your favorites and build your basket in seconds.',
    img: '/img/app/app-screen-14.png',
    alt: 'Koliago app — browse and preferences',
  },
  {
    variant: 'b',
    badge: '02',
    title: 'Confirm your cart and address',
    text: 'Choose your delivery slot, payment method, and any notes. Koliago confirms your order right away.',
    img: '/img/app/app-screen-15.png',
    alt: 'Koliago app — cart and checkout',
  },
  {
    variant: 'c',
    badge: '03',
    title: 'Receive your order at your door',
    text: 'Track your rider in real time and get groceries fast, fresh, and safely packed whenever you need them.',
    img: '/img/app/app-screen-16.png',
    alt: 'Koliago app — delivery tracking',
  },
  {
    variant: 'd',
    badge: '04',
    title: 'Finalize delivery details',
    text: 'Double-check your slot and address, add delivery instructions, and you are set — we will handle the rest.',
    img: '/img/app/app-screen-18.png',
    alt: 'Koliago app — order confirmation',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <div className="how-intro">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">How does ordering work?</h2>
          <p className="how-intro__lead">
            From picking products to doorstep delivery, Koliago keeps every step clear and quick — so you spend less
            time shopping and more time enjoying fresh food.
          </p>
          <a href="#how" className="how-intro__cta">
            Browse categories
          </a>
        </div>

        <div className="how-steps">
          {steps.map((s) => (
            <article key={s.badge} className={`how-step-card how-step-card--${s.variant}`}>
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
  )
}
