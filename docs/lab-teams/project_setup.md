---
title: Setting up a workspace
description: To collaborate effectively online, we use community standards to organise scientific results, code and writings.
sidebar_position: 4
---

## installing cookiecutter datascience and creating a directory

Cookiecutter datascience is a community standard for scientific project directories. By following an agreed upon pattern about what files to put where, we can accelerate the rate of collaboration between scientists.

````
# Python 2.7 or 3.5 required
pip3 install cookiecutter
cookiecutter https://github.com/drivendata/cookiecutter-data-science
````

## setting up a project directory
To set up a standardised directory structure, a set of inputs are needed during the setup:
1. *project_name* - Project names usually follow the pattern *labdao_yourname*. We are big *The Matrix* fans at LabDAO. If you need some inspiration for a fun project name, try one of theses [names](https://en.wikipedia.org/wiki/List_of_Matrix_series_characters).
2. *description* - a summary of the research project you are conducting.
3. *license* - LabDAO :green_heart: open source. Sometimes, however, the research you are doing is leading to valuable new insights that need to be protected to make it to market. If you are not sure what license is the best, choose "no license" for the start. 
4. *bucket* - while we are still building infrastructure for decentralised storage, we recommend using an AWS S3 bucket for remote file storage. Community members can help you set up an S3 bucket. 

## tracking your project directory with git
Once the project is set up, initialize a git repository by calling ```git init```. The directory already comes with a set of useful defaults on what files and directories not to include in your repository.

## sharing files 
Files located in ```/data``` can be shared with everyone in the team by uploading to the group's bucket: 

```
make sync_data_to_s3
```
on the receiving end data can be synced from the group's bucket using: 

```
make sync_data_from_s3
```

## using containers effectively in your project


