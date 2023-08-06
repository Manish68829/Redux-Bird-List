
function Profile1(props){
    return(
        <div>
            <h1>Amazing scientists</h1>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
            <img src={props.image} alt="Katherine Johnson"/>
        </div>
    )
}

export default Profile1;