import { socials } from "../data"

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        {
          socials.map((icon, index) => (
            <div key={index}><img src={icon.logo} alt={`${icon.name} handle`}/></div>
          ))
        }
      </div>
      <p>Copyright &copy; 2023. All rights reserved.</p>
    </footer>
  )
}

export default Footer
