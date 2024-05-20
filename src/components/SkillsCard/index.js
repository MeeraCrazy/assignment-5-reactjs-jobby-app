import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {imageUrl, name} = skillDetails

  return (
    <li className="skills-item-container">
      <div className="skills-container">
        <img src={imageUrl} alt={name} className="skills-image" />
        <p className="skills-name">{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
