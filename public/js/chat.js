const socket = io('http://localhost:3000')

let user = ''

socket.on('updateMessages', (messages)=>{
    updateMessagesOnScreen(messages)
})

function updateMessagesOnScreen(messages){
    const divMessage = document.querySelector('#messages')
    let listMessages = '<ul class="list-unstyled">'
    messages.forEach(message => {
        listMessages += `<li>${message.user}:  ${message.msg}</li>`
    });
    listMessages += '</ul>'
    divMessage.innerHTML = listMessages
}

document.addEventListener('DOMContentLoaded', ()=>{
    const formMessage= document.querySelector('#formMessage')
    formMessage.addEventListener('submit', (e)=>{
        e.preventDefault()

      if(!user){
          alert('Defina um usuário')
          return
      }

        const message = document.forms['formMessage']['msg'].value
        document.forms['formMessage']['msg'].value = ''
        socket.emit('newMessage', {user:user, msg:message})

    })

    const userForm = document.querySelector('#userForm')
     userForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        user = document.forms['userForm']['user'].value
         userForm.parentNode.removeChild(userForm)
    })
})