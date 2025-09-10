"use client";
import type { Metadata } from "next";
import Giscus from "@giscus/react";

export const metadata: Metadata = {
  title: "Forum",
  description: "Join the conversation with the Cheffery community.",
};

export default function ForumPage() {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  const configured = repo && repoId && category && categoryId;

  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Forum</h1>
      {configured ? (
        <Giscus
          repo={repo!}
          repoId={repoId!}
          category={category!}
          categoryId={categoryId!}
          mapping="title"
          term="Cheffery Forum"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      ) : (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 text-neutral-300">
          Giscus is not configured. Add environment variables to enable the forum.
        </div>
      )}
    </section>
  );
}


