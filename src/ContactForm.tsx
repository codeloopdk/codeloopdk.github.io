import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ContactFormState {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<ContactFormState>({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Here, you can make an API call to your backend server to send the email
        // Include the name, email, and message in the request payload

        // Example using fetch:
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Email sent successfully!', data);
                // Optionally, you can show a success message to the user
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Optionally, you can show an error message to the user
            });

        // Reset form fields
        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
