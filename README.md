# Team-Profile-Generator

## Description 

This [repository](mattdack.github.io/weather-forecast) contains an application that allows the user to utilize command line prompts to enter information about indivuals in their software engineering team. When the user quits the recursive command line prompt, the application generates a valid HTML webpage that displays information about the individuals in the team. The HTML file generated will be saved locally to the directory that this application is downloaded and ran in. The application uses the inquirer node package in order to make command line prompts and take in user information. The file system package from the standard library enables the creation of the new index.html file. Custom class functionality was tested by the Jest test suite. The created HTML file has embedded style links to bootstrap classes.

## Video of Application Usage
<a href = 'https://drive.google.com/file/d/1kFg1j3eA6DrnsMdIHX_9GsQXpNS2EPT1/view'> Link to Video</a>


## Installation

After cloning this repository, users should open the index.js file in an integrated terminal. Initialize the node package manager with the command 'npm init -y'. Install the necessary node packages and their dependencies with the command 'npm install'. The repository git ignore prevents the upload of these packages and dependencies due to size. After those two commands, the application is accessible with the command 'node index.js' which will initialize the prompts in the integrated terminal.

## Usage 

Please follow the installation directions above before attempting to use the application. The command line prompts indicate when to use arrow keys to make a list from a selection. Otherwise, information can be enterred via keystrokes. Prompts asking for ID's require numbers to function correctly. After quitting the command line prompts, an index.html file will be generated in the working directory. Opening the file in a browser will generate a webpage.

## Credits

 Matthew Dacanay created this webpage with initial tests and an html generator helper function written by an instructor. Technical concepts and public resources were referred to as needed. You can find other projects by Matthew at his [github page](github.com/mattdack).