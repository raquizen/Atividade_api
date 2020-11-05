const uuidv4 = require('uuid/v4');

module.exports= app =>{
    const receitasDB= app.data.receitas;
    const controller ={};
     
    const {receitas: receitasMock}= receitasDB;

    controller.listarReceitas = (req,res)=> res.status(200).json(receitasDB);

    controller.saveReceitas = (req,res)=>{
        receitasMock.data.push({
            id:uuidv4(),
            nome:req.body.nome,
            tipo:req.body.tipo,
            rende:req.body.rende
        });
        res.status(201).json(receitasMock);
    }

    return controller
}