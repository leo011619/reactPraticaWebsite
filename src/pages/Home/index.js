import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Shelf from '../../components/Shelf'
import { content } from '../../Helpers'
import './style.css'
const Home = () => {
  const { categories, posts } = content
  const renderCategories = () => {
    return categories.map(category => {
      const { id, title } = category
      const catPosts = posts.filter(post => post.cat_id === id)
      return (
        <Shelf title={title} key={id} posts={catPosts} />
      )
    })
  }
  return (
    <>
      <small>Você está na página Home</small>
      <Main>
        <MainBanner title="Home" />
        {renderCategories()}
      </Main>
    </>
  )
}
export default Home