import Card from './Card'

function Form({ formObject, onSubmit, buttonTitle }) {
  return (
    <form onSubmit={onSubmit}>
      {formObject.map((formField) => {
        const { label, inputType, value, emailHandler, key } = formField
        return (
          <Card key={key}>
            <label>{label}</label>
            <input
              type={inputType}
              value={value}
              onChange={(e) => emailHandler(e.target.value)}
            />
          </Card>
        )
      })}
      <button type="submit">{buttonTitle}</button>
    </form>
  )
}
export default Form
