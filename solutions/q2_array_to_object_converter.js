/* Write a Program to convert an array of objects to an object
    based on a given key */


	const convert = (array,x) => {
		// Write your code here
		var output={}
		if(typeof array=="object")
		{
			for(let i = 0 ; i < array.length ;i++)
			{
				var value = array[i][x];
				output[value] = array[i];
			}
			return output;
		}
		else
		{
			return null;
		}
	
	};
	
	/* For example,
	INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
	OUTPUT - {
				'1': {id: 1, value: 'abc'},
				'2': {id: 2, value: 'xyz'}
			 }
	
	
	*/
	
	module.exports = convert;