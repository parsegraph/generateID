# parsegraph-generateid

This module provides one function that generates a unique string ID on each call.

    import generateID from 'parsegraph-generateid'

    console.log(generateID()); // parsegraph-unique-1
    console.log(generateID()); // parsegraph-unique-2
    console.log(generateID("demo")); // demo-1
