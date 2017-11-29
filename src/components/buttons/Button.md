
```js
<div className="btn-group">
    <Button
        className="custom-button"
        style={{color: '#000' }}
        onClick={() => alert('Custom button')}>
        Custom
    </Button>

    <Button
        className="primary icon-button"
        onClick={() => alert('Primary button')}>
        <i className={`fa fa-check`} />
        Primary
    </Button>

    <Button
        className="warning"
        style={{margin: '0 10px' }}
        onClick={() => alert('Warning button')}>
        Caution
    </Button>

    <Button
        className="info"
        onClick={() => alert('Ino=fo button')} />

    <Button
        className="success"
        onClick={() => alert('Success button')}>
        Success
    </Button>

    <Button
        className="danger"
        onClick={() => alert('Danger button')}>
        Danger
    </Button>

    <Button
        className="inverse"
        style={{color: '#fff' }}
        onClick={() => alert('Inverse button')} />

    <Button
        className="faded"
        onClick={() => alert('Faded button')} />
</div>
```
