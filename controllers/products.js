const getAllProductsStatic = async (req, res) => {
    throw new Error('testing middleware - async_express_errors -')
    res.status(200).json({msg: 'products testing route'});
};

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'products route'});
};

module.exports = {
    getAllProductsStatic,
    getAllProducts
};