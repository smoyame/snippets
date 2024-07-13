# Snippets

Got some smalluns I want to make while waiting on loading screens!

## Mini Projects:
* Todo List
* Clipboard Formatting Checker
* Tiny Drawpad

### Todo List
*What I've learned in boating school is:*
* If a number starts with 0, JavaScript interprets it as octal. It'll return the converted-to-octal value.
	* Tested storing dates(Number) and using sort()
		* Started with [05012024, 01092023, 01012024, 02142024] to entertain US notation.
		* Ended up with [ 1315860, 1092023, 267284, 574484 ] and Found Out™.
	* If it starts with 0 and contains a 9, it knows it's not octal. It will remove the leading zero and return that instead.
	* Helped me be certain about storing dates as YYYYMMDD to leverage JS's sort()!
* Considering using unix time as a timestamp or unique identifier.
	* Can't do anything about user changing their computer clock.
	* Something called a monotonic clock exists! But don't think JS has the concept in it.
		* Performance.now() -- but appending this to the unix timestamp solves nothing. Cool, though.

		


-----

## Not right now, but eventually:
* Todo that only shows a smaller, accessible step to a larger task.
* Visual Timer, compartmentalizes amounts and shows visual progress instead of just sticks 'n integers.
* Something something HTMX

