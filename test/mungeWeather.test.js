// IMPORT MODULES under test here:
// import example from '../src/example.js';
const { mungeWeather } = require('../utils.js');
const data = require('../data/weather.json');


const test = QUnit.test;

test('time to test mungeWeather function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        forecast: 'Scattered clouds',
        time: '2020-05-05'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = mungeWeather(data);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, result);
});

