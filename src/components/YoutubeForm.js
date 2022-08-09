import React from 'react';
import * as Yup from 'yup';
import { Formik,Form,Field,ErrorMessage,FieldArray } from 'formik';
import TextError from './TextError';
const initialValues={
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumbers:['']
}
const onSubmit=(values,onSubmitProps)=>{
console.log("Form Data",values);
onSubmitProps.resetForm()
}


const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email("Invalid email format").required('Required'),
    channel:Yup.string().required("Required")
})
const YoutubeForm = () => {
 
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}        
        >{
            formik=>{
                console.log("Formik Props",formik)
                return (
                    <Form >
        <div className="form-control">

        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name"  />
       <ErrorMessage  name='name' component={TextError}/>
        </div>
        <div className="form-control">

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
       <ErrorMessage name='email'>
        {
            (errMsg)=><div className="error">{errMsg}</div>
        }
       </ErrorMessage>
        </div>
        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" placeholder="Youtube Channel Name" />
      <ErrorMessage name='channel' component={TextError}/>
        </div>
        <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field as='textarea' id="comments" name="comments"/>
        </div>
        <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name='address'>
                {
                    (props)=>{
                        const {field,form,meta}=props
                        console.log("Render Props",props)
                        return (
                            <div>
                        <input type='text' id='address' {...field}/>
                        {meta.touched && meta.error ?<div>{meta.error}</div>:null}
                            </div>
                        )
                    }
                }
            </Field>
        </div>
        <div className="form-control">
            <label htmlFor="facebook">Facebook Profile</label>
            <Field type="text" id="facebook" name="social.facebook"></Field>
        </div>
        <div className="form-control">
            <label htmlFor="twitter">Twitter Profile</label>
            <Field type="text" id="twitter" name="social.twitter"></Field>
        </div>
        <div className="form-control">
            <label htmlFor="primaryPh">Primary Phone Number</label>
            <Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>
        </div>
        <div className="form-control">
            <label htmlFor="secondaryPh">Secondary Phone Number</label>
            <Field type="text" id="secondaryPh" name="phoneNumbers[1]"/>
        </div>
        <div className="form-control">
            <label htmlFor="">List of Phone Numbers</label>
            <FieldArray name="phNumbers">
                {
                    (fieldArrayProps)=>{
                        console.log("Field Array Props",fieldArrayProps);
                        const {push,remove,form}=fieldArrayProps;
                        const {values}=form;
                        const {phNumbers}=values;
                        return <div>
                        {
                            phNumbers.map((phNumber,i)=>(
                                <div key={i}>
                                    <Field name={`phNumbers[${i}]`}></Field>
                                    {i>0 &&                                    
                                    <button type="button" onClick={()=>remove(i)}>-</button>
                                    }
                                    <button type="button" onClick={()=>push('')}>+</button>
                                </div>
                            ))
                        }
                        </div>

                    }
                }
            </FieldArray>
        </div>
        <button type="reset">Reset</button>
        <button type='submit' disabled={!(formik.dirty && formik.isValid)} >Submit</button>

        </Form>    
                )
            }
        }
             
        </Formik>
    );
};

export default YoutubeForm;