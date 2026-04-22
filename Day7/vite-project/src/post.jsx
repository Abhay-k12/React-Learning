import React from 'react';

const Post = React.memo((props) => {
    const {value} = props;

    console.log("Post Rendered");
    return (
        <>
            <h1>Name: {value.name}</h1>
            <h2>Age: {value.age}</h2>
        </>
    )
})

export default Post;