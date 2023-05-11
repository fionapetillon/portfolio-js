import React, {useState} from "react";
import contactImg from "../assets/contact-img.png";
import { FaEthereum } from 'react-icons/fa';

function Contact() {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Envoyer');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("En cours...");
  
      let response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Envoyer");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code == 200) {
        setStatus({ succes: true, message: 'Le message a été envoyé.'});
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      }
    };
    

    return(
        <section className="banner p-20" id="contact">
            <div className="flex items-center font-semibold tracking-wider gap-8 lg:gap-20">
                <img src={contactImg} alt="Contact Us" className="w:1/3 lg:w-1/2" />
                <div>
                    <h2 className="text-white text-4xl font-bold mb-8">Get In Touch </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <input className="w-full text-white placeholder-white px-4 py-2 rounded-xl bg-inherit border border-white" type="text" value={formDetails.firstname} placeholder="Prénom" onChange={(e) => onFormUpdate('firstname', e.target.value)}></input>
                            </div>
                            <div>
                                <input className="w-full text-white placeholder-white px-4 py-2 rounded-xl bg-inherit border border-white" type="text" value={formDetails.lastname} placeholder="Nom" onChange={(e) => onFormUpdate('lastname', e.target.value)}></input>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 my-6">
                            <div>
                                <input className="w-full text-white placeholder-white px-4 py-2 rounded-xl bg-inherit border border-white" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                            </div>
                            <div>
                                <input className="w-full text-white placeholder-white px-4 py-2 rounded-xl bg-inherit border border-white" type="tel" value={formDetails.phone} placeholder="Tel" onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                            </div>
                        </div>
                        <div className="my-6">
                            <textarea className="w-full text-white placeholder-white px-4 py-2 rounded-xl bg-inherit border border-white" rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                        </div>
                        <button className="hover:border-2 transition ease-in-out text-white border py-2 px-4 rounded-xl" type="submit"><span>{buttonText}</span></button>
                        {
                            status.message &&
                            <div>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;