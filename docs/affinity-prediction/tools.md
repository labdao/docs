---
title: Tools
sidebar_position: 2
---


```
Note: All models we provide are research-grade software and are provided "as-is". No model for this challenge has yet been demonstrated to generalise well enough to be an alternative to laboratory experiments. When providing a tool we make use of existing, often academic, contributions. Please give credit to the creators of open-source work. We are all standing on the shoulder of giants. 
```

<img width="588" alt="chart" src="https://user-images.githubusercontent.com/37750378/220337359-d742115f-ce45-45ad-aa08-70bde5436e06.png">

## Diffdock+GNINA
We are currently providing a Diffdock+GNINA model to the community, which uses Diffdock to generate a set of protein and small molecule 3D poses, and Gnina to predict a binding affinity estimate based on the poses coming from Diffdock.

[Diffdock](https://github.com/gcorso/DiffDock) is a machine learning model that predicts the 3D binding pose of a small molecule and a protein. It frames molecular docking as a generative problem. When it comes to predicting the 3D configuration of a small molecule and protein within a standard margin of error (2µm), Diffdock has a 38% top-1 success rate and is faster and more accurate than traditional docking and deep learning methods.

[Gnina](https://github.com/gnina/gnina) is a docking and scoring tool that uses a convolutional neural network to score poses. Gnina is an implementation of [Smina](https://sourceforge.net/projects/smina/), which itself is a fork of [Vina](https://vina.scripps.edu/). 

## How to use Diffdock+GNINA

````
TODO: #60 code example
````
