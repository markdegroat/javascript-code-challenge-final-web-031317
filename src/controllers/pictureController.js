class PictureController {

  //I was going to track all the picture models created
  //then refactor the pictureView render function
  //so that it takes in an array of pictures
  //and renders all of them at once
  //this works though for now
  constructor(){
    this.allPictures = []
  }

  handleFormSubmissionsAndRenderPictures(){
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
