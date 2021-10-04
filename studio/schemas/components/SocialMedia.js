export const SocialMedia = [
  {
    name: "socialMedia",
    title: "Social Media",
    type: "array",
    of: [
      {
        title: "Item",
        type: "object",
        fields: [
          {
            title: "Type",
            name: "socialType",
            type: "string",
            options: {
              list: [
                { title: "Facebook", value: "facebook" },
                { title: "Twitter", value: "twitter" },
                { title: "Instagram", value: "instagram" },
                { title: "LinkedIn", value: "linkedIn" },
                { title: "YouTube", value: "youTube" },
                { title: "Snapchat", value: "snapchat" },
                { title: "Pinterest", value: "pinterest" },
              ],
              layout: "dropdown",
            },
            validation: (Rule) => Rule.required(),
          },
          {
            title: "Link",
            name: "link",
            type: "url",
            validation: (Rule) => Rule.required(),
          },
        ],
      },
    ],
  },
];
