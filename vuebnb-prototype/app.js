document.addEventListener('keyup', evt=>{

})
var app = new Vue({
  el: '#app',
  data: {
    title: 'My apartment',
    address: '12 My Street, My City, My Country',
    about: 'This is a description of my apartment.',
    headerImageStyle: {'background-image': 'url(sample/header.jpg)'},
    amenities: sample.amenities,
    prices: sample.prices,
    contracted: true,
    modalOpen: false
  },
  methods: {
    escapeKeyListener: evt => {
      if (evt.keyCode === 27 && this.modalOpen){
        this.modalOpen = false
      }
    }
  }
  watch: {
    modalOpen: () => {
      let className = 'modal-open'
      if (this.modalOpen){
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
    }
  },
  created: () => {
    document.addEventListener('keyup', this.escapeKeyListener)
  },
  destroyed: () => {
    document.removeEventListener('keyup', this.escapeKeyListener)
  }
})
