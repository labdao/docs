# How does a transaction on openlab work? 
A transaction of openlab is a multi-step process. To break down the required steps, we illustrate an application call that includes the basic *lab-reverse-complement* service. 

**TODO - feature in development!**

## phase 1: transaction definition on the [client] side
0. the client has installed the [openlab CLI] and created a [local wallet]
1. the client lists the available [applications] using ``` openlab app list ```. In our example the service we focus on ```reverse-complement```
2. the client submits a job using ``` openlab job submit reverse-complement```. During this step the command line is asking for input information interactively. In case the user prefers to use the tool without an interactive component, a JSON template can be exported, edited and submitted with the commands below:
```
# non-interactive submission of jobs on openlab:
# export the job instruction JSON object to a example_directory
openlab app example reverse-complement /example_directory
# edit the job instruction object locally
nano /target_directory/job-reverse_complement.json
# submit a prepared job instruction instead of an interactive process
openlab job submit -t /target_directory/job-reverse_complement.json
```

## phase 2: transaction submission on the [client] side
underneath the hood of ```openlab job submit``` multiple functions are called: 
1. the job object, a JSON with the instructions, is generated. In our case ```job-reverse_complement_20220408184322.json``` is stored in a local directory controlled by the client. An example for ```job-reverse_complement_20220408184322.json``` is below: 

````
{
    "service": 0,
    "service_name": "lab-reverse_complement",
    "input":{
        "sequence": "ctatataaataaataaataaatattatatatatag"
    }
}
````

2. the job object is pinned on IPFS, giving us a ```jobURI``` which will be needed when interacting with the smart contracts of the openlab exchange. The function call is ``` openlab file push job-reverse_complement_20220408184322.json```. 
3. the CLI interacts with the openlab [exchange contract](https://mumbai.polygonscan.com/address/0xfcF2b192c888d411827fDa1884C6FE2438C15Ad0#writeContract) and calls the ```submitJob``` function. The ```jobURI``` of the job object is an argument of this function. 




## phase 3: transaction handling on the [provider] side
1. jobs POST job_object - check http
2. verify job_object via jobURI - check ipfs
3. check the graph that jobURI is among the  valid_and_active jobURIs - check contract
4. access information from job object and start worker
5. deposit result and metadata to IPFS, generate tokenURI
6. call "swap" contract function that 

## phase 4: transaction end on the [client] side
