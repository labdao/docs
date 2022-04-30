# Why does metadata matter?
## Scientific data should be FAIR
Scientific data is ideally stored according to [FAIR](https://www.go-fair.org/fair-principles/) principles, developed by [Mark Wilkinson](https://www.nature.com/articles/sdata201618). These include: 
* **F**indability
* **A**ccessibility
* **I**nteroperability
* **R**euse 

Put differently, data is ideally stored at a location that is known to others, accessible to others, adheres to public standards and thus invites reuse. 

Web3 introduces new methods to share, control data and distribute data according to FAIR principles. These methods include:
* direct content addressing 
* on-chain provenance tracking
* robust access control

With these methods, data can be pinned visibly and addressable for everyone. Ownership of data can be traced and access to encrypted information can be tied to token ownership. Web3 increases the findability and accessibility of data - the "F" and "A" of FAIR.

To make data more interoperable ("I") and reuseable ("R") its formatting needs to be standardized and it needs to be presented with sufficient metadata to provide relevant context. LabDAO is an online community of scientists and engineers that, among many things, adopts and defines standards for data formats and metadata structure. This article introduces a simple standard for tokenized scientific data. 

## Web3 x Bio forms of metadata 
Let's take a look at common metadata formats seen in web3 and biotechnology. 

### ERC721
The most common use of metadata in web3 is for NFTs following the ERC721 standard. An object, often a digital artwork, is referenced within a metadata JSON together with additional attributes. Often these attributes give us more details about the artwork that matter to some collectors. 

![](https://hackmd.io/_uploads/BylIvxsrc.png)

This is how such a metadata JSON looks like. The picture of the penguin itself is referenced under *image* using a universal ressource identifier (URI). 

```` pudgy.json
{
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Skin",
      "value": "Normal"
    },
    {
      "trait_type": "Body",
      "value": "Lab Coat"
    },
    {
      "trait_type": "Face",
      "value": "Cross Eyed"
    },
    {
      "trait_type": "Head",
      "value": "Cowboy Hat"
    }
  ],
  "description": "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
  "image": "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/3020.png",
  "name": "Pudgy Penguin #3020"
}
````

This existing NFT standard as also been adapted by our friends at [Molecule](https://www.molecule.to/) to represent legal sublicensese for intellectual property. This form of NFT is called an IP-NFTs. 

### Biocompute Objects
In bio, specifically computational biology, an international standard for metadata of research data exists: [biocompute objects](https://www.biocomputeobject.org/). 

To adhere to this standard (which rarely happens), scientists have to provide extensive information across multiple aspects: 
* who created the data (provenance domain)
* a description of the content (usability domain)
* a step-by-step computational pipeline of how the data was generated (description domain)
* information about the runtime in which the processing was run (execution domain)
* links to input and output data (io domain)
* parameters that were used in the computational pipeline (parameter domain)




wordy
no web3 primitives like content addressing URIs, nested JSONs, wallet-based identities

example https://biocomputeobject.org/objects/view/https/biocomputeobject.org/BCO_013112/0.1

domains and sections
* object information - ID


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


