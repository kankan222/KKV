const db = require('../../db/db.config')

// school admission form
exports.schoolStudentsForm = async (req, res)=>{
   const sst_photo = req.files['sst-photo'][0].path.replace(/\\/g, '/').split('static')[1]
   const sbc_photo = req.files['sbc-photo'][0].path.replace(/\\/g, '/').split('static')[1]
   const {
      Name, DOB, Aadhaar_no, ph_no, email, gender, nationality, religion,
      mother_tongue, caste, category, last_school, ph_disability, blood_group,
      identification_mark, father_name, father_qualification, father_occupation,
      father_ph_no, father_email, father_correspondence_address, mother_name,
      mother_qualification, mother_occupation, mother_ph_no, mother_email,
      mother_correspondence_address, residential_address, district, state, country,
      pincode, class_enrolled
   } = req.body;

   const q = `INSERT INTO student_information (Name, DOB, Aadhaar_no, ph_no, email, gender, nationality, religion, mother_tongue, caste, category, last_school, ph_disability, blood_group, identification_mark, father_name, father_qualification, father_occupation, father_ph_no, father_email, father_correspondence_address, mother_name, mother_qualification, mother_occupation, mother_ph_no, mother_email, mother_correspondence_address, residential_address, district, state, country, pincode, class_enrolled, photo_url, birth_certificate_url) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
   await db.query(q, [
      Name, DOB, Aadhaar_no, ph_no, email, gender, nationality, religion,
      mother_tongue, caste, category, last_school, ph_disability, blood_group,
      identification_mark, father_name, father_qualification, father_occupation,
      father_ph_no, father_email, father_correspondence_address, mother_name,
      mother_qualification, mother_occupation, mother_ph_no, mother_email,
      mother_correspondence_address, residential_address, district, state, country,
      pincode, class_enrolled, sst_photo, sbc_photo
   ], (err, result) => {
      if (!err) {
         res.status(200).send({msg: "form submitted"})
      } else {
         console.log(err)
         res.status(500).send({msg: "something error occured!"})
      }
   })
}

// school admission form data to admin

exports.renderSchoolFormData = async (req, res)=>{
   const q = `select student_id, Name, ph_no, class_enrolled from student_information;`
   await db.query(q, (err, result)=>{
      if (!err) {
         // res.status(200).send({result})
         res.render('./admin/school/index.ejs', {result})
      }else {
         res.status(500).send({msg: "Internal server error!"})
      }
   })
}

exports.getEachSchoolStudentData = async (req, res)=>{
   const q = `select * from student_information where student_id=${req.query.stid};`
   db.query(q, (err, result)=>{
      if (!err) {
         res.status(200).send({result})
      }else {
         res.status(500).send({msg: "Internal server error!"})
      }
   })
}

// collge admission form
exports.collegeAdmission = async (req, res)=> {
   // console.log(req.body)
   // res.send({msg: "Submitted successfully!!"})
   const st_photo = req.files['st-photo'][0].path.replace(/\\/g, '/').split('static')[1]
   const bc_photo = req.files['bc-photo'][0].path.replace(/\\/g, '/').split('static')[1]
   const ms_photo = req.files['ms-photo'][0].path.replace(/\\/g, '/').split('static')[1]
   const sc_photo = req.files['sc-photo'][0].path.replace(/\\/g, '/').split('static')[1]
   const subjects = req.body.sub.join(':')
   const q = `INSERT INTO college_student_info (name, dob, phno, email, gender, medium, caste, religion, address, district, state, country, pincode, board, percentage, yop, stream, sub, photo, bc_photo, ms_photo, sc_photo) VALUES ('${req.body.name}', '${req.body.date}','${req.body.number}','${req.body.email}','${req.body.gender}','${req.body.medium}','${req.body.caste}','${req.body.religion}','${req.body.resident}','${req.body.district}','${req.body.state}','${req.body.country}','${req.body.pin}','${req.body.board}','${req.body.percent}',${Number(req.body.year)},'${req.body.stream}','${subjects}','${st_photo}','${bc_photo}','${ms_photo}','${sc_photo}');`
   
   await db.query(q, (err, result) => {
       if (!err) {
           res.status(200).send({msg: "college form submitted successsfully!"})
       }else{
           console.log(err)
           res.status(500).send({msg: 'Some error ocurred!'});
       }
   })
   
}

exports.renderCollegeFormData = async (req, res)=>{
   const q = `select id, name, phno, stream from college_student_info;`
   await db.query(q, (err, result)=>{
      if (!err) {
         // res.status(200).send({result})
         res.render('./admin/college/_index.ejs', {result})
      }else {
         res.status(500).send({msg: "Internal server error!"})
      }
   })
}


exports.getEachCollegeStudentData = async (req, res)=>{
   const q = `select * from college_student_info where id=${req.query.stid};`
   db.query(q, (err, result)=>{
      if (!err) {
         res.status(200).send({result})
      }else {
         res.status(500).send({msg: "Internal server error!"})
      }
   })
}

// Gallery controll of college------- --------

exports.collegeGallery = async (req, res) =>{
   res.render('./admin/college/gallery.ejs')
}

exports.insertImageToGallery = async (req, res) =>{
   const q = `insert into gallery (img_link) values ('${req.body.link}')`
}