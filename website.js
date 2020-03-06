const companies = [
	{
		name: 'company one',
		category: 'Fianace',
		start: 1981,
		end: 2003
	},
	{
		name: 'company two',
		category: 'Retail',
		start: 1992,
		end: 2008
	},
	{
		name: 'company three',
		category: 'Auto',
		start: 1997,
		end: 2007
	},
	{
		name: 'company four',
		category: 'Retail',
		start: 1989,
		end: 2010
	},
	{
		name: 'company five',
		category: 'Technology',
		start: 2009,
		end: 2014
	},
	{
		name: 'company six',
		category: 'Fianace',
		start: 1987,
		end: 2010
	},
	{
		name: 'company seven',
		category: 'Auto',
		start: 1981,
		end: 2003
	},
	{
		name: 'company eight',
		category: 'Technology',
		start: 1986,
		end: 1996
	},
	{
		name: 'company nine',
		category: 'Retail',
		start: 2011,
		end: 2016
	},
	{
		name: 'company ten',
		category: 'Auto',
		start: 1981,
		end: 2005
	},
];

const age = [33,25,16,18,20,19,45,60,45,67,45,25,23,45,50,21,10];

//for Loop

// for(let i = 0; i <= companies.length; i++) {
// 	console.log(companies[i]);
// }

//forEach loop

// companies.forEach(function(company){
// 	console.log(company.name);
// })

// companies.forEach(company => console.log(company.name))

//filter 

//get array with category Technology
// const companyRetails = companies.filter(company => company.category == 'Retail');

// console.log(companyRetails);

//get array with category Retail
// const filterTechnology = companies.filter(company => company.category == 'Technology');

// console.log(filterTechnology);


// let olderAge = [];
// for(let i = 0; i <= age.length; i++) {
// 	if (age[i] >= 30) {
// 		olderAge.push(age[i]);
// 	}
// }


// get 21 and older

// let canDrink = [];
// for(let i = 0; i <= age.length; i++){
// 	if(age[i] >= 21) {
// 		canDrink.push(age[i]);
// 	}
// }

// console.log(`Older age People are ${olderAge}`);

// console.log(canDrink);

// const canDrink = age.filter(function(age) {
// 	if (age >= 21 ) {
// 		return true;
// 	}
// })

// const canDrink = age.filter(age => age >= 21 ? true : false);

// console.log(canDrink);

// const olderAge = age.filter(age => age >= 23 ? true : false);

// console.log(olderAge);


// Filter Retail company
// ES5
// const retailCompany = companies.filter(function(company) {
// 	if (company.category === 'Retail') {
// 		return true;
// 	}
// });


//ES6
// const retailCompany = companies.filter(company => company.category === 'Retail');

// console.log(retailCompany);


// filter companies whish start in 80s


// Get Eighties Companies

// const startInEighty = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(startInEighty);


// Get companies that lasted 10 years

// const lastedTenYearCompanies = companies.filter(company => (company.end - company.start >= 10))

// console.log(lastedTenYearCompanies);




// map

// Create array of company name 
// ES5
// const companyName = companies.map(function(company){
// 	return company.name;
// });

// ES6
// const companyName = companies.map(company => company.name);

// console.log(companyName);

// const testMap = companies.map(company=> `${company.name} [${company.end} - ${company.start}]`);

// console.log(testMap);

// Get Square Root

// const squareRoot = age.map(age => Math.sqrt(age));
// const agesTimeTwo = age.map(age => age* 2);

// console.log(squareRoot);
// console.log(agesTimeTwo);

// first find square root and then multiply by 2
// const ageMap = age
// 	.map(age => Math.sqrt(age))
// 	.map(age => age * 2);

// 	console.log(ageMap);



// Sort

// sorted Companies by year

// ES5
// const sortedCompanies = companies.sort(function(c1,c2){
// 	if (c1.start > c2.start) {
// 		return 1
//  	}else {
//  		return -1
// 	}
// })

// ES6
// const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1)

// console.log(sortedCompanies);

// Sort ages 
// Ascending order
// const sortAscAges = age.sort((a,b) => a - b);

// console.log(sortAscAges);

// Dscending order

// const sortDscAges = age.sort((a,b) => b - a);

// console.log(sortDscAges);



// reduce

// let ageSum = 0;
// for(let i = 0; i < age.length; i++) {
// 	ageSum += age[i];
// }

// const ageSum = age.reduce(function(total, age){
// 	return total + age;
// },0)


// const ageSum = age.reduce((total, age) => total + age,0);

// console.log(ageSum);


// Get all total years for all companies
// ES5
// const totalYears = companies.reduce(function(total, company){
// 	return total + (company.end - company.start);
// },0)

// ES6

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);

// console.log(totalYears);

// Combined Methods

// const combine = age
// 	.map(age => age * 2)
// 	.filter(age => age >= 40)
// 	.sort((a,b) => a - b)
// 	.reduce((a, b) => a + b,0);

const combine = age
	.map(age => age * 2)
	.filter(age => age >= 40)
	.sort((a,b) => a - b)
	.reduce((total, age) => total + age,0);

console.log(combine);