export default function Contact() {
	return (
		<section id="contact" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-3xl ">
            <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
              <form className="gap-4 space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full h-64 p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-md shadow-lg hover:bg-black hover: border border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Send Message
                  </button>
               
              </form>
          </div>
        </section>
	);
}