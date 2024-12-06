import React from "react";
import { useState } from "react";

const nestedComments = [
  {
    id: 1,
    name: "Abhishek",
    comment: "This is a comment",
    replies: [
      {
        id: 2,
        name: "Tejas",
        comment: "This is a reply",
        replies: [
          {
            id: 3,
            name: "Baldev",
            comment: "This is a reply to a reply",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Hitesh",
    comment: "This is another comment",
    replies: [
      {
        id: 10,
        name: "Rohit",
        comment: "This is another comment",
        replies: [
          {
            id: 11,
            name: "Pranav",
            comment: "This is another comment",
            replies: [
              {
                id: 12,
                name: "Shivam",
                comment: "This is another comment",
                replies: [
                  {
                    id: 13,
                    name: "Shankar",
                    comment: "This is another comment",
                    replies: [],
                  },
                ],
              },
              {
                id: 14,
                name: "Shreya",
                comment: "This is another comment",
                replies: [
                  {
                    id: 15,
                    name: "Swarangi",
                    comment: "This is another comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "C",
    comment: "This is a reply to the first comment",
    replies: [],
  },
  {
    id: 6,
    name: "D",
    comment: "This is a reply to the first comment",
    replies: [
      {
        id: 7,
        name: "D1",
        comment: "This is another comment",
        replies: [],
      },
      {
        id: 8,
        name: "D2",
        comment: "This is a reply to the first comment",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({ nestedComments }) => {
  // const [expandedIndex, setExpandedIndex] = useState(null);

  const [expandedComments, setExpandedComments] = useState({});
  const toggleReplies = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  // const toggleReplies = (id) => {
  //   setExpandedIndex(expandedIndex === id ? null : id);
  // };
  return (
    <div>
      {nestedComments?.map((comment) => (
        <div className="border-l border-l-black ml-5 ">
          <Comment
            key={comment.id}
            data={comment}
            onToggle={() => toggleReplies(comment.id)}
            isExpanded={expandedComments[comment.id]}
          />
        </div>
      ))}
    </div>
  );
};

const Comment = ({ data, onToggle, isExpanded }) => {
  return (
    <div className="bg-gray-200 p-2 m-2 rounded-xl ">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="rounded-full w-6 h-6"
            alt="profile"
            src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
            width="20px"
            height="20px"
          ></img>
          <p>{data.name}</p>
        </div>
      </div>
      <p>{data.comment}</p>
      <div className="mr-10">
        {data.replies.length > 0 &&
          (isExpanded ? (
            <div
              className="mt-2 hover:bg-gray-300 rounded-3xl p-2 cursor-pointer flex items-center w-fit font-semibold"
              onClick={onToggle}
            >
              <p>Hide Replies</p>
              <img
                className="cursor-pointer w-5 h-5 ml-2"
                alt="chevron-up"
                width="20px"
                height="20px"
                src="https://cdn.creazilla.com/icons/3233755/chevron-up-icon-md.png"
              ></img>
            </div>
          ) : (
            <div
              className="mt-2 hover:bg-gray-300 rounded-3xl p-2 cursor-pointer flex items-center w-fit font-semibold"
              onClick={onToggle}
            >
              {data.replies.length === 1 ? (
                <p>1 reply</p>
              ) : (
                <p>{data.replies.length} replies</p>
              )}
              <img
                className="cursor-pointer w-5 h-5 ml-2"
                alt="chevron-down"
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/512/7996/7996254.png"
              ></img>
            </div>
          ))}
      </div>
      {isExpanded && data.replies.length > 0 && (
        <div className="ml-4">
          <CommentsList nestedComments={data.replies} />
        </div>
      )}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="mt-5">
      <p className="font-bold text-xl">Comments:</p>
      <CommentsList nestedComments={nestedComments} />
    </div>
  );
};

export default CommentsContainer;
