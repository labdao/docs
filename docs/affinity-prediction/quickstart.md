---
title: Quickstart
sidebar_position: 3
---

To get started running the binding affinity prediction tool, first install the LabDAO client. Once installed, you can run the affinity prediction on your own data. 

## 1. Install the LabDAO Client
Our client is a lightweight command line interface that enables you to run tools from your laptop by using a distributed compute network maintained by LabDAO.

To get started, open your [terminal](https://youtu.be/aKRYQsKR46I?t=36) and run the following command: 
```
curl -sL https://raw.githubusercontent.com/labdao/plex/main/install.sh | bash
```

## 2. Add an API Key
In its current version, you will need an API key to use the tool effectively. Please contact us to [claim](mailto:stewards@labdao.com) a key. 


## 3. Download an example input
In this example, we are predicting the binding affinity of an example [protein](https://drive.google.com/uc?export=download&id=1mVu3Xv8Z58cLuTodH0T-GYFuL3DVe0eu) and [small molecule](https://drive.google.com/uc?export=download&id=1ZE4OSpM2TeZ5UXP-mc3YH4ZlEEebtEmx) which you should download first by clicking on the links. Move both files into one directory to get started. 

```
# after downloading the fils, we move our files into a directory and call it "tutorial"
cd ~/Downloads
mkdir tutorial
mv 6d08* tutorial
```

## 4. Run an example 
 Make sure to point the ``ìnput-dir``` to the location of the files you want to process:

```
./plex -app diffdock -input-dir ~/Downloads/tutorial
```

## 5. Explore result