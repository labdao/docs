---
title: Quickstart
sidebar_position: 4
---

To get started running the binding affinity prediction tool, first install the LabDAO client. Once installed, you can run the affinity prediction on your own data. 

## 1. Install Plex
Our client is a lightweight command line interface that enables you to run containers  using a distributed compute network maintained by LabDAO.

To get started, run the following commands from your terminal: 
```
source <(curl -sSL https://raw.githubusercontent.com/labdao/ganglia/main/plex/install.sh)
```

During the setup you will be asked for your password. Once the installation is complete, run the following command to give the client the permissions it needs:

```
chmod +x ./plex
```

## 2. Add an API Token
In its current version, you will need an API token to use the tool effectively. Please contact us to [claim](mailto:stewards@labdao.com) a token. 

You can add the API token like this: 
```
export WEB3STORAGE_TOKEN=<your token here>
```

## 3. Run an example
Once the client is installed and you have provided an API token, you can run the following command in the newly-created plex folder to run a container:

```
./plex -app equibind -input-dir ./testdata -gpu false
```
Once the job has run, you can inspect the results interactively in a job-specific directory that is displayed by the client, for example ```/Users/your-name/plex/bb24bb4d-647f-487e-a1b6-16646a227318```.