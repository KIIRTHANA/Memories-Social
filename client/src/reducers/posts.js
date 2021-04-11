export default (posts = [],action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

// posts are going to be an array, so state []