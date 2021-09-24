---
layout: post
title: "Development Aspect of a Web Application (SDLC), Part 07"
date: 2020-09-03 07:00:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
CHANGE 007
This article base on analysis of Software Life Cycle (SLC) & Software Process Models (SPM) and why we need to follow-through these in development process. Part-07 focus on Evolutionary / RAD Model. <!--more-->

#### The Evolutionary / RAD Model

Evolutionary life-cycle models promote software development by continuously defining requirements for new system increments based on experience from the previous version. Evolutionary models go by various names such as Evolutionary Prototyping, Rapid Delivery, Evolutionary Delivery Cycle, and Rapid Application Delivery (RAD).

In the evolutionary model, each iteration follows the waterfall model in that there are requirements, software design and testing phases. After the final evolutionary step, the system enters the maintenance phase, although it can evolve again through the conventional flow, if necessary.

The evolutionary model can be used in conjunction with embedded systems, particularly in working with prototype that come from simulators during development. Indeed, there may be significant benefits to this approach. First, early delivery of portions of the system can be generated, even though some of the requirements are not finalized. Then these early releases are used as tools for requirements elicitation, including timing requirements. From the developers’ point of view, those requirements that are clear at the beginning of the project drive the initial increment, but the requirements become clearer with each increment.

![alt text](https://i.imgur.com/FmiP2Sb.png)

The use of stages in a life cycle is contradictory to this method of development, and adopting RAD as an approach to development frequently differentiate projects that require a “waterfall” approach and those that can be developed using RAD. In addition this has become increasingly popular with the emergence of web-based systems which provide easy change prototyping development to gain user acceptance. In general web-based projects require more formally defined stages and deliverables for planning and control purposes, and for this reason the use of this structured model remain popular.

> [The Linear Sequential Model][Part-1]
> 
> [The Prototyping Model][Part-2]
> 
> [The Incremental Model][Part-3]
> 
> [The Spiral Model][Part-4]
> 
> [The Evolutionary / RAD Models][Part-5]
> 

* * *

> SLC [Abbreviation] - Software Life Cycle [Term]
> 
> SPM [Abbreviation] - Software Process Models [Term]
> 
> SDLC [Abbreviation] - Software Development Life Cycle [Term]
> 

* * *

> [Reference]
> 
> ― Theory and Problems of Software Engineering - By David A. Gustafson - 2002
> 

[Part-1]: https://roshanx911.github.io/blog/2020/08/29/development-of-web-app-part-03.html
[Part-2]: https://roshanx911.github.io/blog/2020/08/30/development-of-web-app-part-04.html
[Part-3]: https://roshanx911.github.io/blog/2020/08/31/development-of-web-app-part-05.html
[Part-4]: https://roshanx911.github.io/blog/2020/09/02/development-of-web-app-part-06.html
[Part-5]: https://roshanx911.github.io/blog/2020/09/03/development-of-web-app-part-07.html
