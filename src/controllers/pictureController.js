class PictureController {

  constructor(){
    this.allPictures = []
  }

  handleClicks(){
    $("#photo-form").on("submit", function(e){
      e.preventDefault()
      e.stopPropagation()
      const picture = new Picture($("#image-url").val(), $("#caption-text").val())

      // this.allPictures.push(picture)
      //this belongs in a view render fnc
      const picture_view = new PictureView()
      picture_view.render(picture)
    })

  }

}
