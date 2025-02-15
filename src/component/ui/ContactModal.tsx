import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';

const ContactModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');
	useEffect(() => {
		if (status === 'success') {
			const timer = setTimeout(() => {
				setIsOpen(false);
				setStatus('none');
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [status]);
	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		setStatus('sending');
		try {
			const formData = {
				name,
				email,
				message,
			};
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				setStatus('success');
			} else {
				setStatus('fail');
			}
		} catch (error) {
			console.error(error);
			setStatus('fail');
		}
	};


	return (
		<>
			{/* Main Button */}
			<button
				onClick={() => setIsOpen(true)}
				className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors duration-300"
			>
				Get In Touch
				<span className="bg-[#e2e2e2] p-2 rounded-full">
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
						<path d="M1 13L13 1M13 1H1M13 1V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</span>
			</button>

			{/* Modal */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
						onClick={(e) => {
							if (e.target === e.currentTarget) {
								setIsOpen(false);
								setStatus('none');
							}
						}}
					>
						<motion.div
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							className="bg-[#1a1a1a] rounded-lg p-6 w-full max-w-md"
						>
							{/* Social Links */}
							<div className="flex justify-center space-x-4 mb-6">
								<a href="https://www.linkedin.com/" className="text-gray-400 hover:text-white transition-colors">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</a>
								<a href="https://github.com/mtlee26" className="text-gray-400 hover:text-white transition-colors">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
								<a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.325-.594 1.325-1.326v-21.349c0-.733-.593-1.326-1.325-1.326z" />
									</svg>
								</a>
							</div>

							{/* Quick Actions */}
							<div className="grid grid-cols-2 gap-4 mb-6">
								<a href="mailto:letam1014@gmail.com" className="flex items-center justify-center gap-2 bg-[#2a2a2a] p-3 rounded-lg text-white hover:bg-[#3a3a3a] transition-colors">
									<Mail className="w-5 h-5" />
									<span>Email Me</span>
								</a>
								<button className="flex items-center justify-center gap-2 bg-[#2a2a2a] p-3 rounded-lg text-white hover:bg-[#3a3a3a] transition-colors">
									<Calendar className="w-5 h-5" />
									<span>Book a Call</span>
								</button>
							</div>

							<div className="text-center mb-6">
								<p className="text-gray-400">Or send a message</p>
							</div>

							{/* Contact Form */}
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<input

										placeholder="Your name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="w-full bg-[#2a2a2a] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Your email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full bg-[#2a2a2a] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<textarea
										placeholder="Your message"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										className="w-full bg-[#2a2a2a] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
										required
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
								>
									{status === 'sending'
										? 'Sending...'
										: status === 'success'
											? 'Thank You'
											: 'Send Message'}

								</button>
								{status === 'fail' && (
									<div className="text-red-500 font-medium mt-2">
										Failed to send. Please try again.
									</div>)}
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ContactModal;