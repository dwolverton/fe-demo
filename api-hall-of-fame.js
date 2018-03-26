(function() {
    $.get("data/computer-science-hall-of-fame.json").then(function(data) {
        var list = $("#hall-of-fame-list");

        data.tiny.forEach(function(entry) {
            list.append('<li>' +
                'In ' + entry.year + ' <em>' + entry.name + '</em> invented ' + entry.invented + '.' +
            '</li>');
        });
    });
})();