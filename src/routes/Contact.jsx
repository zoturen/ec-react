import Map from "../assets/images/map.svg"
import AddressItem from "../components/contact/AddressItem.jsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Contact = () => {
    
    const [contactHeader, setContactHeader] = useState("")
    
    const addressItems = [
        {
            icon: "fa-solid fa-location-dot",
            label: "Visit Us",
            contactInfo: [
                "Sveavägen 31",
                "111 34 STOCKHOLM"
            ]
        },
        {
            icon: "fa-solid fa-phone",
            label: "Call Us",
            contactInfo: [
                "+46 (8) 121 470 50",
                "+46 (8) 121 470 51"
            ]
        },
        {
            icon: "fa-regular fa-envelope",
            label: "Email Us",
            contactInfo: [
                "info@crito.com",
                "support@crito.com"
            ]
        }
    ]
    
    const contactSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, 'Your name is probably too short.')
        .max(70, 'You have a very long name. Probably not quite right, right?')
        .required('You must specify you name'),
        email: Yup.string()
        .matches(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                 "You have to enter a proper email address.")
        .required('You must include you email address.'),
        message: Yup.string()
        .required('You have to inlude a message.')

    });
    
    const handleSubmit = (values, helpers) => {
        axios.post(`${import.meta.env.VITE_API_URL}/contactform`, JSON.stringify(values), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                helpers.resetForm()
                toast.success("Thank you for getting in touch with us.")
            } else {
                toast.error("We could not recieve your message at this time. Please try again later...")
            }
        }).catch(() => {
            toast.error("We could not recieve your message at this time. Please try again later...")
        })
    }
    
    return (
        <>
            <section className="contact container">
                <div className="address-items">
                    {addressItems.map((item, index) => (
                        <AddressItem key={index} label={item.label} icon={item.icon} info={item.contactInfo}/>
                    ))}
                </div>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={contactSchema}>
                    {() => (
                        <Form>
                            <h2>Leave us a message <br /> for any information.</h2>
                            <ErrorMessage  name="name" >{(message) => <div className="error-message"><p>{message}</p></div>}</ErrorMessage>
                            <Field name="name" type="text" placeholder="Name*" />
                            
                            <ErrorMessage  name="email" >{(message) => <div className="error-message"><p>{message}</p></div>}</ErrorMessage>
                            <Field name="email" type="email" placeholder="Email*" />
                            
                            <ErrorMessage  name="message" >{(message) => <div className="error-message"><p>{message}</p></div>}</ErrorMessage>
                            <Field name="message" as="textarea" placeholder="Your Message*"></Field>
                            
                            <button type="submit" className="button button-primary">Get Consulting <i className="fa-solid fa-arrow-right"></i></button>
                        </Form>
                    )}
                    
                   
                </Formik>
            </section>
            <section className="map">
                <img src={Map} alt="location of crito office" />
            </section>
            </>
    )
}

export default Contact