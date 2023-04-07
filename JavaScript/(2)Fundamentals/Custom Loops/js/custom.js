function loopFrom( x, y, z){
    for(i=x; i < y; i++)
    {
        console.log(i + " Hello World!")
        if (i == z)
    {
        console.log("Weve reached " + z);
        continue;
    }
    }
}