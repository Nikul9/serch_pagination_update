require('dotenv').config()
const customerData = require('../../models/customers')

const addCustomer = async (req) => {
    try {
        console.log(req.file);
        console.log(req.body);
        if(req.body !== undefined) {
            const data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                city: req.body.city,
                company: req.body.company,
                image : req.file.path
            }
            const savecustomer = new customerData(data)
            await savecustomer.save()
            return savecustomer
        } else {
            console.log('from errror ');
            return 1
        }
    } catch (error) { 
        console.log(error);
        // console.log('from errror asdasdasdasdasd ');
        return 1
    }
}

const serch = async (req) => {
    try {
            const currentPage = parseInt(req.query.page) || 1
            const pageSize = 3
            const skip =  (currentPage - 1) * pageSize;
            if(req.query.text == undefined || null) {
                return 1
            }
            const query = req.query.text
            const serchResult = await customerData.find({
                "$or": [
                    { first_name: { '$regex': query, '$options': 'i' } },
                    { last_name: { '$regex': query, '$options': 'i' } },
                    { city: { '$regex': query, '$options': 'i' } }
                ]
            })
            let total = serchResult.length            
            const serchNewValue = serchResult.slice(skip , skip + pageSize)
            return {serchNewValue , total }
    } catch (error) {
        console.log(error);
        return 1
    }
}

const serchCity = async (req) => {
    try {
        const currentPage = parseInt(req.query.page) || 1
        const pageSize = 3
        const skip =  (currentPage - 1) * pageSize;
        if(req.query.text == undefined || null) {
            return 1
        }
        const query = req.query.text
        const serchResult = await customerData.find({
            "$or": [
                { city: { '$regex': query, '$options': 'i' } }
            ]
        })
        let total = serchResult.length            
            const serchNewValue = serchResult.slice(skip , skip + pageSize)
            return {serchNewValue , total }
    } catch (error) {
        console.log(error);
        return 1
    }
}

const oneUser = async (req) => {
    console.log('in ONE USER');
    console.log(req.query.id);
    try {
            if(!req.query.id == undefined || null) {
                return 1
            }
            const id = req.query.id
            const user = await customerData.findById({_id : id})
            if(!user) {
                return 1
            }
            return user
        } catch (error) {
            console.log(error);
            return 1
        }
}

const editUser = async (req) => {
    try {
        console.log(req.query.id);
        console.log(req.body);
        // console.log(req.file.fieldname)
        if(!req.query.id == undefined || null) {
            return 1
        }
        const id ={ _id : req.query.id}
        
        const updates = Object.keys(req.body)
        // updates.push(req.file.fieldname)
        console.log(updates);
        const allowedUpdates = ['first_name', 'last_name', 'image', 'city' , "company"]
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return 1
        } 
        let updateUser = {}
        if(req.file) {
            updateUser = {
                "first_name" : req.body.first_name,
                "last_name" : req.body.last_name,
                "image" : req.file.path ,
                "city" : req.body.city,
                "company" : req.body.company
            }
        } else {
            updateUser = {
                "first_name" : req.body.first_name,
                "last_name" : req.body.last_name,
                "city" : req.body.city,
                "company" : req.body.company
            }
        }
        const updatedDocument = await customerData.findOneAndUpdate(id, updateUser, { new: true });
        return updatedDocument 
    } catch (error) {
        console.log(error);
        return 1
    }
}

const allCustomer = async (req) => {
    try {   
            const currentPage = parseInt(req.query.page) || 1
            const pageSize = 3
            const skip =  (currentPage - 1) * pageSize;
            const allData = await customerData.find({})
            if(!allData) {
                return 1
            }
            let total = allData.length            
            const serchNewValue = allData.slice(skip , skip + pageSize)
            return {serchNewValue , total }
    } catch (error) {
        console.log(error);
        return 1
    }
}

module.exports = {
    addCustomer,
    serch,
    serchCity,
    oneUser,
    editUser,
    allCustomer
}