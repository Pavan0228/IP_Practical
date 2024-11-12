# Ultimate Cheat Code for Passing Your IP Practical Exam

This project is the ultimate cheat code for passing your IP practical exam. It is an implementation of a practical exercise for Information Processing, featuring a frontend and a backend designed to work seamlessly together.


## Features

- User authentication
- Hotel management
- Blood management
- E-commerce management
- Library management
- Files management


## Getting Started

## Download Applications

To set up your development environment, download and install the following applications:

### 1. [VS Code (Visual Studio Code)](https://code.visualstudio.com/)
   - Visit the [VS Code download page](https://code.visualstudio.com/).
   - Select your operating system (Windows, macOS, or Linux).
   - Follow the installation instructions.

### 2. [Node.js (version 14 or later)](#installing-nodejs-on-windows-11)

### 3. [MongoDB (latest version)](#mongodb-installation-guide-for-windows-11)

### 4. [Postman](https://www.postman.com/downloads/)
   - Visit the [Postman download page](https://www.postman.com/downloads/).
   - Download the desktop app for your operating system.
   - Follow the installation instructions to set it up.

### 5. [Git](https://git-scm.com/)
   - Visit the [Git download page](https://git-scm.com/).
   - Download the latest stable version for your operating system.
   - Follow the installation instructions.
   - After installation, you can verify the Git installation by running `git --version` in the command line.



## Vs Code Extensions
1. npm Intellisense
2. Path Intellisense
3. Tailwind CSS IntelliSense
4. DevSnip Pro
5. ES7 React/Redux/GraphQL/React-Native snippets
6. Auto Close Tag
7. Auto Rename Tag
8. Error Lens

### Installation

Follow these steps to set up the project locally.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sridhar1030/IP_Practical.git
   cd IP_Practical
   ```

3. **Set up the backend:**

   Navigate to the backend folder and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

4. **Set up the frontend:**

   Open another terminal, navigate to the frontend folder and install the dependencies:

   ```bash
   cd Frontend
   npm install
   ```

### Configuration

1. **Backend Configuration:**
   - Set up your MongoDB connection string and other necessary variables in the `.env` file.

2. **Frontend Configuration:**
   - If needed, configure any environment variables required for the React app.

### Running the Project

1. **Start the backend server:**

   Navigate to the backend directory and run:

   ```bash
   npm run dev
   ```

2. **Start the frontend application:**

   Open another terminal, navigate to the frontend directory, and run:

   ```bash
   npm run dev
   ```

### Usage

- Access the frontend at `http://localhost:5173` and interact with the application.
- The backend API will be available at `http://localhost:3000`.

## References

- [Inventory](https://github.com/DurveshRoge/Inventory)
- [Todo](https://github.com/Pavan-0228/Todo)
- [QR Hackathon](https://github.com/Sridhar1030/QR_Hackathon)
- [E-commerce management](https://github.com/Sridhar1030/BrowseAndBuy)


# Installing Node.js on Windows 11
A comprehensive guide to download and install Node.js on your Windows 11 system.

## Step 1: Download Node.js

```bash
# Visit the official Node.js website
https://nodejs.org/
```

1. **Visit Node.js Website**
   - Go to [nodejs.org](https://nodejs.org/)
   
2. **Choose Version**
   - Select LTS version (recommended)
   - Or Current version (latest features)

3. **Download Windows Installer**
   - Click on Windows Installer (.msi)
   - Save the file to your computer

## Step 2: Installation Process

1. **Run the Installer**
   - Double-click downloaded .msi file
   - Follow installation wizard

2. **Installation Settings**
   ```
   ✓ Accept license agreement
   ✓ Choose installation directory (default recommended)
   ✓ Ensure "Add to PATH" is selected
   ✓ Click Install
   ```

3. **Complete Installation**
   - Click Finish when prompted

## Step 3: Verify Installation

Open Command Prompt and run:

```bash
# Check Node.js version
node -v

# Check npm version
npm -v
```

## Step 4: Environment Variables

```bash
# Default Node.js Path
C:\Program Files\nodejs\
```

To verify/add to PATH manually:
1. Right-click Start → System
2. Advanced system settings
3. Environment Variables
4. System variables → Path → Edit
5. Add Node.js path if missing

## Quick Troubleshooting

If Node.js commands aren't recognized:
1. Restart Command Prompt
2. Verify PATH in Environment Variables
3. Re-run installation if necessary

## System Requirements

- Windows 11
- Administrator privileges
- Internet connection
- Minimum 200MB free space

## Additional Resources

- [Node.js Documentation](https://nodejs.org/docs)
- [npm Documentation](https://docs.npmjs.com)
- [Node.js GitHub](https://github.com/nodejs/node)



# MongoDB Installation Guide for Windows 11
A step-by-step guide to install MongoDB on Windows 11.

## Prerequisites

- Windows 11
- Administrator privileges
- Minimum 5GB free disk space
- Internet connection

## Step 1: Download MongoDB

```bash
# Visit MongoDB official website
https://www.mongodb.com/
```

1. **Access Download Center**
   - Visit [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Select version: Latest
   - Platform: Windows
   - Package: MSI

## Step 2: Installation Process

1. **Run Installer**
   ```
   ✓ Double-click downloaded .msi file
   ✓ Accept license agreement
   ✓ Choose "Complete" installation
   ✓ Install MongoDB as a Service (recommended)
   ✓ Install MongoDB Compass (optional GUI)
   ```

2. **Default Installation Paths**
   ```
   Service: C:\Program Files\MongoDB\Server\[version]\bin
   Data: C:\data\db
   Log: C:\Program Files\MongoDB\Server\[version]\log
   ```

## Step 3: Environment Variables Setup

1. **Add to System PATH**
   ```bash
   # Add this path to environment variables
   C:\Program Files\MongoDB\Server\[version]\bin
   ```

2. **Create Data Directory**
   ```bash
   # Create default data directory
   md C:\data\db
   ```

## Step 4: Verify Installation

1. **Start MongoDB Server**
   ```bash
   # Start MongoDB service
   mongod
   ```

2. **Connect to MongoDB**
   ```bash
   # Open MongoDB shell
   mongo
   ```

## Common Commands

```bash
# Check MongoDB version
mongo --version

# Start MongoDB service
net start MongoDB

# Stop MongoDB service
net stop MongoDB

# Access MongoDB shell
mongosh
```

## Directory Structure

```
C:\
├── Program Files\MongoDB\
│   └── Server\
│       └── [version]\
│           ├── bin\
│           └── log\
└── data\
    └── db\
```

## Troubleshooting

If MongoDB fails to start:
1. Check if service is running
2. Verify data directory exists
3. Check port 27017 availability
4. Review MongoDB logs

## Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Community](https://www.mongodb.com/community/)
