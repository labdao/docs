---
title: Tools
sidebar_position: 2
---

There is an overwhelming variety of tools that have been used to predict the binding affinity between a small molecule and a protein. We have gone through the literature and open source code repositories to provide a selection of tools that are ready for you to run them on PLEx. 

**Note: All models we provide are research-grade software and are provided "as-is". No model for this task has yet been demonstrated to generalise well enough to be an alternative to laboratory experiments. When providing a tool we make use of existing, often academic, contributions. Please give credit to the creators of open-source work. We are standing on the shoulder of giants.**

At this point in time we are focused on pose prediction. Stay tuned for integrated scoring functions.

## Small Molecule Binding Affinity Prediction
In the chart below we give you an overview of the models available. We would generally recommend to optimise for a high model accuracy when predicting small molecule binding affinity.

![chart](https://user-images.githubusercontent.com/18559148/220592140-20600560-1d9d-4aae-80a0-642e09f9e065.png)

## Mini: Equibind
[Equibind](https://github.com/HannesStark/EquiBind) is a very fast machine learning model that can approximate the docking pose of a small molecule and a protein. The model is less accurate than baseline methods, such as Gnina (below), but orders of magnitute faster.

**Please cite**
````
Stärk, H., Ganea, O.-E., Pattanaik, L., Barzilay, R., & Jaakkola, T. (2022). EquiBind: Geometric Deep Learning for Drug Binding Structure Prediction. http://arxiv.org/abs/2202.05146
````


## Base: Gnina
[Gnina](https://github.com/gnina/gnina) is a physics-inspired docking and scoring tool that uses a convolutional neural network to score poses. Gnina is an implementation of [Smina](https://sourceforge.net/projects/smina/), which itself is a fork of [Vina](https://vina.scripps.edu/). 

**Please cite**
````
A McNutt, P Francoeur, R Aggarwal, T Masuda, R Meli, M Ragoza, J Sunseri, DR Koes. J. (2021). GNINA 1.0: Molecular docking with deep learning https://chemrxiv.org/engage/chemrxiv/article-details/60c753ebbb8c1a1a9d3dc142
````

## Standard: Diffdock
[Diffdock](https://github.com/gcorso/DiffDock) is a machine learning model that predicts the docking pose of a small molecule and a protein. It frames molecular docking as a generative problem. When it comes to predicting the 3D configuration of a small molecule and protein within a standard margin of error (2µm), Diffdock has a 38% top-1 success rate and is faster and more accurate than existing publicly available tools.

**Please cite**
```
Corso, G., Stärk, H., Jing, B., Barzilay, R., & Jaakkola, T. (2022). DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking. http://arxiv.org/abs/2210.01776
```
