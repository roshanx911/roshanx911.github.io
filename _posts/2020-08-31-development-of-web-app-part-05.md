---
layout: post
title: "Development Aspect of a Web Application (SDLC), Part 05"
date: 2020-08-31 07:00:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
This article base on analysis of Software Life Cycle (SLC) & Software Process Models (SPM) and why we need to follow-through these in development process. Part-05 focus on Incremental Model. <!--more-->

#### The Incremental Model

D. L. Parnas proposed the incremental model. The goal was to design and deliver to the customer a minimal subset of the whole system that was still a useful system. The process will continue to iterate through the whole life cycle with additional minimal increments. The advantages include giving the customer a working system early and working increments.

The incremental model combines elements of the linear sequential model (applied repetitively) with the iterative philosophy of prototyping. The incremental model applies linear sequences in a staggered fashion as calendar time progresses. Each linear sequence produces a deliverable “increment” of the software.

When an incremental model is used, the first increment is often a core product. That is, basic requirements are addressed, but many supplementary features (some known, others unknown) remain undelivered.

The core product is used by the customer (or undergoes detailed review). As a result of use and/or evaluation, a plan is developed for the next increment. The plan addresses the modification of the core product to better meet the needs of the customer and the delivery of additional features and functionality. This process is repeated following the delivery of each increment, until the complete product is produced.

![alt text](https://i.imgur.com/6NpGa0k.png)

The incremental process model, like prototyping and other evolutionary approaches, is iterative in nature. But unlike prototyping, the incremental model focuses on the delivery of an operational product with each increment. Early increments are stripped down versions of the final product, but they do provide capability that serves the user and also provide a platform for evaluation by the user.


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