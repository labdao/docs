---
title: Quickstart
sidebar_position: 4
---

:::note

This is a quickstart guide to installing Plex and running an example job. If you'd like a step-by-step walkthrough of this process, try our [tutorial](https://docs.labdao.xyz/affinity-prediction/installation_tutorial).

:::

To get started, the first step is to install the LabDAO client, Plex. Then you can run the affinity prediction tools on your own data.

---
**Time required:**
- Less than 5 minutes

**Requirements**
- Request an API token [here](https://whe68a12b61.typeform.com/to/PpbO2HYf). We'll email you one automatically so you can get started now.

---
## 1. Install Plex
Our client, Plex, is a lightweight command line interface that enables you to run containers using a distributed compute network maintained by LabDAO.

To get started, run the following commands from your terminal: 
```
source <(curl -sSL https://raw.githubusercontent.com/labdao/plex/main/install.sh)
```

During the setup you will be asked for your password. Once the installation is complete, run the following command to give the client the permissions it needs:

```
chmod +x ./plex
```

## 2. Add an API Token
For the beta version of the tool, you will need an API token to use the tool effectively. Request an API token [here](https://whe68a12b61.typeform.com/to/PpbO2HYf).

You can add the API token like this: 
```
export WEB3STORAGE_TOKEN=<your token here>
```

## 3. Run an example
Once the client is installed and you have provided an API token, you can run the following command in the newly-created plex folder to run a container with our provided data:

```
./plex -app equibind -input-dir ./testdata/pdbbind_processed_size1/
```
Once the job has run, you can inspect the results interactively in a job-specific directory that is displayed by the client, for example ```/Users/your-name/plex/bb24bb4d-647f-487e-a1b6-16646a227318```.

To see how to visualize the results with Molstar, [check out section 3 of our tutorial](https://docs.labdao.xyz/affinity-prediction/installation_tutorial#visualize-the-job-results).

:::tip
If you have any problems, check out the more detailed walkthrough in our [tutorial](https://docs.labdao.xyz/affinity-prediction/installation_tutorial).

If you're still running into difficulties, [send us an email](mailto:stewards@labdao.com) and we'll help you out.
:::
