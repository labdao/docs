# How does a transaction on openlab work? 
A transaction of openlab is a multi-step process. To break down the required steps, we illustrate an application call that includes the basic *lab-reverse-complement* service. 

## sequence of events
0. the [client] has installed the [openlab CLI] and created a [local wallet]
1. the [client] lists the available [applications] using: 
``` openlab app list ```
2. 
3.     jobs POST job_object - check http
4. verify job_object via jobURI - check ipfs
5. check the graph that jobURI is among the  valid_and_active jobURIs - check contract
6. access information from job object and start worker
7. deposit result and metadata to IPFS, generate tokenURI
8. call "swap" contract function that 
