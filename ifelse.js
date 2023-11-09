const x = 100;
const y = 50;

if(x == 50) {
    console.log('x är lika med 50');
}

else if( y == 100){
    console.log('y är lika med 100');
}

else{
    console.log('inget är sant');
}


// skapa 10 h1-element
// Där första tredje och femte har hotpink som bakgrundsfärg
//andra, sjätte, åttoned har skyblue
//resten har orange

for ( let i= 0; i<10; i++){
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = i+1;


    if(i==0 || i==2 || i==4){
        h1.style.backgroundColor = 'hotpink';
    }
    else if(i==1 || i==5 || i==7){
        h1.style.backgroundColor = 'skyblue';
    }
    else{
        h1.style.backgroundColor = 'orange';
    }

    // modulus %
    console.log( i, i % 2);
    // händer varannan g ef.s resten av 1%2 endast kan vara 1 el 0

    if(i%2 == 0){
        h1.style.color= 'white';
    }

}