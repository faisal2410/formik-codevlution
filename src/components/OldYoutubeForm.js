import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
const initialValues={
    name:'',
    email:'',
    channel:''
}
const onSubmit=(values)=>{
console.log("Form Data",values)
}

// const validate=(values)=>{
//       //values.name, values.email, values.channel
//             // errors.name, errors.email, errors.channel
//             //errors.name="This field is required"
//             let errors={}
//             if(!values.name){
//                 errors.name="Required";
//             }
//             if(!values.email){
//                 errors.email="Required";
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                     errors.email = 'Invalid email format'
//                    }
//             if(!values.channel){
//                 errors.channel="Required";
//             }
//             return errors;

// }
const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email("Invalid email format").required('Required'),
    channel:Yup.string().required("Required")
})
const OldYoutubeForm = () => {
    const formik=useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    // console.log("Form Values",formik.values)
    //  console.log("Form Errors",formik.errors)
    //   console.log("Visited Fields",formik.touched)
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className="form-control">

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
        {formik.errors.name && formik.touched.name?<div className="error">{formik.errors.name}</div>:null}
        </div>
        <div className="form-control">

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email?<div className="error">{formik.errors.email}</div>:null}
        </div>
        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
        {formik.errors.channel && formik.touched.channel?<div className="error">{formik.errors.channel}</div>:null}
        </div>
        <button type='submit'>Submit</button>


        </form>
            
        </>
    );
};

export default OldYoutubeForm;