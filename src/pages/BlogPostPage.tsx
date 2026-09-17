import { Link, useParams } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { posts } from '@/data';

export default function BlogPostPage() {
  useReveal();
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.featuredImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#123e35]/80" />
        </div>
        <div className="relative container text-center">
          <p className="eyebrow text-[#d8e93b] mb-3">Article</p>
          <h1 className="text-white font-extrabold max-w-3xl mx-auto" style={{ fontSize: 'var(--text-hero-inner)' }}>{post.title}</h1>
          <nav className="flex items-center justify-center gap-2 mt-4 text-sm text-white/70">
            <Link to="/" className="hover:text-[#d8e93b] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#d8e93b] transition-colors">Blog</Link>
          </nav>
        </div>
      </section>

      <article className="section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-[#6d7974] mb-8 reveal">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.publishedAt}</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
          </div>
          <div className="img-wrap aspect-[16/9] mb-8 reveal">
            <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose prose-lg max-w-none reveal" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-10 pt-8 border-t border-[#e2e9e4]">
            <Link to="/blog" className="btn btn-outline">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-[#123e35]">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 stagger">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="card group flex flex-col">
                  <div className="img-wrap aspect-[16/9]">
                    <img src={p.featuredImage} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-[#123e35] group-hover:text-[#3e8f75] transition-colors">{p.title}</h3>
                    <p className="text-sm text-[#6d7974] mb-3">{p.excerpt}</p>
                    <span className="text-sm font-semibold text-[#3e8f75] inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
