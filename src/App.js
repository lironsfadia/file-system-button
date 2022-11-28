import './App.css'

import { ThemeProvider } from '@mui/material/styles'

import { mainTheme } from './styles/mainTheme'
import ConfirmationDialogProvider from './widgets/ConfirmationDialog/ConfirmationDialogProvider'
import ShowDialogButtonContainer from './widgets/ShowDialogButton/containers/showDialogButtonContainer'

/*
verification - requirements ask!


2 setters one after another is bad, race condition
hardcoded - bad
finally - in try catch 
; - interptintion endof parsing -- https://flaviocopes.com/javascript-automatic-semicolon-insertion/
unused imports - drop

tree shaking - import in the code ?

blue

spertion of concept

small. spearted file.
 */

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <ConfirmationDialogProvider>
          <ShowDialogButtonContainer id={1} />
          <ShowDialogButtonContainer id={2} />
        </ConfirmationDialogProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
