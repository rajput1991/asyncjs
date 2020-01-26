const posts = [
    { title: 'post one', body: 'THis is post one' },
    {title:'post two',body:'THis is post two'}

];

function getPosts() {
    // Mimicing how to get posts from server as it can take couple of secs.
    setTimeout(function () {
        let output = '';
        posts.forEach((post, index) => {
            output += '<li>' + post.title + '</li>';
        });
        document.body.innerHTML = output;

        
    }, 1000);
}

function createPost(post) {
    // Return a Promise and promise takes callback and that callback takes 2 param
    return new Promise((resolve,reject) => { });
    setTimeout(() => {
        posts.push(post);
      //  callback();
    }, 2000);
}