(function() {
    $.get("data/computer-science-hall-of-fame.json").then(function(data) {
        var list = $("#hall-of-fame-list");

        data.tiny.forEach(function(entry) {
            list.append('<li>' +
                'In ' + entry.year + ' <em>' + entry.name + '</em> invented ' + entry.invented + '.' +
            '</li>');
        });
    });

    $.get("https://forecast.weather.gov/MapClick.php?lat=42.335993&lon=-83.049806&FcstType=json").then(function(data) {
        var section = $("#weather-section");

        var time = data.time.startPeriodName[0];
        var tempLabel = data.time.tempLabel[0]
        var temperature = data.data.temperature[0];
        var icon = data.data.iconLink[0];
        var text = data.data.text[0];

        section.append('<p>Weather for ' + time + ' in Detroit.</p>');
        section.append('<p><img src="' + icon + '"/> ' + tempLabel + ': ' + temperature + ' F</p>');
        section.append('<p>' + text + '</p>');        
    });

    $.get("https://swapi.co/api/people").then(function(data) {
        var list = $("#starwars-list");

        data.results.forEach(function(person) {
            list.append('<li>' +
                '<em>' + person.name + '</em> ( Skin: ' + person.skin_color + ' Hair: ' + person.hair_color + ' Eyes: ' + person.eye_color + ')' +
            '</li>');
        });
    });
})();