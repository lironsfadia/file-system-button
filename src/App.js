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
          <ShowDialogButtonContainer />
        </ConfirmationDialogProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
