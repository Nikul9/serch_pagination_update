const service = require('./customersService')
const resHeandler = require('../../handlers/responseHandler')
const productContext = require('./customersContext')
const constant = require('../../utils/constant')


const addCustomer = (req) => {
    return service.addCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,productContext.MESSAGE.addError , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , productContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,productContext.MESSAGE.addError,error)
    }) 
}

const allCustomer = (req) => {
    return service.allCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,productContext.MESSAGE.addError , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , productContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,productContext.MESSAGE.addError,error)
    }) 
}

const serch = (req) => {
    return service.serch(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,productContext.MESSAGE.addError , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , productContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,productContext.MESSAGE.addError,error)
    }) 
}

const serchCity = (req) => {
    return service.serchCity(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,productContext.MESSAGE.addError , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , productContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,productContext.MESSAGE.addError,error)
    }) 
}

const oneUser = (req) => {
    return service.oneUser(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,productContext.MESSAGE.addError , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , productContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,productContext.MESSAGE.addError,error)
    }) 
}

const editUser = (req) => {
    return service.editUser(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,productContext.MESSAGE.addError , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , productContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,productContext.MESSAGE.addError,error)
    }) 
}

module.exports = {
    addCustomer,
    serch,
    serchCity,
    oneUser,
    editUser,
    allCustomer
}