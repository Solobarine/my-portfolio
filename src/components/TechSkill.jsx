import { motion } from "framer-motion"
import { stagger } from "../data/variants"

const TechSkill = ({data, index}) => {
    const {imgUrl, name} = data
    console.log(data);
  return (
        <div className="tech_skill">
            <img src={imgUrl} alt=""/>
            <p>{name}</p>
        </div>
    )
}

export default TechSkill