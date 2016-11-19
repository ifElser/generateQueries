'use strict';

function generateQueries(keywords, maxCharLength, delimiter){
	let query = '';
	let queries = [];
	keywords.sort((k1, k2) => k1.length > k2.length ? 1 : k1.length < k2.length ? -1 : 0)
	console.log(keywords);
	keywords.forEach(keyword => {
		if(keyword.length > maxCharLength) {
			if(query !== ''){
				queries.push(query);
				query = '';
			}
		} else if(keyword.length + delimiter.length >= maxCharLength) {
			console.log('keyword.length + delimiter.length >= maxCharLength:', keyword);
			queries.push(keyword);
		} else if(query === '') {
			query = keyword;
			console.log('query === "":', keyword);
		} else if(query.length + delimiter.length + keyword.length >= maxCharLength){
			console.log('query.length + delimiter.length + keyword.length >= maxCharLength:', query, keyword);
			queries.push(query);
			query = keyword;
		} else {
			console.log('other case:', query, keyword);
			query = [query, keyword].join(delimiter); 
		}
	});
	return queries;
}

module.exports = generateQueries;
