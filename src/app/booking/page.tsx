"use client";
import { useRef } from "react";
import Link from "next/link";

export default function BookingPage() {
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      from: (form.elements.namedItem('from') as HTMLInputElement)?.value,
      to: (form.elements.namedItem('to') as HTMLInputElement)?.value,
      date: (form.elements.namedItem('date') as HTMLInputElement)?.value,
      passengers: (form.elements.namedItem('passengers') as HTMLInputElement)?.value,
      notes: (form.elements.namedItem('notes') as HTMLInputElement)?.value,
    };

    const subject = encodeURIComponent("New Booking Request from " + data.fullName);
    const body = encodeURIComponent(
      `Full Name: ${data.fullName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `From: ${data.from}\n` +
      `To: ${data.to}\n` +
      `Date: ${data.date}\n` +
      `Passengers: ${data.passengers}\n` +
      `Notes: ${data.notes}`
    );

    window.location.href = `mailto:qhweshatravellers@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/nature.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto py-12 px-4 flex items-center min-h-screen">
        <form ref={formRef} onSubmit={handleSubmit} className="bg-white/60 rounded-lg shadow-lg p-8 w-full">
          <h1 className="text-4xl font-bold text-center mb-8 text-black">Book Your Journey</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 text-black">Personal Information</h2>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-800 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
            </div>
            {/* Trip Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4 text-black">Trip Details</h2>
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-800 mb-1">
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-800 mb-1">
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-800 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-800 mb-1">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  id="passengers"
                  name="passengers"
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-800 mb-1">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            ></textarea>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <Link
              href="/"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 