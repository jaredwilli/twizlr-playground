

```js
<Button
    onClick={ () => alert('Plain ol button') } />
```

```js
<Button
    className="primary icon-button"
    onClick={ () => alert('Primary button') }>
    <i className={ `fa fa-times` } />
    Info Button
</Button>
```

```js
<Button
    className="info icon-button"
    onClick={ () => alert('Info button') }>
    Info Button
</Button>
```

```js
<Button
    className="warning"
    style={{ width: '200px', margin: '0 10px' }}
    onClick={ () => alert('Warning button') }>
    <span style={{ fontSize: '22px' }}>onClick</span>
</Button>
```

```js
<Button
    className="success"
    style={{ color: '#000' }}
    onClick={ () => alert('Success button') } />
```
