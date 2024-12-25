const kvArray = [
    {key: 1, values:10},
    {key: 2, values:20},
    {key: 3, values:30},
];
    const reformattedArray = kvArray.map(({key,values}) =>({[key]: values}));
    console.log(reformattedArray);
    console.log(kvArray);
    