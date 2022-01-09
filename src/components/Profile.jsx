import photo from '../res/photo.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {
    return (
        <div class = "d-flex justify-content-around">
        
        <div class="row">
            <div class="col-4">
            <img src={photo} alt="User Photo" size = '96 x 6'></img>
            <h2> Lisa</h2>
            </div>
        </div>
    </div>

    )
}

export default Profile 