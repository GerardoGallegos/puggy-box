import Route from '@ember/routing/route'
import uid from 'uid'

export default Route.extend({
  model () {
    // TODO - Get products here from
    return [
      { _id: uid(), name: 'Puggy T-shirt', pricing: 120 },
      { _id: uid(), name: 'Puggy Bone', pricing: 110 },
      { _id: uid(), name: 'Puggy Muffin', pricing: 50 },
      { _id: uid(), name: 'Puggy shoes', pricing: 210 }
    ]
  }
})
