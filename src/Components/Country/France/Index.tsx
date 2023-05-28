import Layout from '@/Components/Layout/Index'

import Hero from './Hero'
import Text from './Text'
import Flag from '../../Flag'
import Pronto from './Pronto'

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Text />
        <Flag />
        <Pronto />
      </Layout>
    </div>
  )
}

export default Index