//Emma Schmitt

const myWeek = [
    {Day: "monday", activity: "skating", category: "physical",hoursSpent: 1, enjoyment: 9, timeOfDay: "afternoon"},
    {Day: "tuesday", activity: "reading", category: "intellectual", hoursSpent: 4, enjoyment: 6, timeOfDay: "night"},
    {Day: "wednesday", activity: "volleyball", category: "physical",hoursSpent: 2, enjoyment: 5, timeOfDay: "afternoon"},
    {Day: "thursday", activity: "movies", category: "social",hoursSpent: 3, enjoyment: 8, timeOfDay: "night"},
    {Day: "friday", activity: "reading", category: "intellectual",hoursSpent: 2, enjoyment: 7, timeOfDay: "night"},
    {Day: "saturday", activity: "partying", category: "social",hoursSpent: 6, enjoyment: 7, timeOfDay: "night"},
    {Day: "sunday", activity: "walking", category: "physical",hoursSpent: 1, enjoyment: 4, timeOfDay: "morning"},
]
//Skating will have the highest enjoyment, because the data shows that skating has the highest enjoyment.
//The physical category will dominate my week, because the data shows that it has the highest frequency.
//There are no clear patterns between day and night, other than that I tend to read at night.

//Function using filter() to find all instances of reading
const readingInstances = myWeek.filter(item => item.activity === "reading");


//Total hours spent on physical activity
//All activities


//Test Calls
console.log(readingInstances);