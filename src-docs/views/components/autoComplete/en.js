import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'auto complete 组件必须要一个 `dataSource` 属性，决定了提示补全的内容。',
  configExample: '不同的配置参数使用',
  configExampleDesc: '`dataSource` 可以通过配置 `leftIcon` 或者 `rightIcon` 来显示 Icon， 通过设置 `openOnFocus` 输入框 focus 时的时候显示补全信息。 ',
  filterExample: 'Filter 的使用',
  filterExampleDesc: '通过配置不同的 `filter` 来过滤 `dataSource` 中的数据，只提示和输入相关的数据，也可以自定义 `filter` 函数，完成不同的 `dataSource` 过滤， `maxSearchResults` 用来控制显示结果的数量。',
  props: {
    anchorOrigin: '锚点的位置定义，弹出补全列表是以这个点为基准定位',
    targetOrigin: '锚点相对于弹出补全列表的位置',
    scroller: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置',
    maxHeight: '弹出选择内容的最大高度, 超过这个高度会显示滚动条',
    dataSource: '必须，填充补全列表的数据',
    dataSourceConfig: 'dataSource 的配置信息，text 显示文本属性名称，value 值的属性名称',
    disableFocusRipple: '将 focus 时波纹效果设置为不可用',
    filter: '过滤器配置，用于过滤 dataSource 里的数据，只显示于输入相关的数据。',
    maxSearchResults: '最多显示数据的条数',
    openOnFocus: '是否在 focus 是显示补全信息列表',
    menuCloseDelay: '补全列表关闭的延迟时间，单位：ms',
    label: '输入框的标签',
    labelFloat: '标签是否浮动',
    labelClass: '标签的样式, 同 `class` 绑定方式一致',
    labelFocusClass: '输入框获取焦点时标签的样式, 同 `class` 绑定方式一致',
    disabled: '输入框是否不可用',
    hintText: '提示文字',
    hintTextClass: '提示文字样式, 同 `class` 绑定方式一致',
    helpText: '帮助文字',
    helpTextClass: '帮助文字样式, 同 `class` 绑定方式一致',
    errorText: '错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改',
    errorColor: '错误状态的时的颜色，默认为红色',
    icon: '显示图标',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    fullWidth: '是否将宽度设置为 100%, 默认 256px',
    underlineShow: '是否显示底部的横线',
    underlineClass: '底部横线样式, 同 `class` 绑定方式一致',
    underlineFocusClass: '输入框获取焦点时底部横线样式, 同 `class` 绑定方式一致',
    inputClass: '输入框样式, 同 `class` 绑定方式一致',
    value: '输入框的值，可不设置此参数，使用 v-model 指令代替'
  },
  events: {
    focus: '输入框获取焦点事件',
    blur: '输入框失去焦点事件',
    select: '选择补全列表事件, 会传入这条数据和index值，(item, index)',
    input: '当value改变时触发事件，传入value, (value)',
    change: '用户输入或者选择补全选项时触发事件，传入输入框的 value'
  }
}