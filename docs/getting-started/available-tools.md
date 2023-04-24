---
title: Available Tools
description: Tools available through the PLEX client
sidebar_label: Available Tools
sidebar_position: 2
---

Listed below are the tools made available through the PLEX client.

| Tool | Category | Description | Config | Example Command |
| -------- | -------- | -------- | --- | --- | 
| Equibind | Small Molecule Binding | Docking of small molecules to a protein |  https://github.com/labdao/plex/blob/main/tools/equibind.json | `./plex -tool equibind -input-dir testdata/binding/abl` |
| Diffdock | Small Molecule Binding | Docking of small molecules to a protein | https://github.com/labdao/plex/blob/main/tools/diffdock.json | `./plex -tool diffdock -input-dir testdata/binding/abl` |
| RF Diffusion | Protein Design | Design protein binders; generally useful for conditional generation of protein backbones | https://github.com/labdao/plex/blob/main/tools/rfdiffusion.json | `./plex -tool rfdiffusion -input-dir testdata/design` |
| Colabfold | Protein Folding | Protein folding prediction |https://github.com/labdao/plex/blob/main/tools/colabfold-mini.json | `./plex -tool colabfold-mini -input-dir testdata/folding` |
| ODDT | Small Molecule Binding | Scoring of protein-ligand complexes |https://github.com/labdao/plex/blob/main/tools/oddt.json | `./plex -tool oddt -input-dir testdata/scoring/abl` |
| bam2fastq | tbd... | Sort BAM by qname and Extract Fasta reads R1 R2 with RG using samtools | https://github.com/labdao/plex/blob/main/tools/bam2fastq.json |

If there are any additional tools you would like made available in the PLEX client, please see [how to contribute a tool](/get-involved/how-to-contribute-a-tool).