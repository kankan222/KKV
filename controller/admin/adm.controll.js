const db = require('../../db/db.config')

// school admission form
exports.schoolStudentsForm = async (req, res) => {
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
         res.status(200).redirect('/school/schoolpdf')
      } else {
         console.log(err)
         res.status(500).send({ msg: "something error occured!" })
      }
   })
}

// school admission form data to admin

exports.renderSchoolFormData = async (req, res) => {
   const q = `select student_id, Name, ph_no, class_enrolled from student_information;`
   await db.query(q, (err, result) => {
      if (!err) {
         // res.status(200).send({result})
         res.render('./admin/school/index.ejs', { result })
      } else {
         res.status(500).send({ msg: "Internal server error!" })
      }
   })
}

exports.getEachSchoolStudentData = async (req, res) => {
   const q = `select * from student_information where student_id=${req.query.stid};`
   db.query(q, (err, result) => {
      if (!err) {
         res.status(200).send({ result })
      } else {
         res.status(500).send({ msg: "Internal server error!" })
      }
   })
}

// collge admission form
exports.collegeAdmission = async (req, res) => {
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
         res.status(200).redirect('/school/schoolpdf')
      } else {
         console.log(err)
         res.status(500).send({ msg: 'Some error ocurred!' });
      }
   })

}

exports.renderCollegeFormData = async (req, res) => {
   const q = `select id, name, phno, stream from college_student_info;`
   await db.query(q, (err, result) => {
      if (!err) {
         // res.status(200).send({result})
         res.render('./admin/college/_index.ejs', { result })
      } else {
         res.status(500).send({ msg: "Internal server error!" })
      }
   })
}


exports.getEachCollegeStudentData = async (req, res) => {
   const q = `select * from college_student_info where id=${req.query.stid};`
   db.query(q, (err, result) => {
      if (!err) {
         res.status(200).send({ result })
      } else {
         res.status(500).send({ msg: "Internal server error!" })
      }
   })
}



// Gallery controll of college-------

exports.collegeGallery = async (req, res) => {
   const q = `select * from collgallery;`
   await db.query(q, (err, results) => {
      if (err) {
         res.redirect('/uyyufuf')
      } else  {
         res.render('./admin/college/gallery.ejs', {results})
      }
   })
}



exports.insertImageToCollegeGallery = async (req, res) => {
   let img = [];
   if (req.files.length > 0) {
      req.files.forEach((el) => {
         img.push([el.path.replace(/\\/g, '/').split('static')[1]])
      })
      console.log(img)
      const q = `insert into collgallery (img_link) values ?`
      await db.query(q, [img], (err, result) => {
         if (!err) {
            res.status(200).send({ msg: "Image uploaded Successfully.." })
         } else {
            res.status(500).send({ msg: "Internal server error!" })
         }
      })
   }
}


exports.deleteImagefromCollegeGallery = async (req, res) => {
   const q = `delete from collgallery where img_id = ${req.query.imgid}`
   db.query(q, (err, result) => {
      if (!err) {
        res.status(200).send({msg: "Image deleted!"}) 
      }else {
         res.status(500).send({msg:  "Internal server error"})
      }
   })
}

// Gallery controll of school----

exports.schoolGalleryRender = async (req, res) => {
   const q = `select * from gallery;`
   await db.query(q, (err, results) => {
      if (err) {
         res.redirect('/uyyufuf')
      } else  {
         res.render('./SCHOOL/gallery.ejs', {results})
      }
   })
}

exports.schoolGallery = async (req, res) => {
   const q = `select * from gallery;`
   await db.query(q, (err, results) => {
      if (err) {
         res.redirect('/uyyufuf')
      } else  {
         res.render('./admin/school/gallery.ejs', {results})
      }
   })
   
}

exports.insertImageToGallery = async (req, res) => {
   let img = [];
   if (req.files.length > 0) {
      req.files.forEach((el) => {
         img.push([el.path.replace(/\\/g, '/').split('static')[1]])
      })
      console.log(img)
      const q = `insert into gallery (img_link) values ?`
      await db.query(q, [img], (err, result) => {
         if (!err) {
            res.status(200).send({ msg: "Image uploaded Successfully.." })
         } else {
            res.status(500).send({ msg: "Internal server error!" })
         }
      })
   }
}

exports.deleteImagefromGallery = async (req, res) => {
   const q = `delete from gallery where img_id = ${req.query.imgid}`
   db.query(q, (err, result) => {
      if (!err) {
        res.status(200).send({msg: "Image deleted!"}) 
      }else {
         res.status(500).send({msg:  "Internal server error"})
      }
   })
}

// school stuff control----------------------

exports.renderSchoolStuff = async (req, res) => {
   const q = `select * from school_stuff;`
   db.query(q, (err, result) => {
      if (!err) {
         res.render('./admin/school/staffedit.ejs', {result})
      }
   })
}

exports.addSchoolStuff = async (req, res)=>{
   const stuffImg = req.file ? req.file.path.replace(/\\/g, '/').split('static')[1] : undefined;
   const q = `insert into school_stuff (name, designation, category, subject, position, stuff_img) values (?,?,?,?,?,?);`
   db.query(q, [req.body.name, req.body.designation, req.body.category, req.body.subject, req.body.position, stuffImg], (err, result)=>{
     if(!err){
       res.status(200).send({msg : "Stuff added fully.."});
     }else{
       res.status(500).send({msg: "not inserted! some error occurred..."});
     }
   })
 }

 exports.deleteSchoolStuff = async(req, res)=>{
   const q = `delete from school_stuff where t_id = ${req.query.tid}`;
   db.query(q, (err, result)=>{
      if (!err) {
         res.status(200).send({msg : "deleted successfully.."})
      }else {
         res.status(500).send({msg : "internal server error!"})
      }
   })
 }

 exports.updateSchoolStuff = async (req, res)=>{
   const stuffImg = req.file ? req.file.path.replace(/\\/g, '/').split('static')[1] : req.body.oldimg.split('static/')[1] ;
   const q = `update school_stuff set name= '${req.body.name}', designation= '${req.body.designation}', subject = '${req.body.subject}', position = '${req.body.position}', stuff_img='${stuffImg}' where t_id = ${req.body.id}`
   db.query(q, (err, result)=>{
     if(!err){
       res.status(200).send({msg : "Stuff updated fully.."});
     }else{
      console.log(err)
       res.status(500).send({msg: "not updated! some error occurred..."});
     }
   })
 }


 // college stuff control ---------------------

 exports.renderCollegeStuffEdit = async (req, res) => {
   const q = `select * from college_stuff;`
   db.query(q, (err, result) => {
      if (!err) {
         res.render('./admin/college/college-stuff.ejs', {result})
      }
   })
 }

 exports.addCollegeStuff = async (req, res)=>{
   const stuffImg = req.file ? req.file.path.replace(/\\/g, '/').split('static')[1] : undefined;
   const q = `insert into college_stuff (name, designation, category, subject, position, stuff_img) values (?,?,?,?,?,?);`
   db.query(q, [req.body.name, req.body.designation, req.body.category, req.body.subject, req.body.position, stuffImg], (err, result)=>{
     if(!err){
       res.status(200).send({msg : "Stuff added fully.."});
     }else{
       res.status(500).send({msg: "not inserted! some error occurred..."});
     }
   })
 }

 exports.updateCollegeStuff = async (req, res)=>{
   const stuffImg = req.file ? req.file.path.replace(/\\/g, '/').split('static')[1] : req.body.oldimg.split('static/')[1] ;
   const q = `update college_stuff set name= '${req.body.name}', designation= '${req.body.designation}', subject = '${req.body.subject}', position = '${req.body.position}', stuff_img='${stuffImg}' where t_id = ${req.body.id}`
   db.query(q, (err, result)=>{
     if(!err){
       res.status(200).send({msg : "Stuff updated fully.."});
     }else{
      console.log(err)
       res.status(500).send({msg: "not updated! some error occurred..."});
     }
   })
 }

 exports.deleteCollegeStuff = async(req, res)=>{
   const q = `delete from college_stuff where t_id = ${req.query.tid}`;
   db.query(q, (err, result)=>{
      if (!err) {
         res.status(200).send({msg : "deleted successfully.."})
      }else {
         res.status(500).send({msg : "internal server error!"})
      }
   })
 }
