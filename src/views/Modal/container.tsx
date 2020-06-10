import React from "react";
import Modal from "@material-ui/core/Modal";
import { Card } from "src/views/shared";
import styled from "styled-components";

function Container(props) {
  const Wrapper = styled(Card)`
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translate(-50%);
    width: auto;
    max-height: calc(100vh - 150px);
    padding: 30px;
    overflow: scroll;
  `;

  const [open, setOpen] = React.useState(false);
  const body = <Wrapper noHover>{props.props.body}</Wrapper>;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen}>{props.props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>{body}</div>
      </Modal>
    </div>
  );
}
export default Container;
