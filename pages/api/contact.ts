// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; error?: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// Cấu hình nội dung email
		const mailOptions = {
			from: email,
			to: process.env.RECEIVER_EMAIL,
			subject: `New message from ${name} - ${email}`,
			text: message,
		};

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ success: true });
		} catch (error) {
			console.error(error);
			res.status(500).json({ success: false, error: 'Failed to send email' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
