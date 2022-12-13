const { compareHashWithPassword, signPayloadToToken } = require('../helpers/helpers')
const {Counter, User} = require('../models')


class controller {
    static async addCounter(req, res){
        try {
            const {input} = req.body
            let counter = await Counter.create({input})
            res.status(201).json({
                result : counter.count
            })


            
        } catch (err) {
            console.log(err)
            
        }


    }

    static async login(req, res){
        try {
            const { email, password } = req.body;
      if(!email || !password) throw { name : "Email/Password Required"}
      let user = await User.findOne({ where: { email } });
      if (!user) throw { name: "Invalid Email/Password" };
      let isValid = compareHashWithPassword(password, user.password);
      // console.log(isValid);
      if (!isValid) throw { name: "Invalid Email/Password" };
      const access_token = signPayloadToToken({ id: user.id });

      res.status(200).json({ access_token });

            
        } catch (err) {
            console.log(err.name)
            if(err.name === "Email/Password Required"){
                res.status(400).json({
                    message : "All Field required"
                })
            } else if(err.name === "Invalid Email/Password"){
                res.status(401).json({
                    message : "Invalid Email/Password"
                })
            }




            
        }
    }

}


module.exports = controller