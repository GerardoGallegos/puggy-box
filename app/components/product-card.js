import Component from '@ember/component'

export default Component.extend({
  tagName: 'section',
  classNames: ['product-card'],
  showPricing: false,
  number: 0,

  mouseEnter () {
    this.set('showPricing', true)
  },

  mouseLeave () {
    this.set('showPricing', false)
  }
})
