---
layout: post
title:  "Customizable Advance Form Validation"
date:   2020-07-28 09:26:19 -0700
categories: jekyll update
---
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
			<textarea required id="contact_message" name="contact_message" cols="30" rows="10"/>
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
