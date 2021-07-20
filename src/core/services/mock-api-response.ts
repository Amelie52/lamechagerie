import { Conversation, conversationsListItem } from "../contexts/MainContext";

export const conversationList: { data: conversationsListItem[] } = {
  data: [
    {
      users: [
        {
          name: "Simba",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      id: "78967718-32ec-313a-89ca-8b724b26c888",
    },
    {
      users: [
        {
          name: "Nala",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      id: "96297718-32ec-313a-7297-8b724b26c062",
    },

    {
      users: [
        {
          name: "Nala",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          name: "Simba",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      id: "33327718-32ec-14ft-7297-8b724b260996",
    },
    {
      users: [
        {
          name: "Gribouille",
          id: "89826318-32ec-9121-7297-8b724b260332",
          picture:
            "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      id: "809857718-1829-9vh6-7297-8b724b213093",
    },
    {
      users: [
        {
          name: "Felix",
          id: "77626318-7809-9121-7297-8b724b206612",
          picture:
            "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        name: "Simba",
        id: "44985718-32ec-0990-1123-8b724b260974",
        picture:
          "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "78967718-32ec-313a-89ca-8b724b26c888",
    messages: [
      {
        user: {
          name: "Simba",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "MEEOOOOOOwww",
        private: false,
        created_date: new Date("2020-10-15T11:00:00.000Z"),
      },
      {
        user: {
          name: "Simba",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miou ?",
        private: false,
        created_date: new Date("2020-12-18T13:05:10.000Z"),
      },
      {
        user: {
          name: "Tigrou",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "MRRRooooowww",
        private: false,
        created_date: new Date("2020-12-18T13:06:10.000Z"),
      },
    ],
  },
  "96297718-32ec-313a-7297-8b724b26c062": {
    users: [
      {
        name: "Nala",
        id: "54567718-32ec-9121-7297-8b724b260998",
        picture:
          "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "96297718-32ec-313a-7297-8b724b26c062",
    messages: [
      {
        user: {
          name: "Nala",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Maouuwww",
        private: false,
        created_date: new Date("2020-12-18T13:05:10.000Z"),
      },
      {
        user: {
          name: "Nala",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miaaaou \n\n meooow!!",
        private: false,
        created_date: new Date("2020-12-18T13:06:10.000Z"),
      },
      {
        user: {
          name: "Tigrou",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miii !",
        private: false,
        created_date: new Date("2020-12-18T13:07:10.000Z"),
      },
    ],
  },
  "33327718-32ec-14ft-7297-8b724b260996": {
    users: [
      {
        name: "Nala",
        id: "54567718-32ec-9121-7297-8b724b260998",
        picture:
          "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        name: "Simba",
        id: "44985718-32ec-0990-1123-8b724b260974",
        picture:
          "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "33327718-32ec-14ft-7297-8b724b260996",
    messages: [
      {
        user: {
          name: "Simba",
          id: "44985718-32ec-0990-1123-8b724b260974",
          picture:
            "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Meow !",
        private: false,
        created_date: new Date("2020-12-18T13:10:10.000Z"),
      },
      {
        user: {
          name: "Nala",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miaaaou",
        private: false,
        created_date: new Date("2020-12-18T13:11:10.000Z"),
      },
      {
        user: {
          name: "Tigrou",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Rrrr..",
        private: false,
        created_date: new Date("2020-12-18T13:12:10.000Z"),
      },
      {
        user: {
          name: "Nala",
          id: "54567718-32ec-9121-7297-8b724b260998",
          picture:
            "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miaou ?",
        private: false,
        created_date: new Date("2020-12-18T13:13:10.000Z"),
      },
    ],
  },
  "809857718-1829-9vh6-7297-8b724b213093": {
    users: [
      {
        name: "Gribouille",
        id: "89826318-32ec-9121-7297-8b724b260332",
        picture:
          "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "809857718-1829-9vh6-7297-8b724b213093",
    messages: [
      {
        user: {
          name: "Gribouille",
          id: "89826318-32ec-9121-7297-8b724b260332",
          picture:
            "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "MEEOOOOOOwww",
        private: false,
        created_date: new Date("2020-12-18T13:20:10.000Z"),
      },
      {
        user: {
          name: "Gribouille",
          id: "89826318-32ec-9121-7297-8b724b260332",
          picture:
            "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miaaaou",
        private: false,
        created_date: new Date("2020-12-18T13:21:10.000Z"),
      },
      {
        user: {
          name: "Tigrou",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "MMmmm",
        private: false,
        created_date: new Date("2020-12-18T13:22:10.000Z"),
      },
    ],
  },
  "765657718-1829-7623-7297-8b724b210989": {
    users: [
      {
        name: "Felix",
        id: "77626318-7809-9121-7297-8b724b206612",
        picture:
          "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    id: "765657718-1829-7623-7297-8b724b210989",
    messages: [
      {
        user: {
          name: "Felix",
          id: "77626318-7809-9121-7297-8b724b206612",
          picture:
            "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Shhhhh",
        private: false,
        created_date: new Date("2020-12-18T13:30:10.000Z"),
      },
      {
        user: {
          name: "Felix",
          id: "77626318-7809-9121-7297-8b724b206612",
          picture:
            "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "Miaou..",
        private: false,
        created_date: new Date("2020-12-18T13:31:10.000Z"),
      },
      {
        user: {
          name: "Tigrou",
          id: "50a67718-32ec-414a-89ca-8b724b26c2ab",
          picture:
            "https://images.pexels.com/photos/156321/pexels-photo-156321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        content: "MIAOU ?",
        private: false,
        created_date: new Date("2020-12-18T13:32:10.000Z"),
      },
    ],
  },
};
