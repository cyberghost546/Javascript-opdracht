console.log('Hello World!!');

function createTweet(username, content){
    return { 
        id:Date.now(),
        username: username,
        content: content,
        likes:0,
        lastEdited:new Date(),
        
        like: function(){
            this.likes++; 
        },
        edit: function(newContent){
            this.content = newContent;
            this.lastEdited = new Date(); 
        },
        
        toHTML: function(){
            return`<div class="tweet" data-id="${this.id}"> 
            <p>${this.content}</p> 
            <p>${this.likes}likes</p>
            <button class="like-btn">Like</button> <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button> </div>`; 
        } 
    };
}

const tweetManager = {
    tweets: [],
    addTweet: function(tweet){
        this.tweets.push(tweet);
        this.saveToLocalStorage(); 
    },
    deleteTweet: function(id){
        this.tweets = this.tweet.tweets.filter( tweet => tweet.id !== id);
        this.saveToLocalStorage(); 
    },
    getTweetById: function(id){
     return this.tweets.find(tweet => tweet.id === id); 
    },
    saveToLocalStorage: function(){ 
        localStorage.setItem('tweets',
        JSON.stringify(this.tweets)); 
    },
    loadFromLocalStorage:function(){
        const storedTweets = JSON.parse(localStorage.getItem('tweets') ||"[]");
        this.tweets = storedTweets.map(data => createTweet(data.username, data.content)) 
    }
};

function renderTweets(){
    
}