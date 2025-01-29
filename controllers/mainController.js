const controller = {}

controller.main = (req,res) => {
  res.render('main')
}

controller.nuevoServidor = (req,res) => {
  res.render('form')
}

module.exports = controller