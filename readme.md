# File Manager Application

**Author: Suraj Kumar Sahu (aka Shaan Suraj)**

---

## Overview

This project implements a simple File Manager Dashboard using Node.js, Express, EJS, and Bootstrap. It allows users to manage files by creating, viewing, and deleting them.

---

## Features

- **Files Section:** Displays all existing files 
- **Add File Section:** Allows users to create new files with specified content and file type
- **Deleted Files Section:** Lists files that have been deleted, with an option to permanently delete them.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaansuraj/assignment2celebal.git
   cd assignment2celebal
2. **Install Dependencies**
    npm install

3. **Setup Environment Variables**
    Create an .env file in the root directory and add these values
    PORT=3000

4. **Run the application**
    nodemon index.js


5. **Access the application**
    Open your browser and go to http://localhost:3000


## Project Structure
```
assignment2celebal/
├── config/        # Configuration file
├── controllers/   # File operation functions
├── public/        # Public assets (CSS, JS)
│   ├── css/
│   └── js/
├── routes/         # File-related routes
├── views/          # EJS templates
├── .gitignore      # Files to ignore in Git
├── index.js        # Application entry point
├── package.json    # Project dependencies
└── README.md       # Documentation file (you are here!)
```



## Additional Information
- **File Type Selection:** Users can choose the file type from a dropdown list when adding new files.
- **Responsive Design:** The dashboard adapts to various screen sizes for optimal user experience.
- **Permanent Deletion:** Files deleted from the "Deleted Files" section are permanently removed.

## Dependencies
- Node.js
- Express.js
- EJS
- dotenv
- Bootstrap 4
- JavaScript
- CSS

## Contributing
    Contributions are welcome! Please open an issue or submit a pull request if you have any improvements.

## Acknowledgements
    This project was created as part of an assignment at Celebal Technologies.

**Author:** ***Suraj Kumar Sahu (aka Shaan Suraj)***

**Email:** ***surajsahu9658@gmail.com***