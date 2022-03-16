


make sure your workflow complies with the nf-core community standards. For example, workflow names should be all lower-case and contain no punctuation.

https://www.nextflow.io/docs/latest/getstarted.html#installation


## central files and directories
* work 
* results
* workflows - contains the central workflows
	* revcomp.nf
* subworkflows
* [[main.nf]] - the central process including checks
* assets - additional files needed for the pipeline
* bin - files that have to be directly accessible within the workflow process
* [[nextflow.config]]
* conf
	* multiple config files 
* lib
	* [[groovy]] code describing the CLI behaviour 
* modules - relevant for [[dsl2]]
	* local 
	* nf-core

## other files
* [[nextflow_json.schema]] - nf-core schema build generates it automatically
* modules.json - list of modules installed from nf-core




nf-core create

mv nf-core-revcomp lab-revcomp

## set up nextflow and nfcore on your system
### install nextflow

sudo mv nextflow /usr/local/bin/

./nextflow: line 322: /bin/java: No such file or directory
https://www.java.com/en/download/

http://www.graphviz.org/download/
for mac brew install graphviz

### install nf-core
pip install nf-core
alias nf-core="python3 -m nf_core"

## contributing a new nf-core compliant container to openlab
1. fork this repository 
2. give it a test run on your local system 
3. 