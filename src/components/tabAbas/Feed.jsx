import PostCard from "../PostCard";

const Feed = () => {
  const posts = [
    {
      id: 3,
      profilePic: "./profile.jpeg",
      name: "Léo",
      date: "23 de Março, 2025",
      title: "projeto tierlist finalizado",
      image: "./tierlist.png",
      url: "https://zesty-duckanoo-fcce58.netlify.app/",
    },
    {
      id: 2,
      profilePic: "./profile.jpeg",
      name: "Léo",
      date: "20 de Março, 2025",
      title: "tentando fazer o famoso drag drop",
      image: "./tier.png",
    },
    {
      id: 1,
      profilePic: "./profile.jpeg",
      name: "Léo ",
      date: "15 de Março, 2025",
      title: "Finalizei meu novo projeto! 🚀",
      image: "./mines.png",
      url: "https://mines-mugen.netlify.app/",
    },
  ];

  return (
    <div className="w-full max-w-2xl px-4 space-y-4 sm:px-6">
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
