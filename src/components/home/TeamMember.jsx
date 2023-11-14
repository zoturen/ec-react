const TeamMember = ({image, name, title}) => {
    return (
        <div className="team-member">
            <img src={image} alt="kristine palmer" />
            <h6>{name}</h6>
            <p>{title}</p>
        </div>
    )
}

export default TeamMember