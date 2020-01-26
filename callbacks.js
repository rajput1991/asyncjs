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

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
//getPosts();
createPost({ title: 'post three', body: 'THis is post 3' },getPosts);
// Note that get post took 1 sec while create post took 2 sec..and thats why we dont see post 3, because by that time DOM is already painted
// THat is why we need callbacks and sync programming to solve this problem.
