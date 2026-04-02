import { getAllArticles } from '@/lib/data';
import Link from 'next/link';

// Force SSR for the homepage so it is always fresh
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const articles = await getAllArticles();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 headline-font border-b border-black pb-4">Top Stories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id} className="block group">
            <div className="h-48 overflow-hidden mb-4">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h2>
            <p className="text-slate-600 mt-2 line-clamp-2">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
