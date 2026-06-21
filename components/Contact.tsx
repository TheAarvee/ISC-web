"use client";

import ConsultationForm from "./ui/consultation-form";

export default function Contact() {
    return (
        <section id="contact" className="relative flex h-auto w-full items-center justify-center py-15 pb-30 px-10 gap-4 flex-col overflow-hidden bg-white font-sans">
            <div className="relative flex flex-col gap-3 items-center justify-center">
                <p className="text-sm text-gray-500 font-sans font-medium">
                    CONTACT US
                </p>
                <h2 className="text-4xl text-black font-serif font-bold">
                    Book Consultation Now
                </h2>
            </div>
            <div className="w-full items-center justify-center flex flex-col gap-10 py-5 w-full max-w-6xl">
                <ConsultationForm />
            </div>
        </section>
    );
}