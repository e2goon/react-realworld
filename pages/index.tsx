import "twin.macro";
import { NextPage } from "next";
import Head from "next/head";
import ArticleAPI from "api/article";
import { ArticlesType, ArticleType } from "types/Article";
import Banner from "components/Banner";
import ArticleItem from "components/article/Item";

interface ArticlePageProps {
  articles: ArticleType[];
}

const Index: NextPage<ArticlePageProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Banner title="conduit" description="A place to share your knowledge." />

      <div tw="py-8 flex mx-auto max-w-screen-lg">
        <div tw="px-4 flex-auto" role="list">
          {articles?.map((article: ArticleType) => (
            <ArticleItem key={article.slug} article={article} role="listitem" />
          ))}
        </div>

        {/* Popular Tags 템플릿 컴포넌트 */}
        <div tw="px-4 last:px-0 flex-none max-w-xs w-full">
          <h2>Popular Tags</h2>
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const { articles }: ArticlesType = await ArticleAPI.all();
  return {
    props: {
      articles,
    },
  };
}
