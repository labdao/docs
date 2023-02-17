---
title: Tutorial
sidebar_position: 4
---

## 1. Install Plex
In order to run LabDAO's tools you need to install the Plex client. This is a piece of code that will allow you to run tools, such as the binding affinity prediction tool, by requesting compute-time from members of the LabDAO network.

### Open your terminal
To install Plex, you need to open your terminal. You can learn more about the absolute basics in [youtube tutorials](https://youtu.be/aKRYQsKR46I?t=36), or work through a complete introduction with ressources from the [software carpentry](https://swcarpentry.github.io/shell-novice/01-intro/index.html).

### Type in the command
Once you have your terminal open, you need to type in a command to install Plex. Below is a command you can copy (*CMD+C*) and paste (*CMD+V*) into your terminal. After you have pasted the command into the terminal, press **Enter**:

```
source <(curl -sSL https://raw.githubusercontent.com/labdao/ganglia/main/plex/install.sh)
```

It is expected that after pressing **Enter** on your keyboard, there will be a lot of information about the download and installation of the tool. If the installation was successful, you will see a large LabDAO logo appear on your screen. 

### Enter your password during the installation
During the installation, you will be asked for your password. This is the password you use to log in to your computer. When you type your password, you won't see any characters appear on the screen, but don't worry, the computer is still registering what you're typing.

### Give Plex the right permissions
After the installation is complete, you need to give the Plex client the permissions it needs to run. To do this, type the following command into your terminal and press **Enter**:

```
chmod +x ./plex
```

It is expected that after pressing **Enter** on your keyboard, there won't be a notifcation in your terminal (aka *nothing* will happen).

## 2. Add an API Key
Next, you need to add an API key to use Plex. An API key is a special code that allows the tool to communicate with other programs on the internet.

### Get your API token
To get your API token, you need to contact us. You can do this by sending an [email](mailto:stewards@labdao.com). We will give you an API token to use.

### Add your API token
Once you have your API token, you need to add it to the tool. To do this, type the following command into your terminal:

```
export WEB3STORAGE_TOKEN=<your token here>
```

Make sure to replace ```<your token here>``` with the actual API token you received. There should be no ```<>``` symbols in the token. It is expected that after pressing **Enter** on your keyboard, there won't be a notifcation in your terminal (aka *nothing will happen*).

## 3. Run an example

you can run the following command in the newly-created plex folder to run a container:

```
./plex -app equibind -input-dir ./testdata -gpu false
```
Once the job has run, you can inspect the results interactively.

## 4. Run a custom example

### Download a set of custom files
To test the tool, you need to download some example files. Here's how to do it:

Step 1: Download the example files
Click on the following links to download the example files you'll need:

Protein
Small molecule
Step 2: Move the files to a new directory
After you've downloaded the example files, you need to move them to a new directory. Here's how to do it:


### Process the custom files
Open your terminal and navigate to the directory where you downloaded the files. You can do this by typing the following command:
bash
Copy code
cd ~/Downloads
Create a new directory called "tutorial" and move the example files into it. Here's how to do it:
bash
Copy code
mkdir tutorial
mv 6d08* tutorial
4. Run the custom example
Now that you have the example files in the right place, you can run the binding affinity prediction tool on them. Here's how to


## 4. Run the custom example
 Make sure to point the ``ìnput-dir``` to the location of the files you want to process:

```
./plex -app diffdock -input-dir ./testdata -gpu true
```

Note: you might run into issues with your firewall when running the tool for the first time. On your Mac, you can access your settings via ```System Preferences > Security & Privacy```.

your results

CD command

## 5. Explore result

inputs
outputs
metadata

https://molstar.org/viewer/

drag and drop the files

*screenshot* 