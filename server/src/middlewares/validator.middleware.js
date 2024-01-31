const validateSchema = (schema) => (req, res, next) => {
    try {
    schema.parse(req.body)        
    next()
    } catch (error) {
        
    }
}

module.exports = {validateSchema}