import image from '../res/photo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSettings } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti'


const Profile = () => {
  return (

    <div class="align-middle">
      <div class="Container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
          <center>
            <img src={image} alt="User Image"></img>
            </center>
            <h1> Lisa Jia</h1>
            <h6> Student at Western University</h6>
          </div>
          <div class="col-sm"></div>
        </div>
        <div class="row">
          <div class="col-sm">
          <center>
            <button className='button-round'> <FiSettings size={75} /> </button>
            </center>
            <h5> Settings</h5>
          </div>
          <div class="col-sm">
          <center>
            <button className='button-round'> <TiPencil size={75} /> </button>
            </center>
            <h5> Edit Profile</h5>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Profile 