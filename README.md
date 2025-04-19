# Encryption Web Application

This project is a web application that supports various types of encryption and hashing. It provides a user-friendly interface for encrypting passwords, detecting hash types, and managing encrypted words.

## Project Structure

```
encryption-web-app
├── public
│   ├── index.html          # Main HTML document for the web application
│   ├── styles
│   │   └── main.css       # Styles for the web application
│   └── scripts
│       └── app.js         # Main JavaScript logic for the web application
├── src
│   ├── encryption
│   │   ├── hashUtils.js   # Functions for hashing operations
│   │   └── encryptionUtils.js # Functions for various encryption algorithms
│   └── data
│       └── encryptedWords.js # Stores previously encrypted words
├── package.json            # Configuration file for npm
├── README.md               # Documentation for the project
└── .gitignore              # Specifies files to be ignored by Git
```

## Features

- **Password Encryption**: Encrypt passwords using various algorithms such as MD5, SHA-1, SHA-256, and Base64.
- **Hash Type Detection**: Identify the type of hash from a given input.
- **Encrypted Words Management**: Store and display previously encrypted words.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd encryption-web-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `public/index.html` in a web browser.
2. Use the provided input fields to encrypt passwords or detect hash types.
3. View the list of previously encrypted words.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.