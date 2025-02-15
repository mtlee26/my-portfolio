import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-[#1D1D20] text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-white">Minh Tam</h3>

						<div className="flex space-x-4">
							{/* icons */}
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
						<ul className="space-y-3">
							<li className="flex items-start space-x-3">
								<MapPin size={20} className="shrink-0 mt-1" />
								<span>Nam Tu Liem, Ha Noi</span>
							</li>
							<li className="flex items-center space-x-3">
								<Phone size={20} className="shrink-0" />
								<span>+84 123456789</span>
							</li>
							<li className="flex items-center space-x-3">
								<Mail size={20} className="shrink-0" />
								<span>contact@gmail.com</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;