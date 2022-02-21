import Swal from "sweetalert2";
import swalClasses from "./SweetAlert.module.css";

const SweetAlert = ({
  icon = "error",
  title = "Oops...",
  text = "Something went wrong!",
  confirmButtonText = "OK",
  showCancelButton = false,
  footer = false,
  reverseButtons = false,
}) =>
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    footer: footer,
    showCancelButton: showCancelButton,
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText,
    customClass: {
      confirmButton: `${swalClasses["btn-confirm"]}`,
      cancelButton: `${swalClasses["btn-cancel"]}`,
    },
    reverseButtons: reverseButtons,
  })();

export default SweetAlert;
