# 📖tech-blog
This is the Challenge-14 related to Model-View-Controller (MVC)

## Description
This project, titled "Tech Blog", is a CMS-style blog site similar to a WordPress site, built using the Model-View-Controller (MVC) architectural pattern. The application allows users to publish their blog posts and comment on other developers' posts as well. It utilizes technologies such as Node.js, Express.js, and Sequelize for the back-end, and Handlebars.js for the front-end. The application is deployed on Render and uses a PostgreSQL database for data persistence.

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Database-Appearance

Entity Relationship Diagram:
📍![ERD](/assets/D-E-R.png)

Link to the application deployed using Render:
[APPEARANCE-APPLICATION](https://tech-blog-p9ue.onrender.com)

## Table of Contents
- [📖tech-blog](#tech-blog)
  - [Description](#description)
  - [Database-Appearance](#database-appearance)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
    - [📚Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [❔Questions](#questions)

## Installation

To install this application, you'll need Node.js and npm installed on your computer. Follow these steps:

1. Clone this repository to your local machine using `git clone <https://github.com/NathaliaReyes/tech-blog.git>` or `git clone <git@github.com:NathaliaReyes/tech-blog.git>`.
2. Navigate to the cloned repository in your terminal `cd tech-blog`.
3. Install the necessary npm packages by running `npm install`.
4. Ensure you have a PostgreSQL server running and accessible (change credentials-username, password..).
5. Set up your database by running the provided schema file in your PostgreSQL client `psql -U <username>` and `\i db/schema.sql`.
6. Seed the database, `npm run seed`.
7. Start the application by running `npm run start` in your terminal.

Please refer to the `Usage` section for more details on how to use the application.

## Usage

1. **Access the application:** Navigate to the deployed application URL. You will be presented with a list of all blog posts.

2. **View a post:** To view the details of a post, you will need to log in. Click on the "Login" button and enter your credentials. If you do not have an account, click on "Sign Up" to create a new account.

3. **Comment on a post:** After logging in, you can view the details of any post and add your comments. Navigate to the post you are interested in and enter your comment in the "Add Comment" section.

4. **Create a new post:** Logged in users can also create their own posts. Click on the "Create Post" button and fill in the title and content for your new post.
   
5. **Update a post:** If you are the author of a post, you can update it. Navigate to the post you want to update, click on the "Edit" button, make your changes, and then click on the "Save" button to save your changes.

6. **Delete a post:** If you are the author of a post, you can also delete it. Navigate to the post you want to delete and click on the "Delete" button.

Remember to log out when you are done using the application to ensure the security of your account.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

[pgAdmin4](https://www.pgadmin.org/) is an open-source tool for PostgreSQL with a built-in ERD tool.

### 📚Acknowledgements

- **Node.js** 
- **Sequelize.js** 
- **PostgreSQL**
- **ByCrypst**
- **Express.js**

## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [MIT License.](https://opensource.org/licenses/MIT) : Expat License.

## Features

+ **User Registration and Authentication:** Users can create a new account and log in. This ensures that only authenticated users can create, update, or delete posts.

+ **Blog Post Creation:** Logged in users can create new blog posts. This allows users to share their thoughts and ideas.

+ **Blog Post Viewing:** All visitors can view the list of blog posts. This allows users to browse and read posts.

+ **Blog Post Update and Deletion:** The author of a blog post can update or delete the post. This gives users full control over their own posts.

+ **Commenting:** Logged in users can comment on any post. This allows users to engage in discussions and share their thoughts on different posts.

+ **User Profile Management:** Users can view and update their profile information. This allows users to manage their personal information and account settings.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

n/a

## ❔Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com
LinkedIn 👩🏻‍💻: [SilviaReyes](https://www.linkedin.com/in/silvia-reyes-2b907123b/)

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



***Thanks for stopping!***
