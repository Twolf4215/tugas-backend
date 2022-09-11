class _response {
    sendResponse = (res, data) => {
        try {
            if (data.code) {
                res.status(data.code)

                delete data.code

                res.send(data)
                return true
            }

            res.status(data && data.status ? 200 : 500)
            res.send(data)
            return true
        } catch (error) {
            console.error('sendResponse response helper Error: ', error)

            res.status(400).send({
                status: false,
                error
            })

            return false
        }
    }

    // errorHandler = (err, req, res, next) => {
    //     if(err.name === 'UnautorizedError'){
    //         return res.status(402).send({
    //             status : false,
    //                 error : 'Invalid Token'
    //         })
    //     }
    
    //    //Default error heandling
    //     return res.status(500).send({
    //         status :false,
    //         error : err.message
    //     })
    // }
}

module.exports = new _response()