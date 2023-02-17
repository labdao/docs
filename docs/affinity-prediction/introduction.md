---
title: Introduction
sidebar_position: 1
---

![alt text](smalller.png)

## What is small molecule binding affinity?
Small molecule binding affinity describes the strength of the interaction between a small molecule and a target, often a protein. The binding affinity of a small molecule and a protein can be described with three related metrics, ΔG (binding free energy), Kd (dissociation constant), or the IC50 (half-maximal inhibitory concentration).

Generally, ΔG is considered the most generalisable metric to describe binding affinity, while the IC50 is an easy to measure, but highly context dependent metric. For each of these three metrics, a lower value implies a "tighter" interaction between the small molecule and target protein. 




## Predicting Binding Affinity

Machine Learning models can be used to predict the binding affinity of a small molecule and protein. At LabDAO we are focused on curating and maintaining the most effective tools to accelerate the drug discovery process. 

````
#TODO 
a molecular representation of the small molecule and protein on the left side, and the output values on the right side. In the middle would be an method or a model. 
````

## Measuring Binding Affinity
There are several laboratory methods used to measure the binding affinity of a protein and small molecule. Popular, accurate and label-free methods include Surface-Plasmon-Resonance (SPR) and Bio-layer Interferometry (BLI). The cost of an average SPR experiment can range from several thousand dollars to tens of thousands of dollars, depending on the complexity of the experiment and the equipment used.

````
TODO: get in touch with to access more than 40 laboratories offering Surface-Plasmon-Resonance
````

## Why determine the binding affintiy? 
Determining the binding affinity of a small molecule and the intended target is an important step early in the drug discovery process. A strong binding affinity increases the probability that the clinical effect of the drug candidate is due to its interaction with the target, and not other structures within the organism. 

Determining the binding affinity of a drug candidate is important to understand its target and make informed downstream decisions that increase the probability of success throughout later phases of the drug discovery process. For example, retrospective analyses of clinical trial data suggest that: 
* clinical trials in which the target is known and genetic changes in the target are linked to differences in disease prevalence or outcome have a [>2x higher probability of success](https://journals.plos.org/plosgenetics/article?id=10.1371%2Fjournal.pgen.1008489).
* clinical trials for cancer drugs have a [>2x higher probability of success](https://globalforum.diaglobal.org/issue/may-2019/what-are-the-chances-of-getting-a-cancer-drug-approved/) if the group of patients included in the study have been pre-selected based on a biological feature (biomarker). These features often have a causal link to the drug target.

## How to interpret the binding affintiy? 
Binding affinity data can be interpreted by comparing the ΔG, Kd, or IC50 values to a set of reference values for the target. References can be taken from previous experiments with known binders or by determining the binding affinity for a series of candidates and comparing them with eachother.

For all three binding affinity metrics, a smaller score indicates a stronger binding affinity. For example, a negative ΔG value, or a Kd or IC50 close to 0 indicate a strong interaction.

Predicting the binding affinity with machine learning models should be interpreted with additional care. It is important to consider the reported accuracy of these models, as well as their underlying training data, when reviewing results.

## When to determine Binding Affinity
The small molecule binding affinity should be determined early on in the drug discovery process, before moving forward with in-vivo experiments. This will help ensure that only candidates with strong binding affinity to their target protein are selected for further development.

