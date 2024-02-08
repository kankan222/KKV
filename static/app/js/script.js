async function getPerStudentData(target) {
    document.querySelector('.overlay').classList.remove('hide')
    document.querySelector('.pop-content').classList.remove('hide')
    const fet = await fetch(`/get-each-school-student-data?stid=${target.dataset.stid}`);
    const res = await fet.json()
    console.log(res.result[0])
    renderPopUp(res.result[0], 'form-el')
}

closePopup = function () {
    document.querySelector('.overlay').classList.add('hide')
    document.querySelector('.pop-content').classList.add('hide')
}

function menuBar(target) {
    target.classList.add('hide')
    document.querySelector('.sidebar').style.display = 'block'
    document.querySelector('.operateC').classList.remove('hide')
}

function closeMenuBar(target) {
    target.classList.add('hide')
    document.querySelector('.sidebar').style.display = 'none'
    document.querySelector('.operateM').classList.remove('hide')
}

function renderPopUp(obj, targetClass) {
    const html = `<h4>General Information</h4>
    <div class="first-box">
        <div class="st-img">
            <img src="/static/${obj.photo_url}" alt="student-Photo">
            <button class="btn">View birthCert</button>
        </div>
        <div class="text-box">
            <div class="form-elem">
                <span class="drop-title">Name</span>
                <span class="drop-text">${obj.Name}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">DOB</span>
                <span class="drop-text">${new Date(obj.DOB).toDateString()}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Ph. number</span>
                <span class="drop-text">${obj.ph_no}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Aadhar no.</span>
                <span class="drop-text">${obj.Aadhaar_no}</span>
            </div>

            <div class="form-elem">
                <span class="drop-title">email</span>
                <span class="drop-text">${obj.email}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">gender</span>
                <span class="drop-text">${obj.gender}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Nationality</span>
                <span class="drop-text">${obj.nationality}</span>
            </div>
           
        </div>
        <div class="text-box">
            <div class="form-elem">
                <span class="drop-title">Religion</span>
                <span class="drop-text">${obj.religion}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Mother tongue</span>
                <span class="drop-text">${obj.mother_tongue}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Caste</span>
                <span class="drop-text">${obj.caste}</span>
            </div>

            <div class="form-elem">
                <span class="drop-title">Category</span>
                <span class="drop-text">${obj.category}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Last school</span>
                <span class="drop-text">${obj.last_school}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">ph. disability</span>
                <span class="drop-text">${obj.ph_disability}</span>
            </div>

            <div class="form-elem">
                <span class="drop-title">Class</span>
                <span class="drop-text">${obj.class}</span>
            </div>
           
        </div>
    </div>
    <div class="sec-box">
        <h4>Parent Details</h4>
        <div class="down-text-box">
            <div class="form-elem-down">
                <div class="drop-title">Parents Name</div>
                <div class="drop-text">${obj.father_name}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Qualification</div>
                <div class="drop-text">${obj.father_qualification}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Occupation</div>
                <div class="drop-text">${obj.father_occupation}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Ph no.</div>
                <div class="drop-text">${obj.father_ph_no}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Email</div>
                <div class="drop-text">${obj.father_email}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Corr. add.</div>
                <div class="drop-text">${obj.father_correspondence_address}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Mother name</div>
                <div class="drop-text">${obj.mother_name}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Qualification</div>
                <div class="drop-text">${obj.mother_qualification}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Occupation</div>
                <div class="drop-text">${obj.mother_occupation}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Ph. no</div>
                <div class="drop-text">${obj.mother_ph_no}</div>
            </div>
            <div class="form-elem-down">
                <div class="drop-title">Email</div>
                <div class="drop-text">${obj.mother_email}</div>
            </div>
            <div class="form-elem-down">
                <div class="drop-title">Corr. Add</div>
                <div class="drop-text">${obj.mother_correspondence_address}</div>
            </div>

    </div>
    </div>
    <div class="sec-box">
        <h4>Address</h4>
        <div class="down-text-box">
            <div class="form-elem-down">
                <div class="drop-title">Residential add.</div>
                <div class="drop-text">${obj.residential_address}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">District</div>
                <div class="drop-text">${obj.district}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">State</div>
                <div class="drop-text">${obj.state}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Country</div>
                <div class="drop-text">${obj.country}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Pincode</div>
                <div class="drop-text">${obj.pincode}</div>
            </div>
        </div>
    </div>
    <div class="sec-box">
        <h4>Medical Information</h4>
        <div class="down-text-box">
            <div class="form-elem-down">
                <div class="drop-title">Blood group</div>
                <div class="drop-text">${obj.blood_group}</div>
            </div>
            <div class="form-elem-down">
                <div class="drop-title">Identification Mark</div>
                <div class="drop-text">${obj.identification_mark}</div>
            </div>
        </div>
    </div>`
    document.querySelector(`.${targetClass}`).innerHTML = "";
    document.querySelector(`.${targetClass}`).innerHTML = html
}

async function getCollegeEachStudentData(target) {
    document.querySelector('.overlay').classList.remove('hide')
    document.querySelector('.pop-content').classList.remove('hide')
    const fet = await fetch(`/per-college-student-data?stid=${target.dataset.stid}`);
    const res = await fet.json()
    console.log(res.result[0])
    renderCollegeStudentData(res.result[0], 'form-el')
}

function renderCollegeStudentData(obj, targetClass) {
    const  subj =  obj?.sub.split(':')
    const html = `<h4>General Information</h4>
    <div class="first-box">
        <div class="st-img">
            <img src="/static/${obj.photo}" alt="student-Photo">
            <button class="btn">View birthCert</button>
        </div>
        <div class="text-box">
            <div class="form-elem">
                <span class="drop-title">Name : </span>
                <span class="drop-text">${obj.name}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">DOB : </span>
                <span class="drop-text">${new Date(obj.dob).toDateString()}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Ph. number : </span>
                <span class="drop-text">${obj.phno}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Email : </span>
                <span class="drop-text">${obj.email}</span>
            </div>
        </div>
        <div class="text-box">
            <div class="form-elem">
                <span class="drop-title">Gender : </span>
                <span class="drop-text">${obj.gender}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Caste : </span>
                <span class="drop-text">${obj.caste}</span>
            </div>

            <div class="form-elem">
                <span class="drop-title">Religion : </span>
                <span class="drop-text">${obj.religion}</span>
            </div>
            <div class="form-elem">
                <span class="drop-title">Medium : </span>
                <span class="drop-text">${obj.medium}</span>
            </div>
        </div>
    </div>
    <div class="sec-box">
        <h4>Qualification</h4>
        <div class="down-text-box">
            <div class="form-elem-down">
                <div class="drop-title">Examination</div>
                <div class="drop-text">Class X</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Board</div>
                <div class="drop-text">${obj.board}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Percentage</div>
                <div class="drop-text">${obj.percentage}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Year of Pass</div>
                <div class="drop-text">${obj.yop}</div>
            </div>
    </div>
    </div>
    <div class="sec-box">
        <h4>Address</h4>
        <div class="down-text-box">
            <div class="form-elem-down">
                <div class="drop-title">Residential add.</div>
                <div class="drop-text">${obj.address}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">District</div>
                <div class="drop-text">${obj.district}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">State</div>
                <div class="drop-text">${obj.state}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Country</div>
                <div class="drop-text">${obj.country}</div>
            </div>

            <div class="form-elem-down">
                <div class="drop-title">Pincode</div>
                <div class="drop-text">${obj.pincode}</div>
            </div>
        </div>
    </div>
    <div class="sec-box">
        <h4>Courses Applied</h4>
        <div class="down-text-box">
            <div class="form-elem-down">
                <div class="drop-title">Subject 1</div>
                <div class="drop-text">${subj[0]}</div>
            </div>
            <div class="form-elem-down">
                <div class="drop-title">Subject 2</div>
                <div class="drop-text">${subj[1]}</div>
            </div>
            <div class="form-elem-down">
                <div class="drop-title">Subject 3</div>
                <div class="drop-text">${subj[2]}</div>
            </div>
           <div class="form-elem-down">
                <div class="drop-title">Subject 4</div>
                <div class="drop-text">${subj[3]}</div>
           </div>
            <div class="form-elem-down">
                <div class="drop-title">Subject 5</div>
                <div class="drop-text">${subj[4]}</div>
           </div>
            <div class="form-elem-down">
                <div class="drop-title">Subject 6</div>
                <div class="drop-text">${subj[5]}</div>
            </div>    
        </div>
    </div>
    <div class="sec-box">
    <h4>Documents</h4>
    <div class="down-text-box">
        <div class="form-elem-down">
            <div class="drop-title">MarkSheet</div>
            <button class="btn">view photo</button>
        </div> 
        <div class="form-elem-down">
            <div class="drop-title">School Cert.</div>
            <button class="btn">view photo</button>
        </div> 
    </div>
</div>`
    document.querySelector(`.${targetClass}`).innerHTML = "";
    document.querySelector(`.${targetClass}`).innerHTML = html
}