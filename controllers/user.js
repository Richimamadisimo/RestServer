const { response, request } = require('express');

const usuariosGet = ( req = request, res = response ) => {

    const query = req.query;

    res.json({
        msg: 'get API - controlador',
        query
    });
}

const usuariosPut = ( req = request, res = response ) => {

    const { id } = req.params;

    res.json({
        msg: 'put API'
    });
}

const usuariosPost = ( req = request, res = response ) => {

    const body = req.body;

    res.json({
        msg: 'post API',
        body
    });
}

const usuariosDelete = ( req = request, res = response ) => {
    res.json({
        msg: 'delete API'
    });
}

const usuariosPatch = ( req = request, res = response ) => {
    res.json({
        msg: 'patch API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}