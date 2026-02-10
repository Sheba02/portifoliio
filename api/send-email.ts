import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'shebamugisha9@gmail.com',
        subject: `Portfolio Contact Form: Message from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
        replyTo: email,
    };

    try {
        console.log('Attempting to send email via SMTP...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return res.status(200).json({ message: 'Thank you! Your message has been sent.' });
    } catch (error: any) {
        console.error('Detailed Email sending error:', {
            message: error.message,
            code: error.code,
            command: error.command,
            responseCode: error.responseCode
        });
        return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
}
