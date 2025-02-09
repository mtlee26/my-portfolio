// // export default function Contact() {
// // 	return (
// // 		<section id="contact" className="min-h-screen flex items-center justify-center p-4">
// //           <div className="w-full max-w-3xl ">
// //             <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
// //               <form className="gap-4 space-y-4">
// //                   <input
// //                     type="text"
// //                     placeholder="Name"
// //                     className="w-full p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
// //                   />
// //                   <input
// //                     type="email"
// //                     placeholder="Email"
// //                     className="w-full p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
// //                   />
// //                   <input
// //                     type="text"
// //                     placeholder="Subject"
// //                     className="w-full p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
// //                   />
// //                   <textarea
// //                     placeholder="Your Message"
// //                     className="w-full h-64 p-3 rounded-md bg-[#f1f1f1] border border-white text-black focus:outline-none focus:ring-2 focus:ring-white-500"
// //                   ></textarea>
// //                   <button
// //                     type="submit"
// //                     className="w-full text-white py-3 rounded-md shadow-lg hover:bg-black hover: border border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
// //                   >
// //                     Send Message
// //                   </button>

// //               </form>
// //           </div>
// //         </section>
// // 	);
// // }


// import React from "react";
// import { Form, Input, Button, Textarea } from "@heroui/react";

// export default function Contact() {
// 	return (
// 		<section id="contact" className="min-h-screen flex items-center justify-center p-4">
// 			<div className="w-full max-w-3xl flex flex-col items-center">
// 				<h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
// 				<Form className="w-full max-w-md mx-auto flex flex-col gap-4 p-10 bg-[#f1f1f1]" validationBehavior="native">
// 					<Input
// 						label="Name"
// 						labelPlacement="outside"
// 						name="name"
// 						placeholder="Enter your name"
// 					/>
// 					<Input
// 						label="Email"
// 						labelPlacement="outside"
// 						name="email"
// 						placeholder="Enter your email"
// 					/>

// 					<Input
// 						isRequired
// 						errorMessage="Please enter a valid email"
// 						label="Phone number"
// 						labelPlacement="outside"
// 						name="email"
// 						placeholder="Enter your phone number"
// 						type="tel"
// 					/>
// 					<Textarea className="max-w-xs" label="Your message" placeholder="Enter your message" />
// 					<Button type="submit" variant="flat" color="default">
// 						Send message
// 					</Button>
// 				</Form>
// 			</div>
// 		</section>
// 	);
// }

"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};
	return (
		<section id="contact" className="min-h-screen flex items-center justify-center">
			<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
					Contact me
				</h2>
				<form className="my-8" onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
						<LabelInputContainer>
							<Label htmlFor="firstname">First name</Label>
							<Input id="firstname" placeholder="Enter your first name" type="text" />
						</LabelInputContainer>
						<LabelInputContainer>
							<Label htmlFor="lastname">Last name</Label>
							<Input id="lastname" placeholder="Enter your last name" type="text" />
						</LabelInputContainer>
					</div>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="email">Email Address</Label>
						<Input id="email" placeholder="Enter your email address" type="email" />
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="subject">Subject</Label>
						<Input id="subject" placeholder="Enter subject" type="text" />
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="message">Message</Label>
						<Input id="message" placeholder="Enter your message" type="text" className="h-24" />
					</LabelInputContainer>
					<button
						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
						Send message &rarr;
						<BottomGradient />
					</button>
				</form>
			</div>
		</section>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
