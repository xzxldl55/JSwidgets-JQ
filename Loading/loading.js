
const Loading = {
  loadEle: `
    <div class="com-loading-container">
      <div class="com-loading-cover"></div>
      <div class="com-loading">
        <svg viewBox="25 25 50 50" class="van-loading__circular"><circle cx="50" cy="50" r="20" fill="none"></circle></svg>
      </div>
    </div>
  `,
  loading(doc = $('#app')) {
    doc.append(this.loadEle)
    return this
  },
  cssText: `
    .com-loading-container {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0; 
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 46px;
      z-index: 9;
    }
    .com-loading-cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
    }
    .com-loading {
      width: 1em;
      height: 1em;
      border: 2px solid #fff;
      border-radius: 50%;
      border-top-color: transparent;
      animation: rotateX 1s linear infinite;
    }
    @keyframes rotateX {
      from {
        transform: rotate(0deg);
      } to {
        transform: rotate(360deg);
      }
    }
  `,
  initLoad() {
    $(document).find('head').append(`
      <style>
        ${this.cssText}
      </style>
    `)
    return this
  },
  done () {
    $('div').remove('.com-loading-container')
  }
}
window.$loading = Loading
export default Loading
