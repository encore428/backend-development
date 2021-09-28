## Fundamentals in Backend Development

# Day 4 (Aug 24) Home work

This home work was defined in the slide titled [Homework - 17 Aug](./Homework - 24 Aug.pdf), which specified the following:
1. Create two simple Express.js server applications using amqplib:
a. A producer that publishes these messages to the “heartbeat” queue:
i. Every minute: “I’m alive at ${datetime}!”
ii. Every 42nd minute of the hour: “42 is the meaning to life!”
b. A consumer that subscribes to the “heartbeat” queue and writes the messages to a file “log.txt” (append-mode)
2. Write a Dockerfile for each application with build caching considerations.
3. Write a single docker-compose.yml file to run both application services, together with the RabbitMQ service.
a. Using volume mount, persist the “log.txt” file


# Implementation

This homework submission was forked from the repository https://github.com/qinjiang03/backend-development.

The changes were made in the folder `examples/rabbitmq` in the repository.

The changes were achieved with modification to these two files in the folder:

- `srv\db\items.js`
    <ul>
        <li>Enhanced method `db.findAllItems` to accept an optional argument `uid`.  When provided, 
            the method will only return Items created by that `uid`.</li>
        <li>Modified method `db.updateItem` to update an Item only if the Item was created by the 
            requesting user.  When not, return null.</li>
    </ul>
- `srv\routes\items.js`
    <ul>
        <li>Added a new route `/items/{uid}/user` to make use of the enhanced method `db.findAllItems` 
            to list Items created by the specified user.</li>
        <li>Modified route response for `PUT/items/{id}` to handle the circumstance when the requesting user
            is not the user who created the Item.</li>
    </ul>

## Deployment

The homework has been uploaded to GitHub in repository `https://github.com/encore428/backend-development.git`.
Clone it to your local computer.  The computer has to have PostgreSQL installed.

Edit file `.env` to set up your DATABASE_URL.

Perform the following to bring up the application:
```bash
# Change to the directory
$ cd 5e-swagger

# Install project dependencies
$ npm install

# One-off Database tables setup
$ npm run db:migrate

# Start server
$ npm run start
```

User Postman to test the app.
