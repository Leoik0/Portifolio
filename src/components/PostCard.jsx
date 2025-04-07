const PostCard = ({ profilePic, name, date, title, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-full p-4 shadow-md rounded-2xl">
        <div className="flex items-center space-x-3">
          <img
            src={profilePic}
            alt={name}
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="flex items-center gap-3">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-300">{date}</p>
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold">{title}</h3>

        {image && (
          <img
            src={image}
            alt="Post"
            className="object-cover w-[600px] mt-2 rounded-xl max-h-90"
          />
        )}
      </div>
    </a>
  );
};

export default PostCard;
