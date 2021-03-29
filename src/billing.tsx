import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <img className="logo" src="./images/image4.png" alt="Vien Health Logo"></img>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <img className="doctor" src="./images/DoctorIllustration2.png" alt="Doctor on computer"></img> 
        <form action="#">
            <input id="back" type="image" src="./images/back.png" alt= "Back Button" />
        </form> 
        <a className="skip" href="#">Skip</a>
        <h1>Profile</h1>
        <p>Just a few more steps to complete your profile!</p>
        <form className="profile" action="#">
            <input id="dob" type="text" name="dob" placeholder="Date of Birth (MM/DD/YYYY)" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"/><br/><br/>
            <select id="gender" name="gender">
                <option value="Gender" disabled selected hidden>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select><br/>
            <label for="modal-btn">Submit a profile photo<button className="modal-btn" id="modal_btn">Upload</button>
            <div class="modal-container" id="modal_container">
                <div class="modal">
                    <h2>Upload a Profile Photo</h2>
                    <p class="text">This will be added to your professional profile for patients to see.</p>
                    <dev class="drop">
                    <img class="cloud" src="./images/cloud.png"></img>
                    <label class="browseLabel" for="browse">Drop file here or <button class="browse">browse computer</button></label>
                    </dev>
                    <button id="close">
                        X
                    </button>
                </div>
            </div>
            </label><br/><br/>
            <input class="submit" type="submit" value="Next"/>
        </form>
        <p class="bottom">2021 Vien Health</p>
        <a className="terms" href="#">Terms and Conditions</a>
        <a className="privacy" href="#">Privacy Policy</a>
    </div>,
    document.querySelector('#billing')
)

const modalBtn = document.getElementById('modal_btn');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('close');

modalBtn.addEventListener('click', () => {
    modalContainer.style.visibility = 'visible';
    modalContainer.style.pointerEvents = 'auto';
});

close.addEventListener('click', () => {
    modalContainer.style.visibility = 'hidden';
    modalContainer.style.pointerEvents = 'none';
});
