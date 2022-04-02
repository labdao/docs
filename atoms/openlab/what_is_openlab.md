# What Is openlab?
Openlab is an exchange protocol allowing members within the LabDAO community to exchange services with eachother. While we focus on computational services in the beginning, openlab is a peer-to-peer marketplace protocol accounting built to handle all forms of off-chain work. 

## What are the key steps of openlab?
Openlab can be divided into three elements, a data exchange layer, an instruction exchange layer and a value exchange layer. Consumers (Clients) and Providers (also reffered to as Servers) communicate with each other using all three layers. 

<img width="1070" alt="labdao_progress" src="https://github.com/labdao/assets/blob/main/docs/Group%203.png">

### opening a transaction
Clients use the openlab command-line-interface or the openlab website to define their requested laboratory service using a standard form defined by the community and served through a REST API. The job instructions are sent to a LabDAO-hosted index service which relays the request to a series of gateways, run by trusted providers within the community. In the future, multiple permissionless index services will be available. 

As a part of submitting their job instructions via the openlab REST API, the client also posts the request as a JSON object to IPFS. The pinned JSON object is now globally visible. In case the job includes input data, these data are also exposed on IPFS using the same mechanism. Data is pinned using [estuary](https://estuary.tech/). Future versions of openlab will support threshold encryption of uploaded data.

Finally, the client deposits a previously communicated amount of tokens into the openlab escrow contract and thereby opens an openlab transaction on the ethereum virtual machine. To open the a transaction, the client references the JSON object with the job instructions that was previously exposed on IPFS.

### closing a transaction
All provider of a particular service within the community receive the job instructions sent by the client. If the provider has capacity to process a service, it checks that the client has made a deposit of the agreed upon number of tokens into the escrow contract. If the job instructions pass all checks and funds are available in the contract, a provider can claim the transaction. Transactions are claimed on a first-come first-served basis.  

Once a transaction is claimed by a provider, it begins to process the requested job. The processing of jobs, just like the instruction templates, is standardized by LabDAO. In case of computational services, LabDAO develops standardized containers or adopts widely-accepted standards, such as nf-core. After processing the job, all output data is pinned to IPFS. The provider now mints a non-fungible token (NFT) referencing the generated data and the initial instructions.

Finally, after generating the NFT, the token is transferred to the client on-chain and funds are claimed from the escrow. A fixed fee of the released funds flows into the LabDAO community treasury to support further development of this open source project. 

## Value exchange using the openlab contracts

## Data exchange using decentralized storage and NFTs


## Instruction exchange using the openlab REST API standard

## Can I try it? 
Soon.