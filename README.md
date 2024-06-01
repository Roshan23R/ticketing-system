# Ticketing System

This project is a simple ticketing system built using Node.js, Express.js, and MongoDB. It allows users to create tickets, add messages to tickets, reply to messages, and view all tickets and their associated messages.

## Features

- **Create Ticket:** Users can create a new ticket by providing details such as title, description, reason, and comment.
- **Add Message to Ticket:** Users can add messages to existing tickets. Messages can include text, attached images, and attached files.
- **Reply to Message:** Users can reply to messages within a ticket thread. Replies can also include text, attached images, and attached files.
- **View All Tickets:** Users can view all tickets along with their associated messages.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Roshan23R/ticketing-system.git
2. **Navigate to the project directory:**

    ```bash
    cd ticketing-system
3. **Install dependencies:**

    ```bash
    npm install
4. **Create a `.env` file in the root directory:**

   Add the following environment variables:

   ```makefile
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
5. **Start the server:**

    ```bash
    npm start
## API Endpoints

- **Create a Ticket:**
    - **Method:** POST
    - **Endpoint:** /api/ticket/create
    - **Request Body:** JSON (title, description, reason, comment, amount, interestRate, interestType, term, termType)

- **Get All Tickets:**
    - **Method:** GET
    - **Endpoint:** /api/ticket/getall

- **Get a Single Ticket by ID:**
    - **Method:** GET
    - **Endpoint:** /api/ticket/:id

- **Add a Message to a Ticket:**
    - **Method:** POST
    - **Endpoint:** /api/message/add
    - **Request Body:** JSON (ticketId, messageText, attachedImages, attachedFiles)

- **Reply to a Message:**
    - **Method:** POST
    - **Endpoint:** /api/message/reply
    - **Request Body:** JSON (ticketId, messageText, replyMessageId, attachedImages, attachedFiles)

- **Get All Messages for a Specific Ticket:**
    - **Method:** GET
    - **Endpoint:** /api/message/:ticketId

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
