## Loading加载
- es6环境下：
```
import Loading from 'loading.js'
// 初始化
Loading.initLoad()

// 使用: doc: 传入一个dom，即在该dom范围内显示loading
Loading.loading(doc)

// 隐藏loading
Loading.done()
```
- 无es6环境：
```
// 直接使用window.$loading对象，方法同上
$loading.initLoad()
$loading.loading(doc)
$loading.done()
```