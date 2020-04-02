// Where is the data?
var gastroIntestinalBioDiversity = 'samples.json';

// Now, since the file is a JSON, we need a way to read it.
// It seems that d3. helps to read the object, but then you have to
// store the data into the droplist.

d3.json(gastroIntestinalBioDiversity).then(data => {
    addToDropList(data);
});

function addToDropList(data)
{
    var filterBySubjectID = d3.select('selDataset');
    filterBySubjectID.selectAll('option')
        .data(data.names).enter().append('option').text(name => { return name;})
};
