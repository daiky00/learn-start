import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import ModalTitle from './components/Modal/ModalTitle';
import Button from './components/Button/Button';
import ModalContent from './components/Modal/ModalContent';
import ModalActions from './components/Modal/ModalActions';
import Navigation from './components/Navigation/Navigation';
import NavigationItem from './components/Navigation/NavigationItem';
import Logo from './components/Logo/Logo';
import { Switch, Route } from 'react-router-dom';

// Containers
import Home from './containers/Home';
import Stories from './containers/Stories';



import './App.scss';

function App() {


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>

      <Header>
        <Logo>LearnStart</Logo>
        <Navigation>
          <NavigationItem onClick={handleClickOpen}>Sign up</NavigationItem>
        </Navigation>
      </Header>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
      </Switch>
      
      
      <Modal open={open} onClose={handleClose} closeIconInvert={true}>
        <ModalTitle>Sign up</ModalTitle>
        <ModalContent>
         hey
        </ModalContent>
        <ModalActions>
          <Button color="primary" size="md" fullWidth={true}>Continue</Button>
        </ModalActions>
      </Modal>
    </React.Fragment>
  );
}

export default App;
