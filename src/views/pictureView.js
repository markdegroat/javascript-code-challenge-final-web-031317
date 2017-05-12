class PictureView{

  constuctor(){

  }

  render(picture){
    $("#photo-list").append(`<img src="${picture.image_url}"></img>`)
    $("#photo-list").append(`${picture.caption_text}`)
  }
}
