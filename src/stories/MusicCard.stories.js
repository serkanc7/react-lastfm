import MusicCard from "../components/MusicCard/MusicCard";

export default {
    title: "MusicCard",
    component: MusicCard,

}

const Template = args => <MusicCard {...args} />;

export const Album = Template.bind({});
Album.args = {
  cardData: {
    artist: {
        name: "Taylor Swift"
    },
    name: "Album",
    playcount: 12321,
    image: [
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/34s/b71ba6cf5881d8cf143e0ad0b4f28d9f.png",
        "size": "small"
        },
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/64s/b71ba6cf5881d8cf143e0ad0b4f28d9f.png",
        "size": "medium"
        },
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/174s/b71ba6cf5881d8cf143e0ad0b4f28d9f.png",
        "size": "large"
        },
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/b71ba6cf5881d8cf143e0ad0b4f28d9f.png",
        "size": "extralarge"
        }
        ]
  },
  theme: 'light',
  cardState: "album"
};

export const Track = Template.bind({});
Track.args = {
  cardData:{...Album.args.cardData, listeners: 213213},
  theme: "light",
  cardState: "track"
};


