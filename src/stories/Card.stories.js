import ArtistCard from "../components/ArtistCard/ArtistCard";

export default {
    title: "ArtistCard",
    component: ArtistCard,

}

const Template = args => <ArtistCard {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  artist: {
    name: "Taylor Swift",
    listeners: 213213,
    playcount: 12321,
    image: [
      {
      "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
      "size": "small"
      },
      {
      "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
      "size": "medium"
      },
      {
      "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
      "size": "large"
      },
      {
      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
      "size": "extralarge"
      },
      {
      "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
      "size": "mega"
      }
    ]
  },
  theme: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  ...Dark.args,
  theme: 'light'
};


