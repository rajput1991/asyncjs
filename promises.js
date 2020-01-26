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
            const error = true;
            if (!error) {
                resolve();
            }
            else {
                reject('Error, something went wrong');
            }
        }, 2000);
    });


}

async function init() {
    // means we are waiting untill createPost is done before call of getPosts
 await createPost({ title: 'post three', body: 'THis is post 3' });
 getPosts();
}

init();

// since it returns promise ,means we can use .then syntax
// so if promise is resolved , then it calls getPosts
//createPost({ title: 'post three', body: 'THis is post 3' }).then(getPosts).catch(err=>console.log(err));
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'good bye'));
// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));


