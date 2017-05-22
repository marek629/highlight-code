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
