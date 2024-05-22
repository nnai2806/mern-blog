import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hostinger.co.uk%2Ftutorials%2Fhow-to-write-a-blog-post&psig=AOvVaw2mD0j0Y1vS9p_Gu02ack3K&ust=1716467062655000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjeyLSgoYYDFQAAAAAdAAAAABAE",
    },
    category: {
      type: String,
      default: "uncategoryzed",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
