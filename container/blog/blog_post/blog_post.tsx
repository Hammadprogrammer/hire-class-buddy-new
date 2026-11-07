import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, BlogSection, BlogSubSection } from '../posts';
import styles from './blog_post.module.scss';

const renderList = (items: string[], ordered = false) =>
  ordered ? (
    <ol className={styles.numberedList}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  ) : (
    <ul className={styles.bulletList}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

const renderSubSection = (sub: BlogSubSection) => (
  <div key={sub.heading} className={styles.subSection}>
    <h3 className={styles.h3}>{sub.heading}</h3>
    {sub.paragraphs?.map((p, i) => (
      <p key={i} className={styles.paragraph}>{p}</p>
    ))}
    {sub.list && renderList(sub.list)}
    {sub.numbered && renderList(sub.numbered, true)}
  </div>
);

const renderSection = (section: BlogSection) => (
  <section key={section.heading} className={styles.section}>
    <h2 className={styles.h2}>{section.heading}</h2>
    {section.paragraphs?.map((p, i) => (
      <p key={i} className={styles.paragraph}>{p}</p>
    ))}
    {section.list && renderList(section.list)}
    {section.numbered && renderList(section.numbered, true)}
    {section.table && (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{section.table.headers[0]}</th>
              <th>{section.table.headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    {section.subsections?.map(renderSubSection)}
    {section.outro?.map((p, i) => (
      <p key={i} className={styles.paragraph}>{p}</p>
    ))}
  </section>
);

const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const whatsappUrl = `https://wa.me/12027035862?text=${encodeURIComponent(
    `Hi, I read "${post.title}" and would like help with my class.`
  )}`;

  return (
    <div className={styles.main}>
      {/* --- FULL WIDTH FEATURED IMAGE --- */}
      <div className={styles.featuredImage}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1600}
          height={900}
          priority
          className={styles.mainImg}
        />
      </div>

      {/* --- ARTICLE --- */}
      <article className={styles.article}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" prefetch={false}>Home</Link>
          <span>/</span>
          <Link href="/blog/" prefetch={false}>Blog</Link>
          <span>/</span>
          <span className={styles.crumbCurrent}>{post.category}</span>
        </nav>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.categoryBadge}>{post.category}</span>
          <span className={styles.metaItem}>{post.date}</span>
          <span className={styles.metaDot}>•</span>
          <span className={styles.metaItem}>{post.readTime}</span>
        </div>

        <div className={styles.content}>
          {post.intro.map((p, i) => (
            <p key={i} className={styles.paragraph}>{p}</p>
          ))}

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Need Help With This Class?</h2>
            <p className={styles.ctaText}>
              Message our team about the subject or coursework in this article. The chat
              opens in a new tab, so you can keep this guide open while you get in touch.
            </p>
            <Link
              href={whatsappUrl}
              prefetch={false}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={styles.ctaBtn}
            >
              Get Class Help
            </Link>
          </div>

          {post.sections.map(renderSection)}

          {/* Conclusion */}
          <section className={styles.section}>
            <h2 className={styles.h2}>{post.conclusionHeading}</h2>
            {post.conclusion.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </section>

          {/* FAQs */}
          {post.faqs.length > 0 && (
            <section className={styles.faqSection}>
              <h2 className={styles.h2}>{post.faqHeading}</h2>
              <div className={styles.faqList}>
                {post.faqs.map((faq) => (
                  <details key={faq.question} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.question}</summary>
                    <div className={styles.faqAnswer}>
                      <p className={styles.paragraph}>{faq.answer}</p>
                      {faq.list && renderList(faq.list)}
                      {faq.numbered && renderList(faq.numbered, true)}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
