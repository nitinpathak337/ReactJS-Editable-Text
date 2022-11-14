import {Component} from 'react'

class EditableText extends Component {
  state = {saveDisplay: true, text: ''}

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  change = () => {
    this.setState(prevState => ({saveDisplay: !prevState.saveDisplay}))
  }

  render() {
    const {saveDisplay, text} = this.state

    return (
      <div>
        <div>
          <h1>Editable Text Input</h1>
          {saveDisplay ? (
            <>
              <input type="text" value={text} onChange={this.onChangeInput} />
              <button type="button" onClick={this.change}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>{text}</p>
              <button type="button" onClick={this.change}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText
