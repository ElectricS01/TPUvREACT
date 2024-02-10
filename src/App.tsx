import React, { useEffect } from "react"
import "./App.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import { Box, CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./themes/default.ts"
import routes from "./router/index.tsx"
import Header from "./components/Header.tsx"
import { BrowserRouter as Router } from "react-router-dom"
import ErrorHandler from "./lib/errorHandler.tsx"
import { useAppDispatch } from "./store/hooks.ts"
import { authenticate } from "./features/user/index.ts"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authenticate())
  }, [])

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorHandler>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Header></Header>
              <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, mt: 7 }}>
                <div className="sidebar-offset">{routes}</div>
              </Box>
            </Box>
          </ErrorHandler>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
