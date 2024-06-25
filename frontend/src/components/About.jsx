import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About the Book Store</h2>
            <p className="mb-4">
              Welcome to our book store! We are passionate about books and love to share our knowledge with others. Our collection includes a wide range of genres and authors, catering to all reading preferences.
            </p>
            <p>
              Whether you're a bookworm or just starting your reading journey, we have something for everyone. Explore our shelves and discover your next favorite book!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
