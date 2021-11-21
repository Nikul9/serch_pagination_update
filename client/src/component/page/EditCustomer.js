import React, { useEffect, useState } from "react"
import {Button, Form, Col} from 'react-bootstrap'
import {Controller, useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import Joi from 'joi'
import ErrorHeandler from "../../Widgets/ErrorLable"
import { joiUpdatedMessage } from "../../Utils/Apputils"
import axios from "axios"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const EditCustomer = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [customer, setCustomer] = useState({});
    const history = useHistory()
    const handelChange = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const {id} = useSelector((data) => {
        return data.passId
    })
    const {handleSubmit, register , formState , setValue , control} = useForm(
       {
        resolver : joiResolver(
          Joi.object({
              first_name : Joi.string().label("first_name").messages(joiUpdatedMessage),
              image : Joi.any().label("image").messages(joiUpdatedMessage),
              last_name : Joi.string()
                             .label("description")
                             .messages(joiUpdatedMessage),
              city : Joi.string().label("city").messages(joiUpdatedMessage),
              company : Joi.string().label("company").messages(joiUpdatedMessage),
          })
        ),
      })
      
      useEffect(() => {
        axios.get(`http://localhost:8000/api/oneUser?id=${id}`).then((result) => {
            console.log(result);
            setCustomer(result.data.data)

        }).catch((error) => {
            console.log(error);
        })
      },[])
      const onClickToSubmit = data => {
          console.log(data);
        // console.log(data.image.FileList);
        // const value = {
        //         first_name: data.first_name,
        //         last_name: data.last_name,
        //         city: data.city,  
        //         company: data.company,
        //         image : data.image
        // }
            
        const keys = Object.keys(data)
        console.log(keys);
        let formData = new FormData(this);    //formdata object
        for (let i = 0; i < keys.length ; i++) {
            if (keys[i] === 'image') {
                console.log('qweqweqweqweqweqweqweqwe');
                //   for (let j = 0; j < data[keys[i]].length; j + 1) {
                formData.append(`image`, data[keys[i]][0])
            //   }
            } else {
                formData.append(keys[i], data[keys[i]])
             // console.log(form);
             }
        }
        for (var datas of formData) {
            console.log(datas);
          }
        axios.patch(`http://localhost:8000/api/editUser?&id=${id}`,formData).then((data) => {
            
            console.log(data);
            history.push('/serch')
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h4>UPDATE CUSTOMER</h4>
                        <Form onSubmit={handleSubmit(onClickToSubmit)}>
                            <label>First_Name</label>
                            <Controller
                            name="first_name"
                            control={control}
                            render = {( {field:{value , onChange}}) => (
                                <>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="first_name"
                                        value={value}
                                        onChange={(e) => {
                                            onChange(e)
                                        }}
                                    />
                                    {/* <ErrorHeandler msg={formState.errors.first_name && formState.errors.first_name.message } /> */}
                                </>
                            )}
                            />
                            <label>Last_Name</label>
                            <Controller
                            name="last_name"
                            control={control}
                            render = {( {field:{value , onChange}}) => (
                                <>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="last_name"
                                    value={value}
                                    onChange={e => {
                                        onChange(e)
                                    }}
                                    />
                                    {/* <ErrorHeandler msg={formState.errors.last_name && formState.errors.last_name.message } /> */}
                                </>
                            )}
                            />
                            
                            {/* <input ref={register} type="file" name="picture" /> */}
                            <label>City</label>
                            <Controller
                            name="city"
                            control={control}
                            render = {( {field:{value , onChange}}) => (
                                <>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="city"
                                    value={value}
                                    onChange={e => {
                                        onChange(e)
                                    }}
                                    />
                                    {/* <ErrorHeandler msg={formState.errors.city && formState.errors.city.message } /> */}
                                </>
                            )}
                            />
                            <label>Company</label>
                            <Controller
                            name="company"
                            control={control}
                            render = {( {field:{value , onChange}}) => (
                                <>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="company"
                                    value={value}
                                    onChange={e => {
                                        onChange(e)
                                    }}
                                    />
                                    {/* <ErrorHeandler msg={formState.errors.company && formState.errors.company.message } /> */}
                                </>
                            )}
                            />
                            <label>Image</label>
                            <Controller
                            name="image"
                            control={control}
                            render = {( {field:{value , onChange}}) => (
                                <>
                                    <input
                                        {...register('image', { required: true })}
                                        type="file"
                                        className="form-control"
                                        placeholder="Image"
                                        value={selectedFile}
                                        onChange = {(e) => {
                                            onChange(e.target.files[0])
                                        }}
                                    />
                                    {/* <ErrorHeandler msg={formState.errors.image && formState.errors.image.message } /> */}
                                </>
                            )}
                            /> 
                            <button 
                                onClick={setValue("first_name" , customer.first_name)} 
                                onClick={setValue("last_name" , customer.last_name)} 
                                onClick={setValue("city" , customer.city)}
                                onClick={setValue("company" , customer.company)}
                                // onClick={setValue("image" , customer.image)} 
                                type="submit" className="btn btn-raised">
                            Update Customer
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        );
}

export default EditCustomer