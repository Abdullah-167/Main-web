
import Home from './Home'
import SecComp from './SecComp'
import CardsSec from './CardsSec'
import SecCard from './SecCard'
import Pronto from './Pronto'

const Index = () => {
  return (
    <div>
      <Home />
      <SecComp />
      <CardsSec />
      <SecCard display={'flex'} />
      <Pronto />
    </div>
  )
}

export default Index