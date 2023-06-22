
var imgFeature = document.querySelector('.img-feature')
 var listImg = document.querySelectorAll('.list-image img') 
 var prevBtn = document.querySelector('.prev') 
 var nextBtn = document.querySelector('.next')
var currentIndex = 0;
function updateImageByIndex (index) {
//remove active class
document.querySelectorAll('.list-image div').forEach(item=>{
     item.classList.remove('active2')

})

currentIndex = index
imgFeature.src = listImg[index].getAttribute('src')
listImg[index].parentElement.classList.add('active2')
}

listImg.forEach((imgElement, index)=>{

imgElement.addEventListener('click', e=>{
    updateImageByIndex(index)
})
})

prevBtn.addEventListener('click', e=>{
if(currentIndex == 0) {
currentIndex = listImg.length - 1
}else{
currentIndex--
}

updateImageByIndex(currentIndex)
})


nextBtn.addEventListener('click', e=>{
if (currentIndex == listImg.length -1) {
    currentIndex = 0
}else{
currentIndex++
}
updateImageByIndex (currentIndex)
})

updateImageByIndex (0)




function toggleContent() {
  const container = document.querySelector('.container1');
  const content = document.querySelector('.content1');
  const toggleButton = document.querySelector('.toggle-button');

  if (container.style.maxHeight) {
    container.style.maxHeight = null;
    toggleButton.textContent = 'Xem thêm';
  } else {
    container.style.maxHeight = content.offsetHeight + 'px';
    toggleButton.textContent = 'Thu gọn';
  }
}

const container = document.querySelector('.container1');
const content = document.querySelector('.content1');
const toggleButton = document.querySelector('.toggle-button');

// Kiểm tra xem nội dung có vượt quá chiều cao tối đa ban đầu không
if (content.offsetHeight > container.offsetHeight) {
  toggleButton.style.display = 'block';
}

toggleButton.addEventListener('click', toggleContent);


