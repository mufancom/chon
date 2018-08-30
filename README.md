# C H O N

### ComponentSchema Usage

- 配置

```js
// buttonLayout.tsx
// 自定义 button 布局
export class CustomButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElemDict> {
  compose({Icon, Text}: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <Icon />
        <Text>text in schema</Text>
      </>
    );
  }
}

// component-config.js
// 映射至配置文件
const config: ComponentSchemaConfig = {
  Button: {
    custom: new CustomButtonSchema(),
  },
};
export default config;

// index.jsx
// 注册配置
applyCompConfig(config);
```

- 使用

```tsx
// App.tsx
class App extends React.Component<> {
  render() {
    <>
      <Button compType="custom">text in component</Button>
      <Button compType="custom" /> // 如果 component 里 text 为空，则显示 layout中的
      <Button compType="primary" /> // 使用框架默认提供的布局
    </>;
  }
}
```

### StyleSchema Usage

> TO Update

- 配置

```js
// style-config.js
const config = {
  light: LightStyleSchema,
  dark: DarkStyleSchema,
};
```

- 定义

```js
// LightStyleSchema.ts
class LightStyleSchema extends ChonStyleSchema { //重写部分或全部styleSchema
  private constructor(public primaryColor: Color, public accentColor: Color) {}

  getSchema(name: string): ChonStyleSchema | undefined {
    switch (name) {
      case 'reverse':
        return DarkStyleSchema;
      default:
        return undefined;
    }
  }

  getButtonLikeBoxStyle() {

  }

  getEmphasizedButtonLikeBoxStyle() {

  }

  getButtonStyle(type) {
    return styled.button`
			background: ${this.primaryColor}
			color: ${white}
		`
    }
  }

  getInputStyle() {
    return styled.input`
			....
		`
  }

  static create() {
    return new LightStyleSchema();
  }
}
```

- 使用

```tsx
// App.tsx
class App extends StyledApp {
  render() {
    return (
      <StyleProvider styleType="light">
        <Button />
      </StyleProvider>
      <StyleProvider styleType="dark">
        <Button />
      </StyleProvider>
    )
  }
}
```

## 组件实现

> TODO

```tsx
// Button.tsx
```

## Todo

- 通用

  - [ ] Icon (图标)

    - `icon`: `string`
    - `size`: `string`
    - `spin`: `boolean` 是否转动

  - [ ] Button (按钮)

    - `type`: `'primary'` | `'default'` | `'dashed'` | `'danger'`
    - `icon`: `string`
    - `size`: `string`
    - `processing`: `boolean`
    - `disabled`: `boolean`
    - `ghost`: `boolean` 背景透明
    - `block`: `boolean` 填满父元素宽度
    - `onClick`: `() => void`

  - [ ] Text (文本)

    - `content`: `string`

  - [ ] EditText (编辑框)

- 布局

  - [ ] Grid (栅格)
  - [ ] Layout (布局)
  - [ ] Container (布局容器)

- 导航

  - [ ] Affix (固钉)
  - [ ] Breadcrumb (面包屑)
  - [ ] Menu (导航菜单)
  - [ ] Dropdown (下拉菜单)
  - [ ] Pagination (分页)
  - [ ] Steps (步骤条)

- 表单

  - [ ] AutoComplete (自动完成)

    - `autoFocus`: `boolean`
    - `backfill`: `boolean`
    - `children`: `ReactElement` 自定义输入框
    - `dataSource`: `SoureItem[]`
    - `disabled`: `boolean`
    - `placeholder`: `string`
    - `value`: `string`
    - `onBlur`: `(focused: boolean) => void`
    - `onChange`: `(value: string) => void`
    - `onFocus`: `(focused: boolean) => void`
    - `onSearch`: `(value: string) => void`
    - `onSelect`: `(value: string) => void`

  - [ ] Cascader (级联选择)
  - [ ] Checkbox (多选框)

    - `autoFocus`: `boolean`
    - `checked`: `boolean`
    - `defaultChecked`: `boolean`
    - `disabled`: `boolean`
    - `onChange()`: `(checked: boolean) => void`

  - [ ] ColorPicker (颜色选择器)
  - [ ] DatePicker (日期选择框)
  - [ ] DateTimePicker (日期时间选择器)
  - [ ] Form (表单)
  - [ ] Input (输入框)

    - `addonAfter`: `string|ReactNode`
    - `addonBefore`: `string|ReactNode`
    - `defaultValue`: `string`
    - `disabled`: `boolean`
    - `id`: `string`
    - `prefixIcon`: `string`
    - `suffixIcon`: `string`
    - `size`: `string`
    - `type`: `string`
    - `value`: `string`
    - `onPressEnter`: `(value: string) => void`

  - [ ] InputNumber (数字输入框)

    - `disabled`: `boolean`
    - `formatter`: `(value: number|string) => string` 格式化数字
    - `max`: `number`
    - `min`: `number`
    - `parse`: `(value: string) => number` 将格式化后的的字符转回数字
    - `precision`: `number` 精度
    - `step`: `number`
    - `value`: `number`
    - `onChange`: `(value: number|string) => void`

  - [ ] Mention (提及)
  - [ ] Rate (评分)
  - [ ] Radio (单选框)

    - `checked`: `boolean`
    - `value`: `string`
    - `disabled`: `boolean`

    - RadioGroup

      - `disabled`: `boolean`
      - `name`: `string`
      - `options`: `string[]`
      - `value`: `string`
      - `type`: `'radio'|'button'`
      - `onChange`: `(value: string) => void`

  - [ ] Select (选择器)
  - [ ] Slider (滑动输入条)

    - `disabled`: `boolean`
    - `points`: `number[]` 预设点
    - `max`: `number`
    - `min`: `number`
    - `range`: `boolean`
    - `step`: `number`
    - `tipFormatter`: `(value: number|number[]) => string`
    - `value`: `number|number[]`
    - `onChange`: `(value: number|number[]) => string`

  - [ ] Switch (开关)

    - `checked`: `boolean`
    - `disabled`: `boolean`
    - `processing`: `boolean`
    - `onChange`: `(checked: boolean) => void`

  - [ ] TreeSelect (树选择)
  - [ ] TimePicker (时间选择框)
  - [ ] Transfer (穿梭框)
  - [ ] Uploade (上传)

- 数据展示

  - [ ] Avatar (头像)
  - [ ] Badge (徽标数)

    - `count`: `number`
    - `dot`: `boolean` 仅显示一个点
    - `offset`: `[number, number]`
    - `showZero`: `boolean`
    - `title`: `string`

  - [ ] Calendar (日历)
  - [ ] Card (卡片)
  - [ ] Carousel (走马灯)

    - `beforeChange`: `(current, next) => void`
    - `afterChange`: `(prev, current) => void`
    - `autoplay`: `boolean`
    - `dots`: `boolean`
    - `easing`: `string`
    - `direction`: `'vertical'|'horizontal'`

  - [ ] Collapse (折叠面板)

    - `title`: `string` 折叠时显示的标题
    - `onChange`: `(folded: boolean) => void`
    - `forceRender`: `boolean`
    - `disabled`: `boolean`

  - [ ] List (列表)
  - [ ] Loading (加载)
  - [ ] Popover (气泡)

    - `slot`: `ReactElement`
    - `delay`: `ms: number`
    - `place`: `'top'|'right'|'bottom'|'left'`
    - `trigger`: `'hover'|'click'|'focus'`

  - [ ] Tooltip (文字提示)

    - `title`: `string`
    - `delay`: `ms: number`
    - `place`: `'top'|'right'|'bottom'|'left'`
    - `trigger`: `'hover'|'click'|'focus'`

  - [ ] Table (表格)
  - [ ] Tabs (标签页)
  - [ ] Tag (标签)
  - [ ] Timeline (时间轴)
  - [ ] Tree (树形控件)

- 反馈

  - [ ] Alert (警告提示)
  - [ ] Drawer (抽屉)
  - [ ] Modal (对话框)
  - [ ] Message (全局提示)
  - [ ] Notification (通知提醒框)
  - [ ] Progress (进度条)
  - [ ] Popconfirm (气泡确认框)
  - [ ] Spin (加载中)

- 其他

  - [ ] Anchor (锚点)
  - [ ] BackTop (回到顶部)
  - [ ] Divider (分割线)
  - [ ] LocaleProvider (国际化)
