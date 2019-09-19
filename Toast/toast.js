const $toast = {
  toastContainerEle: `
    <div class="toast-container"></div>
  `,
  toastCssText: `
    css-icon {
      display: inline-block;
      height: 1em; width: 1em;
      font-size: 20px;
      box-sizing: border-box;
      text-indent: -9999px;
      vertical-align: middle;
      position: relative;
    }
    css-icon::before,
    css-icon::after {
      content: '';
      box-sizing: inherit;
      position: absolute;
      left: 50%; top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .icon-success::before {
      border-style: solid;
      border-width: 0 0 2px 2px;
      height: .5em; 
      width: .9em;
      -ms-transform: translate(-50%, -.375em) rotate(-45deg); 
      transform: translate(-50%, -.375em) rotate(-45deg);
    }
    .icon-info {
      border-style: solid;
      border-width: 0 0 0 2px;
      height: .7em; 
      width: .9em;
      transform: translate(50%, 0.2em);
    }
    .icon-info::before {
      border-style: solid;
      border-width: 0 0 0 2px;
      height: .2em; 
      width: 1em;
      transform: translate(-0.53em, -0.7em);
    }
    // .icon-info::before {
    //   border: 2px solid;
    //   width: .85em; height: .4em;
    //   -ms-transform: translate(-.35em, -.25em) rotate(-45deg);
    //   transform: translate(-.35em, -.25em) rotate(-45deg);
    // }
    // .icon-info::after {
    //   border: .15em solid;
    //   border-right-color: transparent;
    //   border-top-color: transparent;
    //   left: 5%; top: 95%;
    //   -ms-transform: translate(0, -100%);
    //   transform: translate(0, -100%);
    // }

    .icon-error::before {
      width: .9em;
      border-top: 2px solid;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    .icon-error::after {
      width: .9em; height: .9em;
      border: 2px solid;
      border-radius: 50%;
    }
    .toast-container {
      position: fixed;
      left: 50%;
      top: 5px;
      transform: translateX(-50%);
      z-index: 999999;
    }
    .toast-dialog {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 15px;
      background: #2196f3;
      border-radius: 4px;
      margin-bottom: 3px;
      animation: show .5s ease 1s 1 forwards;
    }
    .toast-dialog .toast-icon {
      font-size: 12px;
      color: #fff;
      margin-right: 5px;
    }
    .toast-dialog .toast-text {
      font: 14px/14px "Microsoft yahei Light";
      color: #fff;
    }
    .toast-dialog.info {
      background: #2196f3;
    }
    .toast-dialog.info > i.icon {
      color: #fff;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z'%3E%3C/path%3E %3C/svg%3E");
    }
    .toast-dialog.success {
      background: #4caf50;
    }
    .toast-dialog.success > i.icon {
      color: #fff;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E %3Cpath d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z'%3E%3C/path%3E %3C/svg%3E");
    }
    .toast-dialog.error {
      background: #f44336;
    }

    @keyframes show {
      from {
        transform: translateY(0);
        opacity: 1;
      } to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `,
  toastInit () {
    $(document).find('head').append(`
      <style>
        ${this.toastCssText}
      </style>
    `)
    $(document.body).append(this.toastContainerEle)
  },
  toastEleSuccess (text) {
    var successEle = document.createElement('div')
    successEle.classList.add('toast-dialog')
    successEle.classList.add('success')
    successEle.innerHTML = `
      <css-icon class="toast-icon icon-success"></css-icon>
      <p class="toast-text">${text}</p>
    `
    return successEle
  },
  toastEleInfo (text) {
    var InfoEle = document.createElement('div')
    InfoEle.classList.add('toast-dialog')
    InfoEle.classList.add('info')
    InfoEle.innerHTML = `
      <css-icon class="toast-icon icon-info"></css-icon>
      <p class="toast-text">${text}</p>
    `
    return InfoEle
  },
  toastEleError (text) {
    var ErrorEle = document.createElement('div')
    ErrorEle.classList.add('toast-dialog')
    ErrorEle.classList.add('error')
    ErrorEle.innerHTML = `
      <css-icon class="toast-icon icon-error"></css-icon>
      <p class="toast-text">${text}</p>
    `
    return ErrorEle
  },
  success (text) {
    $('.toast-container').append(this.toastEleSuccess(text))
    setTimeout(() => {
      $('div').remove('.toast-dialog.success:first-child')
    }, 1500)
  },
  info (text) {
    $('.toast-container').append(this.toastEleInfo(text))
    setTimeout(() => {
      $('div').remove('.toast-dialog.info:first-child')
    }, 1500)
  },
  error (text) {
    $('.toast-container').append(this.toastEleError(text))
    setTimeout(() => {
      $('div').remove('.toast-dialog.error:first-child')
    }, 1500)
  },
}

export default $toast