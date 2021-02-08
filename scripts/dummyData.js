const dummyData = {
    values: {
        london: {
            name: 'London',
            weather: [{
                description: 'moderate rain',
                icon: '10d',
            }],
            main: {
                temp: -0.97,
                temp_min: -1.67,
                temp_max: 0,
            }
        },
        glasgow: {
            name: 'Glasgow',
            weather: [{
                description: 'broken clouds',
                icon: '04d',
            }],
            main: {
                temp: 1.48,
                temp_min: 1.11,
                temp_max: 2,
            }
        },
        belfast: {
            name: 'Belfast',
            weather: [{
                description: 'few clouds',
                icon: '02d',
            }],
            main: {
                temp: 2.53,
                temp_min: 2,
                temp_max: 3.33,
            }
        },
        cardiff: {
            name: 'Cardiff',
            weather: [{
                description: 'light snow',
                icon: '13d',
            }],
            main: {
                temp: 1.85,
                temp_min: 1.67,
                temp_max: 2.22,
            }
        },
        dublin: {
            name: 'Dublin',
            weather: [{
                description: 'clear sky',
                icon: '01d',
            }],
            main: {
                temp: 5.66,
                temp_min: 3,
                temp_max: 8.33,
            }
        },
    }    
};

export default dummyData;
