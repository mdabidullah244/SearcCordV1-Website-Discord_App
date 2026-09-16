const htmlwebpage = document.getElementById('html-id')
const topcontainer = document.getElementById('top-container-id')
const userpfptext = document.getElementById('user-pfp-text-id')
const rosetitle = document.getElementById('rose-title-id')
const rosedescription = document.getElementById('rose-description-id')
const inviterosebutton = document.getElementById('invite-rose-button-id')
const inviteroseserverbutton = document.getElementById('invite-rose-server-button-id')
const roseserverinvitetext = document.getElementById('rose-server-invite-text-id')
const roseinvitetext = document.getElementById('rose-invite-text-id')
const lightmodeimg = document.getElementById('light-mode-img-id')
const darkmodeimg = document.getElementById('dark-mode-img-id')

function lightMode() {
  htmlwebpage.style.backgroundColor = '#fafafa'
  topcontainer.style.backgroundColor = '#fdfdfd'
  topcontainer.onmouseover = function() {
    topcontainer.style.backgroundColor = '#f6f6f6'
  }

  topcontainer.onmouseleave = function() {
    topcontainer.style.backgroundColor = '#fdfdfd'
  }
  inviterosebutton.onmouseover = function() {
    inviterosebutton.style.backgroundColor = '#f6f6f6'
  }
  inviterosebutton.onmouseleave = function() {
    inviterosebutton.style.backgroundColor = '#fdfdfd'
  }
  inviteroseserverbutton.onmouseover = function() {
    inviteroseserverbutton.style.backgroundColor = '#f6f6f6'
  }
  inviteroseserverbutton.onmouseleave = function() {
    inviteroseserverbutton.style.backgroundColor = '#fdfdfd'
  }
  userpfptext.style.color = 'black'
  rosetitle.style.color = 'black'
  rosedescription.style.color = 'black'
  inviterosebutton.style.backgroundColor = '#fdfdfd'
  roseinvitetext.style.color = 'black'
  inviteroseserverbutton.style.backgroundColor = '#fdfdfd'
  roseserverinvitetext.style.color = 'black'
  lightmodeimg.style.opacity = '0'
  darkmodeimg.style.opacity = '1'
  lightmodeimg.style.transition = 'opacity, 0.5s'
  darkmodeimg.style.transition = 'opacity, 0.5s'
}

function darkMode() {
  htmlwebpage.style.backgroundColor = '#0f0f0f'
  topcontainer.style.backgroundColor = 'black'
  topcontainer.onmouseover = function() {
    topcontainer.style.backgroundColor = '#0f0f0f'
  }

  topcontainer.onmouseleave = function() {
    topcontainer.style.backgroundColor = 'black'
  }
  inviterosebutton.onmouseover = function() {
    inviterosebutton.style.backgroundColor = '#0f0f0f'
  }
  inviterosebutton.onmouseleave = function() {
    inviterosebutton.style.backgroundColor = 'black'
  }
  inviteroseserverbutton.onmouseover = function() {
    inviteroseserverbutton.style.backgroundColor = '#0f0f0f'
  }
  inviteroseserverbutton.onmouseleave = function() {
    inviteroseserverbutton.style.backgroundColor = 'black'
  }
  userpfptext.style.color = 'white'
  rosetitle.style.color = 'white'
  rosedescription.style.color = 'white'
  inviterosebutton.style.backgroundColor = 'black'
  roseinvitetext.style.color = 'white'
  inviteroseserverbutton.style.backgroundColor = 'black'
  roseserverinvitetext.style.color = 'white'
  lightmodeimg.style.opacity = '1'
  darkmodeimg.style.opacity = '0'
  lightmodeimg.style.visibility = 'visible'
  lightmodeimg.style.transition = 'opacity, 0.5s'
  darkmodeimg.style.transition = 'opacity, 0.5s'
}