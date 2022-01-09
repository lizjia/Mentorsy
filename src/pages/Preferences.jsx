import {Card,CardBody,Container, Col,Button, Row , Form, FormCheck} from "reactstrap";
import Image from '../res/emily.JPG';
import {React, useState} from 'react';
import CustomButton from '../components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const Preferences = () => {

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onSwitchAction = () => {
      setIsSwitchOn(!isSwitchOn);
    };

    function infoSaved(){
        alert("Info saved!");
        window.location.reload(true)
    }


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
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Job Title</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">School</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Education Level</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Hometown</label>
                                    <BootstrapSwitchButton
                                        onstyle="light" offstyle="outline-dark" style="border"
                                        onlabel='Visible'
                                        offlabel='Not Visible'
                                        onChange={onSwitchAction}/>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                
                            </div>
                            <div class = "d-flex justify-content-center">
                            {/* <button type="button" class="btn btn-light btn-lg btn-block">Light</button> */}
                            </div>
                        </form>    
                    </div>    
                        <center>
                        <Button outline class="btn btn-light" size="lg" block>Save</Button>
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
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="row">
                                    <label for="text1" class="font-weight-bold">Tags</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
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