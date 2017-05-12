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
      $("#photo-list").append(`<img src="${picture.image_url}"></img>`)
      $("#photo-list").append(`${picture.caption_text}`)
    })

  }

}
