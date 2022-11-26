import './App.css'

import { ThemeProvider } from '@mui/material/styles'

import { mainTheme } from './styles/mainTheme'
import ConfirmationDialogProvider from './widgets/ConfirmationDialog/ConfirmationDialogProvider'
import ShowDialogButtonContainer from './widgets/ShowDialogButton/containers/showDialogButtonContainer'

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
