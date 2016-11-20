'use strict';

/**
 * @function generateQueries
 * @description form array of queries with limited length
 * @param {Array} keywords : array of keywords to form into compact queries
 * @param {Number} maxCharLength : maximum query length
 * @param {String} delimiter : query keywords delimiter
 */

function generateQueries(keywords, maxCharLength, delimiter){

	let queries = [];
	let query = '';
	
	// avoid to modify source keywords array
	keywords = keywords.slice();
	
	keywords.sort((k1, k2) => k1.length < k2.length ? 1 : k1.length > k2.length ? -1 : 0)
	
	while(keywords.length && keywords[0].length > maxCharLength) 
		keywords.shift();
	
	while(keywords.length && keywords[0].length >= maxCharLength - delimiter.length) 
		queries.push(keywords.shift());
	
	while(keywords.length){

		let index = 0;
		query = query || keywords.shift();
		
		while(index < keywords.length && query.length + delimiter.length + keywords[index].length > maxCharLength) 
			index++;
		
		if(index === keywords.length) {
			queries.push(query);
			query = '';
		} else {
			query = keywords
					.splice(index,1)
					.concat(query)
					.join(delimiter);
		}
		
	}

	if(!queries.length && query) queries.push(query);
	
	return queries;
}

module.exports = generateQueries;
