const AddressItem = ({icon, label, info}) => {
    return (
        <div className="address-item">
            <i className={`${icon} rounded-border`}></i>
            <div className="address-text">
                <h4>{label}</h4>
                {info.map((info, index) => (
                    <p key={index}>{info}</p>
                ))}
            </div>
        </div>
    )
}

export default AddressItem