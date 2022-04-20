import { Component } from "react";
import { ModalContext } from ".";

//TODO: Figure out typing for this entire folder and any instance that uses modalContext or ModalProvider

class ModalProvider extends Component {
  showModal = (component: any, props = {}) => {
    this.setState({
      component,
      props,
    });
  };

  hideModal = () =>
    this.setState({
      component: null,
      props: {},
    });

  state: any = {
    component: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal,
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;
