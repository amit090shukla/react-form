import { createStyles } from "@material-ui/core";

export const styles = theme =>
  createStyles({
    root: {
      width: "50%",
      margin: "5% auto",
      [theme.breakpoints.down("sm")]: {
        width: "80%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    formContainer: {
      width: "60%",
      margin: "auto",
      padding: "10%",
      [theme.breakpoints.down("xs")]: {
        padding: "1%",
        width: "90%"
      }
    },
    btnRemove: {
      border: "1px solid #ff0000",
      padding: "8px",
      borderRadius: "5px",
      backgroundColor: "#fff",
      color: "#ff0000",
      width: "100%"
    },
    mocWrapper: {
      backgroundColor: "#f5f5f5",
      padding: "20px",
      display: "flex"
    },
    fullWidth: {
      width: "100%"
    },
    ctaWrapper: {
      position: "fixed",
      bottom: "0",
      backgroundColor: "#f5f5f5",
      display: "flex",
      margin: "auto",
      justifyContent: "space-between",
      width: "100%"
    }
  });
