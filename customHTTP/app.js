

const http = new easyHTTP;

// get Posts
http.get('http://jsonplaceholder.typicode.com/posts', 
function(err, response){
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});


// Create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// create post
http.post('http://jsonplaceholder.typicode.com/posts', data, 
function(err, post){
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// update post
http.put('http://jsonplaceholder.typicode.com/posts/1', data, 
function(err, post){
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});


// delete post
http.delete('http://jsonplaceholder.typicode.com/posts/1', 
function(err, response){
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
