'use client';
import { useState } from 'react';
import { validateName, validateEmail, validatePhone, validateMessage } from '@/src/validations/contactValidation';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "", })
  const [touched, setTouched] = useState({ name: false, email: false, phone: false, message: false, })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";

    if (name === "name") {
      error = validateName(value);
    }

    if (name === "email") {
      error = validateEmail(value);
    }

    if (name === "phone") {
      error = validatePhone(value);
    }

    if (name === "message") {
      error = validateMessage(value);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  return (
    <section className="no-scrollbar h-full min-h-0 w-full overflow-y-auto bg-(--cream) px-8 py-12 md:px-12">
      <div className="mb-8">
        <div className="flex items-center gap-4">

          <p className="text-xl font-semibold font-heading uppercase tracking-[0.3em] text-(--primary)">
            Get In Touch
          </p>
        </div>

        <p className="mt-3 max-w-xl  leading-6 text-(--muted-text)">Have a project in mind or looking for a developer? I'd love to hear from you. Feel free reach out.</p>
      </div>

      <div className="xl:grid grid-cols-2 gap-4">
        <a href="mailto:swethasangar133@gmail.com" className="group mb-2 w-60  md:w-66.25 block rounded-xl border border-[#D6D0C4] bg-[#FFFDF7] p-5 shadow-sm tranistion-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:shadow-md">
          <p className="text-xs uppercase tracking-[0.2em] text-(--primary)">
            Email
          </p>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-base font-medium text-(--text)">
              swethasangar133@gmail.com
            </p>
          </div>
        </a>

        <div className="w-38 rounded-xl ml-8 border border-[#D6D0C4] bg-[#FFFDF7] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:shadow-md">
          <p className="text-xs font-medium uppercase tracking-[02.em] text-(--primary)">Social Media</p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.linkedin.com/in/swethasandres133-ai-full-stack-developer/" target="_blank" rel="noopener noreferrer" >
              <img
                src="/LinkedIn.png"
                alt="linkedin"
                className="" />
            </a>

            <a href="https://github.com/Swethasangar" target="_blank" rel="noopener noreferrer">
              <img src="/Github.png" alt="github" />
            </a>
          </div>

        </div>
      </div>


      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-(--text)">Name</label>

          <input id="name" type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className={`w-full rounded-lg border bg-[#FFFDF7] py-2 px-2 text-sm text-(--text) outline-none transition focus:border-(--primary) focus:ring-1 focus:ring-(--primary) ${touched.name && errors.name ? "border-red-500" : "border-[#D6D0C4]"}`} />

          {
            touched.name && errors.name && (
              <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
            )
          }
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-(--text)">Email</label>

          <input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className={`w-full rounded-lg border bg-[#FFFDF7] px-2 py-2 text-sm text-(--text) outline-none transition focus:border-(--primary) focus:ring-1 focus:ring-(--primary) ${touched.email && errors.email
            ? "border-red-500"
            : "border-[#D6D0C4]"
            }`} />

          {touched.email && errors.email && (
            <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-(--text)"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            onChange={handleChange}
            className={`w-full rounded-lg border border-[#D6D0C4] bg-[#FFFDF7] px-2 py-2 text-sm text-(--text) outline-none transition focus:border-(--primary) focus:ring-1 focus:ring-(--primary) ${touched.phone && errors.phone ? "border-red-500" : "border-[#D6D0C4]"}`}
          />

          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-(--text)"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Message..."
            onChange={handleChange}
            className={`w-full resize-none rounded-lg border border-[#D6D0C4] bg-[#FFFDF7] px-4 py-3 text-sm text-(--text) outline-none transition focus:border-(--primary) focus:ring-1 focus:ring-(--primary) ${touched.message && errors.message ? "border-red-500": "border-[#D6D0C4]"}`} 
          />

          {touched.message && touched.message && (
            <p className='mt-1 text-sm text-red-500'>{errors.message}</p>
          )}
        </div>

        <button type="submit" className="rounded-lg bg-(--primary) px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-90 cursor-pointer">Submit →</button>

      </form>
    </section>
  )
}