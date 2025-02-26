function solve(age) {

    if ( age < 0 ) console.log( 'out of bounds' );
    if ( age >= 0 && age <= 2 ) console.log( 'baby' );
    if ( age >= 3 && age <= 13 ) console.log( 'child' );
    if ( age >= 14 && age <= 19 ) console.log( 'teenager' );
    if ( age >= 20 && age <= 65 ) console.log( 'adult' );
    if ( age >= 66 ) console.log( 'elder' );

}

solve(20); // adult
solve(1); // baby
solve(100); // elder
solve(-1); // out of bounds
