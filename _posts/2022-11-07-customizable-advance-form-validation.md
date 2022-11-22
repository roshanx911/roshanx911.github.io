---
layout: post
title: "Customizable Advance Form Validation"
date: 2022-11-07 07:00:00 -0700
categories: blog
excerpt_separator: <!--more-->
---
Following code examine on how to integrate and customize advance form validation to a web application, instead of using vanilla bootstrap form validation. <!--more-->

#### Vanilla Bootstrap Form Validation:

Few years’ way back Client-side form validation is a mess, but these days Client-side form validation can be done simply with integration of Front-End Frameworks such as “bootstrap”. Due to its simplicity nature, basic bootstrap form with validation outlook as below:

{% highlight html %}
<form class="form-horizontal" id="formID" action="" method="POST">
	<div class="control-group">
		<label for="contact_name" class="control-label">Name:</label>
		<div class="controls">
			<input type="text" required id="contact_name" name="contact_name"/>
		</div>
	</div>
	<div class="control-group">
		<label for="contact_email" class="control-label">Email:</label>
		<div class="controls">
			<input type="email" required id="contact_email" name="contact_email"/>
		</div>
	</div>
	<div class="control-group">
		<label for="contact_message" class="control-label">Message:</label>
		<div class="controls">
			<textarea required id="contact_message" name="contact_message" cols="30" rows="10"></textarea>
		</div>
	</div>	
	<div class="control-group">
		<div class="controls">
			<input type="submit" class="btn btn-info" value="Send Message" />
			<input type="reset" class="btn" value="Reset" />
		</div>
	</div>
</form>
{% endhighlight %}

#### Customizable Advance Form Validation:

When it comes to multiple forms and advance form fields these build-in validations get tricky & annoying, that’s where something like customizable form validation-engine comes in handy. The following steps can be used to integrate it into your web application.

This validation-engine base on jQuery (A JavaScript Library), first of all you need to install jQuery to your web application. There are few ways to add it to your web application, the most common ways are:

- Download the [jQuery Library][jQuery-Library] & add it to local development location
{% highlight html %}
<script src="js/jquery-3.6.1.min.js"></script>
{% endhighlight %}

OR

- Include jQuery link from a [jQuery CDN][jQuery-CDN]
{% highlight html %}
<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
{% endhighlight %}

> Note: It’s always a proper tendency to include jQuery or JavaScript in the end of the body-tag just before closing.

- [Download][] & include validation-engine to local development path (This contains validation-engine & customizable theme CSS)
{% highlight html %}
<script src="validate/js/languages/jquery.validationEngine-en.js" type="text/javascript" charset="utf-8"></script>
<script src="validate/js/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" href="validate/css/validationEngine.jquery.css" type="text/css"/>
<link rel="stylesheet" href="validate/css/template.css" type="text/css"/>
{% endhighlight %}

- To activate the binds in-between validation-engine & the actual form is can be linked by form “id”
{% highlight html %}
<form class="form-horizontal"  id="formID" method="POST">
</form>
{% endhighlight %}

{% highlight html %}
<script>
	jQuery(document).ready(function(){
		// binds form submission and fields to the validation engine
		jQuery("#formID").validationEngine();
	});
</script>
{% endhighlight %}

- Sample form field validations
{% highlight html %}
<form class="form-horizontal"  id="formID" method="POST">
  <div class="control-group">
	<label class="control-label" for="name">Name</label>
	<div class="controls">
	  <input type="text" class="input-large validate[required,maxSize[30]" id="name" name="name"/>
	</div>
  </div>  
  <div class="control-group">
	<label class="control-label" for="email">Email</label>
	<div class="controls">
	  <input type="text" class="input-large validate[required,custom[email]]" id="email" name="email"/>
	</div>
  </div> 
  <div class="control-group">
	<label class="control-label" for="phone_no">Phone No</label>
	<div class="controls">
	  <input type="text" class="input-large validate[required,custom[phone]]" id="phone_no" name="phone_no"/>
	</div>
  </div> 
  <div class="control-group">
	<label class="control-label" for="address">Address</label>
	<div class="controls">
	  <input type="text" class="input-large validate[required] " id="address" name="address"/>
	</div>
  </div>
  <div class="control-group">
	<label class="control-label" for="message">Message</label>
	<div class="controls">
	  <textarea class="input-large validate[required]" rows="5" id="message" name="message"></textarea>
	</div>
  </div>
</form>
{% endhighlight %}

- The validation-engine attributes are call by “class”, sample code segments are as below:
{% highlight html %}
<input type="text" class="validate[required]"/>
<input type="text" class="validate[required,maxSize[30]"/>
<input type="text" class="validate[required,custom[integer],maxSize[5]]"/>
<input type="text" class="validate[required,custom[email]]"/>
<input type="text" class="validate[required,custom[phone]]"/>
<textarea class="validate[required]"></textarea>
{% endhighlight %}

- Dependant form validations
{% highlight html %}
<input type="checkbox" class="input-large" id="rolex" name="rolex"/>
<input type="checkbox" class="input-large" id="prox" name="prox"/>
<select class="validate[condRequired[rolex]]"></select>
<input type="text" class="validate[condRequired[rolex],custom[integer],min[100],max[999]]"/>
<input type="text" class="validate[condRequired[rolex],custom[onlyLetterNumber],maxSize[10]]"/>
<input type="text" class="validate[condRequired[prox],custom[integer],maxSize[5]]"/>
<input type="text" class="validate[condRequired[prox],maxSize[25]]"/>
{% endhighlight %}

- Check whether passwords matched or not
{% highlight html %}
<input type="password" class="validate[required,minSize[5],maxSize[10]]" id="password" name="password"/>
<input type="password" class="validate[required,equals[password]]" id="password2" name="password2"/>
{% endhighlight %}

> ### Conclusion:
> This validation-engine comes with endless number of customizations to form-validation. To commit accurate & specific data into a database is very crucial, furthermore this validation-engine is highly efficient & effective. For more information read the [official documentation][official-documentation] on website.
> 

[jQuery-Library]: https://code.jquery.com/jquery-3.6.1.min.js
[jQuery-CDN]: https://code.jquery.com/
[Download]: https://github.com/posabsolute/jQuery-Validation-Engine/archive/v3.1.0.zip
[official-documentation]: http://www.position-absolute.com/articles/jquery-form-validator-because-form-validation-is-a-mess/