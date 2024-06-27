// pages/api/contact.js
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

const uri = process.env.MONGODB_URI; // Store your MongoDB URI in environment variables
const dbName = process.env.MONGODB_DB; // Store your database name in environment variables

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, projectDescription } = req.body;

    if (!name || !email || !subject || !projectDescription) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const { db } = await connectToDatabase();

      const collection = db.collection('contacts');

      await collection.insertOne({
        name,
        email,
        subject,
        projectDescription,
        createdAt: new Date(),
      });

      // Set up Nodemailer
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail address
          pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
        },
      });

      let mailOptions = {
        from: email,
        to: process.env.GMAIL_USER, // Your Gmail address to receive emails
        subject: `Contact form submission from ${name}`,
        text: `You have a new contact form submission from ${name} (${email}).\n\nSubject: ${subject}\n\nDescription: ${projectDescription}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
