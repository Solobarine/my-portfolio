const TechSkill = ({data, title}) => {

    return (
        <div className="tech_skill">
            <h3>{title}</h3>
            <div className="tech_contents">
                {
                    data.map(item => (
                        <div>
                            <img src={item.imgUrl} alt=""/>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TechSkill