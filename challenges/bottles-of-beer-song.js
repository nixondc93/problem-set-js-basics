/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
function bottlesOfBeer(num){
	song = '';

	for(num; num >= 1; num--){
		if( num === 1){
			song += num + ' bottle of beer on the wall,\n' + num + ' bottle of beer! \nTake one down and pass it around,\nNo more bottles of beer on the wall...\n\n';
		} else if(num === 2){
			song += num + ' bottles of beer on the wall,\n' + num + ' bottles of beer! \nTake one down and pass it around,\n' + (num - 1) + ' bottle of beer on the wall...\n\n';
		} else{
		song += num + ' bottles of beer on the wall,\n' + num + ' bottles of beer! \nTake one down and pass it around,\n' + (num - 1) + ' bottles of beer on the wall...\n\n';
		}

	}
	return song;
}

console.log(bottlesOfBeer(10));
