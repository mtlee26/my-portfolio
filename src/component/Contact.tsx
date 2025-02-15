import ContactModal from "@/component/ui/ContactModal";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.section
			id="contact"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ margin: "-100px" }}
			transition={{ duration: 0.6 }}
			className="h-screen p-8 flex items-center justify-center bg-transparent"
		>
			<div className="max-w-4xl mx-auto flex flex-col items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="mb-8"
				>
					<h2 className="text-5xl sm:text-2xl md:text-4xl lg:text-6xl text-[#8892b0] drop-shadow-lg">
						FROM CONCEPT TO <span className="font-bold">CREATION</span>
					</h2>

				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-8 rounded-lg shadow-md"
				>
					<h2 className="text-5xl sm:text-2xl md:text-4xl lg:text-6xl text-[#8892b0] drop-shadow-lg">
						LET&apos;S MAKE IT <span className="font-bold">HAPPEN.</span>
					</h2>
				</motion.div>
				<ContactModal />
				<p className="p-8">Looking forward to sharpening my skills in a challenging environment.</p>
			</div>
		</motion.section>
	);
}

export default Contact;