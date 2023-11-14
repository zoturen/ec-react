const ChooseUsItem = ({icon, title, description}) => {
    return (
        <li>
        <span><i className={icon}></i></span>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        </li>
    )
}

export default ChooseUsItem