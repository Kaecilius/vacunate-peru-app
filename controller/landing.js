
let pruebas = (req, res) => {
    res.status(200).send({
        ok:true,
        message:'Aplicacion funcionando'
    });
}

let home = (req, res) =>{
    res.render('home',{
        titulo:'Hackathon',
        subtitulo:'Vacúnate Perú'
    });
}

let demo = (req, res) =>{
    res.render('demo',{
        titulo:'Hackathon',
        subtitulo:'Vacúnate Perú'
    });
}

let equipo = (req, res) =>{
    res.render('equipo',{
        titulo:'Hackathon',
        subtitulo:'Vacúnate Perú'
    });
}


module.exports = {
    pruebas,
    home,
    demo,
    equipo
}