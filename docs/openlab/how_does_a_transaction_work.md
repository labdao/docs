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
1. a JSON object with the instructions is generated. We refer to it as ```job_object.json```. In our case ```job-reverse_complement_20220408184322.json``` is stored in a local directory controlled by the client. 
2. ``` 
3. jobs POST job_object - check http


5. verify job_object via jobURI - check ipfs
6. check the graph that jobURI is among the  valid_and_active jobURIs - check contract
7. access information from job object and start worker
8. deposit result and metadata to IPFS, generate tokenURI
9. call "swap" contract function that 

## phase 3: transaction handling on the [provider] side

## phase 4: transaction end on the [client] side
