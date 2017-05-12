$(document).ready(function(){
  // your code here!
  $("#photo-form").on("submit", function(e){
    e.preventDefault()
    const image_url = $("#image-url").val()
    const caption_text = $("#caption-text").val()
    $("#photo-list").append(`<img src="${image_url}"></img>`)
    $("#photo-list").append(`${caption_text}`)

  })
})
