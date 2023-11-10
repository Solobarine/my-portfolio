import { useRef } from 'react';

const Menu = ({ isOpen, setIsOpen }) => {
  const ref = useRef();

  const toggle = () => {
    // ref.current.style.top = '-200px';
    setIsOpen(!isOpen);
  };
  return (
    <div
      ref={ref}
      id='menu'>
      <a
        href='#landing'
        onClick={toggle}>
        Home
      </a>
      <a
        href='#about'
        onClick={toggle}>
        About Me
      </a>
      <a
        href='#education'
        onClick={toggle}>
        Education
      </a>
      <a
        href='#works'
        onClick={toggle}>
        Projects
      </a>
      <a
        href='#contactMe'
        onClick={toggle}>
        Contact Me
      </a>
    </div>
  );
};

export default Menu;
