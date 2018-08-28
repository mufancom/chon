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
- [ ] Button (按钮)
- [ ] Text (文本)
- [ ] EditText (编辑框)

- 布局

- [ ] Grid (栅格)
- [ ] Layout (布局)
- [ ] Container (布局容器)

- 导航

- [ ] Affix (固钉)
- [ ] Breadcrumb (面包屑)
- [ ] Dropdown (下拉菜单)
- [ ] Menu (导航菜单)
- [ ] Pagination (分页)
- [ ] Steps (步骤条)

- 表单

- [ ] AutoComplete (自动完成)
- [ ] Cascader (级联选择)
- [ ] Checkbox (多选框)
- [ ] ColorPicker (颜色选择器)
- [ ] DatePicker (日期选择框)
- [ ] DateTimePicker (日期时间选择器)
- [ ] Form (表单)
- [ ] Input (输入框)
- [ ] InputNumber (数字输入框)
- [ ] Mention (提及)
- [ ] Rate (评分)
- [ ] Radio (单选框)
- [ ] Select (选择器)
- [ ] Slider (滑动输入条)
- [ ] Switch (开关)
- [ ] TreeSelect (树选择)
- [ ] TimePicker (时间选择框)
- [ ] Transfer (穿梭框)
- [ ] Uploade (上传)

- 数据展示

- [ ] Avatar (头像)
- [ ] Badge (徽标数)
- [ ] Calendar (日历)
- [ ] Card (卡片)
- [ ] Carousel (走马灯)
- [ ] Collapse (折叠面板)
- [ ] List (列表)
- [ ] Loading (加载)
- [ ] Popover (气泡卡片)
- [ ] Tooltip (文字提示)
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
