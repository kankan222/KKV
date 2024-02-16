async function getPerStudentData(target) {
    document.querySelector('.modal-container').classList.remove('hide')
    const fet = await fetch(`/get-each-school-student-data?stid=${target.dataset.stid}`);
    const res = await fet.json()
    console.log(res.result[0])
    renderPopUp(res.result[0], 'mainModal')
}

closeModalwindow = function () {
    document.querySelector('.modal-container').classList.add('hide')
}

function renderPopUp(obj, targetClass) {
    const html = `<h4 class="uppercase color">General information</h4>
    <span id="closeModal" onclick="closeModalwindow()"><i class="uil uil-multiply"></i></span>
    <div class="p-flex">
        <img src="/static/${obj.photo_url}" alt="img">
        <div class="g-grid">
            <div class="element">
                <span class="uppercase">name</span>
                <p class="pname">${obj.Name}</p>
            </div>
            <div class="element">
                <span class="uppercase">DOB</span>
                <p class="pname">${new Date(obj.DOB).toDateString()}</p>
            </div>
            <div class="element">
                <span class="uppercase">Aadhaar Card No.</span>
                <p class="pname">${obj.Aadhaar_no}</p>
            </div>
            <div class="element">
                <span class="uppercase">Phone Number</span>
                <p class="pname">+91 ${obj.ph_no}</p>
            </div>
            <div class="element">
                <span class="uppercase">Email Id</span>
                <p class="pemail">${obj.email}</p>
            </div>
            <div class="element">
                <span class="uppercase">Gender</span>
                <p class="pname">${obj.gender}</p>
            </div>
        </div>
    </div>

    <br>

    <div class="e-grid g-grid">
        <div class="element">
            <span class="uppercase">NAtionality</span>
            <p class="pname">${obj.nationality}</p>
        </div>
        <div class="element">
            <span class="uppercase">Religion</span>
            <p class="pname">${obj.religion}</p>
        </div>
        <div class="element">
            <span class="uppercase">Mother Tongue</span>
            <p class="pname">${obj.mother_tongue}</p>
        </div>
        <div class="element">
            <span class="uppercase">Caste</span>
            <p class="pname">${obj.caste}</p>
        </div>
        <div class="element">
            <span class="uppercase">Category</span>
            <p class="pname">${obj.category}</p>
        </div>
        <div class="element">
            <span class="uppercase">Physical Problems/Disability</span>
            <p class="pname">${obj.ph_disability}</p>
        </div>
        <div class="element">
            <span class="uppercase">Class Applied for</span>
            <p class="pname">${obj.class_enrolled}</p>
        </div>
        <div class="element">
            <span class="uppercase">School Last Attended</span>
            <p class="pname">${obj.last_school}</p>
        </div>
    </div>

    <h4 class="uppercase color">Medical information</h4>
    <div class="g-grid">
        <div class="element">
            <span class="uppercase">Blood Group(Compulsory)</span>
            <p class="pname">${obj.blood_group}</p>
        </div>
        <div class="element">
            <span class="uppercase">Identification Mark(Compulsory)</span>
            <p class="pname">${obj.identification_mark}</p>
        </div>
    </div>

    <h4 class="uppercase color">PARENT'S INFORMATION</h4>
    <div class="g-grid e-grid">
        <div class="element">
            <span class="uppercase">Father's name</span>
            <p class="pname">${obj.father_name}</p>
        </div>
        <div class="element">
            <span class="uppercase">Qualification</span>
            <p class="pname">${obj.father_qualification}</p>
        </div>
        <div class="element">
            <span class="uppercase">Occupation</span>
            <p class="pname">${obj.father_occupation}</p>
        </div>
        <div class="element">
            <span class="uppercase">Mobile no.</span>
            <p class="pname">${obj.father_ph_no}</p>
        </div>
        <div class="element">
            <span class="uppercase">Email</span>
            <p class="pname">${obj.father_email}</p>
        </div>
        <div class="element">
            <span class="uppercase">Correspondence address</span>
            <p class="pname">${obj.father_correspondence_address}</p>
        </div>
    </div>
    <br>
    <div class="g-grid e-grid">
        <div class="element">
            <span class="uppercase">Mother's name</span>
            <p class="pname">${obj.mother_name}</p>
        </div>
        <div class="element">
            <span class="uppercase">Qualification</span>
            <p class="pname">${obj.mother_qualification}</p>
        </div>
        <div class="element">
            <span class="uppercase">Occupation</span>
            <p class="pname">${obj.mother_occupation}</p>
        </div>
        <div class="element">
            <span class="uppercase">Mobile no.</span>
            <p class="pname">${obj.mother_ph_no}</p>
        </div>
        <div class="element">
            <span class="uppercase">Email</span>
            <p class="pname">${obj.mother_email}</p>
        </div>
        <div class="element">
            <span class="uppercase">Correspondence address</span>
            <p class="pname">${obj.mother_correspondence_address}</p>
        </div>
    </div>

    <h4 class="uppercase color">address</h4>
    <div class="g-grid e-grid">
        <div class="element">
            <span class="uppercase">Residential Address</span>
            <p class="pname">${obj.residential_address}</p>
        </div>
        <div class="element">
            <span class="uppercase">District</span>
            <p class="pname">${obj.district}</p>
        </div>
        <div class="element">
            <span class="uppercase">State</span>
            <p class="pname">${obj.state}</p>
        </div>
        <div class="element">
            <span class="uppercase">Country</span>
            <p class="pname">${obj.country}</p>
        </div>
        <div class="element">
            <span class="uppercase">Pin Code</span>
            <p class="pname">${obj.pincode}</p>
        </div>
    </div>
    <a class="btn" onclick="photoPopup()">View Birth Certificate <i class="uil uil-image"></i></a>`
    document.querySelector(`.${targetClass}`).innerHTML = "";
    document.querySelector(`.${targetClass}`).innerHTML = html
}
function photoPopup(){
    document.querySelector(`.cPopup`).classList.remove(`hide`);
    document.querySelector(`.mainModal`).classList.add(`hide`);
}
function photoHide(){
    document.querySelector(`.cPopup`).classList.add(`hide`);
    document.querySelector(`.mainModal`).classList.remove(`hide`);
}

async function getCollegeEachStudentData(target) {
    document.querySelector('.modal-container').classList.remove('hide')
    const fet = await fetch(`/per-college-student-data?stid=${target.dataset.stid}`);
    const res = await fet.json()
    console.log(res.result[0])
    renderCollegeStudentData(res.result[0], 'mainModal')
}

function renderCollegeStudentData(obj, targetClass) {
    const  subj =  obj?.sub.split(':')
    const html = `<h4 class="uppercase color">General information</h4>
    <span id="closeModal" onclick="closeModalwindow()"><i class="uil uil-multiply"></i></span>
    <div class="p-flex">
        <img src="/static${obj.photo}" alt="img">
        <div class="g-grid">
            <div class="element">
                <span class="uppercase">name</span>
                <p class="pname">${obj.name}</p>
            </div>
            <div class="element">
                <span class="uppercase">DOB</span>
                <p class="pname">${new Date(obj.dob).toDateString()}</p>
            </div>
            <div class="element">
                <span class="uppercase">Phone Number</span>
                <p class="pname">+91 ${obj.phno}</p>
            </div>
            <div class="element">
                <span class="uppercase">Email Id</span>
                <p class="pemail">${obj.email}</p>
            </div>
            <div class="element">
                <span class="uppercase">Gender</span>
                <p class="pname">${obj.gender}</p>
            </div>
            <div class="element">
                <span class="uppercase">Medium</span>
                <p class="pname">${obj.medium}</p>
            </div>
            <div class="element">
            <span class="uppercase">Religion</span>
            <p class="pname">${obj.religion}</p>
        </div>
        <div class="element">
            <span class="uppercase">Caste</span>
            <p class="pname">${obj.caste}</p>
        </div>
        </div>
    </div>

    <h4 class="uppercase color">address</h4>
    <div class="g-grid f-grid">
        <div class="element">
            <span class="uppercase">Residential Address</span>
            <p class="pname">${obj.address}</p>
        </div>
        <div class="element">
            <span class="uppercase">District</span>
            <p class="pname">${obj.district}</p>
        </div>
        <div class="element">
            <span class="uppercase">State</span>
            <p class="pname">${obj.state}</p>
        </div>
        <div class="element">
            <span class="uppercase">Country</span>
            <p class="pname">${obj.country}</p>
        </div>
        <div class="element">
            <span class="uppercase">Pin Code</span>
            <p class="pname">${obj.pincode}</p>
        </div>
    </div>
    <h4 class="uppercase color">Qualification</h4>
    <div class="g-grid e-grid">
        <div class="element">
            <span class="uppercase">Examination</span>
            <p class="pname">Class X</p>
        </div>
        <div class="element">
            <span class="uppercase">board</span>
            <p class="pname">${obj.board}</p>
        </div>
        <div class="element">
            <span class="uppercase">percentge</span>
            <p class="pname">${obj.percentage}</p>
        </div>
        <div class="element">
            <span class="uppercase">Year of passing</span>
            <p class="pname">${obj.yop}</p>
        </div>
    </div>
    <h4 class="uppercase color">Course applied for</h4>
    <div class="g-grid e-grid">
        <div class="element">
            <span class="uppercase">Stream</span>
            <p class="pname">${obj.stream}</p>
        </div>
        <div class="element">
            <span class="uppercase">subject 1</span>
            <p class="pname">${subj[0]}</p>
        </div>
        <div class="element">
            <span class="uppercase">subject 2</span>
            <p class="pname">${subj[1]}</p>
        </div>
        <div class="element">
            <span class="uppercase">subject 3</span>
            <p class="pname">${subj[2]}</p>
        </div>
        <div class="element">
            <span class="uppercase">subject 4</span>
            <p class="pname">${subj[3]}</p>
        </div>
        <div class="element">
            <span class="uppercase">subject 5</span>
            <p class="pname">${subj[4]}</p>
        </div>
        <div class="element">
            <span class="uppercase">subject 6</span>
            <p class="pname">${subj[5]}</p>
        </div>
    </div>
    <h4 class="uppercase color">View Documents</h4>
    <div class="g-grid v-btn">
    <a class="btn" onclick="photoPopup()">View Birth Certificate <i class="uil uil-image"></i></a>
    <a class="btn" onclick="photoPopup()">View Marksheet <i class="uil uil-file-minus"></i></a>
    <a class="btn" onclick="photoPopup()">View School Certificate <i class="uil uil-file"></i></a>
    </div>`
    document.querySelector(`.${targetClass}`).innerHTML = "";
    document.querySelector(`.${targetClass}`).innerHTML = html
}
