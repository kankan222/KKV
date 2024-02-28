async function insertGalleryImage(type) {
  const formData = new FormData(document.getElementById('gallery-img'));
  if (type == 'school') {
    const fet = await fetch('/insert-school-gallery', {  method: 'POST', body: formData })
    if (fet.ok) { closeModalwindow('img-contain'); window.location.reload() }
    const res = await fet.json()
  } else {
    const fet = await fetch('/insert-college-gallery', { method: 'POST', body: formData })
    if (fet.ok) { closeModalwindow('img-contain'); window.location.reload()}
    const res = await fet.json()
  }
}

async function deleteSchoolGalleryImage(target, type) {
  alert("Are you sure to delete?")
  target.parentNode.remove();
  //   target.remove();
  if (type == 'school') {
    const fet = await fetch(`/delete-school-gallery?imgid=${target.id}`, { method: 'DELETE', })
    const res = await fet.json()
    console.log(res)
  } else {
    const fet = await fetch(`/delete-college-gallery?imgid=${target.id}`, { method: 'DELETE', })
    const res = await fet.json()
    console.log(res)
  }
}

function closeModalwindow(id) {
  document.querySelector(`#${id}`).classList.add(`hide`);
}
function openModalwindow(id) {
  document.querySelector(`#${id}`).classList.remove(`hide`);
}

async function sendStuffData(Id, type) {
  const formData = new FormData(document.getElementById(`${Id}`));
  if (type == 'school') {
    const fet = await fetch('/school-stuff-add', { method: 'POST', body: formData})
    const res = await fet.json()
    if (fet.ok) { closeModalwindow('modal-container-add'); window.location.reload() }
  } else {
    const fet = await fetch('/college-stuff-add', { method: 'POST', body: formData })
    const res = await fet.json()
    if (fet.ok) { closeModalwindow('modal-container-add'); window.location.reload() }
  }
}

async function showMoreFormdetails(target) {
  const main = document.querySelector('#form-ex').childNodes;
  if (target.value == "Teaching-staff") {
    main[1].classList.remove('hide')
    main[3].classList.remove('hide')
    main[5].classList.remove('hide')
    main[7].classList.remove('hide')
  } else if (target.value == 'Non-Teaching-staff') {
    main[1].classList.remove('hide')
    main[3].classList.remove('hide')
    main[5].classList.add('hide')
    main[7].classList.add('hide')
  } else {
    main[1].classList.remove('hide')
    main[3].classList.remove('hide')
    main[5].classList.add('hide')
    main[7].classList.add('hide')
  }
}

function filterFUN(element, type) {
  element.forEach((el) => {
    if (el.dataset) {
      if (el.dataset.category != type) {
        el.classList.add('hide')
      } else {
        el.classList.remove('hide')
      }
    }
  })
}

function filterCat(target) {
  const element = document.getElementById('filterCat').childNodes
  if (target.id == 'Head-staff') {
    filterFUN(element, 'Head-staff')
  } else if (target.id == 'Teaching-staff') {
    filterFUN(element, 'Teaching-staff')
  } else if (target.id == 'Non-Teaching-staff') {
    filterFUN(element, 'Non-Teaching-staff')
  }
}

function editStuff(target) {
  const main = target.parentNode.childNodes
  const sub = main[3].childNodes;
  const img = main[1].src;
  const category = sub[1].childNodes[3].textContent.toLowerCase()
  const name = sub[3].childNodes[3].textContent;
  const position = sub[7].childNodes[3].textContent;
  const qualification = sub[5].childNodes[3].textContent;
  const subject = sub[9].childNodes[3].textContent;
  const form = document.querySelector('#form-ex-edit').childNodes;
  form[1].childNodes[3].value = name.replace(/^\s+/g, '');
  form[3].childNodes[3].value = position.replace(/^\s+/g, '');
  form[5].childNodes[3].value = qualification.replace(/^\s+/g, '');
  form[7].childNodes[3].value = subject.replace(/^\s+/g, '');
  document.getElementById('stuffImg').src = img
  document.getElementById('edit-category').value = category
  document.querySelector('.tid').id = target.dataset.tid
  openModalwindow('modal-container-edit')
}

async function updateStuff(type) {
  const tid = document.querySelector('.tid').id
  const oldimg = document.getElementById('stuffImg').src
  const formData = new FormData(document.getElementById('edit-stuff'));
  formData.append('oldimg', oldimg)
  formData.append('id', tid)
  const fet = await fetch(`/${type}-stuff-update`, {
    method: 'PUT',
    body: formData
  })
  if (fet.ok) { closeModalwindow('modal-container-edit'); window.location.reload() }
  const res = await fet.json()
}

async function deleteStuff(target, type) {
  const fet = await fetch(`/${type}-stuff-delete?tid=${target.dataset.tid}`, { method: 'DELETE' })
  const res = await fet.json();
  if (fet.ok) {
    target.parentNode.remove()
  }
}