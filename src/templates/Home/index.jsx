import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../components/utils/load-posts';
import { Posts } from '../../components/Posts';
import Button from '../../components/Button';
import { NaoEncontrado } from '../../components/NaoEncontrado/NaoEncontrado';
import { TextInput } from '../../components/TextInput';

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    searchValue: '',
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  nextPage = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  // FIXME
  // prevPage = () => {
  //   const {
  //     page,
  //     postsPerPage,
  //     allPosts,
  //     posts
  //   } = this.state
  //   const prevPage = page - postsPerPage
  //   const prevPosts = allPosts.slice(prevPage, prevPage - postsPerPage)
  //   posts.push(...prevPosts)
  //   this.setState({ posts, page: prevPage })
  // }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
        || post.body.toLowerCase().includes(searchValue.toLowerCase())
      }) : posts

    return (
      <section className='container'>
        <div className='search-container'>
          <TextInput
            searchValue={searchValue} 
            handleChange={this.handleChange} 
            filteredPosts={filteredPosts}
          />
        </div>

        {filteredPosts.length > 0 ? <Posts posts={filteredPosts} /> : <NaoEncontrado />}

        <div className='btn-container'>
          {!searchValue && (
            <Button
              texto='Load more posts'
              onClick={this.nextPage}
              disabled={noMorePosts} />
          )}
        </div>
      </section>
    );
  }

}
