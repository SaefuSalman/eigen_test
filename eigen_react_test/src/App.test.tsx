import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App.tsx';

describe('App Component', () => {
  const mockArticles = [
    {
      title: 'Test Title 1',
      description: 'Test Description 1',
      urlToImage: 'https://example.com/image1.jpg',
      url: 'https://example.com/article1'
    },
    {
      title: 'Test Title 2',
      description: 'Test Description 2',
      urlToImage: 'https://example.com/image2.jpg',
      url: 'https://example.com/article2'
    }
  ];

  it('renders Front End Challenge title', async () => {
    render(<App />);
    expect(screen.getByText(/Front End Challenge/i)).toBeInTheDocument();
  });

  it('renders loading spinner initially', async () => {
    render(<App />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders articles after loading', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://newsapi.org/v2/everything?q=tesla&from=2024-03-02&sortBy=publishedAt&apiKey=0a9d18759d624b24bec5972c3882089f').reply(200, { articles: mockArticles });

    render(<App />);
    await waitFor(() => expect(screen.getByRole('progressbar')).not.toBeInTheDocument());
    expect(screen.getByText(/Test Title 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Title 2/i)).toBeInTheDocument();
  });

  it('redirects to article URL when "Read More" button is clicked', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://newsapi.org/v2/everything?q=tesla&from=2024-03-02&sortBy=publishedAt&apiKey=0a9d18759d624b24bec5972c3882089f').reply(200, { articles: mockArticles });

    render(<App />);
    await waitFor(() => expect(screen.getByRole('progressbar')).not.toBeInTheDocument());

    const readMoreButton = screen.getByText(/Read More/i);
    userEvent.click(readMoreButton);

    expect(window.location.href).toBe(mockArticles[0].url);
  });
});
