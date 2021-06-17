import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss";
import InputField from "components/text-field/InputField";
import Grid from "@material-ui/core/Grid";
import useModalContext from "./useModalContext";
import CancelIcon from "components/icons/CancelIcon";
import LoadingButton from "components/loading-button/LoadingButton";
import { useForm } from "@formspree/react";

export default function ContactModal() {
  const [state, handleSubmit] = useForm("xnqlvgzj");
  const { modalOpen, closeModal } = useModalContext();
  const [formState, setFormState] = useState({});
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
 
  const validEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

 
  const shouldDismiss = () => {
    setFormState({})
    closeModal();
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [modalOpen]);

  const onSubmit = (e) => {
    e.preventDefault();
    // No page refresh.

    console.log("FORM STATE", formState);
    if (!validEmail(formState.email)) {
      setEmailError(true);
      return;
    } else {
      setLoading(true);
      handleSubmit(formState);
      return;
    }
  };

  const renderModalContent = () => {
    return (
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={shouldDismiss}>
          <CancelIcon />
        </button>
        <div className={styles.modalHeader}>
          <h3 style={{ margin: "0px", padding: "0px" }}>Get in touch.</h3>
        </div>
        <p style={{ padding: 0, marginTop: "8px", maxWidth: "500px" }}>
          Building a unicorn 🦄 ? Interested in hiring me as a consultant? Drop
          me a note and I'll get back to you.
        </p>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                required
                value={formState.name}
                name="name"
                fullWidth
                size="large"
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                color="#000"
                id="standard-basic"
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="email"
                required
                value={formState.email}
                error={emailError}
                fullWidth
                helperText={emailError ? "Please enter a valid email." : null}
                onChange={(e) => {
                  setEmailError(false);
                  setFormState({ ...formState, email: e.target.value });
                }}
                id="standard-basic"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                required
                style={{ paddingBottom: "40px" }}
                fullWidth
                id="standard-multiline-static"
                label="Note"
                multiline
                value={formState.note}
                onChange={(e) =>
                  setFormState({ ...formState, note: e.target.value })
                }
                rows={4}
              />
            </Grid>
          </Grid>
          <LoadingButton success={state && state.succeeded} loading={loading}>
            Send Note
          </LoadingButton>
        </form>
      </div>
    );
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={shouldDismiss}
      style={{
        overlay: {
          zIndex: 6,
          backgroundColor: "rgba(0, 0, 0, .3)",
          height: "100%",
        },
        content: {
          padding: "40px",
          borderRadius: 0,
          color: "black",
          minWidth: "400px",
          border: "none",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "2px 2px 12px 15px rgba(0, 0, 0, .09)",
        },
      }}
    >
      {renderModalContent()}
    </Modal>
  );
}
