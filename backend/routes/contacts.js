import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

// GET All Contacts
router.get('/', async (req, res) => {
    try {
        const allContacts = await Contact.find()
        console.log(allContacts);
        res.status(200).json(allContacts);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching contacts" });
    }
});

// GET Contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ status: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching contact" });
    }
});

// POST Contact
router.post('/', async (req, res) => {
    const { name, phone, email } = req.body;
    console.log(req.body);

    try {
        const newContact = new Contact({ name, phone, email });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error saving contact" });
    }
});

export default router;