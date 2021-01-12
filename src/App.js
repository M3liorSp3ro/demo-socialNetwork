import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import { withSuspence } from './hoc/withSuspense'

// import DialogsContainer from './components/Dialogs/DialogsContainer'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?'
            render={withSuspence(ProfileContainer)}
          />
          <Route path='/dialogs'
            render={withSuspence(DialogsContainer)}
          />

          <Route path='/users'
            render={() => <UsersContainer />}
          />

          <Route path='/login'
            render={() => <Login />}
          />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
