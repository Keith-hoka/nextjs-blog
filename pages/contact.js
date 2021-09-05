import Head from "next/head";

import ContactForm from "../components/contact/contact-form";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Ask me any questions you want" />
      </Head>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
