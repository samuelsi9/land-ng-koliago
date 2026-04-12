export default function DiscountBanner() {
  return (
    <section className="section-discount">
      <div className="container discount-banner">
        <div className="discount-brand">
          <h3>KOLIAGO</h3>
          <p>PREMIUM CUSTOMER</p>
        </div>
        <div className="discount-copy">
          Want additional discounts every shopping day? Enjoy a variety of special offers and experience better value on
          every order. Join Koliago Premium now.
        </div>
        <div className="discount-actions">
          <a href="#cta" className="discount-btn">
            Join Now
          </a>
          <a href="#price" className="discount-btn discount-btn-outline">
            More Info
          </a>
        </div>
      </div>
    </section>
  )
}
