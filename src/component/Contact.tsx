export default function Contact() {
	return (
		<section id="contact" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-3xl ">
            <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 rounded-md bg-transparent border border-orange-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md bg-transparent border border-orange-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded-md bg-transparent border border-orange-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                </div>
                <div className="flex flex-col">
                  <textarea
                    placeholder="Your Message"
                    className="w-full h-full p-3 rounded-md bg-transparent border border-orange-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-4 bg-orange-500 text-black py-3 rounded-md shadow-lg hover:bg-black hover:text-orange-500 border border-orange-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
          </div>
        </section>


	);
}