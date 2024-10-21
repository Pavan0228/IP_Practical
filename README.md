# IP_Practical
Extentsions
1. npm Intellisense
2. Path Intellisense
3. Tailwind CSS IntelliSense
4. DevSnip Pro


To download Nodejs
### Step 1: Download Node.js

1. **Visit the Node.js website**:
   - Go to the official Node.js website: [nodejs.org](https://nodejs.org/).

2. **Choose the version to download**:
   - You'll see two versions available: **LTS (Long Term Support)** and **Current**. Choose the LTS version for better stability unless you need features from the Current version.

3. **Download the installer**:
   - Click on the appropriate installer for Windows (e.g., `Windows Installer (.msi)`).

### Step 2: Install Node.js

1. **Run the installer**:
   - Once the download is complete, double-click the installer to run it.

2. **Follow the installation wizard**:
   - Click `Next` on the welcome screen.
   - Accept the license agreement and click `Next`.
   - Choose the installation location (or leave it as the default) and click `Next`.
   - Make sure the checkbox for "Add to PATH" is selected (this is crucial for setting the environment variables automatically) and click `Next`.
   - Click `Install` to start the installation process.

3. **Complete the installation**:
   - Once the installation is finished, click `Finish`.

### Step 3: Verify Node.js Installation

1. **Open Command Prompt**:
   - Press `Win + R`, type `cmd`, and hit `Enter` to open the Command Prompt.

2. **Check Node.js version**:
   - Run the following command to verify that Node.js is installed successfully:
     ```bash
     node -v
     ```
   - This should display the installed version of Node.js.

3. **Check npm version** (Node Package Manager):
   - Run the following command to verify that npm is also installed:
     ```bash
     npm -v
     ```
   - This should display the installed version of npm.

### Step 4: Set Environment Variables (if needed)

**Note**: If you followed the installation steps and selected "Add to PATH," Node.js should already be in your environment variables. To manually add or verify it:

1. **Open System Properties**:
   - Right-click on the Start button and select `System`.
   - Click on `Advanced system settings` on the left sidebar.

2. **Open Environment Variables**:
   - In the System Properties window, click on the `Environment Variables` button.

3. **Add or Edit Path**:
   - In the "System variables" section, find the `Path` variable and select it, then click `Edit`.
   - If Node.js is not listed, click `New` and add the path to the Node.js installation, which is usually:
     ```
     C:\Program Files\nodejs\
     ```
   - Click `OK` to close all dialog boxes.

### Step 5: Restart Command Prompt

1. **Close and reopen Command Prompt**:
   - Make sure to close and reopen Command Prompt for the changes to take effect.

### Conclusion

Now you have successfully downloaded and installed Node.js on your Windows 11 system, and it's properly set up in the environment variables. You can start using Node.js for your development needs!











//To download mongoDB
Here are the steps to download and install MongoDB on Windows 11, including setting it up in environment variables:

### Step 1: Download MongoDB

1. **Visit the MongoDB website**:
   - Go to the official MongoDB website: [mongodb.com](https://www.mongodb.com/).

2. **Navigate to the Download Center**:
   - Click on the **"Get Started"** button or directly go to the [MongoDB Community Server download page](https://www.mongodb.com/try/download/community).

3. **Choose the version to download**:
   - Select the latest version of MongoDB for Windows. Choose the **MSI package** for easy installation.

4. **Download the installer**:
   - Click the **"Download"** button to get the installer.

### Step 2: Install MongoDB

1. **Run the installer**:
   - Once the download is complete, double-click the installer (`.msi` file) to run it.

2. **Follow the installation wizard**:
   - Click `Next` on the welcome screen.
   - Accept the license agreement and click `Next`.
   - Choose **"Complete"** installation when prompted.
   - Select the option to **Install MongoDB as a Service** (this is recommended) and proceed with the default settings. Click `Next`.
   - When prompted, choose to install **MongoDB Compass** if you want a GUI for managing your databases, or you can skip this.

3. **Complete the installation**:
   - Click `Finish` to complete the installation.

### Step 3: Set Up MongoDB Environment Variables

1. **Open System Properties**:
   - Right-click on the Start button and select `System`.
   - Click on `Advanced system settings` on the left sidebar.

2. **Open Environment Variables**:
   - In the System Properties window, click on the `Environment Variables` button.

3. **Add MongoDB to Path**:
   - In the "System variables" section, find the `Path` variable and select it, then click `Edit`.
   - Click `New` and add the path to the MongoDB installation's `bin` directory. By default, it should be:
     ```
     C:\Program Files\MongoDB\Server\<version>\bin
     ```
     Replace `<version>` with the version number you installed (e.g., `6.0`).

4. **Set the Data Directory (Optional)**:
   - MongoDB requires a data directory to store its data. By default, it uses `C:\data\db`. You can create this directory manually:
     - Open `File Explorer`, navigate to `C:\`, right-click, select `New > Folder`, and create a folder named `data`.
     - Inside the `data` folder, create another folder named `db`.

5. **Click OK** to close all dialog boxes.

### Step 4: Verify MongoDB Installation

1. **Open Command Prompt**:
   - Press `Win + R`, type `cmd`, and hit `Enter` to open the Command Prompt.

2. **Start the MongoDB server**:
   - Run the following command to start the MongoDB server:
     ```bash
     mongod
     ```
   - If the command is recognized and the server starts, you will see messages indicating that MongoDB is running.

3. **Open a new Command Prompt window**:
   - Press `Win + R`, type `cmd`, and hit `Enter` again to open another Command Prompt.

4. **Connect to MongoDB**:
   - In the new Command Prompt window, run the following command to connect to the MongoDB server:
     ```bash
     mongo
     ```
   - You should see a MongoDB shell prompt, indicating that you are connected to the server.

### Conclusion

You have successfully downloaded, installed, and configured MongoDB on your Windows 11 system, along with setting it in the environment variables. You can now start using MongoDB for your database needs!


