import * as yup from 'yup';
// const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
//.matches(passwordRegex,'please enter a valid password'),

export const ValidationSchema=
yup.object({
    name:yup.string().required("enter Name").min(4),
    email:yup.string().email().required("enter email"),
    number:yup.number().required().positive().integer("enter number"),
    password:yup.string().required('enter password'),
    cpassword:yup.string().required('enter cpassword').oneOf([yup.ref('password')],'password is not match')

})


 export const LoginSchema=yup.object({
    email:yup.string().email().required("enter email"),
    password:yup.string().required('enter password')

})
