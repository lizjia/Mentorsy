import {Card,CardBody,Container, Col,Button, Row , Form, FormCheck} from "reactstrap";
import Image from '../res/emily.JPG';
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const Preferences = () => {

    const [info, setInfo] = useState(false);

    function saveInfo(){
        alert("Info saved!");
        window.location.reload(true)
        sessionStorage.setItem("biography", document.getElementById("bio").value)
        sessionStorage.setItem("work", document.getElementById("work").value)
        sessionStorage.setItem("title", document.getElementById("title").value)
        sessionStorage.setItem("school", document.getElementById("school").value)
        sessionStorage.setItem("education", document.getElementById("education").value)
        sessionStorage.setItem("hometown", document.getElementById("hometown").value)

        window.location.href= '/profile';
    }

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onSwitchAction = () => {
      setIsSwitchOn(!isSwitchOn);
    };


    return ( 
        <div class = "d-flex justify-content-around">
            {/* <div class = "col-1">
            </div> */}
            
            <div class="row">
                <div class="col-6">
                    <div className="container">
                        <form>
                            <div class="form-group">
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Work</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="work" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Job Title</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="title" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">School</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="school" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Education Level</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="education" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Hometown</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="hometown" rows="1"></textarea>
                                </div>
                                
                            </div>
                            <div class = "d-flex justify-content-center">
                            {/* <button type="button" class="btn btn-light btn-lg btn-block">Light</button> */}
                            </div>
                        </form>    
                    </div>    
                        <center>
                        <Button onClick = {event => saveInfo()} outline class="btn btn-light" size="lg" block>Save</Button>
                        </center>
                </div>
                <div class = "col-1">
                </div>
                <div class="col-4">
                    <div className = "row">
                    <div class = "container">
                        <div class = "d-flex justify-content-center">
                            <img src={Image} class="rounded img-fluid d-flex justify-content-center" alt="..."/>
                        </div>
                        <label class="form-label" for="customFile"></label>
                        <input type="file" class="form-control" id="customFile" />  
                    </div>
                    </div>
                    <div className = "row">
                        <div class = "container">
                            {/* the bio */}
                            <div class="form-group">
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Bio</label>
                                    <textarea class="form-control" id="bio" rows="2"></textarea>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Tags</label>
                                    <textarea class="form-control" id="tags" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Preferences;