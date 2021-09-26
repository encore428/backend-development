## Fundamentals in Backend Development

# Day 3 (Aug 17) Home work

This home work was defined in the slide titled [Homework - 17 Aug](./Homework3.md).

# Implementation

<ul>
<li>This homework submission was forked from the repository https://github.com/qinjiang03/backend-development.</li>
<li>The changes are make in the folder `5e-swagger` in the repository.</li>
<li>The changes are achieved with modification to these two files in the folder:
    <ul>
    <li>`srv\db\items.js`:
        <ul>
        <li>Enhanced method db.findAllItems to accept an optional argument `uid`.  When provided, 
            the method will only return Items created by that `uid`.</li>
        <li>Modified method db.updateItem to update an Item only if the Item was created by the 
            requesting user.  When not, return null.</li>
        </ul>
    </li>
    <li>srv\routes\items.js
        <ul>
        <li>Added a new route `/items/{uid}/user` to make use of the enhanced method db.findAllItems 
            to list Items created by the specified user.</li>
        <li>Modified route response for `PUT/items/{id}` to handle the circumstance when the requesting user
            is not the user who created the Item.</li>
	</ul>
    </li>
    </ul>
</li>
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

# Database tables setup
$ npm run db:migrate

# Start server
$ npm run start
```

User Postman to test the app.
