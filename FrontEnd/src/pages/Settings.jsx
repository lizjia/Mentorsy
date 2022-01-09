import { Container } from "reactstrap";

const Settings = () => {
    return ( 
        <div>
            <Container>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Show visible</label>
                    </div>
                    <div class="form-group">
                    <label for="dropdownMenuButton">Industry</label>
                    <select class="form-select mt-1" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Software Engineering</option>
                    <option value="2">Data Engineering</option>
                    <option value="3">Data Scientist</option>
                    <option value="4">Software Development</option>
                    <option value="5">Analyst</option>
                    <option value="6">Machine Learning</option>
                    </select>
                    
                    </div>
                    <center>
                        <button type="submit" class="btn btn-primary mt-1">Submit</button>
                    </center>
                    </form>
            </Container>
        </div>
       
     );
}
 
export default Settings;