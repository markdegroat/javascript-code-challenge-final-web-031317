class PictureView{

  constuctor(){
    //maybe do something here eventually
  }
  render(picture){
    $("#photo-list").append(`<img src="${picture.image_url}" height="200px" width="300px"></img>`)
    $("#photo-list").append(`<div>${picture.caption_text}<div>`)
  }
}
