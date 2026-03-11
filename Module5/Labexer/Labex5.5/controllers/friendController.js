const friends = require('../models/friends');

// Logics for getting all friends
const getAllFriends = (req, res) => {
    res.json(friends);
};

// Logics for filtering friends (Task #1)
const filterFriends = (req, res) => {
    console.log(req.query);
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    
    if (filterLetter) {
        if (filterLetter.length !== 1) {
            return res.status(400).json({ error: "Letter parameter must be a single character" });
        }
        matchingFriends = matchingFriends.filter(friend => 
            friend.name.toLowerCase().startsWith(filterLetter.toLowerCase())
        );
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({error: "No friends matching gender " + filterGender});
    }
};

// Logics for request info (Task #2)
const getRequestInfo = (req, res) => {
    console.log(req.headers);
    const info = {
        "user-agent": req.headers['user-agent'],
        "content-type": req.headers['content-type'],
        "accept": req.headers['accept']
    };
    res.json(info);
};

// Logics for finding a single friend (Task #3)
const getFriendById = (req, res) => {
    console.log(req.params);
    let friendId = req.params.id;
    let matchedFriend = friends.find(friend => friend.id == friendId);

    if (matchedFriend) {
        res.json(matchedFriend);
    } else {
        res.status(404).json({error: 'Friend with ID ' + friendId + ' not found'});
    }
};

// Logics for adding a friend (POST)
const addFriend = (req, res) => {
    let newFriend = req.body;
    console.log(newFriend);

    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    } else if (!newFriend.id) {
        newFriend.id = friends.length + 1;
    }

    friends.push(newFriend);
    res.status(200).json(newFriend);
};

// Logics for updating a friend (Task #4)
const updateFriend = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;
    let index = friends.findIndex(friend => friend.id == friendId);

    if (index !== -1) {
        friends[index] = { ...friends[index], ...updatedFriend };
        res.json({result: 'Updated friend with ID ' + friendId, data: friends[index]});
    } else {
        res.status(404).json({error: 'Friend with ID ' + friendId + ' not found'});
    }
};

module.exports = {
    getAllFriends,
    filterFriends,
    getRequestInfo,
    getFriendById,
    addFriend,
    updateFriend
};