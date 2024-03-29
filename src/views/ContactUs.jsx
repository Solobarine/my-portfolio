import Contact from '../components/Contact'
import Earth from '../components/scenes/Earth'
import Space from '../components/scenes/Space'

const ContactUs = () => (
  <section
    className='contact'
    id='contactMe'>
    <Space />
    <div id='contact_component'>
      <Contact />
      <Earth />
    </div>
  </section>
)

export default ContactUs
