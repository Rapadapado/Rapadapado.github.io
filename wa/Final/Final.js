 document.querySelectorAll('.Project_Pictures img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.Popup_Image').style.display = 'block';
        document.querySelector('.Popup_image img').src = image.getAttribute('src');
    }
 });

 document.querySelector('.Popup_Image span').onclick = () =>{
    document.querySelector('.Popup_Image').style.display = 'block';
 }