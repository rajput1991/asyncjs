const posts = [
    { title: 'post one', body: 'THis is post one' },
    { title: 'post two', body: 'THis is post two' }

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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            //  callback();
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error, something went wrong');
            }
        }, 2000);
    });


}
// since it returns promise ,means we can use .then syntax
createPost({ title: 'post three', body: 'THis is post 3' }).then(getPosts);
