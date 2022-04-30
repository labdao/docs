# Why does metadata matter?
Scientific data is ideally stored according to [FAIR](https://www.go-fair.org/fair-principles/) principles, developed by [Mark Wilkinson](https://www.nature.com/articles/sdata201618). These include: 
* Findability
* Accessibility
* Interoperability
* Reuse 

Put differently, data is ideally stored at a location that is known to others, accessible to others, adheres to public standards and thus invites reuse. 

Web3 brings new possibilities to share and control data and distribute data according to FAIR principles, while also enabling mechanisms that preserve 
* direct content addressing 
* on-chain provenance tracking
* flexible access control

supercharges FAIR principles

## Existing forms of metadata 
### ERC721
In web3 most known for NFTs 
opensea NFTs
IP-NFT framwork by Molecule

In bioinformatics used to understand processing steps of large data
biocompute object

example: 

### biocompute object
IEEE standard
wordy
no web3 primitives like content addressing URIs, nested JSONs, wallet-based identities

example https://biocomputeobject.org/objects/view/https/biocomputeobject.org/BCO_013112/0.1

domains and sections
* object information - ID
* provenance - name and date
* usability - description of content
* description - misnomer, computational graph of how the object was derived
* execution - information about runtime
* io domain 
* parametric domain

example


## lab-NFT
* domain specificity -  biocompute object and [prior writing](https://niklasrindtorff.substack.com/p/building-a-knowledge-graph-for-biological)
* simplicity and ability to nest - opensea

By building on the proposed structure of the biocompute object and simplifying it with web3 primitives, we come up with a proposed standard for lab-IP-NFT metadata:

1. object information is at top-level and includes a description (useability domain)
2. user: user object
3. parameters: parameter object
4. input: data object that includes context and link to a file
5. provider: provider object
6. execution: execution object (contains information about the runtime and the computational graph that was executed. The execution is often pointing to a standardized docker container)
7. output: data object that includes context and link to a file

An example below: 

```` toplevel.json
{
  "name": "reverse-complement",
  "description": "the reverse complement of a DNA sequence",
  "image": "https://arweave.net/gQm_NpkJIjEFD6sOVHLEJ-tZIKhRvgmYEl5es0g-YdQ",
  "properties": {
      "user": 
      "parameters":
      "input":
      "provider":
      "execution":
      "output":
  }
}
````

A user and provider object can be JSON objects that are either static or dynamic identity documents (using tools like [ceramic](https://developers.ceramic.network/learn/features/)). DID 

```` user.json
{
  "name": "Niklas Rindtorff"
  "affiliation": "LabDAO"
}
````

A parameter object is defined by the LabDAO community and is application specific. Certain simple applications, such as our reverse complement example, do not require parameters.

An example for a more complex job, an alphafold v2 run, below: 

```` parameter.json
{
  "weights": # ipfs link,
  "mode": "monomer",
  "database": "full",
  "max_template_date": "2022-01-01",
  "is_prokaryote": false
}
````

```` input.json
{
  "name": "input sequence 1"
  "type": "fasta"
  "uri": ipfs
},
{
  "name": "input sequence 2"
  "type": "fasta"
  "uri": ipfs
}
````

```` execution.json
{
  "image" ipfs_docker
  "command"
  "runtime"
  "logs": 
}
````

### endgame: composability
a single experimental result is not enough for a figure
and a single figure is not enough for a manuscript
and a single manuscript is not always enough to launch a biotech company around

give research results the composability they need to grow 

child is an ERC721 
parent is an ERC998 top-down token that can own multiple ERC721 tokens

https://hackernoon.com/top-down-and-bottom-up-composables-whats-the-difference-and-which-one-should-you-use-db939f6acf1d

https://knownorigin.io/journal/platformupdate/composable-nfts

http://erc998.org/ abandoned standard 
https://github.com/OpenZeppelin/openzeppelin-contracts/issues/3062

https://github.com/aavegotchi/aavegotchi-contracts



````
{
  "name": "The Longevity Molecule (IPNFT)",
  "description": "The Scheibye-Knudsen lab has analyzed 1.5 billion prescriptions from 4.8 million individuals over 40 years in The Danish National Health Service Prescription Database and correlated this with the survival of individuals prescribed certain drugs. The Scheibye-Knudsen Lab has identified several FDA-approved medications that appear to have a strong effect on lifespan following analysis. This project focuses on testing and developing three of these small molecules as possible interventions in aging, with the first series of experiments testing these therapies in fruit flies and human cells. This is an exclusive license agreement for the IP resulting from these experiments.",
  "image": "https://arweave.net/gQm_NpkJIjEFD6sOVHLEJ-tZIKhRvgmYEl5es0g-YdQ",
  "properties": {
    "agreement_type": "Trade Secret",
    "industry": "Pharmaceutical R&D",
    "research_lead": "The Scheibye-Knudsen Lab"
    "refernces_1": lab_token1_uri
    "references_2": lab_token2_uri
  }
}
````




## job 
* verbose - Biocompute object
    * object information ~ molecule ipnft toplevel
    * properties
        * research lead
        * provenance domain - laboratory
            * wallets server
        * 
    * environment domain
    * input
        * uri
    * output
        * uri to 
    * object_information
* exisitng - Molecule IP-NFT standard 
https://pfamwznmskrsyin62vzewfwros4jvltf5rnwm3xgoqytesyvomrq.arweave.net/eUDLZaySoywhvtVySxbRdLiarmXsW2Zu5nQxMksVcyM
https://vbvqpfwvgq6tprsnenpwekslljyxatroudyqeuomttqrim5cum.arweave.net/qGsHltU0PTfGTSNfYipLWnFwTi6g8Q-JRzJzhFDOio4

* compatible - opensea ERC721 (https://docs.opensea.io/docs/metadata-standards)




* composability
* optimized for search

* take inspiration from bio-compute object 
* transformable
    * opensea
    * etc.

## Molecule IP-NFT toplevel 

````
{
  "name": "The Longevity Molecule (IPNFT)",
  "description": "The Scheibye-Knudsen lab has analyzed 1.5 billion prescriptions from 4.8 million individuals over 40 years in The Danish National Health Service Prescription Database and correlated this with the survival of individuals prescribed certain drugs. The Scheibye-Knudsen Lab has identified several FDA-approved medications that appear to have a strong effect on lifespan following analysis. This project focuses on testing and developing three of these small molecules as possible interventions in aging, with the first series of experiments testing these therapies in fruit flies and human cells. This is an exclusive license agreement for the IP resulting from these experiments.",
  "image": "https://arweave.net/gQm_NpkJIjEFD6sOVHLEJ-tZIKhRvgmYEl5es0g-YdQ",
  "properties": {
    "agreement_type": "Trade Secret",
    "industry": "Pharmaceutical R&D",
    "research_lead": "The Scheibye-Knudsen Lab"
    "refernces_1": lab_token1_uri
    "references_2": lab_token2_uri
  }
}
````

## lab_token1_uri .json

````
name: openlab reversecomplement 
description: user-defined description 
"image": 

````

resolve ENS on the user interface 
but do not reference ENS in metadata ever

````
{
    "name": "openlab reverse complement",
    "description": "the reverse complement to an input DNA sequence",
    "image": "https://ipfs.io/ipfs/QmZ9oReVUiNQSc9GaqqTEPUW3XHo6eprVSa9nqbGNotP8B",
    "attributes": [
        {
            "trait_type": "Service ID",
            "value": "0"
        },
        {
            "trait_type": "Service Name",
            "value": "lab-reverse_complement"
        },
        {
            "trait_type": "Input Sequence",
            "value": "ctatataaataaataaataaatattatatatatag"
        },
        {
            "trait_type": "Output Sequence",
            "value": "ctatatatataatatttatttatttatttatatag"
        },
        {
            "trait_type": "Metadata",
            "value": {
                "repository": "https://github.com/openlab-apps/lab-reverse_complement/tree/2-serverless-stage",
                "commit": "ddf80e0e953fde3d8cbe9f17fc3f1108cac7bc37",
                "deployment": "https://02wun6.deta.dev/"
            }
        },
        {
            "trait_type": "Job URI",
            "value": "ipfs://QmdQP9D44Hgp8697FpGJrkTiQYSiUH3xEsvumKX3jJmV58"
        }
    ]
}
````

## Encryption 


