const conn = require('../db/db.config')

exports.addCollegeStuff = async (req, res)=>{
    const q = `insert into college_stuff (name, designation, category, subject, position) values ?;`
    conn.query(q, (err, result)=>{
      if(!err){
        res.status(200).send(result);
      }else{
        res.status(500).send({msg: "not inserted! some error occurred..."});
      }
    })
  }