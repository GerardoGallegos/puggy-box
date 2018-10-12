import Route from '@ember/routing/route'
import uid from 'uid'

export default Route.extend({
  model () {
    // TODO - Get products here from
    return [
      { _id: uid(), name: 'Puggy T-shirt' },
      { _id: uid(), name: 'Puggy Bone' },
      { _id: uid(), name: 'Puggy Muffin' },
      { _id: uid(), name: 'Puggy shoes' }
    ]
  }
})
