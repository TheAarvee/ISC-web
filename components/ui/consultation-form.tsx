"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowToast(false);
    }, 3500);

    return () => window.clearTimeout(timeoutId);
  }, [showToast]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      phone,
      email: String(formData.get("email") ?? ""),
      propertyType: String(formData.get("propertyType") ?? ""),
      enquiry: String(formData.get("enquiry") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message ?? "Unable to submit the form.");
      }

      setShowToast(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="w-full max-w-7xl space-y-8" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
          <span className="flex items-center gap-1">
            First Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Enter your first name"
            className="h-12 rounded-md border border-neutral-300 px-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#0a8b42] focus:ring-2 focus:ring-[#d9ffe8]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
          <span className="flex items-center gap-1">
            Last Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Enter your last name"
            className="h-12 rounded-md border border-neutral-300 px-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#0a8b42] focus:ring-2 focus:ring-[#d9ffe8]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
          <span className="flex items-center gap-1">
            Phone <span className="text-red-500">*</span>
          </span>
          <PhoneInput
            defaultCountry="in"
            value={phone}
            onChange={(value) => setPhone(value)}
            name="phone"
            required
            placeholder="Enter your phone number"
            className="consultation-phone"
            inputClassName="consultation-phone__input"
            countrySelectorStyleProps={{
              buttonClassName: "consultation-phone__country-button",
              buttonContentWrapperClassName: "consultation-phone__country-content",
              flagClassName: "consultation-phone__flag",
              dropdownArrowClassName: "consultation-phone__arrow",
              dropdownStyleProps: {
                className: "consultation-phone__dropdown",
                listItemClassName: "consultation-phone__dropdown-item",
                listItemSelectedClassName: "consultation-phone__dropdown-item--selected",
                listItemFocusedClassName: "consultation-phone__dropdown-item--focused",
                listItemPreferredClassName: "consultation-phone__dropdown-item--preferred",
                listItemFlagClassName: "consultation-phone__dropdown-flag",
                listItemCountryNameClassName: "consultation-phone__dropdown-name",
                listItemDialCodeClassName: "consultation-phone__dropdown-code",
              },
            }}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
          <span className="flex items-center gap-1">
            Email <span className="text-black/40">(optional)</span>
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="h-12 rounded-md border border-neutral-300 px-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#0a8b42] focus:ring-2 focus:ring-[#d9ffe8]"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
        <span className="flex items-center gap-1">
          Property Type <span className="text-red-500">*</span>
        </span>
        <select
          name="propertyType"
          defaultValue=""
          required
          className="h-12 rounded-md border border-neutral-300 px-4 text-sm text-neutral-900 outline-none transition-colors focus:border-[#0a8b42] focus:ring-2 focus:ring-[#d9ffe8]"
        >
          <option value="" disabled>
            Select your property type
          </option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="land">Land/Plot</option>
          <option value="villa">Villa</option>
          <option value="apartment">Apartment</option>
          <option value="office">Office Space</option>
          <option value="retail">Retail Space</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
        <span className="flex items-center gap-1">
          Enquiry <span className="text-red-500">*</span>
        </span>
        <textarea
          name="enquiry"
          placeholder="Enquiry"
          required
          rows={6}
          className="min-h-40 rounded-md border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#0a8b42] focus:ring-2 focus:ring-[#d9ffe8]"
        />
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-normal tracking-wide text-white cursor-pointer transition-colors duration-400 hover:bg-[#0e5931] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Book Consultation"}
        </button>
      </div>

      {message ? <p className="text-sm text-neutral-700">{message}</p> : null}

      {showToast ? (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#013218] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20">
          <CheckCircleIcon size={32} color="#46eb00" weight="fill" />
          <span>Consultation booked successfully</span>
        </div>
      ) : null}
    </form>
  );
}
