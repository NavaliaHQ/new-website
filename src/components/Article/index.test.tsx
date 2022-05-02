import { render } from '@testing-library/react';

import Article, { ArticleProps } from '.';

const article: ArticleProps = {
  title: 'Article',
  author: 'John Doe',
  link: 'https://example.com',
  content: 'Lorem ipsum dolor sit amet',
  categories: ['Category 1', 'Category 2'],
  published: 1651525991057, // 2022-05-02T21:13:11.057Z,
};

const renderArticle = (props = { article }) => render(<Article {...props} />);

describe('<Article />', () => {
  it('renders a title', () => {
    const { getByText } = renderArticle();

    expect(getByText(article.title)).toBeInTheDocument();
  });

  it('renders all the categories', () => {
    const { getByText } = renderArticle();

    article.categories.forEach((category: string) => {
      expect(getByText(`#${category}`)).toBeInTheDocument();
    });
  });

  it('renders the publishing date formatted as mm/DD/yyyy', () => {
    const { getByText } = renderArticle();

    expect(getByText('5/2/2022')).toBeInTheDocument();
  });
});
