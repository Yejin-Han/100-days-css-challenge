const bar = document.querySelector('.bar')
const dropZone = document.querySelector('.drop-zone')
const fileName = document.querySelector('.file-name')
const fileInput = document.querySelector('.ipt-file')
const uploadIcon = document.querySelector('.ico-upload')
const syncIcon = document.querySelector('.ico-sync')
const doneIcon = document.querySelector('.ico-done')
const uploadBtn = document.querySelector('.btn-upload')
let uploading = false;

const handleFiles = (files) => {
  if(files.length > 0) {
    fileName.textContent = files[0].name
  }
  uploadIcon.classList.add('hide')
}

const dropHandler = (ev) => {
  ev.preventDefault();
  
  const files = [...ev.dataTransfer?.files]
  handleFiles(files)
}

fileInput.addEventListener('change', (e) => {
  const selectedFiles = e.target.files
  handleFiles(selectedFiles)
})

dropZone.addEventListener('drop', (e) => dropHandler(e))

uploadBtn.addEventListener('click', (e) => {
  if(!uploading && fileName != '') {
    uploading = true
    uploadBtn.textContent = 'Uploading...'
    dropZone.classList.add('hide')
    bar.classList.add('active')
    syncIcon.classList.remove('hide')
    requestAnimationFrame(() => {
      syncIcon.classList.add('active')
    })
    setTimeout(() => {
      doneIcon.classList.remove('hide')
      requestAnimationFrame(() => {
        syncIcon.classList.add('hide')
        doneIcon.classList.add('active')
        uploadBtn.textContent = 'Done'
      })
    }, 3200)
  }
})