const express = require("express")
const router = new express.Router()
const fcade = require('./customersFcade')
const resHendler = require('../../handlers/responseHandler')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'public/image',
   
    filename : function (req, file , cb) {
       // console.log(file.originalname);
        cb(null , file.originalname);
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})
const upload = multer({storage})

router.route('/addCustomer').post(upload.single("image"),(req,res) => {
    console.log(req.body);
    fcade.addCustomer(req,res).then((result) => {
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route(`/serch`).get((req,res) => {
    fcade.serch(req,res).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route(`/serchCity`).get((req,res) => {
    fcade.serchCity(req,res).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/oneUser').get((req,res) => {
    fcade.oneUser(req,res).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/allCustomer').get((req,res) => {
    console.log("NIKUL");
    fcade.allCustomer(req,res).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/editUser').patch(upload.single('image'),(req,res) => {
    fcade.editUser(req,res).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

module.exports = router
