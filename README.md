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
