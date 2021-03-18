import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Shelf from '../../components/Shelf'
import { content } from '../../Helpers'

import './style.css'

const Sobre = () =>{
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
    return(
        <>
        <small>Voce está na página Sobre</small>
        <Main>
            <MainBanner title='Sobre' />
           {renderCategories()}
        </Main>
        </>
    )
}

export default Sobre