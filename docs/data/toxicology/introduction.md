## Background
Biology related Machine Learning is often benchmarking prediction tasks for toxicology. Existing sources for such data are the [MoleculeNet](https://moleculenet.org/datasets-1) and [TherapeuticsDataCommons](https://tdcommons.ai/overview/). 

Common data include: 
### [Tox21](https://deepchemdata.s3-us-west-1.amazonaws.com/datasets/tox21.csv.gz)
The Tox21 program (NRC, 2007; Collins et al., 2008; Kavlock et al., 2009; Tice et al., 2013), a collaboration among the National Institute of Environmental Health Sciences (NIEHS)/National Toxicology Program (NTP), the U.S. Environmental Protection Agency's (EPA) National Center for Computational Toxicology (NCCT), the National Institutes of Health (NIH) National Center for Advancing Translational Sciences (NCATS), and the U.S. Food and Drug Administration (FDA)

high-throughput screening (qHTS) data (>50 million data points) on a library of 10K compounds, including environmental chemicals and drugs, against a panel of nuclear receptor and stress response pathway assays during its production phase (phase II)

30 cell based assays 
of these assay 12 met all benchmarks for assay quality (z-score > 0.5, signal-to-noise > 3, coefficient-of-variance < 0.1).
in most machine learning benchmarks these 12 assays are selected. 
However the authors tested each of these 30 assays for reproducibility, beyond these (arbitrary) assay quality cutoffs. All assays had a rate of mismatched results across triplicate experiments below 2%. 

Generally, by being in-vitro assays, predictions made on these data should be treated with great care. 

2017 https://www.frontiersin.org/articles/10.3389/fenvs.2017.00003/full
https://pubmed.ncbi.nlm.nih.gov/26811972/

in-vitro assays in eukaryote cells, including
* hormone receptor signaling (estrogens and androgens)
* stress-response signaling
* mitochondrial toxicity

interpreted with care. For example a substance that is designed to interact with DNA or has hormonal properties, is expected to be be flagged in this assay.

https://tripod.nih.gov/tox21/challenge/data.jsp
https://docs.google.com/spreadsheets/d/1S2nAzOIesdh7Hr1AiphWu9U9og40Eow-1N1P9XXg7pI/edit?usp=sharing


https://static-content.springer.com/esm/art%3A10.1038%2Fncomms10425/MediaObjects/41467_2016_BFncomms10425_MOESM552_ESM.pdf

[ToxCast](https://deepchemdata.s3-us-west-1.amazonaws.com/datasets/toxcast_data.csv.gz)

[ClinTox](https://deepchemdata.s3-us-west-1.amazonaws.com/datasets/clintox.csv.gz)
* FDA approval 
* Discontinuation due to toxicity

We downloaded data from ClinicalTrials.gov from the AACT database. To extract the names of the drugs associated with clinical trials that failed toxicity reasons, we identified any clinical trials that were annotated as “Terminated,” “Suspended,” or “Withdrawn” and described as failing for toxicity reasons. The list of FDA-approved drugs was obtained from the drug annotations within the DrugBank 4.0 database (Law et al., 2014).

[SIDER](https://deepchemdata.s3-us-west-1.amazonaws.com/datasets/sider.csv.gz)