async function insertGalleryImage(type) {
    const formData = new FormData(document.getElementById('gallery-img'));
     if (type == 'school') {
        const fet = await fetch('/insert-school-gallery', {
            method: 'POST',
            body: formData
        })
        const res = await fet.json()
        console.log(res)
        closeModalwindow()
     }else {
        const fet = await fetch('/insert-college-gallery', {
            method: 'POST',
            body: formData
        })
        const res = await fet.json()
        console.log(res)
        closeModalwindow()
     }
}

async function deleteSchoolGalleryImage(target, type) {
  alert("Are you sure to delete?")
  target.parentNode.remove();
//   target.remove();
  if (type == 'school') {
    const fet = await fetch(`/delete-school-gallery?imgid=${target.id}`, { method: 'DELETE',})
    const res = await fet.json()
    console.log(res)
  } else {
    const fet = await fetch(`/delete-college-gallery?imgid=${target.id}`, { method: 'DELETE',})
    const res = await fet.json()
    console.log(res)
  }
}

function closeModalwindow(){
  document.querySelector(`.modal-container`).classList.add(`hide`);
}
function openModalwindow(){
  document.querySelector(`.modal-container`).classList.remove(`hide`);
}

async function sendStuffData() {
  const formData = new FormData(document.getElementById('add-stuff'));
    const fet = await fetch('/school-stuff-add', { 
        method: 'POST',
        body : formData
    })
    const res = await fet.json()
    if (fet.ok) {
      closeModalwindow();
    }
}