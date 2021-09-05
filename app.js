const oDia = $('#diaAtual')
const button = $('#bttn')
const apodT = $('#apodTitle')
const apodEx = $('#apodEx')
const img = $('#imagem')
const vdo = $('#vdo')
let mainObj
button.on('click', () => {
  chamada(inptDate.value)
})
function chamada(inp){
  $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=NEJnxqYyknyzdlGlofjappEg7xcb8FdYWw3vS1qA&date=${inp}`,
  success: function(result){
    mainObj = result
    oDia.html(`${mainObj.date}`)
    apodT.html(`${mainObj.title}`)
    apodEx.html(`${mainObj.explanation}`)
		if (mainObj.media_type != "video") {
			img.css('background-image', `url(${mainObj.url})`)
			img.css('display', `flex`)
			vdo.css('display', `none`)
		}
		else{
			vdo[0].src = mainObj.url
			vdo.css('display', `flex`)
			img.css('display', `none`)
		}	
  },
  error: function(){
    alert("Use a valid date!")
  }
})
}
chamada("")