// ==========================================================================
// STORE CONFIG — Direct Sales Links
// ==========================================================================
// Once your Stripe account and product/payment link are set up, paste the
// Stripe Payment Link URL below. Everything else on the site will pick it
// up automatically — no other files need to change.
//
// How to get a Stripe Payment Link:
//   1. Log into dashboard.stripe.com
//   2. Go to Payment Links > Create a new link
//   3. Add your book (price, digital delivery file if selling the ebook
//      directly, or leave file delivery to a separate fulfillment step)
//   4. Copy the generated link (looks like https://buy.stripe.com/xxxxxxx)
//   5. Paste it below, replacing the "#" placeholder
//
// While creating the Payment Link, Stripe lets you set an "After payment"
// redirect. Point that at your live site's thank-you page, e.g.:
//   https://yourdomain.com/thank-you.html
// (thank-you.html is already built and ready on this site.)
// ==========================================================================

const STORE_CONFIG = {
  bookOne: {
    title: "A Symphony of Love in the Big Easy",
    amazonUrl: "#",           // paste real Amazon link here
    directBuyUrl: "https://buy.stripe.com/5kQ5kF645bQjghpa1v63K00",
    directBuyEnabled: true
  },
  scarletFoundation: {
    title: "The Scarlet Foundation",
    amazonUrl: "#",
    directBuyUrl: "#",
    directBuyEnabled: false
  }
};
