var multi = function() {
	var n = {}, j = 0, s = {},  len = arguments.length;

	for(j=0; j<len; j++)
	 {

		s = arguments[j];
		for(i=0; i<s.length; i++)
		{
			n[i] = s[i];	
		}
			

	 }
			
return n;

			}

var onedee = 
{

	name: 'testingName'
};


var triangle = multi(onedee, { lesson: 'lessonTest'});

console.log('Testing begins');
console.log(triangle.name);
