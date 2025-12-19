"use client"

import Contactbanner from "./ContactBanner/ContactBanner";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

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