(()=>{
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia
  type HtmlType = 'input'|'select'|'textarea'|'radio';

  interface HtmlElementProps {
    id: string;
    type?: HtmlType;
  };

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  };

  interface InputEventsProps {
    id: string,
    type?: HtmlType,
    value: string,
    placeholder: string
  };
 
  class HtmlElement {
    public id;
    public type;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttributes {
    public value;
    public placeholder;

    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder ? placeholder : '';
    }
  }

  class InputEvents {
    public htmlElement: HtmlElement;
    public InputAttributes: InputAttributes;

    constructor({
      id, type,
      value, placeholder
    }: InputEventsProps) {
      this.htmlElement = new HtmlElement({ id, type });
      this.InputAttributes = new InputAttributes({ value, placeholder });
    }
    setFocus() {};
    getValue() {};
    isActive() {};
    removeValue() {};
  }

  //? Idea para la nueva clase InputElement
  const nameField = new InputEvents({ value: 'Fernando', placeholder: 'Enter first name', id: 'txtName' });
  console.log({ nameField });
})()