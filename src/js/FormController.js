class FormController
{
    /**
     * @public
     * @param {Element} formElement
     */
    constructor(formElement)
    {
        this.formElement = formElement;
        this.formElement.onsubmit = this.onSubmit;
    }

    /**
     * @private
     * @returns {boolean}
     */
    onSubmit()
    {
        let code = this['code'].value;
        code = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        Rainbow.color(code, 'javascript', highlightedCode => document.querySelector('code').innerHTML = highlightedCode);
        return false;
    }
}

const controller = new FormController(document.querySelector('form'));


document.addEventListener('copy', function(e) {
    let preElement = document.querySelector('pre');
    let html = preElement.outerHTML;
    let htmlString = new HtmlString(html);

    console.log(e);
    // e.clipboardData is initially empty, but we can set it to the
    // data that we want copied onto the clipboard.
    e.clipboardData.setData('text/plain', preElement.textContent);
    e.clipboardData.setData('text/html', html);
    e.clipboardData.setData('text/rtf', htmlString.toRichTextFormatString());

    // This is necessary to prevent the current document selection from
    // being written to the clipboard.
    e.preventDefault();
});
