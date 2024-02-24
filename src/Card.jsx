import profilepic from './assets/umair.jpg'

function Card(){
    return(
        <div className="card" >
            <img className="card-image" style={{width:"150px" , height:"150px"}} src={profilepic} alt="Profile picture" />
            <h2>Muhammad Umair</h2>
            <p>I am a student of comsats university.</p>

        </div>

    );
}

export default Card