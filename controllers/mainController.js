const controller = {}

controller.main = (req,res) => {
  res.render('main')
}

controller.nuevoServidor = (req,res) => {
  res.render('form')
}

controller.regServer = (req,res) => {
  res.send('registrado')
}

module.exports = controller