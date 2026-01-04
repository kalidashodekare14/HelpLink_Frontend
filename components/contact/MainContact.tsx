"use client"
import dynamic from "next/dynamic";
import Contactbanner from "./ContactBanner/ContactBanner";
import ContactForm from "./ContactForm";
// import ContactMap from "./ContactMap";
const ContactMap = dynamic(() => import("./ContactMap"), {
    ssr: false 
})

const MainContact = () => {
    return (
        <div>
            <Contactbanner />
            <ContactMap />
            <ContactForm />
        </div>
    );
};

export default MainContact;