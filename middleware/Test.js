
module.exports = {
    test: async function(req, res, next) {
       const userId = req.headers['user-id'] || null;
       const scope = req.headers['scope'] || null;
       if(userId !== "ifabula" || scope !== "user") {
        return res.status(401).json({
            responseCode: 401,
            responseMessage: "UNAUTHORIZED"
        });
       }
       next();
    },
}