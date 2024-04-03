import React, { useState, useEffect } from 'react';
import { Card, Spin, Button, Flex, Pagination } from 'antd';
import { Meta } from 'antd/lib/card';
import axios from 'axios';

const boxStyle = {
  width: '100%',
  borderRadius: 6,
  border: '1px solid #40a9ff',
};

const cardStyle = {
  width: 240,
  marginBottom: 20,
  height: '100%',
};

const { Meta: AntdMeta } = Card;

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?apiKey=8e847af8910c474d91e2f6fbefd3942b&country=us&category=business'
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const indexLastArticle = currentPage * articlesPerPage;
  const indexFirstArticle = indexLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexFirstArticle, indexLastArticle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Flex justify="center">
        <h1>Front End Challenge</h1>
      </Flex>
      <Flex gap="middle" align="start" vertical>
        <Flex style={boxStyle} justify="space-around" align="start" wrap="wrap">
          {loading ? (
            <Spin size="large" />
          ) : (
            currentArticles.map((article, index) => (
              <Card key={index} hoverable style={cardStyle}>
                <img alt={article.title} src={article.urlToImage} style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
                <AntdMeta title={article.title} description={article.description} />
                <Button type="primary" href={article.url} target="_blank">Go To Link</Button>
              </Card>
            ))
          )}
          
        </Flex>
      </Flex>
      <Pagination
            current={currentPage}
            total={articles.length}
            pageSize={articlesPerPage}
            onChange={paginate}
            style={{ marginTop: 20 }}
          />
    </div>
  );
}

export default App;
