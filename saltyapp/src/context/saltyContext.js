import React, {createContext} from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

  const SaltyContext = createContext({
    currentComment: null,
   comments: [
    {comment: "Fake comment1", commentid: 1, score: "0"},
   {comment: " Fake comment2", commentid: 2, score: "-900"}, 
   {comment: "Fake comment3", commentid: 3, score: "200"}
    ] 
});


export default SaltyContext;