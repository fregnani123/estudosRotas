const path = require('path');

exports.paginaTeste = (req,res) => {
    res.sendFile(path.join(__dirname,'../public/teste.html'))
}

