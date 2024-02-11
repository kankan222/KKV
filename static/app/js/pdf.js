// window.html2canvas = html2canvas;
// window.jsPDF = window.jspdf.jsPDF

const htmlContent = `<div class="container" style="padding: 2rem; border-radius: 5px; position: relative;">
<div style="padding: 3rem; border-radius: 5px; border: 1px solid rgba(0, 0, 0, 0.5);">
    <div class="field field-image" style="position: absolute; top: 5rem; right: 5rem;">
        <img src="/static/assets/admin-staff/rector.jpg" alt="" style="display: block; width: 150px; height: 150px; object-fit: cover; object-position: center; border-radius: 5px;">
    </div>
    <div>
        <h3 style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">general information</h3>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
        <p><span>Name:</span> <b>Kankan Jyoti Nath</b></p>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
        <p><span>DOB:</span> <b>05/03/2001</b></p>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
        <p><span>Aadhar Card No.:</span> <b>38592798477</b></p>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
        <p><span>Phone Number:</span> +91 <b>6002649802</b></p>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
        <p><span>Email Id:</span> <b>jyotikankan222@gmail.com</b></p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));">
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Gender:</span> <b>Male(M)</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Nationality:</span> <b>Indian</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Religion:</span> <b>Hinduism</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Mother Tongue:</span> <b>Assamese</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Caste:</span> <b>OBC</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Category:</span> <b>NCL</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>School Last Attended:</span> <b>GEHS</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Physical Disability:</span> <b>N/A</b></p>
        </div>
    </div>
    <div>
        <h3 style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">medical information</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem;">
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Blood Group(Compulsory):</span> <b>A+</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Identification Mark(Compulsory):</span> <b>Mole on the neck</b></p>
        </div>
    </div>
    <div>
        <h3 style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">Parent's information</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Father's name:</span> <b>Gopal Chandra Nath</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Qualification:</span> <b>B.Com</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Occupation:</span> <b>Junior Assistant</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Mobile No:</span> +91<b>9874563210</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Email:</span> <b>Gopal Chandra Nath</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Correspondance address:</span> <b>Gopal Chandra Nath</b></p>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Mother's name:</span> <b>Babita Devi</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Qualification:</span> <b>B.Com</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Occupation:</span> <b>Junior Assistant</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Mobile No:</span> +91<b>9874563210</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Email:</span> <b>Gopal Chandra Nath</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Correspondance address:</span> <b>Gopal Chandra Nath</b></p>
        </div>
    </div>
    <div>
        <h3 style="text-transform: uppercase; text-align: center; margin-top: 1rem; text-decoration: underline;">address</h3>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 1rem; ">
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Residential Address:</span> <b>Guwahahti</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>District:</span> <b>Kamrup</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>State:</span> <b>Assam</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Country:</span> <b>India</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Pin Code:</span> <b>782140</b></p>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 18px;">
            <p><span>Class applied for:</span> <b>Class I</b></p>
        </div>
    </div>
</div>
</div>">
`;

const html = document.createElement('div')
html.innerHTML = htmlContent;
html2pdf()
.from(html)
.save();


