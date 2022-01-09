import image from '../res/photo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSettings } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti'
import axios from "axios";


const Profile = () => {
  console.log(sessionStorage.getItem("biography"))

  return (

    <div class="align-middle">
      <div class="Container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm">
          <center>
            <img src={image} alt="User Image"></img>
            </center>
            <h1>{sessionStorage.getItem("name")}</h1>
            <h6> {sessionStorage.getItem("biography")}</h6>
          </div>
          <div class="col-sm"></div>
        </div>
        <div class="row">
          <div class="col-sm">
          <center>
            <button className='button-round' onClick = { event => window.location.href = '/settings'}> <FiSettings size={75} /> </button>
            </center>
            <h5> Settings</h5>
          </div>
          <div class="col-sm">
          <center>
            <button className='button-round' onClick = { event => window.location.href = '/preferences'}> <TiPencil size={75} /> </button>
            </center>
            <h5> Edit Profile</h5>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Profile 