import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaTelegram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Contact() {

  const email = "kabegutema4@gmail.com";
  const phone = "+251990349039";
  const telegram = "@kabe_g";
  const whatsapp = "251990349039";

  const copyToClipboard = (value, label) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white relative">

      {/* Floating Hire Me Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
      >
        Hire Me
      </a>

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Contact Me
        </h2>

        <p className="text-gray-500 mt-2">
          I am open to work and collaborations
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for Freelance / Full-time
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Direct Contact */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition bg-gray-50">
          <h3 className="text-lg font-semibold mb-6 text-gray-800">
            Direct Contact
          </h3>

          <div className="space-y-4">

            {/* EMAIL */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"
                onClick={() => copyToClipboard(email, "Email")}
              >
                <FiMail />
                <span>{email}</span>
              </div>

              <a
                href={`mailto:${email}`}
                className="text-sm text-indigo-600 hover:underline"
              >
                Send
              </a>
            </div>

            {/* TELEGRAM */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"
                onClick={() => copyToClipboard(telegram, "Telegram")}
              >
                <FaTelegram />
                <span>{telegram}</span>
              </div>

              <a
                href="https://t.me/kabe_g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:underline"
              >
                Open
              </a>
            </div>

            {/* PHONE */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-indigo-600"
                onClick={() => copyToClipboard(phone, "Phone")}
              >
                <FiPhone />
                <span>{phone}</span>
              </div>

              <a
                href={`tel:${phone}`}
                className="text-sm text-indigo-600 hover:underline"
              >
                Call
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-green-600"
                onClick={() => copyToClipboard(whatsapp, "WhatsApp")}
              >
                <FaWhatsapp />
                <span>{whatsapp}</span>
              </div>

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:underline"
              >
                Chat
              </a>
            </div>

          </div>
        </div>

        {/* Social */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition bg-gray-50">
          <h3 className="text-lg font-semibold mb-6 text-gray-800">
            Social Links
          </h3>

          <div className="space-y-4">

            <a
              href="https://github.com/injifann"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}