"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { blogPosts } from '../posts';
import styles from './blog_list.module.scss';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const BlogList = () => {
  return (
    <div className={styles.main}>
      {/* --- HERO --- */}
      <section className={styles.hero}>
        <div className={styles.bgGlow}></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.heroContent}
        >
          <div className={styles.promoBadge}>
            <span>BLOG</span> Latest Articles & Study Guides
          </div>
          <h1 className={styles.title}>
            Our <span className={styles.highlight}>Latest Blog</span>
          </h1>
          <p className={styles.subtitle}>
            Practical study tips, online class guides, and academic strategies to help you
            manage your coursework, meet deadlines, and succeed in your education.
          </p>
        </motion.div>
      </section>

      {/* --- CARDS GRID --- */}
      <section className={styles.gridSection}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={styles.card}
            >
              <Link href={`/blog/${post.slug}/`} prefetch={false} className={styles.imageWrap}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1600}
                  height={900}
                  className={styles.cardImg}
                />
              </Link>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}/`} prefetch={false}>
                    {post.title}
                  </Link>
                </h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}/`} prefetch={false} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default BlogList;
