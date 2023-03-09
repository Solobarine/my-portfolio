import Contact from "../components/Contact"
import Laptop from "../components/scenes/Laptop"
import Space from "../components/scenes/Space"

const ContactUs = () => (
  <section className="contact">
    <Space />
    <div>
      <Contact />
      <Laptop />
    </div>
  </section>
)

export default ContactUs
