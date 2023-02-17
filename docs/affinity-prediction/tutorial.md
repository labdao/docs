---
title: Tutorial
sidebar_position: 4
---

## 1. Install Plex
The first thing you need to do is install the Plex client. This is a piece of code that will allow you to run tools, such as the binding affinity prediction tool, by requesting compute-time from members of the LabDAO network.

### Open your terminal
To install Plex, you need to open your terminal. If you're not sure what that is, it's just a [program on your computer that allows you to type in commands](https://youtu.be/aKRYQsKR46I?t=36).

### Type in the command
Once you have your terminal open, you need to type in a command to install Plex. Here's the command you need to type:

```
source <(curl -sSL https://raw.githubusercontent.com/labdao/ganglia/main/plex/install.sh)
```

### Enter your password during the installation
During the installation, you will be asked for your password. This is the password you use to log in to your computer. When you type your password, you won't see any characters appear on the screen, but don't worry, the computer is still registering what you're typing.

### Give Plex the right permissions
After the installation is complete, you need to give the Plex client the permissions it needs to run. To do this, type the following command into your terminal:

```
chmod +x ./plex
```

## 2. Add an API Key
Next, you need to add an API key to use Plex. An API key is a special code that allows the tool to communicate with other programs on the internet.

### Get your API key
To get your API key, you need to contact us. You can do this by sending an [email](mailto:stewards@labdao.com). We will give you an API key to use.

### Add your API key
Once you have your API key, you need to add it to the tool. To do this, type the following command into your terminal:

```
export WEB3STORAGE_TOKEN=<your token here>
```

Make sure to replace ```<your token here>``` with the actual API key you received.

## 3. Download a set of custom files
To test the tool, you need to download some example files. Here's how to do it:

Step 1: Download the example files
Click on the following links to download the example files you'll need:

Protein
Small molecule
Step 2: Move the files to a new directory
After you've downloaded the example files, you need to move them to a new directory. Here's how to do it:

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


## 1. Install Plex

Move to your home directory. This is where we will install the Plex client.
```
cd ~
```

## 2. Add an API Key

## 3. Download a set of custom files
In this example, we are predicting the binding affinity of an example [protein](https://drive.google.com/uc?export=download&id=1mVu3Xv8Z58cLuTodH0T-GYFuL3DVe0eu) and [small molecule](https://drive.google.com/uc?export=download&id=1ZE4OSpM2TeZ5UXP-mc3YH4ZlEEebtEmx) which you should download first by clicking on the links. Move both files into one directory to get started. 

```
# after downloading the files, we move our files into a directory and call it "tutorial"
cd ~/Downloads
mkdir tutorial
mv 6d08* tutorial
```

## 4. Run the custom example
 Make sure to point the ``ìnput-dir``` to the location of the files you want to process:

```
./plex -app diffdock -input-dir ~/Downloads/tutorial
```

## 5. Explore result