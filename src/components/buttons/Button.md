

```js
<Button />
```

```js
<Button
    className="primary icon-button"
    onClick={() => alert('Primary button')}>
    <i className={ `fa fa-times` } />
    Icon Button
</Button>
```

```js
<Button
    className="warning"
    style={{ width: '200px', margin: '0 10px' }}
    onClick={() => alert('Warning button onClick handler')}>
    <span style={{ fontSize: '22px' }}>onClick</span>
</Button>
```

```js
<Button
    className="success"
    style={{ color: '#000' }}
    onClick={() => alert('Submit handler')}>
```
