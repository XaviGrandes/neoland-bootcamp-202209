const registerUser = require('../logic/registerUser')

module.exports = (req, res) => {
    let {name, email, password} = req.body

    try {
        registerUser(name, email, password, (error) =>{
            if (error) {
                res.status(500)
                res.json({ error: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(500)
        res.json({ error: error.message })

    }
}