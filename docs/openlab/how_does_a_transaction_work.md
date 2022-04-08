# How does a transaction on openlab work? 
A transaction of openlab is a multi-step process. To break down the required steps, we illustrate an application call that includes the basic *lab-reverse-complement* service. 

## sequence of events
0. the [client] has installed the [openlab CLI] and created a [local wallet]
1. POST job_object - check http
2. verify job_object via jobURI - check ipfs
3. check the graph that jobURI is among the  valid_and_active jobURIs - check contract
4. access information from job object and start worker
5. deposit result and metadata to IPFS, generate tokenURI
6. call "swap" contract function that 
