import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { posts } from '@/data';

export default function NewsSection() {
  return (
    <section className="section-padding bg-[#f5f7f5]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <p className="eyebrow mb-3">Latest News</p>
            <h2 className="section-title">News & Updates</h2>
          </div>
          <Link to="/blog" className="btn btn-outline">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="card group flex flex-col">
              <div className="img-wrap aspect-[16/10]">
                <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-[#6d7974] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#123e35] leading-snug group-hover:text-[#3e8f75] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6d7974] leading-relaxed flex-1">{post.excerpt}</p>
                <span className="text-sm font-semibold text-[#3e8f75] mt-4 inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
