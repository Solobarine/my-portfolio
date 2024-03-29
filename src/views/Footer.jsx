import { socials } from '../data'

const Footer = () => {
  const date = new Date()
  return (
    <footer>
      <div className='socials'>
        {socials.map((icon, index) => (
          <a
            href={icon.url}
            target='noreferrer'
            rel='noreferrer'
            key={index}>
            <img
              src={icon.logo}
              alt={`${icon.name} handle`}
            />
          </a>
        ))}
      </div>
      <p>Copyright &copy; {date.getFullYear()}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
