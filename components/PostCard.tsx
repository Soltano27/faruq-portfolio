import Link from "next/link";
import { Post, formatDate, postUrl } from "@/lib/content";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link className="post" href={postUrl(post.slug)}>
      <div>
        {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
        <h3>{post.title}</h3>
      </div>
    </Link>
  );
}
