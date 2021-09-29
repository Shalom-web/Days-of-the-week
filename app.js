//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0:
        nameOfDay = 'Sunday';
        quote = 'Today is Church Service';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Today is ghost-town, oohh No!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Today is school day!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Another school day to meeet new friends!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time for party, hahahaha!';
        break;
   
}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`


