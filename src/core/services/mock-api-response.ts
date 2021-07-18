import { Conversation, conversationsListItem } from "../contexts/MainContext";

export const conversationList: { data: conversationsListItem[] } = {
  data: [
    {
      users: [
        {
          name: "Cléo",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      id: "78967718-32ec-313a-89ca-8b724b26c888",
    },
    {
      users: [
        {
          name: "John",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
      ],
      id: "96297718-32ec-313a-7297-8b724b26c062",
    },

    {
      users: [
        {
          name: "John",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          name: "Cléo",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      id: "33327718-32ec-14ft-7297-8b724b260996",
    },
    {
      users: [
        {
          name: "Karim",
          id: "89826318-32ec-9121-7297-8b724b260332",
          picture:
            "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
      ],
      id: "809857718-1829-9vh6-7297-8b724b213093",
    },
    {
      users: [
        {
          name: "Clara",
          id: "77626318-7809-9121-7297-8b724b206612",
          picture:
            "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
      ],
      id: "765657718-1829-7623-7297-8b724b210989",
    },
  ],
};

export const conversation: {
  [key: string]: Conversation;
} = {
  "78967718-32ec-313a-89ca-8b724b26c888": {
    users: [
      {
        name: "Cléo",
        id: "44985718-32ec-0990-1123-8b724b260974",
        picture:
          "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "78967718-32ec-313a-89ca-8b724b26c888",
    messages: [
      {
        user: {
          name: "Cléo",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Hey hello !",
        private: false,
        created_date: new Date("2020-10-15T11:00:00.000Z"),
      },
      {
        user: {
          name: "Cléo",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "How are you ?",
        private: false,
        created_date: new Date("2020-12-18T13:05:10.000Z"),
      },
      {
        user: {
          name: "Jeanne",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Hello Cléo! Find and you ?",
        private: false,
        created_date: new Date("2020-12-18T13:06:10.000Z"),
      },
    ],
  },
  "96297718-32ec-313a-7297-8b724b26c062": {
    users: [
      {
        name: "John",
        id: "54567718-32ec-9121-7297-8b724b260998",
        picture:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
    id: "96297718-32ec-313a-7297-8b724b26c062",
    messages: [
      {
        user: {
          name: "John",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "Hey hello !",
        private: false,
        created_date: new Date("2020-12-18T13:05:10.000Z"),
      },
      {
        user: {
          name: "John",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "How are you ? \n\n djiezjdiozeiz",
        private: false,
        created_date: new Date("2020-12-18T13:06:10.000Z"),
      },
      {
        user: {
          name: "Jeanne",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Hello John! Find and you ?",
        private: false,
        created_date: new Date("2020-12-18T13:07:10.000Z"),
      },
    ],
  },
  "33327718-32ec-14ft-7297-8b724b260996": {
    users: [
      {
        name: "John",
        id: "54567718-32ec-9121-7297-8b724b260998",
        picture:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        name: "Cléo",
        id: "44985718-32ec-0990-1123-8b724b260974",
        picture:
          "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "33327718-32ec-14ft-7297-8b724b260996",
    messages: [
      {
        user: {
          name: "Cléo",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Helloooo !",
        private: false,
        created_date: new Date("2020-12-18T13:10:10.000Z"),
      },
      {
        user: {
          name: "John",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "How are you ?",
        private: false,
        created_date: new Date("2020-12-18T13:11:10.000Z"),
      },
      {
        user: {
          name: "Jeanne",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Hello John and cléo! Find and you ?",
        private: false,
        created_date: new Date("2020-12-18T13:12:10.000Z"),
      },
      {
        user: {
          name: "John",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "Find!",
        private: false,
        created_date: new Date("2020-12-18T13:13:10.000Z"),
      },
    ],
  },
  "809857718-1829-9vh6-7297-8b724b213093": {
    users: [
      {
        name: "Karim",
        id: "89826318-32ec-9121-7297-8b724b260332",
        picture:
          "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
    id: "809857718-1829-9vh6-7297-8b724b213093",
    messages: [
      {
        user: {
          name: "Karim",
          id: "89826318-32ec-9121-7297-8b724b260332",
          picture:
            "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "Hey hello !",
        private: false,
        created_date: new Date("2020-12-18T13:20:10.000Z"),
      },
      {
        user: {
          name: "Karim",
          id: "89826318-32ec-9121-7297-8b724b260332",
          picture:
            "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "How are you ?",
        private: false,
        created_date: new Date("2020-12-18T13:21:10.000Z"),
      },
      {
        user: {
          name: "Jeanne",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Hello Karim! Find and you ?",
        private: false,
        created_date: new Date("2020-12-18T13:22:10.000Z"),
      },
    ],
  },
  "765657718-1829-7623-7297-8b724b210989": {
    users: [
      {
        name: "Clara",
        id: "77626318-7809-9121-7297-8b724b206612",
        picture:
          "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
    id: "765657718-1829-7623-7297-8b724b210989",
    messages: [
      {
        user: {
          name: "Clara",
          id: "77626318-7809-9121-7297-8b724b206612",
          picture:
            "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "Hey hello !",
        private: false,
        created_date: new Date("2020-12-18T13:30:10.000Z"),
      },
      {
        user: {
          name: "Clara",
          id: "77626318-7809-9121-7297-8b724b206612",
          picture:
            "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        content: "How are you ?",
        private: false,
        created_date: new Date("2020-12-18T13:31:10.000Z"),
      },
      {
        user: {
          name: "Jeanne",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Hello Clara! Find and you ?",
        private: false,
        created_date: new Date("2020-12-18T13:32:10.000Z"),
      },
    ],
  },
};
