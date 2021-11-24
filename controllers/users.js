const { RSA_NO_PADDING } = require('constants')
const crypto = require('crypto')
const User = require('../models/Users')
const ErrorResponse = require ('../utils/errorResponse')

// @desc        Register User
// @route       POST /api/v1/auth/register
// @access      Public
exports.register = async (req, res, next) =>{
    try {

        const {type, firstName, lastName, email, phoneNumber, numberOfApplications, candidatesEmails, gender, location, educationLevel } = req.body
        const duplicateEmail = await User.findOne({email:req.body.email})
        // console.log(duplicateEmail)

        if(duplicateEmail) {
            res.status(400).json({
                error: true,
                message: 'This email as already been registered.'
            })
        } else {
            const user = await  User.create({
                type, 
                firstName, 
                lastName, 
                email,
                phoneNumber,
                numberOfApplications,
                candidatesEmails,
                gender, 
                location, 
                educationLevel
            })
    
            res.status(200).json({
             error: false,
             message: 'Registration successful',
         })
         next()
        }

        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:true,
            message: 'Server Error'
        })
        // next( new ErrorResponse(`Server error`, 500))
       
    }
 
 }

 exports.getApi = async(req, res, next)=> {
     try {
        res.send({
            error: false,
            message: 'success'
        })
     } catch (error) {
        console.log(error)
        res.status(500).json({
            error:true,
            message: 'Server Error'
        })
     }
    
 }

 exports.checkEmail = async(req, res, next)=> {
    try {
        const duplicateEmail = await User.findOne({email:req.body.email})
        // console.log(duplicateEmail)

        if(duplicateEmail) {
            res.status(400).json({
                error: true,
                message: 'This email as already been registered.'
            })
        } else {
            res.status(200).json({
             error: false,
             data: req.body.email,
             message: 'Email is good to go',
         })
         next()
        }
    } catch (error) {
       console.log(error)
       res.status(500).json({
           error:true,
           message: 'Server Error'
       })
    }
   
}