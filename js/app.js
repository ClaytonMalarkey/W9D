let tweets = [
    {
        id: 1,
        tweet:"ass",
        username:"hole",
        created_at_the_date_of : "april 10 1965",
        age: 68
    },
   {
        id: 2, 
        tweet:"tits and ass",
        username:"roxane",
        created_at_the_date_of : "april 10 1984",
        age: 16
    },
    {
        id: 3,
        tweet:"fuck a duck",
        username:"hole",
        created_at_the_date_of : "april 10 1965",
        age: 68
    },
    {
        id:4,
        tweet:"burnt",
        username:"roxane",
        created_at_the_date_of : "april 10 1965",
        age: 16
    },
    {
        id:5,
        tweet:"bungholio",
        username:"hole",
        created_at_the_date_of : "april 10 1965",
        age: 68
    },
    {
        id: 6,
        tweet:"radical",
        username:"Roxane",
        created_at_the_date_of : "april 10 1965",
        age: 16
    },
    {
        id : 7,
        tweet:"testing hole",
        username:"hole",
        created_at_the_date_of : "april 10 1965",
        age: 68
    },
    {
        id: 8,
        tweet:"testing roxane",
        username:"Roxane",
        created_at_the_date_of : "april 10 1965",
        age: 16
    },
    {
        id: 9,
        tweet:"more tests hole",
        username:"hole",
        created_at_the_date_of : "april 10 1965",
        age: 68
    },
    {
        id: 10,
        tweet:"more tests roxane",
        username:"Roxane",
        created_at_the_date_of : "april 10 1965",
        age: 16
    }
];
let count  = 0;
while(count < tweets.length){
    if(tweets[count].age >= 18){
        console.log("this tweet " + tweets[count].tweet + " created by user " + tweets[count] .username+ " on the " + tweets[count].created_at_the_date_of);

    }else{}
    count ++;

}
for (i = 0; i < tweets.length; i ++){
    if(tweets[i].age < 18 ) {
        console.log("this tweet " + tweets[i].tweet + " was creater by minor " + tweets[i].username + " on the date of " + tweets[i].created_at_the_date_of);

    }else {}
}
