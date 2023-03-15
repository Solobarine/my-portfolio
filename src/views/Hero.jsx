import ComputerScene from "../components/scenes/ComputerScene";

const Hero = () => {
  return (
    <section className="hero">
      <div>
      <div id='strip'>
        <div/>
        <div/>
      </div>
      <div id="intro">
        <h1>Hi, I'm&nbsp;<span>Solly</span></h1>
        <p>I am a Fullstack Developer and<br/>I make your web dreams come true.</p>
      </div>
    </div>
      <div id="computer">
        <ComputerScene />
      </div>
    </section>
  )
}

export default Hero
