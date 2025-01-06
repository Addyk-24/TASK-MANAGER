

class CustomAPIError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const CustomError = (msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}

module,sxports = {CustomAPIError,CustomError}