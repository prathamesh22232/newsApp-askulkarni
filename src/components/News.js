import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Ourspinner from './Ourspinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general', // Default category set to 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      category: this.props.category, // Local state for category
    };
  }

  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  async update(pageNo) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    const data = await fetch(url);
    this.props.setProgress(50);
    const parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: pageNo,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.update(this.state.page);
  }

  handlePressPrev = async () => {
    if (this.state.page > 1) {
      this.update(this.state.page - 1);
    }
  };

  handlePressNext = async () => {
    if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.update(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        {/* Reminder Message */}
        <div className="alert alert-info text-center">
          Please select a category from the navigation menu to view news.
        </div>

        <h1 style={{ marginTop: '20px' }} className="text-center">
          NewsMonkey Headlines on {this.capitalize(this.state.category)}
        </h1>

        {this.state.loading && <Ourspinner />}

        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title || 'No Title Available'}
                  description={element.description || 'No Description Available'}
                  myNewsUrl={element.url}
                  myImg={element.urlToImage}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePressPrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handlePressNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
