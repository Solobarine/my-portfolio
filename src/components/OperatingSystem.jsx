import BallScene from "./scenes/Ball"
import { os } from "../data"

const OperatingSystem = () => {
  return (
    <section className="systems">
      <h2>Operating System</h2>
      <div className="system">
        { os.map((system, index) => (
          <div className="tool" key={index}>
            <BallScene imgUrl={system.imgUrl} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OperatingSystem
