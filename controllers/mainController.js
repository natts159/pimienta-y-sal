const menu = require('../data/menu.json');
const platoTipico= require('../data/platoTípico.json');
const about = require('../data/about.json')

module.exports = {
    index: (req, res) => {
        return res.render('index', {
        menu,
        about
    })
},
    detalle: (req, res) => {
      return  res.render('detalleMenu', {
            product : menu.find(product => product.id === +req.params.id),
            platoTipico
        })
    }
}