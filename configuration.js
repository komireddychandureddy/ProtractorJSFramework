exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['PractiseExercise.js'],
	capabilities: {
	'browserName':'chrome'
	}
	
};