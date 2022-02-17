## Toast顶部弹出式提示
```
import $toast from 'toast.js'

// 初始化
$toast.toastInit()

// 目前只有三种样式：success、info、error，该方法接收一个字符串
$toast.success(text)
$toast.info(text)
$toast.error(text)

// 简单项目可以直接引入，用window.xxx调用
```
