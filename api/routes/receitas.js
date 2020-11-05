module.exports = app =>{
    const controller =app.controllers.receitas
    app.route('/api/receitas').get(controller.listarReceitas)
    .post(controller.saveReceitas)

}