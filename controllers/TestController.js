module.exports = {
    get: async function(req, res){
        try {
            res.status(200).json({message:"success"});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
    post: async function(req, res){
        try {
            res.status(201).json({message:"success"});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
}