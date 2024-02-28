async function pdfDownload(type) {
    const id = window.location.search.split('=')[1]
    if (type == 'school') {
        const fet = await fetch(`/pdfdata?pdfid=${id}&type=school`)
        const res = await fet.json()
        // console.log(res.results[0])
        const htmlContent = `<div class=""
    style="padding: 2rem; border-radius: 5px; position: relative; page-break-after: always; margin: 0; box-sizing: border-box;">
    <page size="A4">
        <div style="padding: 3rem; border: 1px solid black;  border-radius: 5px; outline: 1px solid rgba(0, 0, 0, 0.5);">
            <div>
                <h1
                    style="color: hsla(9, 77%, 51%, 0.1); font-size: 10rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: -1;">
                    KKV</h1>
            </div>
            <div class="field field-image" style="position: absolute; top: 5rem; right: 5rem;">
                <img src="/static${res.results[0].photo_url}" alt=""
                    style="display: block; width: 150px; height: 150px; object-fit: cover; object-position: center; border-radius: 5px;">
            </div>
            <div>
                <h3
                    style="text-transform: uppercase; text-align: center; margin-top: 1rem;">
                    general information</h3>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Student-Id:</span> <b>${res.results[0].student_id}</b></p>
        </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                <p><span>Name:</span> <b>${res.results[0].Name}</b></p>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                <p><span>DOB:</span> <b>${new Date(res.results[0].DOB).toLocaleDateString()}</b></p>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                <p><span>Aadhar Card No.:</span> <b>${res.results[0].Aadhaar_no}</b></p>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                <p><span>Phone Number:</span> +91 <b>${res.results[0].ph_no}</b></p>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                <p><span>Email Id:</span> <b>${res.results[0].email}</b></p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));">
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Gender:</span> <b>${res.results[0].gender}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Nationality:</span> <b>${res.results[0].nationality}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Religion:</span> <b>${res.results[0].religion}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px;; font-size: 18px;">
                    <p><span>Mother Tongue:</span> <b>${res.results[0].mother_tongue}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Caste:</span> <b>${res.results[0].caste}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Category:</span> <b>${res.results[0].category}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>School Last Attended:</span> <b>${res.results[0].last_school}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Physical Disability:</span> <b>${res.results[0].ph_disability}</b></p>
                </div>
            </div>
            <div>
                <h3
                    style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">
                    medical information</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem;">
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Blood Group(Compulsory):</span> <b>${res.results[0].blood_group}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Identification Mark(Compulsory):</span> <b>${res.results[0].identification_mark}</b></p>
                </div>
            </div>
            <div>
                <h3
                    style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">
                    Parent's information</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Father's name:</span> <b>${res.results[0].fater_name}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Qualification:</span> <b>${res.results[0].father_qualification}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Occupation:</span> <b>${res.results[0].father_occupation}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Mobile No:</span> <b>${res.results[0].father_ph_no}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Email:</span> <b>${res.results[0].father_email}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Correspondance address:</span> <b>${res.results[0].father_correspondence_address
                    }</b></p>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Mother's name:</span> <b>${res.results[0].mother_name}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Qualification:</span> <b>${res.results[0].mother_qualification}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Occupation:</span> <b>${res.results[0].mother_occupation}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Mobile No:</span> <b>${res.results[0].mother_ph_no}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Email:</span> <b>${res.results[0].mother_email}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Correspondance address:</span> <b>${res.results[0].mother_correspondence_address}</b></p>
                </div>
            </div>
            <div>
                <h3
                    style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">
                    address</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Residential Address:</span> <b>${res.results[0].
                        residential_address}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>District:</span> <b>${res.results[0].district}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>State:</span> <b>${res.results[0].state}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Country:</span> <b>${res.results[0].country}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Pin Code:</span> <b>${res.results[0].pincode}</b></p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                    <p><span>Class applied for:</span> <b>Class ${res.results[0].class_enrolled}</b></p>
                </div>
            </div>
        </div>
    </page>
    </div>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    page[size="A4"]{
        width: 740px;
        height: 1000px;
    }
    </style>
    `;
        const html = document.createElement('div')
        html.innerHTML = htmlContent;
        html2pdf()
            .from(html)
            .save();
    } else {
        const fet = await fetch(`/pdfdata?pdfid=${id}&type=college`)
        const res = await fet.json()
        // console.log(res.results[0])
        const htmlContent = `
        <div>
        <div class=""
            style="padding: 2rem; border-radius: 5px; position: relative; page-break-after: always; margin: 0; box-sizing: border-box;">
            <page size="A4">
                <div style="padding: 3rem; border: 1px solid black; border-radius: 5px; outline: 1px solid rgba(0, 0, 0, 0.5);">
                    <div>
                        <h1
                            style="color: hsla(9, 77%, 51%, 0.1); font-size: 10rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: -1;">
                            KKV</h1>
                    </div>
                    <div class="field field-image" style="position: absolute; top: 5rem; right: 5rem;">
                        <img src="/static${res.results[0].photo}" alt=""
                            style="display: block; width: 150px; height: 150px; object-fit: cover; object-position: center; border-radius: 5px;">
                    </div>
                    <div>
                        <h3
                            style="text-transform: uppercase; text-align: center; margin-top: 1rem; ">
                            general information</h3>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                        <p><span>Student ID:</span> <b>${res.results[0].id}</b></p>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                        <p><span>Name:</span> <b>${res.results[0].name}</b></p>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                        <p><span>DOB:</span> <b>${new Date(res.results[0].dob).toLocaleDateString()}</b></p>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                        <p><span>Phone Number:</span> +91 <b>${res.results[0].phno}</b></p>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                        <p><span>Email Id:</span> <b>${res.results[0].email}</b></p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));">
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Gender:</span> <b>${res.results[0].gender}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Medium:</span> <b>${res.results[0].medium}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Religion:</span> <b>${res.results[0].religion}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Caste:</span> <b>${res.results[0].caste}</b></p>
                        </div>
                    </div>
                    
                    <div>
                        <h3
                            style="text-transform: uppercase; text-align: center; margin-top: 1rem;">
                            address</h3>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Residential Address:</span> <b>${res.results[0].address}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>District:</span> <b>${res.results[0].district}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>State:</span> <b>${res.results[0].state}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Country:</span> <b>${res.results[0].country}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Pin Code:</span> <b>${res.results[0].pincode}</b></p>
                        </div>
                    </div>

                    <div>
                        <h3
                            style="text-transform: uppercase; text-align: center; margin-top: 1rem; ">
                            qualification</h3>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Examination:</span> <b>Class X</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Board:</span> <b>${res.results[0].board}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Percentage:</span> <b>${res.results[0].percentage}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>Year of passing:</span> <b>${res.results[0].yop}</b></p>
                        </div>
                    </div>

                    <div>
                        <h3
                            style="text-transform: uppercase; text-align: center; margin-top: 1rem;">
                            course applied for</h3>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                        <p><span>stream:</span> <b>${res.results[0].stream}</b></p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>subject 1:</span> <b>${res.results[0].sub.split(':')[0]}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>subject 2:</span> <b>${res.results[0].sub.split(':')[1]}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>subject 3:</span> <b>${res.results[0].sub.split(':')[2]}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>subject 4:</span> <b>${res.results[0].sub.split(':')[3]}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>subject 5:</span> <b>${res.results[0].sub.split(':')[4]}</b></p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
                            <p><span>subject 6:</span> <b>${res.results[0].sub.split(':')[5]}</b></p>
                        </div>
                    </div>
                </div>
            </page>
        </div>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            page[size="A4"]{
                width: 740px;
                height: 1000px;
            }
        </style>
    </div>`;
        const html = document.createElement('div')
        html.innerHTML = htmlContent;
        html2pdf()
            .from(html)
            .save();
    }
}




